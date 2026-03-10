import { useState } from "react";
import logo from "./assets/drm-logo.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      hero: {
        tag: "Google Business Profile Experts",
        headingLine1: "Grow Your Business on",
        headingLine2: "Google Search & Google Maps",
        subheading: "Professional Google Business Profile management for local businesses.",
        description: "Improve visibility, respond to customer reviews, and turn profile views into real customers.",
        ctaPrim: "Get Free Profile Audit",
        ctaSec: "Chat on WhatsApp"
      }
    },
    mr: {
      hero: {
        tag: "Google Business Profile Experts",
        headingLine1: "Google Maps वर",
        headingLine2: "तुमचा व्यवसाय वाढवा",
        subheading: "स्थानिक व्यवसायांसाठी Google Business Profile व्यवस्थापन",
        description: "Google वर विश्वास वाढवा, visibility सुधार करा आणि अधिक enquiries मिळवा.",
        ctaPrim: "Get Free Consultation",
        ctaSec: "Explore Services"
      }
    }
  };

  const t = content[language];


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value || "",   // optional
      businessName: form.businessName.value,
      city: form.city.value,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxsBr4hEbtqX8i6XiN3z-RzQKQi_bQ9mmS4O5nPCaWGeNtPE2TPQkctld2mSm0AYSS1/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Thank you! We will contact you soon.");
      form.reset();
    } catch (error) {
      alert("Error! Try again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed bg-no-repeat text-white relative overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/90 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 font-sans">

        {/* HEADER */}
        <header className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img
                  src={logo}
                  alt="Logo"
                  className="relative h-12 w-auto bg-white rounded-md p-1"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">DRM <span className="text-neon-blue">Service</span></h1>
                <p className="text-xs text-slate-400">Digital Reputation Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${language === "en" ? "bg-neon-blue text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("mr")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${language === "mr" ? "bg-neon-blue text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                >
                  मराठी
                </button>
              </div>

              <a href="#leadForm" className="hidden md:block bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
                Get Started
              </a>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-32 px-6 text-center overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative max-w-4xl mx-auto">
            {/* BIG HERO LOGO */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-blue/30 blur-[40px] rounded-full"></div>
                <img
                  src={logo}
                  alt="DRM Logo"
                  className="relative h-32 md:h-40 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-[float_6s_ease-in-out_infinite]"
                />
              </div>
            </div>

            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-semibold tracking-wide uppercase animate-pulse">
              {t.hero.tag}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              {t.hero.headingLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple">
                {t.hero.headingLine2}
              </span>
            </h2>
            <h3 className="text-xl md:text-2xl text-white font-medium mb-4">
              {t.hero.subheading}
            </h3>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#leadForm" className="px-8 py-4 rounded-full bg-neon-blue hover:bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all transform hover:scale-105">
                {t.hero.ctaPrim}
              </a>
              <a href="https://wa.me/message/IICK6ZTJ5X5WH1" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium backdrop-blur-sm transition-all">
                {t.hero.ctaSec}
              </a>
            </div>
          </div>
        </section>
        {/* WHAT WE DO SECTION */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">We Do</span>
              </h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Complete management of your digital presence so you can focus on your business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { text: "Create Google Business Profile", sub: "(if not present)", icon: "✨" },
                { text: "Verify & Optimize Profile", sub: "Setup & Verification", icon: "✅" },
                { text: "Reply to Customer Reviews", sub: "Build Engagement", icon: "💬" },
                { text: "Monitor Profile Regularly", sub: "Consistent Tracking", icon: "🛡️" },
                { text: "Update Photos", sub: "(if provided)", icon: "📸" },
                { text: "Provide QR Code", sub: "For Easy Customer Reviews", icon: "📱" },
                { text: "Monthly Summary Report", sub: "Track Your Growth", icon: "📊" },
                { text: "Review Insights", sub: "Improvement Suggestions", icon: "💡" },
              ].map((item, index) => (
                <div key={index} className="glass p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-all hover:-translate-y-1 border border-neon-blue/20 hover:border-neon-purple/50 group hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <div className="bg-neon-blue/10 p-3 rounded-lg text-2xl group-hover:scale-110 transition-transform group-hover:bg-neon-purple/20 group-hover:text-neon-purple text-neon-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1 leading-tight group-hover:text-white transition-colors">{item.text}</h4>
                    <p className="text-xs text-neon-cyan font-medium uppercase tracking-wider group-hover:text-neon-purple transition-colors">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-24 px-6 relative overflow-hidden bg-slate-900/50">
          {/* Background Decoration */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="lg:flex items-center gap-16">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-sm font-semibold tracking-wide uppercase">
                  Your Growth Partner
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  How This Helps <br />
                  <span className="text-white">Your Business</span>
                </h3>
                <a href="#leadForm" className="hidden lg:inline-flex items-center gap-2 text-neon-blue hover:text-white font-semibold transition-colors group">
                  Start Growing Today
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="lg:w-1/2 space-y-6">
                {[
                  { title: "More Trust on Google", desc: "Active profiles with owner responses build customer trust.", highlight: "text-neon-cyan" },
                  { title: "Better Visibility", desc: "Optimized profiles appear higher in Google Search and Maps.", highlight: "text-neon-blue" },
                  { title: "More Calls & Visits", desc: "Customers can easily call, message, or navigate to your location.", highlight: "text-neon-purple" },
                  { title: "Professional Online Image", desc: "A well-managed profile creates a strong first impression.", highlight: "text-white" },
                  { title: "Save Owner's Time", desc: "We manage reviews and updates so you can focus on your business.", highlight: "text-green-400" },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-l-neon-blue">
                    <div className={`text-2xl font-bold opacity-80 ${benefit.highlight}`}>0{idx + 1}</div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm md:text-base">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="py-20 px-6 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
              <p className="text-slate-400">Proven strategies to boost your local presence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Improved Local Visibility", desc: "Get found first when customers search for your services near them.", icon: "📍", gradient: "from-blue-500/20 to-purple-500/20" },
                { title: "Consistent Review Management", desc: "Build trust with authentic customer engagement and replies.", icon: "⭐", gradient: "from-cyan-500/20 to-blue-500/20" },
                { title: "Better Customer Engagement", desc: "Turn profile views into calls, messages, and visits.", icon: "📈", gradient: "from-purple-500/20 to-pink-500/20" },
                { title: "Simple Monthly Reporting", desc: "Clear summary of your profile performance and growth.", icon: "📊", gradient: "from-green-500/20 to-teal-500/20" },
                { title: "Clear & Transparent Pricing", desc: "Affordable monthly management without hidden charges.", icon: "💰", gradient: "from-amber-500/20 to-orange-500/20" },
              ].map((item, index) => (
                <div key={index} className={`group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br ${item.gradient} hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Simple & Transparent Pricing</h3>
            <p className="text-slate-400 mb-10">Professional management without the complexity.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Trial Plan */}
              <div className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 shadow-[0_0_20px_#ffffff]"></div>
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-all duration-700"></div>

                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">First Month Trial</h4>
                
                <div className="mb-8">
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">₹999</span>
                </div>

                <p className="text-sm text-slate-400 mb-8 max-w-sm mx-auto border-t border-white/10 pt-4 mt-6">
                  Complete setup and initial optimization of your Google Business Profile.
                </p>

                <div className="flex flex-col gap-3 text-slate-300 text-sm font-medium items-center">
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Profile Audit & Optimization
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Reply to Customer Reviews
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Profile Monitoring
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Initial Improvements
                  </span>
                </div>
              </div>

              {/* Regular Plan */}
              <div className="glass p-10 rounded-3xl border border-neon-blue/30 relative overflow-hidden group hover:border-neon-blue/50 transition-all duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50 shadow-[0_0_20px_#3b82f6]"></div>
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-neon-blue/10 rounded-full blur-[80px] group-hover:bg-neon-blue/20 transition-all duration-700"></div>

                <h4 className="text-xl md:text-2xl font-semibold text-neon-blue mb-4">Standard Plan</h4>

                <div className="mb-8">
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">₹1199</span>
                  <span className="text-xl text-slate-400 font-medium"> / month</span>
                </div>

                <p className="text-sm text-slate-400 mb-8 max-w-sm mx-auto border-t border-white/10 pt-4 mt-6">
                  Ongoing management, monitoring, and regular updates to maintain growth.
                </p>

                <div className="flex flex-col gap-3 text-slate-300 text-sm font-medium items-center">
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Ongoing Review Replies
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Profile Monitoring
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Photo Updates (if provided)
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Monthly Summary Report
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-neon-cyan text-lg">✓</span> Cancel Anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SECTION (Example Monthly Report) */}
        <section className="py-20 px-6 bg-slate-900/30 border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Example Monthly Report</h3>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Every month we send a clear summary report showing review activity, issues identified, and improvement suggestions.
            </p>
            <div className="glass p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto backdrop-blur-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="text-left">
                  <div className="text-xs text-neon-cyan font-bold uppercase tracking-wider">Growth Report</div>
                  <div className="text-xl font-bold text-white">February 2026</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-bold">DRM SERVICE</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400">Reviews</div>
                  <div className="text-xl font-bold text-white">+12</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400">Replies</div>
                  <div className="text-xl font-bold text-white">Auto</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400">Growth</div>
                  <div className="text-xl font-bold text-green-400">18%</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 text-left italic">"Consistent replies this month helped improve the profile's trustworthiness, leading to more calls from Maps."</p>
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="py-12 bg-white/5 border-y border-white/5 text-center px-6">
          <p className="text-xl md:text-2xl font-light text-slate-200">
            Trusted by businesses across <span className="font-semibold text-white">India</span>. <br className="md:hidden" />
            <span className="text-neon-cyan font-medium">No upfront fees.</span> First consultation is free.
          </p>
        </section>

        {/* FORM SECTION */}
        <section id="leadForm" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side Text */}
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Improve Your Google <br /> Business Profile Today
              </h3>
              <p className="text-lg text-slate-400 mb-8">
                Get a quick audit of your Google Business Profile and discover simple improvements that can increase your visibility on Google Search and Maps.
              </p>

              <ul className="space-y-4 text-slate-300">
                {['Free Profile Audit', 'Competitor Overview', 'Practical Improvement Suggestions'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neon-blue/20 text-neon-blue text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Card */}
            <div className="glass-card p-8 md:p-10 rounded-3xl relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-purple/30 rounded-full blur-[50px] pointer-events-none"></div>

              <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free Consultation</h3>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" placeholder="Your Name" required className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all" />
                  <input name="phone" placeholder="Phone Number" required pattern="^[6-9]\d{9}$" title="Enter a valid 10-digit Indian mobile number" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all" />
                </div>

                <input name="email" type="email" placeholder="Email Address (Optional)" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="businessName" placeholder="Business Name" required className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all" />
                  <input name="city" placeholder="City" required className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-neon-blue to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
                >
                  {loading && (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {loading ? "Sending..." : "Get Free Consultation"}
                </button>
                <p className="text-center text-xs text-slate-500 mt-3">We respect your privacy. No spam.</p>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 bg-black py-10 px-6 text-center">
          <p className="text-slate-400 text-sm mb-2">
            &copy; {new Date().getFullYear()} DRM Service – Digital Reputation Management
          </p>
          <p className="text-slate-500 text-xs">
            Helping local businesses improve their Google Business Profile presence.
          </p>
        </footer>
      </div>

      {/* WHATSAPP FLOATING BTN */}
      <a
        href="https://wa.me/message/IICK6ZTJ5X5WH1"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all transform hover:-translate-y-1 font-semibold group"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        <span>Chat on WhatsApp</span>
      </a>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 z-40 bg-slate-900/80 border border-white/20 text-white p-3 rounded-full shadow-lg backdrop-blur-md hover:bg-neon-blue hover:border-transparent transition-all transform hover:-translate-y-1 group"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </div>
  );
}

export default App;
