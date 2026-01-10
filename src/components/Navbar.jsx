import { useState, useEffect } from 'react';
import { Cpu, Shield, Terminal, Lock, Menu, X } from 'lucide-react';
import aegisLogo from '../assets/aegis-logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Cpu className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Shield className="w-4 h-4" /> },
    { id: 'events', label: 'Events', icon: <Terminal className="w-4 h-4" /> },
    { id: 'team', label: 'Team', icon: <Lock className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-[#0A0A0F]/95 backdrop-blur-xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#9D4EDD] p-0.5">
                <div className="w-full h-full rounded bg-[#0A0A0F] flex items-center justify-center">
                  <img 
                    src={aegisLogo} 
                    alt="AEGIS"
                    className="w-12 h-12 object-cover rounded"
                  />
                </div>
              </div>
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold font-space bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] bg-clip-text text-transparent">
                AEGIS
              </h1>
              <p className="text-xs text-gray-500 font-mono">Security Division</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </div>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] rounded-full"></div>
                )}
              </button>
            ))}
            <button className="ml-4 px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] text-white hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#1A1A23] hover:border-[#00D4FF] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#00D4FF]" />
            ) : (
              <Menu className="w-6 h-6 text-[#00D4FF]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 animate-slide-up">
            <div className="cyber-card p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-[#1A1A23]/50 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-[#1A1A23]/30'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
              <button className="w-full mt-4 px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;