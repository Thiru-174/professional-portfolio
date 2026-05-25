import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [nameScrambled, setNameScrambled] = useState("THIRUMALAIVASAN")

  // Leadership Counter Refs
  const countRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const fullName = "THIRUMALAIVASAN"
    let count = 0
    const interval = setInterval(() => {
      if (count > 12) {
        setNameScrambled(fullName)
        clearInterval(interval)
        return
      }
      let scrambled = ''
      for (let char of fullName) {
        scrambled += Math.random() > 0.6 
          ? String.fromCharCode(33 + Math.floor(Math.random() * 90)) 
          : char
      }
      setNameScrambled(scrambled)
      count++
    }, 100)
  }, [])

  // Alumni Counter Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            animateCounter()
            hasAnimated.current = true
          }
        })
      },
      { threshold: 0.6 }
    )

    const section = document.getElementById('leadership')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const animateCounter = () => {
    const element = countRef.current
    if (!element) return

    let count = 0
    const target = 500
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      count += increment
      if (count >= target) {
        count = target
        clearInterval(timer)
      }
      element.textContent = String(Math.floor(count)).padStart(3, '0')
    }, 16)
  }

  return (
    <div className="min-h-screen bg-[#041C18] text-[#F1FFF8] font-['Inter'] overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section id="hero" className="hero-bg min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm">
              Software Engineer • Enterprise Automation • Low-Code Developer
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-none font-bold tracking-tighter" 
                  style={{fontFamily: 'Space Grotesk'}}>
                {nameScrambled}
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-[#B7D4C7] mt-2">
                NEDUNCHEZHIAN
              </h2>
            </div>

            <p className="max-w-lg text-lg sm:text-xl text-[#B7D4C7]">
              Engineering scalable enterprise solutions through automation, integrations, and intelligent workflow systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" 
                 className="px-8 py-4 rounded-3xl bg-gradient-to-r from-[#22D3EE] to-[#3EB489] text-black font-semibold text-lg hover:scale-105 flex items-center gap-3">
                LET’S CONNECT <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Floating Visual - 3 Clean Cards with Smaller Images */}
          {/* Professional Floating Tech Stack */}
<div className="hidden md:flex justify-center items-center relative">
  <div className="relative w-[650px] h-[560px]">

    {/* Background Glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl"></div>
    </div>

    {/* Center Ring */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[320px] h-[320px] border border-white/10 rounded-full backdrop-blur-sm"></div>
    </div>

    {/* Card 1 */}
    <div className="absolute top-8 left-8 animate-float-slow">
      <div className="glass w-56 rounded-3xl p-6 border border-emerald-400/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:border-emerald-400/40 transition-all duration-500">
        
        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/tech/powerapps.png"
            alt="Power Platform"
            className="w-16 h-16 object-contain mb-4"
          />

          <h3 className="text-lg font-semibold text-white">
            Power Platform
          </h3>

          <p className="text-sm text-[#B7D4C7] mt-2">
            Apps • Automate • Dataverse
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="absolute top-10 right-4 animate-float-medium">
      <div className="glass w-56 rounded-3xl p-6 border border-cyan-400/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-500">

        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/tech/Sharepoint_logo.png"
            alt="SharePoint"
            className="w-16 h-16 object-contain mb-4"
          />

          <h3 className="text-lg font-semibold text-white">
            SharePoint
          </h3>

          <p className="text-sm text-cyan-300 mt-2">
            Sites • Pages • Lists
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float-fast">
      <div className="glass w-56 rounded-3xl p-6 border border-emerald-400/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:border-emerald-400/40 transition-all duration-500">

        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/tech/automate.png"
            alt="Workflows"
            className="w-16 h-16 object-contain mb-4"
          />

          <h3 className="text-lg font-semibold text-white">
            Workflows
          </h3>

          <p className="text-sm text-[#B7D4C7] mt-2">
            Automation & Integration
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-[#0B2E26]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <p className="text-[#22D3EE] text-sm tracking-widest">CHAPTER 01</p>
              <h2 className="text-6xl leading-none tracking-tighter mt-4" style={{fontFamily: 'Space Grotesk'}}>
                The Engineer Behind the Systems
              </h2>
            </div>
            <div className="md:col-span-7 space-y-8 text-lg text-[#B7D4C7]">
              <p>Software engineer focused on building scalable enterprise systems through workflow automation, platform integrations, and digital transformation solutions.</p>
              <p>Experienced in translating operational business requirements into structured applications and intelligent workflows across Microsoft ecosystems.</p>
              <p>Skilled across Power Platform engineering (Canvas &amp; Model Driven Apps), cloud ecosystems, enterprise collaboration systems, manual quality assurance, scalable integrations, and modern business application architecture.</p>
              <p>Experienced in functional validation, workflow testing, regression testing, and enterprise application quality verification across modern digital systems.</p>

              <div className="grid grid-cols-2 gap-4 pt-8">
                {[
                  "Enterprise Workflow Systems",
                  "Automation Engineering",
                  "Cross-Platform Integrations",
                  "Power Platform Applications",
                  "Enterprise QA & Workflow Validation"
                ].map((item, i) => (
                  <div key={i} className="glass p-6 rounded-3xl text-center hover:glow-cyan">
                    <p className="font-semibold text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL JOURNEY */}
      <section id="experience" className="py-28 bg-[#041C18]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#22D3EE] text-sm tracking-widest">CHAPTER 02</p>
          <h2 className="text-6xl tracking-tighter mt-2" style={{fontFamily: 'Space Grotesk'}}>Professional Journey</h2>

          <div className="mt-16 space-y-20">

            {/* GRADUATE SOFTWARE TRAINEE */}
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <p className="text-[#B7D4C7]">Aug 2025 — Present</p>
                <p className="text-3xl font-semibold mt-2">Graduate Software Trainee</p>
                <p className="text-[#22D3EE]">Psiog</p>
              </div>
              <div className="md:col-span-8">
                <div className="glass p-8 rounded-3xl">
                  <p className="text-[#B7D4C7] mb-6">Real-time enterprise system engineering with focus on Microsoft Power Platform, workflow automation, low-code development, and intelligent business solutions.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Power Apps (Canvas & Model Driven)", "Power Automate", "Dataverse", "SharePoint", "AI Builder", "Freshservice", "Power Pages", "Manual QA"].map(t => (
                      <span key={t} className="text-xs px-4 py-2 bg-white/5 rounded-3xl">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* STUDENT INTERN */}
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <p className="text-[#B7D4C7]">Feb 2025 — Aug 2025</p>
                <p className="text-3xl font-semibold mt-2">Student Intern</p>
                <p className="text-[#22D3EE]">Psiog</p>
              </div>
              <div className="md:col-span-8">
                <div className="glass p-8 rounded-3xl">
                  <p className="text-[#B7D4C7] mb-6">Built strong foundations in full-stack development, enterprise architecture, cloud technologies, and modern application development.</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Vite", "ASP.NET", "C#", "Python", "AWS", "Power BI", "SQL"].map(t => (
                      <span key={t} className="text-xs px-4 py-2 bg-white/5 rounded-3xl">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-28 bg-[#0B2E26]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#22D3EE] text-sm tracking-widest">CHAPTER 03</p>
          <h2 className="text-6xl tracking-tighter mt-2" style={{fontFamily: 'Space Grotesk'}}>Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "ArcGIS + Power Platform Integration",
                img: "/assets/tech/ArcGISS123PP.png"
              },
              {
                title: "Workflow Automation Systems",
                img: "/assets/tech/WorkflowAutomation.png"
              },
              {
                title: "Dynamic Date Picker Validation Component",
                img: "/assets/tech/DatePicker.png"
              },
              {
                title: "Freshservice + Power Platform + AI Ticket Categorization",
                img: "/assets/tech/fs_pp_ai.png"
              },
              {
                title: "SharePoint Migration & Collaboration Systems",
                img: "/assets/tech/SharepointSiteMigration.png"
              },
              {
                title: "Enterprise Workflow Testing & QA Validation",
                img: "/assets/tech/qa_logo.png"
              }
            ].map((project, i) => (
              <div 
                key={i} 
                className="glass rounded-3xl p-6 hover:glow-emerald group h-full overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-56 mb-6 rounded-2xl overflow-hidden border border-emerald-500/20 group-hover:border-emerald-400 transition-all">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <h3 className="text-xl font-semibold leading-tight text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY ARSENAL */}
      <section id="tech" className="py-28 bg-[#041C18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#22D3EE] text-sm tracking-widest">CHAPTER 04</p>
            <h2 className="text-6xl tracking-tighter mt-2" style={{fontFamily: 'Space Grotesk'}}>Technology Arsenal</h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              {name: "Power Apps", img: "powerapps.png"},
              {name: "Power Automate", img: "automate.png"},
              {name: "Dataverse", img: "dataverse.png"},
              {name: "SharePoint", img: "Sharepoint_logo.png"},
              {name: "AI Builder", img: "aibuilder.png"},
              {name: "Freshservice", img: "fs.svg"},
              {name: "Power Pages", img: "powerpages.svg"},
              {name: "Node", img: "node.png"},
              {name: "HTML", img: "html.png"},
              {name: "CSS", img: "css.png"},
              {name: "Javascript", img: "js.png"},
              {name: "React", img: "react.png"},
              {name: "Vite", img: "vite.png"},
              {name: "Visual Studio", img: "vs.png"},
              {name: "ASP.NET", img: "asp.net.png"},
              {name: "C#", img: "csharp.png"},
              {name: "Python", img: "python.jpeg"},
              {name: "AWS", img: "aws.png"},
              {name: "Power BI", img: "powerbi.png"},
              {name: "SSMS", img: "ssms.png"},
              {name: "Manual QA", img: "qa.avif"}
            ].map((tech, i) => (
              <div key={i} className="tech-card bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 flex flex-col items-center justify-center hover:glow-cyan group hover:bg-white/20 hover:border-[#3EB489]/50 transition-all">
                <img 
                  src={`/assets/tech/${tech.img}`} 
                  alt={tech.name} 
                  className="w-14 h-14 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform" 
                />
                <p className="font-medium text-center text-[#3EB489] text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP - Updated with Animated Counter */}
      <section id="leadership" className="py-28 bg-[#0B2E26]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#22D3EE] text-sm tracking-widest">CHAPTER 05</p>
          <h2 className="text-6xl tracking-tighter mt-2" style={{fontFamily: 'Space Grotesk'}}>
            Leadership &amp; Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* First Card */}
            <div className="glass p-8 rounded-3xl hover:border-emerald-400/30 border border-transparent transition-all group">
              <h3 className="text-3xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                President — Department Association
              </h3>
              <p className="mt-6 text-[#B7D4C7]">
                Electronics and Instrumentation Engineering, Kumaraguru College of Technology.
              </p>
            </div>

            {/* Second Card - Animated Counter */}
            <div className="glass p-8 rounded-3xl hover:border-emerald-400/30 border border-transparent transition-all group relative overflow-hidden">
              <h3 className="text-3xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                Building a Legacy
              </h3>
              
              <div className="mt-8 flex items-baseline gap-1">
                <span 
                  ref={countRef}
                  className="text-7xl font-bold tabular-nums text-emerald-400 tracking-tighter"
                >
                  000
                </span>
                <span className="text-4xl text-emerald-500/70 font-light">+</span>
              </div>
              
              <p className="mt-3 text-[#B7D4C7] text-lg">
                Members Alumni Community of EIE Dept.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[#041C18] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-semibold">Let’s Build Intelligent Enterprise Systems</h2>
              {/* CONTACT <p className="text-[#B7D4C7] mt-2">Open for collaboration and enterprise opportunities</p> */}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-lg">
              <a href="mailto:thirumalaivasan174@gmail.com" className="flex items-center gap-3 hover:text-[#22D3EE]">
                <i className="fa-solid fa-envelope"></i>
                <span>thirumalaivasan174@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/thirumalaivasan-nedunchezhian-157589225" target="_blank" className="flex items-center gap-3 hover:text-[#22D3EE]">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Thiru-174" target="_blank" className="flex items-center gap-3 hover:text-[#22D3EE]">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-[#B7D4C7] text-sm">
        Designed &amp; Engineered by Thirumalaivasan Nedunchezhian © 2026
      </footer>
    </div>
  )
}

export default App
