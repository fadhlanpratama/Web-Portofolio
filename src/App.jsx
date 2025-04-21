import { useState, useEffect } from 'react';

// Ubah Bahasa
function LanguageSelector({ language, onChangeLanguage }) {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesia' }
  ];

  return (
    <div className="flex items-center">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={`mx-1 px-2 py-1 rounded ${language === lang.code 
            ? 'bg-blue-800 text-white' 
            : 'bg-gray-700 hover:bg-gray-800'}`}
          onClick={() => onChangeLanguage(lang.code)}>
          {lang.name}
        </button>
      ))}
    </div>
  );
}


// Componen Navbar
function Navbar({ activePage, onNavClick, language, onChangeLanguage }) {
  const navTexts = {
    en: {
      title: 'My Portfolio',
      items: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'project', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    id: {
      title: 'Portofolio Saya',
      items: [
        { id: 'home', label: 'Beranda' },
        { id: 'about', label: 'Tentang' },
        { id: 'project', label: 'Proyek' },
        { id: 'contact', label: 'Kontak' }
      ]
    }
  };

  const texts = navTexts[language];

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-blue-900 text-white shadow-md sticky top-0 z-10">
      <div className="w-full mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <a href="#home" 
             className="text-3xl font-bold"
             onClick={(e) => {
               e.preventDefault();
               onNavClick('home');
               document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
             }}>
            {texts.title}
          </a>
          <div className="md:hidden">
            <LanguageSelector 
              language={language} 
              onChangeLanguage={onChangeLanguage} />
          </div>
        </div>
        <div className="flex items-center space-y-0">
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 font-bold">
            {texts.items.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`hover:text-blue-400 transition-colors duration-300 ${activePage === item.id ? 'text-blue-400 border-b-2 border-blue-400' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                  document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' });}}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block ml-8">
            <LanguageSelector 
              language={language} 
              onChangeLanguage={onChangeLanguage} />
          </div>
        </div>
      </div>
    </nav>
  );
}


// Componen Home
function HomeSection({ language }) {
  const texts = {
    en: {
      greeting: 'Hello,',
      im: 'I\'M',
      name: 'Muhammad Fadhlan Pratama',
      description: 'I am a student who is interested in technology, especially in programming and application development. I love learning new things and am always looking for opportunities to develop my skills in the world of technology.'
    },
    id: {
      greeting: 'Halo,',
      im: 'Saya',
      name: 'Muhammad Fadhlan Pratama',
      description: 'Saya adalah seorang mahasiswa yang tertarik dengan teknologi, terutama di bidang pemrograman dan pengembangan aplikasi. Saya senang belajar hal-hal baru dan selalu mencari kesempatan untuk mengembangkan keterampilan saya dalam dunia teknologi.'
    }
  };
  
  const t = texts[language];

  return (
    <section id="home" className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between min-h-[80vh] px-4">
        <div className="w-full md:w-1/2 text-left">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-cyan-300 drop-shadow-[0_0_15px_rgba(255,255,255,255.0)] animate-pulse">
              {t.greeting}
            </h1>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] animate-pulse">
              {t.im} {t.name}
            </h1>
            <p className="text-sm md:text-base text-white mb-2">
              {t.description}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative md:-translate-y-[100px] md:translate-x-[100px]">
            <img
              src="foto.png"
              alt="Profile"
              className="w-40 h-40 md:w-120 md:h-120 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


// Componen About Me
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


// Componen Project
function ProjectSection({ language }) {
  const [activeProject, setActiveProject] = useState(null);
  const texts = {
    en: {
      title: 'My Projects',
      viewDetails: 'View Details',
      closeDetails: 'Close',
      moreInfo: 'This is an expanded view with more details about this project.',
      projects: [
        {
          id: 1,
          title: "Automatic Fire Extinguisher Robot",
          date: "17-May-2024",
          description: "The Automatic Fire Extinguisher Robot is a specially designed robotic car that can detect and extinguish fire within a certain range automatically. This project is built using an Arduino microcontroller and a flame sensor.",
          tech: "Arduino • Flame Sensor • DC Motors • Robotics",
          image: "mobil.jpg"
          },
        {
          id: 2,
            title: "Apotekin.store",
            date: "20-December-2024",
            description: "Apotekin is an online pharmacy website built with Laravel, designed for buying and selling medicine and allowing users to upload doctor prescriptions directly.",
            tech: "Laravel • Blade • PHP • MySQL • HTML/CSS",
            image: "Apotekin.png" 
          }
      ]
    },
    id: {
      title: 'Proyek Saya',
      viewDetails: 'Lihat Detail',
      closeDetails: 'Tutup',
      moreInfo: 'Ini adalah tampilan yang diperluas dengan detail lebih lanjut tentang proyek ini.',
      projects: [
        {
          id: 1,
          title: "Mobil Pemadam Api Otomatis",
          date: "17-Mei-2024",
          description: "Mobil Pemadam Api Otomatis adalah mobil robotik yang dirancang khusus untuk mendeteksi dan memadamkan api dalam jarak tertentu secara otomatis. Proyek ini dikembangkan menggunakan mikrokontroler Arduino dan sensor pendeteksi api.",
          tech: "Arduino • Sensor Api • Motor DC • Robotik",
          image: "mobil.jpg"
        },
        {
          id: 2,
          title: "Apotekin.store",
          date: "20-Desember-2024",
          description: "Apotekin adalah website apotek online yang dibuat dengan Laravel, digunakan untuk jual beli obat secara digital serta memungkinkan pengguna mengunggah resep dokter secara langsung.",
          tech: "Laravel • Blade • PHP • MySQL • HTML/CSS",
          image: "Apotekin.png"
        }
      ]
    }
  };

  const t = texts[language];

  return (
    <section id="project" className="flex-grow bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="pb-2 text-3xl md:text-4xl font-bold mb-10 text-center text-cyan-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] animate-pulse">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 bg-opacity-60 rounded-lg overflow-hidden shadow-xl border border-gray-700 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[300px] h-[200px] object-cover object-center rounded-lg"/>
              </div>
              <div className="p-6 pt-0">
                <h3 className="text-2xl font-bold mb-1 text-center">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3 text-center">{project.date}</p>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="text-blue-400 mb-4 text-center">{project.tech}</div>
              </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}


// Componen contact
function ContactSection({ language }) {
  const texts = {
    en: {
      title: 'Contact Me',
      getInTouch: 'Get In Touch',
      contactInfo: [
        { icon: "📧", title: "Email", value: "fadhlanpra2112@gmail.com" },
        { icon: "🔗", title: "LinkedIn", value: "in/fadhlan-pratama" },
        { icon: "📱", title: "Phone", value: "+62 895 0952 7272" },
        { icon: "💻", title: "GitHub", value: "github.com/fadhlanpratama" }
      ]
    },
    id: {
      title: 'Hubungi Saya',
      getInTouch: 'Tetap Terhubung',
      contactInfo: [
        { icon: "📧", title: "Email", value: "fadhlanpra2112@gmail.com" },
        { icon: "🔗", title: "LinkedIn", value: "in/fadhlan-pratama" },
        { icon: "📱", title: "Telepon", value: "+62 895 0952 7272" },
        { icon: "💻", title: "GitHub", value: "github.com/fadhlanpratama" }
      ]
    }
  };

  const t = texts[language];

  return (
    <section id="contact" className="flex-grow bg-gradient-to-br from-black via-blue-900 to-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="pb-3 text-3xl md:text-4xl font-bold mb-8 text-center text-cyan-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] animate-pulse">
          {t.title}
        </h2>
        <div className="flex justify-center">
          <div className="bg-gray-800 bg-opacity-50 p-6 md:p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700 w-full max-w-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-white drop-shadow-[0_0_15px_rgba(103,232,249,0.8)]">
              {t.getInTouch}
            </h3>
            {t.contactInfo.map((item, index) => (
              <div  key={index}className="mb-6 flex items-center justify-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                {item.icon}
              </div>
              <div className="flex flex-row items-center space-x-2">
                <span className="text-xl font-bold text-white">{item.title}:</span>
                <span className="text-blue-400 break-all">
                  {item.title === "GitHub" ? (
                    <a
                      href={`https://${item.value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline ">
                      {item.value}</a>
                  ) : item.title === "LinkedIn" ? (
                    <a
                      href={`https://www.linkedin.com/${item.value}-0a454b339/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline" >
                      {item.value}</a>
                  ) : (
                    item.value
                  )}
                </span>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// Componen Footer
function Footer({ language }) {
  const currentYear = new Date().getFullYear();
  const text = language === 'en' 
    ? `© ${currentYear} My Portfolio. 152023162 Muhammad Fadhlan Pratama.`
    : `© ${currentYear} Portofolio Saya. 152023162 Muhammad Fadhlan Pratama.`;
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white text-center py-4">
      <p>{text}</p>
    </footer>
  );
}


const animations = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
`;


// Main App 
export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [language, setLanguage] = useState('en');
  const skills = {
    en: ["React", "JavaScript", "Tailwind CSS", "HTML5", "Node.js", "Git", "Responsive Design", "UI/UX"],
    id: ["React", "JavaScript", "Tailwind CSS", "HTML5", "Node.js", "Git", "Desain Responsif", "UI/UX"]
  };
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
  };
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = animations;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        activePage={activePage} 
        onNavClick={handleNavClick} 
        language={language}
        onChangeLanguage={handleLanguageChange}/>
      <HomeSection language={language} />
      <AboutSection skills={skills[language]} language={language} />
      <ProjectSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
}