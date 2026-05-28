import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const contactLinks = [
  {
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    value: "linkedin.com/in/-aruns",
    href: "https://www.linkedin.com/in/-aruns/",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "github.com/hehacks",
    href: "https://github.com/hehacks",
  },
  {
    icon: "fa-brands fa-twitter",
    label: "Twitter",
    value: "@he_hacks",
    href: "https://twitter.com/he_hacks",
  },
  {
    icon: "fa-light fa-globe",
    label: "Website",
    value: "hehacks.com",
    href: "https://www.hehacks.com",
  },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(form.current!);
    const email = formData.get("email") as string;

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

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
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cyber-contact-area" id="contacts">
      <div className="container">
        {/* Header */}
        <div className="cyber-contact-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">INITIATE_CONTACT</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-contact-title">
            Let's <span className="grad">Connect</span>
          </h2>
          <p className="cyber-contact-lede">
            Available for freelance security consulting and 1:1 advisory
            sessions. Reach out via the form or any channel below.
          </p>
        </div>

        <div className="cyber-contact-grid">
          {/* LEFT — info */}
          <div className="cyber-contact-left">
            {/* Topmate CTA */}
            <div className="cyber-contact-cta">
              <div className="cyber-cta-icon">
                <i className="fa-light fa-calendar-check" />
              </div>
              <div>
                <h4>Book a 1:1 Session</h4>
                <p>Security consulting, career guidance, or code review</p>
              </div>
              <a
                href="https://topmate.io/hehacks"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-cta-btn"
              >
                <span>Topmate</span>
                <i className="fa-light fa-arrow-up-right-from-square" />
              </a>
            </div>

            {/* Social links */}
            <div className="cyber-contact-links">
              <h4 className="cyber-contact-links-title">
                <span className="prompt">{">"}</span> Find me on
              </h4>
              <div className="cyber-contact-link-list">
                {contactLinks.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-contact-link"
                  >
                    <span className="cyber-link-icon">
                      <i className={l.icon} />
                    </span>
                    <div>
                      <span className="cyber-link-label">{l.label}</span>
                      <span className="cyber-link-value">{l.value}</span>
                    </div>
                    <i className="fa-light fa-arrow-up-right-from-square cyber-link-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="cyber-contact-right">
            <div className="cyber-form-header">
              <span className="cyber-form-prompt">
                <span className="prompt">$</span> send_message
                <span className="cursor">_</span>
              </span>
            </div>

            <form
              className="cyber-form"
              id="contact-form"
              ref={form}
              onSubmit={sendMail}
            >
              <div className="cyber-form-row">
                <div className="cyber-form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    placeholder="Your full name"
                    type="text"
                    required
                  />
                </div>
                <div className="cyber-form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    placeholder="your@email.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="cyber-form-row">
                <div className="cyber-form-group">
                  <label>Phone</label>
                  <input
                    name="phone"
                    placeholder="+91 ..."
                    type="text"
                  />
                </div>
                <div className="cyber-form-group">
                  <label>Subject</label>
                  <input
                    name="subject"
                    placeholder="Security consulting / Advisory"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="cyber-form-group cyber-form-full">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Describe your project or question..."
                  rows={5}
                  required
                />
              </div>

              <button
                className="cyber-form-submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="cyber-spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-light fa-paper-plane" />
                    Send Message
                    <i className="fa-sharp fa-regular fa-arrow-right" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
