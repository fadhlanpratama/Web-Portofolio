import React from 'react';

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

export default Footer;