// ─────────────────────────────────────────────────────────────────────────────
// Shared form validation & sanitization utilities
// ─────────────────────────────────────────────────────────────────────────────

/** Strip leading/trailing whitespace and collapse internal runs of whitespace */
export const sanitize = (val: string): string => val.trim().replace(/\s+/g, " ");

/** Valid email regex */
export const isValidEmail = (val: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

/**
 * Valid phone: optional leading +, then digits/spaces/dashes/parens
 * Accepts: +91 98765 43210, (123) 456-7890, 9876543210, +1-800-555-0100
 */
export const isValidPhone = (val: string): boolean =>
  /^\+?[\d\s\-().]{7,20}$/.test(val.trim());

/** Field length limits (characters) */
export const LIMITS = {
  name:    { min: 2,  max: 80  },
  email:   { min: 5,  max: 254 },
  phone:   { min: 7,  max: 20  },
  subject: { min: 3,  max: 120 },
  message: { min: 10, max: 2000 },
};

// ─────────────────────────────────────────────────────────────────────────────
// Real-time input filters — strip disallowed characters on every keystroke
// ─────────────────────────────────────────────────────────────────────────────

/** Name: letters, spaces, hyphens, apostrophes, dots (supports Unicode names) */
export const filterName = (val: string): string =>
  val.replace(/[^a-zA-Z\u00C0-\u024F\u0900-\u097F\s'.\-]/g, "");

/** Phone: digits, +, -, spaces, parentheses */
export const filterPhone = (val: string): string =>
  val.replace(/[^\d+\-\s().]/g, "");

/** Email: standard email characters only */
export const filterEmail = (val: string): string =>
  val.replace(/[^a-zA-Z0-9@._+\-]/g, "");

/** Subject: letters, digits, spaces, and common punctuation */
export const filterSubject = (val: string): string =>
  val.replace(/[<>{}[\]\\]/g, "");

/** Message: allow almost everything except angle brackets and backslashes (XSS vectors) */
export const filterMessage = (val: string): string =>
  val.replace(/[<>\\]/g, "");

// ─────────────────────────────────────────────────────────────────────────────
// Input pattern attributes for HTML5 native validation hints
// ─────────────────────────────────────────────────────────────────────────────

export const PATTERNS = {
  name:  "[A-Za-z\\u00C0-\\u024F\\s'.\\-]+",
  phone: "[\\d+\\-\\s().]+",
  email: "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}",
};

export type FormFields = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

/**
 * Validates all contact form fields.
 * Returns an error string on the first failure, or null if everything is valid.
 */
export const validateContactForm = (
  fields: FormFields,
  requirePhone = false
): string | null => {
  const name    = sanitize(fields.name);
  const email   = sanitize(fields.email);
  const phone   = fields.phone ? sanitize(fields.phone) : "";
  const subject = sanitize(fields.subject);
  const message = sanitize(fields.message);

  if (!name || name.length < LIMITS.name.min)
    return `Name must be at least ${LIMITS.name.min} characters.`;
  if (name.length > LIMITS.name.max)
    return `Name must be under ${LIMITS.name.max} characters.`;

  if (!isValidEmail(email))
    return "Please enter a valid email address.";
  if (email.length > LIMITS.email.max)
    return "Email address is too long.";

  if (requirePhone || phone) {
    if (!isValidPhone(phone))
      return "Please enter a valid phone number (digits, spaces, dashes, + allowed).";
    if (phone.length > LIMITS.phone.max)
      return `Phone number must be under ${LIMITS.phone.max} characters.`;
  }

  if (!subject || subject.length < LIMITS.subject.min)
    return `Subject must be at least ${LIMITS.subject.min} characters.`;
  if (subject.length > LIMITS.subject.max)
    return `Subject must be under ${LIMITS.subject.max} characters.`;

  if (!message || message.length < LIMITS.message.min)
    return `Message must be at least ${LIMITS.message.min} characters.`;
  if (message.length > LIMITS.message.max)
    return `Message must be under ${LIMITS.message.max} characters.`;

  return null;
};
