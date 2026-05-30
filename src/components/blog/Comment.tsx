import { useState } from "react";
import { toast } from "react-toastify";
import { sanitize, isValidEmail, LIMITS } from "@/utils/formValidation";

export default function Comment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (val: string) => isValidEmail(val);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sanitize(name)) { toast.error("Please enter your name."); return; }
    if (sanitize(name).length < LIMITS.name.min) { toast.error(`Name must be at least ${LIMITS.name.min} characters.`); return; }
    if (!validateEmail(email)) { toast.error("Please enter a valid email address."); return; }
    if (!sanitize(message) || sanitize(message).length < LIMITS.message.min) { toast.error(`Message must be at least ${LIMITS.message.min} characters.`); return; }
    // No backend wired — inform the user to use the contact form instead
    toast.info("Comments are not enabled yet. Please use the contact form to reach out directly.");
  };

  return (
    <div className="blog-details-form-wrapper tmponhover">
      <h4 className="title">Leave a comment</h4>
      <span className="subtitle">
        By submitting this form you agree to be contacted directly.
      </span>
      <form onSubmit={handleSubmit} className="blog-details-form" noValidate>
        <div className="single-input">
          <label htmlFor="comment-name">Your Name</label>
          <input
            id="comment-name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            maxLength={LIMITS.name.max}
          />
        </div>
        <div className="single-input">
          <label htmlFor="comment-email">Your Email</label>
          <input
            id="comment-email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            maxLength={LIMITS.email.max}
          />
        </div>
        <label htmlFor="comment-message">Message</label>
        <textarea
          id="comment-message"
          name="message"
          placeholder="Message here.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={LIMITS.message.max}
        />
        <div className="blog-submit-btn mt--40">
          <div className="tmp-button-here">
            <button
              type="submit"
              className="tmp-btn hover-icon-reverse radius-round w-100"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Submit Now</span>
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
  );
}
