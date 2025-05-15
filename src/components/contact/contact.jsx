import React, { useState, useEffect } from "react";
import "./contact.css";

const RECAPTCHA_SITE_KEY = "6LesXzsrAAAAAHhJTP4l18NAok9KYIvWFoeBhPjz";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvkzqpr";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // Load reCAPTCHA v3 script and set ready state
  useEffect(() => {
    const scriptId = "recaptcha-v3";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.onload = () => setRecaptchaReady(true);
      document.body.appendChild(script);
    } else {
      setRecaptchaReady(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Yuborilmoqda...");

    if (!window.grecaptcha) {
      setStatus("reCAPTCHA yuklanmadi. Iltimos, sahifani yangilang.");
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
        .then(async (token) => {
          try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ ...form, "g-recaptcha-response": token }),
            });
            if (response.ok) {
              setStatus("Yuborildi!");
              setForm({ name: "", email: "", tel: "", message: "" });
            } else {
              setStatus("Yuborilmadi, yana urinib ko'ring.");
            }
          } catch (error) {
            setStatus("Yuborishda xatolik sodir bo'ldi.");
          }
        });
    });
  };

  return (
    <section className="contact" id="section">
      <h2>Bog'lanish</h2>
      <div className="contact-socials">
        <h4 style={{ fontSize: 25 }}>Ijtimoiy tarmoqlarda biz:</h4>
        <div className="social-icons">
          <a
            href="https://t.me/gemersoft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <i
              className="fab fa-telegram fa-2x"
              style={{ "--accent-color": "#24a1de" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/gemersoft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i
              className="fab fa-instagram fa-2x"
              style={{ "--accent-color": "#f56040" }}
            ></i>
          </a>
          <a
            href="https://www.facebook.com/gemersoft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i
              className="fab fa-facebook fa-2x"
              style={{ "--accent-color": "#1877f2" }}
            ></i>
          </a>
          <a href="tel:507721104" aria-label="Telefon">
            <i
              className="fas fa-phone fa-2x"
              style={{ "--accent-color": "#35f218" }}
            ></i>
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ismingiz"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="elektron pochta manzilingiz"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="tel"
          placeholder="telefon raqamingiz"
          value={form.tel}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="xabar matni"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={!recaptchaReady}>
          {recaptchaReady ? "Yuborish" : "Yuklanmoqda..."}
        </button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
};

export default Contact;
