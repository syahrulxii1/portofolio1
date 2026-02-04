import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, User, Briefcase, Mail, Send, MessageSquare, 
  X, Github, Linkedin, ExternalLink, Code, Smartphone, 
  Cpu, Globe, ChevronRight
} from 'lucide-react';
import { 
  ResponsiveContainer, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip 
} from 'recharts';
import fotoProfil from './pp.jpg';

// --- DATA & KONFIGURASI ---

// Ganti nomor ini dengan nomor WhatsApp Anda (format: 628...)
const WA_NUMBER = "6283870644938"; 

const SKILLS_DATA = [
  { subject: 'Bahasa Asing', A: 120, fullMark: 150 },
  { subject: 'Desain', A: 98, fullMark: 150 },
  { subject: 'Komunikasi', A: 86, fullMark: 150 },
  { subject: 'Manajemen', A: 99, fullMark: 150 },
  { subject: 'Analisis', A: 85, fullMark: 150 },
  { subject: 'Problem Solving', A: 110, fullMark: 150 },
];

const PROJECTS = [
  {
    title: "E-Commerce App",
    desc: "Aplikasi belanja online dengan fitur pembayaran digital.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Sistem IoT Smart Home",
    desc: "Kontrol lampu dan suhu rumah berbasis web.",
    tags: ["IoT", "Python", "MQTT"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Dashboard Keuangan",
    desc: "Visualisasi data pengeluaran perusahaan real-time.",
    tags: ["Vue", "D3.js", "Firebase"],
    color: "from-emerald-400 to-green-600"
  }
];

// --- KOMPONEN UTAMA ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Render halaman berdasarkan tab aktif
  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeSection setActiveTab={setActiveTab} />;
      case 'about': return <AboutSection />;
      case 'portfolio': return <PortfolioSection />;
      case 'contact': return <ContactSection />;
      default: return <HomeSection setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white pb-20 md:pb-0 overflow-x-hidden">
      
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Desktop Navigation (Top) */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-800/50 bg-slate-950/70 px-8 py-4 justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => setActiveTab('home')}>
          Portfolio.
        </h1>
        <div className="flex gap-8">
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`capitalize text-sm font-medium transition-all hover:text-cyan-400 ${activeTab === item ? 'text-cyan-400' : 'text-slate-400'}`}
            >
              {item === 'home' ? 'Beranda' : item === 'portfolio' ? 'Portofolio' : item === 'contact' ? 'Hubungi' : 'Tentang'}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-6 md:pt-24 min-h-screen max-w-5xl mx-auto px-4 sm:px-6">
        {renderContent()}
      </main>

      {/* Mobile Navigation (Bottom) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 backdrop-blur-lg bg-slate-900/90 border-t border-slate-800 flex justify-around py-3 pb-safe">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'about', icon: User, label: 'Saya' },
          { id: 'portfolio', icon: Briefcase, label: 'Karya' },
          { id: 'contact', icon: Mail, label: 'Kontak' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === item.id ? 'text-cyan-400' : 'text-slate-500'}`}
          >
            <item.icon size={20} />
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* AI Chat Widget */}
      <AIChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}

