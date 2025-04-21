import React from 'react';

function AboutSection({ language }) {
  const texts = {
    en: {
      title: 'About Me',
      bio1: "I am an Informatics student at the National Institute of Technology (Itenas) Bandung. Previously, I studied at SMK Bahagia Bandung majoring in Computer and Network Engineering (TKJ), where I learned the basics of computer networks, hardware, and operating systems. This experience became the initial foundation of my interest in the world of technology and web development.",
      skillsTitle: 'My Skills',
      toolsTitle: 'Tools I Use'
    },
    id: {
      title: 'Tentang Saya',
      bio1: "Saya merupakan mahasiswa Informatika di Institut Teknologi Nasional (Itenas) Bandung. Sebelumnya, saya menempuh pendidikan di SMK Bahagia Bandung jurusan Teknik Komputer dan Jaringan (TKJ), di mana saya belajar dasar-dasar jaringan komputer, perangkat keras, serta sistem operasi. Pengalaman tersebut menjadi fondasi awal ketertarikan saya pada dunia teknologi dan pengembangan web.",
      skillsTitle: 'Keahlian Saya',
      toolsTitle: 'Alat yang Saya Gunakan'
    }
  };
  const t = texts[language];
  const skills = ["Python", "PHP", "CSS", "Java Script"];
  const tools = ["VS Code", "Figma", "GitHub"];
  const cardClass = "bg-gray-700 p-3 rounded text-center " + "transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600";

  return (
    <section id="about" className="flex-grow bg-gradient-to-br from-gray-800 via-blue-800 to-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-cyan-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] animate-pulse pb-2">
          {t.title}
        </h2>
        <div className="bg-gray-800 bg-opacity-50 p-6 md:p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700">
          <div>
            <p className="text-lg md:text-xl mb-6 ">{t.bio1}</p>
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-center text-white drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] pb-1">
              {t.skillsTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className={cardClass}>
                  {skill}
                </div>
              ))}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-center text-white drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] pb-1">
              {t.toolsTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className={cardClass}>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;