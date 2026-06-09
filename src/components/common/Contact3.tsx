import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { validateContactForm, LIMITS, filterName, filterPhone, filterEmail, filterSubject, filterMessage, PATTERNS } from "@/utils/formValidation";

export default function Contact3() {
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

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = form.current;
    if (!formEl) return;

    // Honeypot check — silently reject bots
    if (honeypot) return;

    if (cooldown) {
      toast.warn(`Please wait ${cooldownSecs}s before sending again.`);
      return;
    }

    const formData = new FormData(formEl);
    const error = validateContactForm({
      name:    formData.get("name")    as string,
      email:   formData.get("email")   as string,
      phone:   formData.get("phone")   as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    });

    if (error) { toast.error(error); return; }

    try {
      setIsSubmitting(true);
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formEl,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        formEl.reset();
        setCooldown(true);
        setCooldownSecs(30);
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tmp-contact-area" id="contacts">
      <div className="inner">
        <div className="contact-get-in-touch-wrap">
          <div className="section-head text-align-left mb--50">
            <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
              GET IN TOUCH
              <span>
                <img
                  loading="lazy"
                  alt="custom-line"
                  src="/assets/images/custom-line/custom-line.png"
                  width={81}
                  height={6}
                />
              </span>
            </h2>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Elevate your brand with us
            </h2>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              It's a well-established fact that a reader will be distracted by
              readable content. Elevate your presence with intentional design.
            </p>
          </div>
          <div className="contact-inner">
            <div className="contact-form">
              <form
                id="contact-form"
                ref={form}
                onSubmit={sendMail}
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
                        placeholder="Your Name"
                        type="text"
                        required
                        autoComplete="name"
                        maxLength={LIMITS.name.max}
                        pattern={PATTERNS.name}
                        onInput={(e) => { const el = e.currentTarget; el.value = filterName(el.value); }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="input-field"
                        name="email"
                        placeholder="Your Email"
                        type="email"
                        required
                        autoComplete="email"
                        maxLength={LIMITS.email.max}
                        pattern={PATTERNS.email}
                        onInput={(e) => { const el = e.currentTarget; el.value = filterEmail(el.value); }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="input-field"
                        name="phone"
                        placeholder="Phone Number"
                        type="tel"
                        autoComplete="tel"
                        maxLength={LIMITS.phone.max}
                        pattern={PATTERNS.phone}
                        onInput={(e) => { const el = e.currentTarget; el.value = filterPhone(el.value); }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="input-field"
                        name="subject"
                        placeholder="Subject"
                        type="text"
                        required
                        autoComplete="off"
                        maxLength={LIMITS.subject.max}
                        onInput={(e) => { const el = e.currentTarget; el.value = filterSubject(el.value); }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="input-field"
                        name="message"
                        placeholder="Your Message"
                        required
                        maxLength={LIMITS.message.max}
                        onInput={(e) => { const el = e.currentTarget; el.value = filterMessage(el.value); }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="tmp-btn hover-icon-reverse radius-round w-100"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