// --- HALAMAN BERANDA ---
function HomeSection({ setActiveTab }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 animate-fade-in">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-2">
          👋 Halo, selamat datang!
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Saya Menciptakan <br/>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Solusi Digital
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-lg mx-auto md:mx-0">
          PELAJAR SMAN 1 SUBANG
            Seorang pelajar biasa yang memiliki beberapa skil dan project dalam bidang desain UI/UX
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <button 
            onClick={() => setActiveTab('portfolio')}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
          >
            Lihat Karya <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-full font-medium transition-all flex items-center justify-center gap-2"
          >
            Hubungi Saya
          </button>
        </div>
      </div>
      
      {/* Abstract Hero Image/Shape */}
      <div className="flex-1 relative flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <div className="absolute inset-2 bg-slate-950 rounded-full z-10 flex items-center justify-center overflow-hidden border border-slate-800">
             {/* Ganti src ini dengan foto profil Anda */}
            <img 
              src="pp.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Floating Cards */}
          <div className="absolute top-0 right-0 p-3 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg animate-bounce z-20 hidden md:block" style={{ animationDuration: '3s' }}>
            <Code className="text-cyan-400 mb-1" size={24} />
            <div className="text-xs text-slate-400">Clean Code</div>
          </div>
          <div className="absolute bottom-10 left-0 p-3 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg animate-bounce z-20 hidden md:block" style={{ animationDuration: '4s' }}>
            <Globe className="text-purple-400 mb-1" size={24} />
            <div className="text-xs text-slate-400">Web Modern</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HALAMAN ABOUT ME ---
function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto py-10 animate-fade-in-up">
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <User className="text-cyan-400" /> Tentang Saya
      </h2>
      
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
           <div className="w-full md:w-1/3">
             <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600" 
                  alt="About Me"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
             </div>
           </div>
           
           <div className="w-full md:w-2/3 space-y-4">
             <h3 className="text-2xl font-semibold text-white">Digital Creator & Developer</h3>
             <p className="text-slate-400 leading-relaxed">
               Halo! Saya adalah seorang pelajar dari SMAN 1 Subang yang memiliki semangat tinggi dalam mengeksplorasi dunia teknologi. Di tengah kesibukan sekolah, saya aktif mengembangkan berbagai macam skill, mulai dari kreativitas digital hingga pemrograman web. Saya percaya bahwa batasan perangkat bukan hambatan untuk berkarya—terbukti dengan kemampuan saya dalam mengelola proyek koding seperti React langsung dari ponsel. Saya adalah tipe pembelajar yang adaptif, tech-savvy, dan selalu antusias untuk menciptakan solusi inovatif di era digital ini.
             </p>
             <p className="text-slate-400 leading-relaxed">
               Filosofi saya sederhana: <span className="text-cyan-400 italic">"Simplicity is the ultimate sophistication."</span>
              Perjalanan saya dalam dunia koding adalah bukti nyata dari sebuah kegigihan. Meskipun dengan keterbatasan perangkat, saya tidak membiarkan hal itu menghentikan langkah saya. Saya belajar secara otodidak untuk memahami logika pemrograman dan ekosistem modern seperti React, bahkan melakukan proses deployment ke GitHub sepenuhnya melalui ponsel. Bagi saya, setiap baris kode yang saya tulis adalah bentuk dedikasi untuk terus berkembang dan membuktikan bahwa kemauan yang kuat jauh lebih penting daripada fasilitas yang mewah.
             </p>

             <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                 <div className="text-2xl font-bold text-cyan-400">5+</div>
                 <div className="text-sm text-slate-500">Tahun Pengalaman</div>
               </div>
               <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                 <div className="text-2xl font-bold text-purple-400">10+</div>
                 <div className="text-sm text-slate-500">Proyek Selesai</div>
               </div>
             </div>

             <div className="flex gap-4 pt-4">
               <SocialLink icon={Github} href="#" />
               <SocialLink icon={Linkedin} href="#" />
               <SocialLink icon={Globe} href="#" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

const SocialLink = ({ icon: Icon, href }) => (
  <a href={href} className="p-2 bg-slate-800 hover:bg-cyan-500 hover:text-white rounded-lg transition-colors text-slate-400">
    <Icon size={20} />
  </a>
);

// --- HALAMAN PORTOFOLIO & SKILL ---
function PortfolioSection() {
  return (
    <div className="py-10 space-y-16 animate-fade-in-up">
      
      {/* Bagian Skills Chart */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Cpu className="text-purple-400" /> Statistik Skill
        </h2>
        <div className="w-full max-w-lg h-[300px] md:h-[400px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
              <Radar
                name="Kemampuan"
                dataKey="A"
                stroke="#06b6d4"
                strokeWidth={3}
                fill="#06b6d4"
                fillOpacity={0.4}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }}
                itemStyle={{ color: '#22d3ee' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bagian Project Showcase */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <Briefcase className="text-cyan-400" /> Proyek Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  Lihat Detail <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- HALAMAN CONTACT (WHATSAPP INTEGRATION) ---
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSend = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.message) return alert("Mohon isi nama dan pesan.");
    
    // Format pesan untuk WhatsApp
    const text = `Halo, saya ${formData.name}. ${formData.message}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    
    // Membuka WhatsApp di tab baru
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-xl mx-auto py-10 animate-fade-in-up">
       <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Smartphone className="text-green-400" /> Hubungi Saya
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <p className="text-center text-slate-400 mb-6">
          Isi form di bawah ini dan Anda akan langsung diarahkan ke chat WhatsApp saya.
        </p>

        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Nama Anda</label>
            <input 
              type="text" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all placeholder:text-slate-600"
              placeholder="Jhon Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Pesan</label>
            <textarea 
              rows={4}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all placeholder:text-slate-600 resize-none"
              placeholder="Saya ingin berdiskusi tentang proyek..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold shadow-lg shadow-green-900/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <Send size={18} /> Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

// --- WIDGET CHAT AI SEDERHANA ---
function AIChatWidget({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Saya asisten AI virtual. Ada yang bisa saya bantu?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Tambah pesan user
    const newMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Simulasi respons AI sederhana
    setTimeout(() => {
      let response = "Maaf, saya hanya bot simulasi. Silahkan hubungi pemilik lewat halaman Kontak.";
      const lowerInput = newMsg.text.toLowerCase();
      
      if (lowerInput.includes('halo') || lowerInput.includes('hi')) {
        response = "Halo juga! Senang bertemu Anda.";
      } else if (lowerInput.includes('harga') || lowerInput.includes('jasa')) {
        response = "Untuk harga dan detail jasa, sebaiknya diskusikan langsung lewat WhatsApp di menu Kontak.";
      } else if (lowerInput.includes('siapa')) {
        response = "Saya adalah asisten virtual yang dibuat untuk menemani Anda menjelajahi portofolio ini.";
      } else if (lowerInput.includes('keren')) {
        response = "Terima kasih! Pemilik portofolio ini memang hebat.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up origin-bottom-right">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Cpu size={16} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">AI Assistant</h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-slate-200">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-slate-950/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-cyan-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
            <input 
              type="text" 
              className="flex-1 bg-slate-950 border border-slate-700 rounded-full px-4 text-sm focus:outline-none focus:border-cyan-500 text-white"
              placeholder="Tulis pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="p-2 bg-cyan-600 rounded-full text-white hover:bg-cyan-500 transition-colors">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        )}
      </button>
    </div>
  );
}

// --- CSS / STYLE UTILS ---
// Menggunakan style standar di index.html atau menyisipkan style tag di sini
// Tailwind digunakan secara ekstensif di atas.
// Animasi tambahan (Fade In)
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
  .animate-fade-in-up { animation: fadeIn 0.6s ease-out forwards; }
`;
document.head.appendChild(style);
