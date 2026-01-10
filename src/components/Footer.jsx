import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Globe, Shield, Instagram  } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-[#050508] border-t border-[#1A1A23]/30">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Social & Copyright */}
          <div className="pt-8 border-t border-[#1A1A23]/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                © {new Date().getFullYear()} AEGIS Security Division. All rights reserved.
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;