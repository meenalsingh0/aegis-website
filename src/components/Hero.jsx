import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Cpu, Lock, Zap, Sparkles, CheckCircle } from 'lucide-react';
import aegisLogo from '../assets/aegis-logo.jpg';

const missionPoints = [
  {
    title: 'Learn by doing',
    description: 'Hands-on workshops and real-world scenarios to build practical cybersecurity skills.',
    icon: Shield
  },
  {
    title: 'Build a strong community',
    description: 'Collaborative environment fostering teamwork, knowledge sharing, and peer learning.',
    icon: Cpu
  },
  {
    title: 'Think like defenders',
    description: 'Develop critical thinking and problem-solving skills essential for cybersecurity professionals.',
    icon: Lock
  },
  {
    title: 'Prepare for the real world',
    description: 'Exposure to industry practices, tools, and challenges to bridge the gap between academics and professional cybersecurity.',
    icon: Zap
  }
];

const statsData = [
  { label: 'Active Members', target: 150, suffix: '+' },
  { label: 'Major Events', target: 42, suffix: '' },
  { label: 'Workshops Hosted', target: 89, suffix: '+' },
  { label: 'Challenge Hours Logged', target: 2400, suffix: '+' }
];

const Hero = () => {
  const canvasRef = useRef(null);
  const statsRef = useRef(null);
  const intervalRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [counts, setCounts] = useState(() => statsData.map(() => 0));

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.5 ? '#00D4FF' : '#9D4EDD';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        intervalRef.current = window.setInterval(() => {
          setCounts((prev) => {
            const next = prev.map((count, index) => {
              const target = statsData[index].target;
              if (count >= target) return target;
              const step = Math.ceil(target / 50);
              const updated = count + step;
              return updated >= target ? target : updated;
            });

            const complete = next.every((value, index) => value >= statsData[index].target);
            if (complete && intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }

            return next;
          });
        }, 30);
      },
      { threshold: 0.5 }
    );

    const statsElement = statsRef.current;
    if (statsElement) observer.observe(statsElement);

    return () => {
      if (statsElement) observer.unobserve(statsElement);
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Animated Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      {/* Hex Grid Background */}
      <div className="absolute inset-0 hex-grid opacity-10" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00D4FF]/20 to-[#9D4EDD]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#00FF88]/20 to-[#00D4FF]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto py-20">
          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A23]/50 border border-[#2A2A33] mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm font-mono text-[#00D4FF]">CYBER DEFENSE ACTIVE</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space mb-6">
              <span className="gradient-text">AEGIS SRM-IST</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              AEGIS at SRM is a student-run cybersecurity club built on hands-on experience.
With history of successfully organizing hackathons, Capture-the-Flag competitions, and technical workshops—creating an environment where students learn by doing and grow through real-world challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] text-white font-semibold text-lg hover:shadow-xl hover:shadow-[#00D4FF]/20 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Events
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-[#1A1A23] text-gray-300 font-semibold text-lg hover:border-[#00D4FF] hover:text-white transition-all duration-300">
                Join Us
              </button>
            </div>  
          </div>

          {/* Mission Section  */}
          <div className="mb-16 justify-center text-center">
            <h3 className="font-bold text-4xl lg:text-6xl font-space mb-6">
              <span className="gradient-text">OUR MISSION</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2A2A33] group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 to-[#9D4EDD]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-80 md:h-96 bg-gradient-to-br from-[#0A0A0F] to-[#1A1A23] flex items-center justify-center p-8">
                  {/* AEGIS Logo */}
                  <img 
                    src={aegisLogo} 
                    alt="AEGIS Logo" 
                    className="w-64 h-64 object-contain rounded-lg filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
              </div>
              
              {/* Image caption */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 font-mono">
                  AEGIS SECURITY MATRIX — ACTIVE PROTECTION
                </p>
              </div>
            </div>

            {/* Right Side - Mission Points */}
            <div>

              <div className="space-y-6">
                {missionPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div 
                      key={point.title}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-[#1A1A23]/30 border border-[#2A2A33] hover:border-[#00D4FF]/30 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-[#00D4FF]/10 to-[#9D4EDD]/10 group-hover:from-[#00D4FF]/20 group-hover:to-[#9D4EDD]/20 transition-all duration-300">
                          <Icon className="w-6 h-6 text-[#00D4FF]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                          {point.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {point.description}
                        </p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[#00FF88] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 data-stream" />
    </section>
  );
};

export default Hero;