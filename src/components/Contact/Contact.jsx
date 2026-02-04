import React, { useMemo, useState } from "react";
import "./Contact.css";

function ContactPage() {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "";
  const publicEmail = import.meta.env.VITE_PUBLIC_EMAIL || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot (anti-spam)
  });

  const [status, setStatus] = useState({
    state: "idle", // idle | loading | success | error
    message: "",
  });

  const canSubmit = useMemo(() => {
    const nameOk = form.name.trim().length > 1;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const msgOk = form.message.trim().length > 5;
    return nameOk && emailOk && msgOk && status.state !== "loading";
  }, [form.name, form.email, form.message, status.state]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Honeypot triggered
    if (form.company) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again.",
      });
      return;
    }

    if (!endpoint) {
      setStatus({
        state: "error",
        message: "Contact form is not configured yet. Please use the email link below.",
      });
      return;
    }

    // Basic client-side validation (prevents avoidable errors)
    if (!canSubmit) {
      setStatus({
        state: "error",
        message: "Please fill in your name, a valid email address, and a message.",
      });
      return;
    }

    setStatus({ state: "loading", message: "" });

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "", company: "" });
        setStatus({
          state: "success",
          message: "Message sent ✅ I’ll get back to you soon.",
        });
      } else {
        setStatus({
          state: "error",
          message: "Couldn’t send your message. Please try again or email me directly below.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please try again or email me directly below.",
      });
    }
  }

  return (
    <div className="contact-container">
      <div className="contact">
        <div className="topSide bg-primary">
          <h1 className="contact-me">Contact Me</h1>

          {/* Mini profile (replaces CV) */}
          <p className="contact-intro">
            Full-stack developer (React + Django). Available part-time (2–3 days/week). Daily rate: £200/day.
          </p>

          <form id="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              placeholder="Enter full name..."
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />

            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              placeholder="Enter email..."
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />

            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Enter message..."
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />

            {/* Honeypot field (hidden) */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px" }}
            />

            <button type="submit" disabled={!canSubmit}>
              {status.state === "loading" ? "Sending..." : "Send Message"}
            </button>

            <p className="form-status" aria-live="polite">
              {status.message}
            </p>
          </form>

          {/* Additional info (no CV link) */}
          <div className="additional-info">
            <p>
              <a href="https://github.com/Mikemupararano" target="_blank" rel="noopener noreferrer">
                GitHub profile
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/mike-thomas-4a4b84287/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>

            {/* Email is optional: show only if set in .env */}
            {publicEmail ? (
              <p>
                <a href={`mailto:${publicEmail}`}>{publicEmail}</a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
