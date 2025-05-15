import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <h1>Biznesingizni raqamlashtiring!</h1>
      <p>
        GemerSoft – bu zamonaviy veb-saytlar, mobil ilovalar va
        avtomatlashtirilgan tizimlar orqali biznesingizni yangi bosqichga olib
        chiqadigan IT kompaniya. Tezkor, xavfsiz va samarali yechimlarni taqdim
        etamiz.
      </p>
      <button
        className="btn"
        href="#contact"
      >
        Bepul maslahat oling
      </button>
    </section>
  );
};

export default Hero;
