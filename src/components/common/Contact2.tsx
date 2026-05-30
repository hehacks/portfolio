import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { validateContactForm, LIMITS } from "@/utils/formValidation";

export default function Contact({
  parentClass = "get-in-touch-area tmp-section-gapTop",
}) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [cooldownSecs, setCooldownSecs] = useState(0);
  // Honeypot — must stay empty; bots fill it automatically
  const [honeypot, setHoneypot] = useState("");

  // Countdown timer for cooldown
  useEffect(() => {
    if (!cooldown) return;
    if (cooldownSecs <= 0) { setCooldown(false); return; }
    const t = setTimeout(() => setCooldownSecs((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown, cooldownSecs]);

  const sandMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check — silently reject bots
    if (honeypot) return;

    if (cooldown) { toast.warn(`Please wait ${cooldownSecs}s before sending again.`); return; }

    const formData = new FormData(form.current!);
    const error = validateContactForm(
      {
        name:    formData.get("name")    as string,
        email:   formData.get("email")   as string,
        phone:   formData.get("phone")   as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      },
      true // phone required in this form
    );

    if (error) { toast.error(error); return; }

    try {
      setIsSubmitting(true);
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      if (result.status === 200) {
        toast.success("Message sent successfully!");
        form.current?.reset();
        setCooldown(true);
        setCooldownSecs(30);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={parentClass} id="contacts">
      <div className="container">
        <div className="contact-get-in-touch-wrap">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-head text-align-left">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">GET IN TOUCH</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Elevate your brand with Me
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Available for freelance work and security consulting.
                    Connect with me for 1:1 sessions.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <form
                      className="tmp-dynamic-form"
                      id="contact-form"
                      ref={form}
                      onSubmit={sandMail}
                      noValidate
                    >
                      {/* Honeypot — hidden from real users, bots fill it */}
                      <input
                        type="text"
                        name="_hp_website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      />

                      <div className="contact-form-wrapper row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              name="name"
                              id="contact-name"
                              placeholder="Your Name"
                              type="text"
                              required
                              autoComplete="name"
                              maxLength={LIMITS.name.max}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              id="contact-phone"
                              name="phone"
                              placeholder="Phone Number"
                              type="tel"
                              required
                              autoComplete="tel"
                              maxLength={LIMITS.phone.max}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              id="contact-email"
                              name="email"
                              placeholder="Your Email"
                              type="email"
                              required
                              autoComplete="email"
                              maxLength={LIMITS.email.max}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              type="text"
                              id="subject"
                              required
                              name="subject"
                              placeholder="Subject"
                              autoComplete="off"
                              maxLength={LIMITS.subject.max}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="input-field"
                              placeholder="Your Message"
                              name="message"
                              id="contact-message"
                              required
                              maxLength={LIMITS.message.max}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="tmp-button-here">
                            <button
                              className="tmp-btn hover-icon-reverse radius-round w-100"
                              type="submit"
                              disabled={isSubmitting || cooldown}
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">
                                  {isSubmitting
                                    ? "Sending..."
                                    : cooldown
                                    ? `Wait ${cooldownSecs}s`
                                    : "Appointment Now"}
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
