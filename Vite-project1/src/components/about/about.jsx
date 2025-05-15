import React from 'react';
import './about.css'; 
const About = () => {
  return (
    <section className="section" id="about">
      <h2>Biz haqimizda</h2>
      <p style={{ maxWidth: '700px', margin: 'auto', textAlign: 'center' }}>
      Gemersoft – bu texnologiyalarga ishonuvchi va ularni biznes rivojiga
        tatbiq etuvchi yosh, ammo tajribali dasturchilar jamoasi. Har bir loyiha
        – bu biz uchun mas’uliyat va mijoz ishonchi. Shuning uchun biz sifat,
        tezlik va yangilikni birlashtiramiz.
      </p>
      <h2>Nega aynan biz?</h2>
      <p style={{ maxWidth: '700px', margin: 'auto', textAlign: 'center' }}>
      ✅ Tajribali mutaxassislar ✅ Tezkor va shaffof ish jarayoni ✅ Arzon va
        shaxsiylashtirilgan tariflar ✅ Doimiy texnik qo‘llab-quvvatlash ✅
        Mahalliy bozorni chuqur tushunamiz
      </p>
    </section>
  );
};

export default About;