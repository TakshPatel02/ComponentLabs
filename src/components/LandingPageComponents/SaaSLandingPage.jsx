import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const F = ({ children, className = "", delay = 0 }) => {
  const r = useRef(null);
  const v = useInView(r, { once: true, margin: "-60px" });
  return (<motion.div ref={r} initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>{children}</motion.div>);
};

const b = "border-[#e5e5e5]/60";
const bg = "#f9f9ff";
const tx = "#191b23";
const mt = "#727785";
const ac = "#0058be";

const SaaSLandingPage = () => (
  <div className="min-h-screen antialiased" style={{ background: `radial-gradient(ellipse 80% 50% at 50% -20%,rgba(99,102,241,0.06),transparent),radial-gradient(ellipse 50% 50% at 80% 60%,rgba(173,198,255,0.08),transparent),${bg}`, color: tx, fontFamily: "'Inter','Geist',system-ui,sans-serif" }}>
    {/* Subtle dots */}
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle,#cbd5e1 0.5px,transparent 0.5px)", backgroundSize: "28px 28px" }} />

    {/* Nav */}
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b ${b}`} style={{ backgroundColor: `${bg}dd` }}>
      <div className="flex justify-between items-center h-16 px-10 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: ac }}>category</span><span className="font-bold text-lg" style={{ fontFamily: "'Space Grotesk'" }}>ComponentLabs</span></div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: mt }}>{["Product", "Solutions", "Pricing", "Company"].map(t => <a key={t} href="#" className="hover:opacity-70 transition-opacity">{t}</a>)}</div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" style={{ color: mt }}>Login</a>
          <a href="#" className="text-white px-4 py-2 rounded-lg" style={{ backgroundColor: "#2e3038" }}>Get Started</a>
        </div>
      </div>
    </motion.nav>

    <main className="relative z-10 pt-32">
      {/* Hero - Centered */}
      <section className={`max-w-[1280px] mx-auto px-10 text-center flex flex-col items-center py-16 border-b ${b}`}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: mt, fontFamily: "'Space Grotesk'" }}>INVOICING</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-[64px] leading-[1.1] font-bold tracking-tight max-w-[896px] mb-6" style={{ fontFamily: "'Space Grotesk'" }}>Invoicing. Enterprise<br />Efficiency. Real Impact.</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-xl max-w-[672px] mb-8" style={{ color: mt }}>Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col items-center gap-3 mb-16">
          <button className="text-white py-3 px-6 rounded-lg font-medium shadow-lg" style={{ backgroundColor: "#2e3038" }}>Start Testing for free</button>
          <span className="text-sm" style={{ color: mt }}>No credit card required!</span>
        </motion.div>
        {/* Dashboard Card */}
        <F delay={0.3} className="w-full max-w-[1024px]">
          <div className={`bg-white border ${b} rounded-2xl shadow-xl overflow-hidden text-left relative`}>
            <div className={`p-6 border-b ${b}`}><h3 className="text-lg font-medium mb-1" style={{ fontFamily: "'Space Grotesk'" }}>Customers</h3><p className="text-sm" style={{ color: mt }}>New users by First user primary channel group</p></div>
            <div className="overflow-x-auto pb-14">
              <table className="w-full text-left text-sm">
                <thead><tr className={`border-b ${b}`} style={{ color: mt }}>{["Customer", "Date", "Revenue", "ARR", "MRR", "Next Billing"].map(h => <th key={h} className="px-6 py-4 font-medium">{h}</th>)}</tr></thead>
                <tbody>
                  {[{ n: "Vercel", i: "change_history", d: "10/31/2023", r: "$4,356,625.99", a: "$13,600", m: "$1,360", x: "11/30/2027" }, { n: "Linear", i: "blur_on", c: "text-blue-500", d: "03/15/2024", r: "$892,450.00", a: "$29,400", m: "$2,450", x: "03/15/2025" }, { n: "Slack", i: "tag", c: "text-green-500", d: "07/22/2023", r: "$1,245,890.50", a: "$38,400", m: "$3,200", x: "07/22/2026" }, { n: "Twilio", i: "forum", c: "text-red-500", d: "01/08/2024", r: "$567,320.75", a: "$10,680", m: "$890", x: "01/08/2025", f: true }].map((row, i) => (
                    <tr key={i} className={`border-b ${b} hover:bg-gray-50/50 transition-colors ${row.f ? "opacity-50" : ""}`}>
                      <td className="px-6 py-4 flex items-center gap-2 font-medium"><span className={`material-symbols-outlined text-[16px] ${row.c || ""}`}>{row.i}</span>{row.n}</td>
                      <td className="px-6 py-4" style={{ color: mt }}>{row.d}</td><td className="px-6 py-4" style={{ color: mt }}>{row.r}</td><td className="px-6 py-4" style={{ color: mt }}>{row.a}</td><td className="px-6 py-4" style={{ color: mt }}>{row.m}</td><td className="px-6 py-4" style={{ color: mt }}>{row.x}</td>
                    </tr>))}
                </tbody>
              </table>
            </div>
            <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white border ${b} rounded-full py-2 px-4 shadow-md flex items-center gap-2 text-sm`}>
              <span className="material-symbols-outlined text-[16px]" style={{ color: ac }}>smart_toy</span>Total revenue of <span className="font-medium">$8,197,422.92</span> and...<span className="material-symbols-outlined text-[16px]" style={{ color: mt }}>arrow_upward</span>
            </div>
          </div>
        </F>
      </section>

      {/* Social Proof */}
      <F className={`max-w-[1280px] mx-auto px-10 text-center py-24 border-b ${b}`}>
        <p className="text-xl mb-12 max-w-[672px] mx-auto" style={{ color: mt }}>ComponentLabs is trusted by leading teams from Generative AI Companies, <span className="font-medium" style={{ color: ac }}>Hosting Providers</span>, Payments Providers</p>
        <div className={`grid grid-cols-2 md:grid-cols-4 border-y ${b}`}>
          {[{ i: "bolt", t: "supabase" }, { i: "wifi", t: "CISCO" }, { t: "hulu", s: true }, { i: "change_history", t: "Vercel" }].map((l, i) => (
            <div key={i} className={`py-10 flex justify-center items-center ${i < 3 ? `border-r ${b}` : ""}`}>
              <span className={`font-bold text-[28px] flex items-center gap-2 ${l.s ? "text-[#1ce783] tracking-tighter text-[32px]" : ""}`} style={{ fontFamily: "'Space Grotesk'" }}>{l.i && <span className="material-symbols-outlined text-3xl">{l.i}</span>}{l.t}</span>
            </div>))}
        </div>
      </F>

      {/* Features 2-col */}
      <section className={`max-w-[1280px] mx-auto px-10 border-b ${b}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* AI Autocomplete */}
          <F className={`p-16 border-r ${b} flex flex-col gap-8`} style={{ backgroundColor: `${bg}88` }}>
            <div><div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium mb-4" style={{ color: mt }}><span className="material-symbols-outlined text-[16px]">smart_toy</span>AI Autocomplete</div>
              <h3 className="text-[32px] leading-[1.2] font-medium mb-2" style={{ fontFamily: "'Space Grotesk'" }}>Get intelligent suggestions as you type.</h3>
              <p style={{ color: mt }}>Context-aware completions that understand your intent.</p></div>
            <div className={`mt-auto bg-white border ${b} rounded-xl p-6 shadow-sm`}>
              <div className={`flex items-center gap-2 mb-4 border ${b} rounded-lg px-4 py-2`} style={{ color: mt }}>How do I implement <span className="w-1px h-4 animate-pulse ml-1 inline-block" style={{ backgroundColor: ac }} /></div>
              <div className={`border ${b} rounded-lg overflow-hidden`}>
                <div className={`px-4 py-2 flex items-center gap-2 font-medium text-sm border-b ${b}`} style={{ color: ac, backgroundColor: "rgba(0,88,190,0.05)" }}><span className="material-symbols-outlined text-[16px]">temp_preferences_custom</span>AI Suggestions</div>
                <div className="p-2 flex flex-col gap-1">
                  <div className="px-2 py-1.5 rounded bg-gray-50 flex justify-between items-center text-sm">...authentication with OAuth 2.0?<span className={`text-xs border ${b} px-1.5 rounded`} style={{ color: mt }}>⇥ Tab</span></div>
                  <div className="px-2 py-1.5 rounded hover:bg-gray-50 text-sm cursor-pointer" style={{ color: mt }}>...a dark mode toggle in React?</div>
                  <div className="px-2 py-1.5 rounded hover:bg-gray-50 text-sm cursor-pointer" style={{ color: mt }}>...caching for API responses?</div>
                </div>
              </div>
            </div>
          </F>
          {/* Contextual Mentions */}
          <F className="p-16 flex flex-col gap-8" delay={0.15} style={{ backgroundColor: `${bg}88` }}>
            <div><div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium mb-4" style={{ color: mt }}><span className="material-symbols-outlined text-[16px]">alternate_email</span>Contextual Mentions</div>
              <h3 className="text-[32px] leading-[1.2] font-medium mb-2" style={{ fontFamily: "'Space Grotesk'" }}>Reference any file with a simple @mention.</h3>
              <p style={{ color: mt }}>Pull in context from all documents instantly.</p></div>
            <div className={`mt-auto bg-white border ${b} rounded-xl p-6 shadow-sm`}>
              <div className={`border ${b} rounded-lg p-4 text-sm mb-4`} style={{ color: mt }}>Welcome to our platform.<br />Send <span className="px-1 rounded" style={{ backgroundColor: "rgba(0,88,190,0.1)", color: ac }}>@</span><span className="w-px h-4 inline-block align-middle ml-px animate-pulse" style={{ backgroundColor: ac }} /></div>
              <div className={`border ${b} rounded-lg overflow-hidden bg-white shadow-sm`}>
                {[{ i: "draw", c: "text-pink-500", f: "design-system.fig" }, { i: "table_chart", c: "text-green-600", f: "april-report.xlsx" }, { i: "description", c: "text-blue-600", f: "annual-summary.docx" }, { i: "table_chart", c: "text-green-600", f: "budget-2024.xlsx" }].map((f, i) => (
                  <div key={i} className={`px-3 py-2 flex items-center gap-2 text-sm ${i < 3 ? `border-b ${b}` : ""} hover:bg-gray-50 cursor-pointer`} style={{ color: i === 0 ? tx : mt, fontWeight: i === 0 ? 500 : 400 }}><span className={`material-symbols-outlined text-[16px] ${f.c}`}>{f.i}</span>{f.f}</div>))}
              </div>
            </div>
          </F>
        </div>
      </section>

      {/* Pipeline */}
      <section className={`max-w-[1280px] mx-auto px-10 border-b ${b} flex flex-col md:flex-row`}>
        <F className={`w-full md:w-1/2 p-16 md:sticky top-16 h-max`}>
          <h2 className="text-[48px] leading-[1.1] font-bold mb-6" style={{ fontFamily: "'Space Grotesk'" }}>Set up your<br />pipeline in minutes</h2>
          <p className="text-xl max-w-[448px]" style={{ color: mt }}>Get started in minutes. Set up your workspace and invite team members.</p>
        </F>
        <div className={`w-full md:w-1/2 border-l ${b} flex flex-col`}>
          {[{ s: "01. Launch", h: "Get started in minutes.", d: "Set up your workspace and invite team members." }, { s: "02. Analyze", h: "Gain actionable insights.", d: "Our AI-powered analytics engine processes your data." }, { s: "03. Plan", h: "Execute with precision.", d: "Transform insights into strategic action plans." }].map((step, i) => (
            <F key={i} delay={i * 0.1} className={`p-16 ${i < 2 ? `border-b ${b}` : ""}`}>
              <div className="text-xs tracking-[0.15em] uppercase font-medium mb-4" style={{ color: mt }}>{step.s}</div>
              <h3 className="text-[32px] leading-[1.2] mb-2" style={{ fontFamily: "'Space Grotesk'" }}><span className="font-medium">{step.h}</span> <span style={{ color: mt }}>{step.d}</span></h3>
            </F>))}
        </div>
      </section>

      {/* Testimonial */}
      <F className={`max-w-[1280px] mx-auto px-10 py-32 border-b ${b}`}>
        <div className="flex items-center gap-2 mb-8 text-[#1ed760] font-bold text-xl"><span className="material-symbols-outlined text-[32px]">album</span>Spotify</div>
        <blockquote className="text-[40px] leading-tight font-medium mb-12 max-w-[896px]" style={{ fontFamily: "'Space Grotesk'" }}>"Using ComponentLabs has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility."</blockquote>
        <div className="flex items-center gap-4"><div className={`w-12 h-12 bg-gray-200 rounded-full border ${b}`} /><div><div className="font-medium">Meschac Irung</div><div className="text-sm" style={{ color: mt }}>Creator of ComponentLabs</div></div></div>
      </F>

      {/* Ship with Confidence */}
      <section className={`max-w-[1280px] mx-auto px-10 border-b ${b}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <F className={`p-16 border-r ${b} flex flex-col justify-center min-w-0`}>
            <h2 className="text-[40px] leading-[1.1] font-bold mb-6" style={{ fontFamily: "'Space Grotesk'" }}>Ship with<br />confidence using<br />our unified platform</h2>
            <p className="mb-12" style={{ color: mt }}>Streamline your workflow with tools designed to enhance productivity at every step.</p>
            <button className={`border ${b} font-medium px-6 py-2 rounded-lg w-max hover:bg-gray-50 transition-colors mb-16`}>Learn more</button>
            <div className="flex flex-col gap-6 w-full">
              {[{ i: "smart_toy", t: "AI Models", d: "Switch between GPT, Claude, and Gemini.", active: true }, { i: "public", t: "Global Reach" }, { i: "psychology", t: "Smart Agent" }].map((f, i) => (
                <div key={i} className={i < 2 ? `border-b ${b} pb-6` : ""}>
                  <div className={`flex items-center gap-2 font-medium ${f.active ? "" : "opacity-60"}`}><span className="material-symbols-outlined text-[20px]">{f.i}</span>{f.t}</div>
                  {f.d && <p className="text-sm pl-7 mt-2" style={{ color: mt }}>{f.d}</p>}
                </div>))}
            </div>
          </F>
          <F delay={0.15} className="relative bg-gray-100/50 min-h-[600px] flex items-center justify-center p-8">
            <div className={`bg-white border ${b} rounded-xl shadow-xl w-full max-w-[448px] p-6`}>
              <div className="text-xs mb-1" style={{ color: mt }}>Today 09:15 AM</div>
              <h3 className="font-medium text-lg mb-4">Marketing Website Launch</h3>
              <div className={`flex gap-6 border-b ${b} mb-6 text-sm`}>
                <div className="pb-2 border-b-2 font-medium flex items-center gap-1" style={{ borderColor: ac }}><span className="material-symbols-outlined text-[16px]">notes</span>Summary</div>
                <div className="pb-2 flex items-center gap-1 cursor-pointer" style={{ color: mt }}><span className="material-symbols-outlined text-[16px]">receipt_long</span>Transcript</div>
              </div>
              <p className="text-sm mb-4" style={{ color: mt }}>Key decisions from today's marketing sync:</p>
              <ul className="space-y-3 text-sm mb-4">
                {[{ b: "Launch date confirmed:", t: "Monday, March 18th at 9 AM EST" }, { b: "Hero section:", t: "New animated product showcase" }, { b: "SEO improvements:", t: "Meta tags updated, Core Web Vitals optimized" }].map((item, i) => (
                  <li key={i} className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: mt }} /><span style={{ color: mt }}><strong className="font-medium" style={{ color: tx }}>{item.b}</strong> {item.t}</span></li>))}
              </ul>
            </div>
          </F>
        </div>
        {/* Trust Badges & Mini Testimonial */}
        <div className={`grid grid-cols-1 md:grid-cols-2 border-t ${b}`}>
          <div className={`p-16 border-r ${b} flex flex-col justify-center gap-4 bg-white/50`}>
            <div className="flex items-center gap-3 font-medium text-sm"><span className="material-symbols-outlined text-[18px]" style={{ color: mt }}>verified_user</span>SOC 2</div>
            <div className="flex items-center gap-3 font-medium text-sm"><span className="material-symbols-outlined text-[18px]" style={{ color: mt }}>security</span>ISO 27001</div>
            <div className="flex items-center gap-3 font-medium text-sm"><span className="material-symbols-outlined text-[18px]" style={{ color: mt }}>policy</span>GDPR</div>
            <div className="flex items-center gap-3 font-medium text-sm"><span className="material-symbols-outlined text-[18px]" style={{ color: mt }}>hourglass_empty</span>99.9% <span className="font-normal" style={{ color: mt }}>uptime</span></div>
          </div>
          <div className={`p-16 flex flex-col justify-center bg-white/50`}>
            <p className="text-xl font-medium mb-6">"Looks really good. Did you design in code or Figma first?"</p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gray-200 rounded-full border ${b}`} />
              <div>
                <div className="font-medium text-sm">Shadcn</div>
                <div className="text-xs" style={{ color: mt }}>Creator of Shadcn/UI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Task Management */}
      <F className={`max-w-[1280px] mx-auto px-10 py-24 text-center border-b ${b}`}>
        <h2 className="text-[48px] leading-[1.1] font-bold mb-4" style={{ fontFamily: "'Space Grotesk'" }}>Quick Task Management</h2>
        <p className="text-base max-w-[512px] mx-auto" style={{ color: mt }}>Capture tasks on the fly and track progress effortlessly. Stay organized with lightweight notes and checklists built for speed.</p>
      </F>

      {/* Feature Grid: Notes & Tasks */}
      <section className={`max-w-[1280px] mx-auto px-10 border-b ${b}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <F className={`p-16 border-r ${b} bg-white/50`}>
            <div className={`w-12 h-12 bg-white border ${b} rounded-full flex items-center justify-center mb-8 shadow-sm`}>
              <span className="material-symbols-outlined" style={{ color: mt }}>assignment</span>
            </div>
            <h3 className="text-[32px] leading-[1.2] font-medium mb-4" style={{ fontFamily: "'Space Grotesk'" }}>Notes &amp; Tasks</h3>
            <p className="mb-8 max-w-[448px]" style={{ color: mt }}>Jot down quick tasks and check them off as you go — a simple, distraction-free way to stay on top of your daily workflow.</p>
            <ul className="space-y-4 text-sm" style={{ color: mt }}>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px] text-green-500">check</span> Interactive Task Checklists</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px] text-green-500">check</span> Real-Time Progress Tracking</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px] text-green-500">check</span> Instant Status Updates</li>
            </ul>
          </F>
          <F delay={0.15} className="p-16 flex items-center justify-center" style={{ backgroundColor: `${bg}88` }}>
            <div className="w-72 bg-[#fff9c4] rounded-lg shadow-md p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-between items-center mb-4 text-[#8d6e63]">
                <span className="font-medium text-sm">Quick Tasks</span>
                <span className="text-xs">3/5</span>
              </div>
              <div className="space-y-3 text-sm text-[#5d4037]">
                <div className="flex items-center gap-2 opacity-60 line-through"><span className="material-symbols-outlined text-[18px] text-green-600">check_box</span> Review pull requests</div>
                <div className="flex items-center gap-2 opacity-60 line-through"><span className="material-symbols-outlined text-[18px] text-green-600">check_box</span> Update documentation</div>
                <div className="flex items-center gap-2 opacity-60 line-through"><span className="material-symbols-outlined text-[18px] text-green-600">check_box</span> Deploy to staging</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-[#8d6e63]">check_box_outline_blank</span> Write unit tests</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-[#8d6e63]">check_box_outline_blank</span> Send weekly report</div>
              </div>
            </div>
          </F>
        </div>
      </section>

      {/* 3-Column Features */}
      <section className={`max-w-[1280px] mx-auto px-10 border-b ${b}`}>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <F className={`p-12 border-r ${b} bg-white/50`}>
            <span className="material-symbols-outlined mb-4">format_list_bulleted</span>
            <h4 className="font-medium mb-2">Smart Checklists</h4>
            <p className="text-sm" style={{ color: mt }}>Create dynamic task lists that update progress automaticall...</p>
          </F>
          <F delay={0.1} className={`p-12 border-r ${b} bg-white/50`}>
            <span className="material-symbols-outlined mb-4">timer</span>
            <h4 className="font-medium mb-2">Due Date Tracking</h4>
            <p className="text-sm" style={{ color: mt }}>Set deadlines and get timely reminders so nothing slips...</p>
          </F>
          <F delay={0.2} className="p-12 bg-white/50">
            <span className="material-symbols-outlined mb-4">sync</span>
            <h4 className="font-medium mb-2">Recurring Tasks</h4>
            <p className="text-sm" style={{ color: mt }}>Automate repetitive workflows with tasks that reset on your...</p>
          </F>
        </div>
      </section>

      {/* Testimonials */}
      <F className={`max-w-[1280px] mx-auto px-10 py-24 text-center border-b ${b}`} style={{ backgroundColor: `${bg}88` }}>
        <h2 className="text-[48px] leading-[1.1] font-bold mb-6" style={{ fontFamily: "'Space Grotesk'" }}>What our customers are<br />saying about ComponentLabs</h2>
        <p className="text-base max-w-[576px] mx-auto" style={{ color: mt }}>Join the increasing number of customers and advocates who rely on ComponentLabs for seamless and effective user A/B testing.</p>
      </F>
      <section className={`max-w-[1280px] mx-auto px-10 py-16 border-b ${b}`}>
        {/* Prime Video Large Testimonial */}
        <F className={`border ${b} rounded-2xl overflow-hidden mb-8 bg-white relative`}>
          <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, rgba(216, 226, 255, 0.4) 0%, rgba(225, 224, 255, 0.4) 50%, rgba(255, 218, 214, 0.4) 100%)" }}></div>
          <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-2 font-bold text-xl text-blue-500 mb-8">prime video</div>
              <h3 className="text-3xl md:text-[40px] leading-tight mb-6" style={{ color: tx, fontFamily: "'Space Grotesk'" }}>Prime implemented our streaming optimization suite to <span className="font-medium" style={{ color: tx }}>reduce buffering by 62% during peak viewing hours.</span></h3>
              <button className={`border ${b} bg-white/50 backdrop-blur-sm text-sm font-medium px-4 py-2 rounded-lg hover:bg-white transition-colors mb-12`}>Read Case Study</button>
              <blockquote className="text-lg md:text-xl font-medium max-w-2xl" style={{ color: mt }}>"Using ComponentLabs has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly."</blockquote>
            </div>
          </div>
          <div className={`relative z-10 p-6 border-t ${b} bg-white/80 backdrop-blur-sm flex items-center gap-4`}>
            <div className={`w-10 h-10 bg-gray-200 rounded-full border ${b}`} />
            <div>
              <div className="font-medium text-sm">Shadcn</div>
              <div className="text-xs" style={{ color: mt }}>Design Engineer</div>
            </div>
          </div>
        </F>
        {/* Two Column Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <F delay={0.1} className={`border ${b} rounded-2xl bg-white flex flex-col h-full`}>
            <div className="p-8 md:p-12 grow">
              <blockquote className="text-lg font-medium leading-relaxed">"ComponentLabs has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences."</blockquote>
            </div>
            <div className={`p-6 border-t ${b} flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gray-200 rounded-full border ${b}`} />
                <div>
                  <div className="font-medium text-sm">Meschac Irung</div>
                  <div className="text-xs" style={{ color: mt }}>Backend Engineer</div>
                </div>
              </div>
              <span className="font-bold text-xl tracking-tighter text-[#1ce783]" style={{ fontFamily: "'Space Grotesk'" }}>hulu</span>
            </div>
          </F>
          <F delay={0.2} className={`border ${b} rounded-2xl bg-white flex flex-col h-full`}>
            <div className="p-8 md:p-12 grow">
              <blockquote className="text-lg font-medium leading-relaxed">"Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences."</blockquote>
            </div>
            <div className={`p-6 border-t ${b} flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-yellow-200 rounded-full border ${b} flex items-center justify-center text-xl`}>🙂</div>
                <div>
                  <div className="font-medium text-sm">Theo Balick</div>
                  <div className="text-xs" style={{ color: mt }}>Backend Engineer</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-[24px]">change_history</span>
            </div>
          </F>
        </div>
      </section>

      {/* CTA */}
      <F className={`max-w-[1280px] mx-auto px-10 py-32 text-center border-b ${b}`}>
        <h2 className="text-[56px] leading-[1.1] font-bold mb-6" style={{ fontFamily: "'Space Grotesk'" }}>Create, Sell and Grow</h2>
        <p className="text-lg max-w-[576px] mx-auto mb-10" style={{ color: mt }}>Join a community of over 1000+ companies who have already discovered the power of ComponentLabs.</p>
        <button className="text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#2e3038" }}>Start Testing for free</button>
      </F>
    </main>

    {/* Footer */}
    <footer className="py-16" style={{ backgroundColor: "white" }}>
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 px-10 max-w-[1280px] mx-auto border-b ${b} pb-16 mb-8`}>
        <div className="flex flex-col gap-4"><div className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: ac }}>category</span><span className="font-bold text-lg" style={{ fontFamily: "'Space Grotesk'" }}>ComponentLabs</span></div><p className="text-sm" style={{ color: mt }}>A platform for building AI-powered applications.</p></div>
        {[{ t: "Product", l: ["Features", "Solution", "Partnerships"] }, { t: "Company", l: ["About", "Licence", "Privacy"] }, { t: "Community", l: ["Twitter", "LinkedIn"] }].map(c => (
          <div key={c.t} className="flex flex-col gap-3 text-sm"><span className="font-medium mb-2">{c.t}</span>{c.l.map(l => <a key={l} href="#" className="hover:opacity-70 transition-opacity" style={{ color: mt }}>{l}</a>)}</div>))}
      </div>
      <div className="px-10 max-w-[1280px] mx-auto flex justify-between items-center">
        <p className="text-sm" style={{ color: mt }}>© 2026 ComponentLabs, All rights reserved</p>
        <div className={`flex items-center gap-2 border ${b} rounded-full px-4 py-2 bg-white`}><div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" /><span className="text-sm" style={{ color: mt }}>All Systems Normal</span></div>
      </div>
    </footer>
  </div>
);

export default SaaSLandingPage;
