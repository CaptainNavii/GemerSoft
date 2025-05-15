import React from "react";
import "./services.css"; // Optional: Add styles for the services section

const Services = () => {
  const services = [
    {
      title: "Mobil ilovalar",
      description: `Android va iOS qurilmalari uchun samarali, intuitiv interfeysli
            mobil ilovalarni ishlab chiqamiz. Mijozlaringiz har doim siz bilan
            bo‘lsin`,
    },
    {
      title: "Biznesni avtomatlashtirish",
      description: `CRM, ERP, yoki sizning biznesingizga mos maxsus tizimlar orqali ish
            jarayonlarini avtomatlashtiramiz. Xatolik kam, samaradorlik yuqori!`,
    },
    {
      title: "Telegram botlar",
      description: `Telegram botlari, savdo-sotiq avtomatlari, mijozlarga xizmat
            ko‘rsatish botlari – barchasini siz uchun loyihalab, ishlab
            chiqamiz.`,
    },
    {
      title: "Internet-do‘konlar",
      description: `Onlayn savdo qilishni boshlamoqchimisiz? Biz siz uchun to‘lov
            tizimlari integratsiyalangan, mahsulotlarni boshqarish oson bo‘lgan
            zamonaviy e-commerce saytlarini ishlab chiqamiz.`,
    },
    {
      title: "Sun’iy intellekt (AI) integratsiyasi",
      description: `Biznesingizga sun’iy intellekt imkoniyatlarini qo‘shing: chatbotlar,
            tavsiya tizimlari, avtomatik matn aniqlovchilar va boshqa aqlli
            yechimlar.`,
    },
  ];

  return (
    <section className="services">
      <h1>Xizmatlarimiz</h1>
      <div className="cards">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <div className="description">{service.description}</div>
            <a href="#contact"><button className="btn">Bog'lanish</button></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
