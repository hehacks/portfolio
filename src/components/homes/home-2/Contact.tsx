import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { contactSection } from "@/data/contactSection";
import { socialLinks, siteIdentity } from "@/data/siteConfig";
import { validateContactForm, LIMITS } from "@/utils/formValidation";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(false);
  const [cooldownSecs, setCooldownSecs] = useState(0);
  // Honeypot — must stay empty; bots fill it automatically
  const [honeypot, setHoneypot] = useState("");
  const s = contactSection;

  // Countdown timer for cooldown
  useEffect(() => {
    if (!cooldown) return;
    if (cooldownSecs <= 0) { setCooldown(false); return; }
    const t = setTimeout(() => setCooldownSecs((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown, cooldownSecs]);

  const contactLinks = socialLinks
    .filter((sl) => ["LinkedIn", "Twitter"].includes(sl.label))
    .map((sl) => ({ icon: sl.icon, label: sl.label, value: sl.value, href: sl.href }));

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check — silently reject bots
    if (honeypot) return;

    if (cooldown) { toast.warn(`Please wait ${cooldownSecs}s before sending again.`); return; }
    const formData = new FormData(form.current!);

    const error = validateContactForm({
      name:    formData.get("name")    as string,
      email:   formData.get("email")   as string,
      phone:   formData.get("phone")   as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    });
    if (error) { toast.error(error); return; }

    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA.");
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
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
        setCooldown(true);
        setCooldownSecs(30);
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

        {/* ── Header ── */}
        <div className="cyber-contact-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">{s.eyebrowLabel}</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-contact-title">
            {s.titleMain}<span className="grad">{s.titleHighlight}</span>
          </h2>
          <p className="cyber-contact-lede">{s.lede}</p>
        </div>

        {/* ── Main form card — full width centered ── */}
        <div className="row justify-content-center">
          <div className="col-lg-9 col-12">
            <div className="cyber-contact-card">

              {/* Terminal prompt */}
              <div className="cyber-form-header">
                <span className="cyber-form-prompt">
                  <span className="prompt">$</span> {s.formPrompt}
                  <span className="cursor">_</span>
                </span>
              </div>

              <form className="cyber-form" id="contact-form" ref={form} onSubmit={sendMail} noValidate>
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

                <div className="cyber-form-row">
                  <div className="cyber-form-group">
                    <label>{s.fields.name.label}</label>
                    <input name="name" placeholder={s.fields.name.placeholder} type="text" required autoComplete="name" maxLength={LIMITS.name.max} />
                  </div>
                  <div className="cyber-form-group">
                    <label>{s.fields.email.label}</label>
                    <input name="email" placeholder={s.fields.email.placeholder} type="email" required autoComplete="email" maxLength={LIMITS.email.max} />
                  </div>
                </div>

                <div className="cyber-form-row">
                  <div className="cyber-form-group">
                    <label>{s.fields.phone.label}</label>
                    <input name="phone" placeholder={s.fields.phone.placeholder} type="tel" autoComplete="tel" maxLength={LIMITS.phone.max} />
                  </div>
                  <div className="cyber-form-group">
                    <label>{s.fields.subject.label}</label>
                    <input name="subject" placeholder={s.fields.subject.placeholder} type="text" required autoComplete="off" maxLength={LIMITS.subject.max} />
                  </div>
                </div>

                <div className="cyber-form-group cyber-form-full">
                  <label>{s.fields.message.label}</label>
                  <textarea name="message" placeholder={s.fields.message.placeholder} rows={5} required maxLength={LIMITS.message.max} />
                </div>

                {/* reCAPTCHA */}
                <div className="cyber-recaptcha-wrap">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={s.recaptchaSiteKey}
                    theme="dark"
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                  />
                </div>

                <button className="cyber-form-submit" type="submit" disabled={isSubmitting || !captchaToken || cooldown}>
                  {isSubmitting ? (
                    <><span className="cyber-spinner" />{s.sendingLabel}</>
                  ) : cooldown ? (
                    <><i className="fa-light fa-clock" />Wait {cooldownSecs}s</>
                  ) : (
                    <><i className="fa-light fa-paper-plane" />{s.submitLabel}<i className="fa-sharp fa-regular fa-arrow-right" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── Info row below form ── */}
        <div className="row g-4 mt--30 justify-content-center">

          {/* Topmate */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cyber-contact-info-card">
              <div className="cyber-info-icon">
                <i className={s.cta.icon} />
              </div>
              <div className="cyber-info-body">
                <h4>{s.cta.title}</h4>
                <p>{s.cta.description}</p>
              </div>
              <a href={s.cta.href} target="_blank" rel="noopener noreferrer" className="cyber-cta-btn">
                <span>{s.cta.buttonLabel}</span>
                <i className="fa-light fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cyber-contact-info-card">
              <div className="cyber-info-icon">
                <i className="fa-light fa-envelope" />
              </div>
              <div className="cyber-info-body">
                <h4>Email</h4>
                <p>{siteIdentity.email}</p>
              </div>
              <a href={`mailto:${siteIdentity.email}`} className="cyber-cta-btn">
                <span>Write</span>
                <i className="fa-light fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cyber-contact-info-card">
              <div className="cyber-info-icon">
                <i className="fa-light fa-share-nodes" />
              </div>
              <div className="cyber-info-body">
                <h4>{s.findMeLabel}</h4>
                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  {contactLinks.map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-primary)", fontSize: "14px", fontWeight: 600 }}>
                      <i className={l.icon} />
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
