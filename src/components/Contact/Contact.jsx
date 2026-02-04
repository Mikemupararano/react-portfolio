import React, { useState } from "react";
import "./Contact.css";

function ContactPage() {
  const endpoint = "https://formspree.io/f/YOUR_FORM_ID";

  const publicEmail = import.meta.env.VITE_PUBLIC_EMAIL || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });

  const [status, setStatus] = useState({
    state: "idle", // idle | loading | success | error
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Honeypot
    if (form.company) return;

    if (!endpoint) {
      setStatus({
        state: "error",
        message: "Contact form is not configured. Please email me directly below.",
      });
      return;
    }

    if (
      form.name.trim().length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
      form.message.trim().length < 6
    ) {
      setStatus({
        state: "error",
        message: "Please complete all fields with valid information.",
      });
      return;
    }

    setStatus({ state: "loading", message: "Sending message…" });

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("message", form.message);

      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "", company: "" });
        setStatus({
          state: "success",
          message: "Message sent successfully ✅ I’ll be in touch soon.",
        });
      } else {
        setStatus({
          state: "error",
          message: "Message failed to send. Please try again or email me below.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please email me directly below.",
      });
    }
  }

  return (
    <div className="contact-container">
      <div className="contact">
        <div className="topSide bg-primary">
          <h1 className="contact-me">Contact Me</h1>


          <form onSubmit={handleSubmit} noValidate id="contact-form">
            <div className="field">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Your name"
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@email.com"
              />
            </div>

            <div className="field field--full">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
              />
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="honeypot"
            />

            <button type="submit" disabled={status.state === "loading"}>
              {status.state === "loading" ? "Sending…" : "Send Message"}
            </button>

            <p className={`form-status ${status.state}`} aria-live="polite">
              {status.message}
            </p>
          </form>


          <div className="additional-info">
            <p>
              <a
                href="https://github.com/Mikemupararano"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
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
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactPage;
