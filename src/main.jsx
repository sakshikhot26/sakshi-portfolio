import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight,Download,ExternalLink,Mail,MapPin,Phone,Menu,X,Code2,Database,Server,BriefcaseBusiness,GraduationCap,CheckCircle2} from 'lucide-react';
import photo from './assets/sakshi.jpg';
import './styles.css';

// Add your real Doctor Appointment frontend/backend URLs here.
const APPOINTMENT_FRONTEND_URL = 'https://github.com/sakshikhot26/React-Mongo';
const APPOINTMENT_BACKEND_URL = 'https://github.com/sakshikhot26/MongoDB-Backend';
const AI_CHATBOT_GITHUB = 'https://github.com/sakshikhot26/mern-ai_chatbot.git';

const skills=[
 ['Frontend',['HTML','CSS','JavaScript','React.js','Bootstrap'],Code2],
 ['Backend',['Node.js','Express.js','REST APIs','JWT Authentication','CRUD'],Server],
 ['Database',['MongoDB','MySQL','PostgreSQL'],Database],
 ['Tools',['GitHub','Postman','VS Code','MongoDB Compass'],Code2]
];

function ProjectLinks({frontend,backend,github}){
 return <div className="project-links">
   {frontend && <a href={frontend} target="_blank" rel="noreferrer" className={frontend==='#'?'disabled':''}><ExternalLink size={15}/> Frontend</a>}
   {backend && <a href={backend} target="_blank" rel="noreferrer" className={backend==='#'?'disabled':''}><Server size={15}/> Backend</a>}
   {github && <a href={github} target="_blank" rel="noreferrer"><span className="gh-icon">GH</span> GitHub</a>}
 </div>
}

function App(){
 const [menu,setMenu]=useState(false);
 const close=()=>setMenu(false);
 return <div className="page">
  <header className="navbar">
   <a href="#home" className="logo" onClick={close}>Sakshi <span>Khot</span></a>
   <button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
   <nav className={menu?'nav open':'nav'}>{['Home','About','Skills','Experience','Projects','Education','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={close}>{x}</a>)}<a className="resume" href="/Sakshi_Khot_Resume.pdf" download><Download size={15}/> Resume</a></nav>
  </header>

  <main>
   <section id="home" className="hero wrap">
    <div className="hero-text">
      <p className="kicker">FULL STACK DEVELOPER · MERN STACK</p>
      <h1>Hi, I'm <span>Sakshi Khot.</span></h1>
      <h2>I build clean, scalable web applications.</h2>
      <p className="intro">MERN Stack Developer with hands-on experience in React.js, Node.js, Express.js, MongoDB, REST APIs, JWT authentication and CRUD operations.</p>
      <div className="actions"><a className="primary" href="#projects">View Projects <ArrowRight size={17}/></a><a className="outline" href="#contact">Contact Me <Mail size={17}/></a></div>
      <div className="hero-social"><a href="https://github.com/sakshikhot26" target="_blank" rel="noreferrer"><span className="gh-icon">GH</span> GitHub</a><a href="https://www.linkedin.com/in/sakshi-khot-31441b317" target="_blank" rel="noreferrer"><span className="li-icon">in</span> LinkedIn</a></div>
    </div>
    <div className="photo-wrap"><div className="photo-card"><img src={photo} alt="Sakshi Khot"/></div><div className="photo-tag">MERN Stack<br/><small>Developer</small></div></div>
   </section>

   <section id="about" className="section wrap two-col"><div className="label">01 / ABOUT</div><div><h2 className="title">A focused developer with a <span>practical mindset.</span></h2><p className="body">I am a Computer Science graduate and Full Stack Developer who enjoys building responsive, user-friendly applications. I like solving real-world problems, writing clean code and learning modern technologies.</p><div className="info-grid"><div><MapPin/><b>Location</b><span>Pune, Maharashtra, India</span></div><div><Mail/><b>Email</b><span>khotsakshi70@gmail.com</span></div><div><Phone/><b>Phone</b><span>+91 8767112437</span></div></div></div></section>

   <section id="skills" className="section wrap"><div className="label">02 / SKILLS</div><h2 className="title">Technical <span>skills.</span></h2><div className="skill-grid">{skills.map(([name,items,Icon])=><div className="skill-card" key={name}><div className="skill-icon"><Icon/></div><h3>{name}</h3><div className="chips">{items.map(i=><span key={i}>{i}</span>)}</div></div>)}</div></section>

   <section id="experience" className="section wrap"><div className="label">03 / EXPERIENCE</div><h2 className="title">Professional <span>experience.</span></h2><article className="experience"><div className="exp-head"><div><p className="muted">Aug 2025 — Jan 2026 · Pune</p><h3>Full Stack Developer Intern</h3><strong>ScaleFull Technologies LLP</strong></div><BriefcaseBusiness className="accent"/></div><div className="exp-list"><ul><li>Developed and maintained full-stack MERN applications for business workflows.</li><li>Built responsive and user-friendly interfaces using React.js and Bootstrap.</li><li>Designed and implemented RESTful APIs for data handling.</li></ul><ul><li>Integrated JWT-based authentication and role-based authorization.</li><li>Performed CRUD operations and optimized MongoDB data handling.</li><li>Used Git for version control and Postman for API testing.</li></ul></div></article></section>

   <section id="projects" className="section wrap"><div className="label">04 / PROJECTS</div><div className="section-top"><h2 className="title">Featured <span>projects.</span></h2><a href="https://github.com/sakshikhot26" target="_blank" rel="noreferrer">View GitHub <ArrowRight size={16}/></a></div><div className="projects">
    <article className="project"><div className="project-top"><span>01</span><div className="project-mark"><Code2/></div></div><h3>Doctor Appointment System</h3><p>A full-stack appointment platform for booking and managing doctor appointments with authentication, scheduling and role-based access.</p><div className="chips"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div><ProjectLinks frontend={APPOINTMENT_FRONTEND_URL} backend={APPOINTMENT_BACKEND_URL}/><p className="hint">Add your actual Frontend and Backend deployment links in <b>main.jsx</b>.</p></article>
    <article className="project"><div className="project-top"><span>02</span><div className="project-mark"><Sparkle/></div></div><h3>MERN AI Chatbot</h3><p>An AI chatbot project built with a MERN-style frontend/backend architecture and AI API integration, created to explore practical AI features in web applications.</p><div className="chips"><span>React.js</span><span>Node.js</span><span>PostgreSQL</span><span>Gemini API</span></div><ProjectLinks github={AI_CHATBOT_GITHUB}/></article>
   </div></section>

   <section id="education" className="section wrap two-col"><div className="label">05 / EDUCATION</div><div className="education"><GraduationCap/><div><p className="muted">2022 — 2025</p><h3>Bachelor of Science (Computer Science)</h3><p>K.R.P. K.M.I. College, Islampur</p><strong>CGPA: 8.31</strong></div></div></section>

   <section className="section wrap two-col"><div className="label">06 / CERTIFICATIONS</div><div className="certs"><p><CheckCircle2/> 30 Days Daily Programming Challenge</p><p><CheckCircle2/> Solved 30+ Data Structures and Algorithm Problems</p></div></section>

   <section id="contact" className="contact wrap"><div><p className="kicker">GET IN TOUCH</p><h2>Let's build something <span>useful.</span></h2><p>Open to full-time opportunities, internships and projects where I can contribute and continue growing as a developer.</p></div><div className="contact-actions"><a href="mailto:khotsakshi70@gmail.com" className="primary"><Mail/> Email Me</a><div><a href="https://www.linkedin.com/in/sakshi-khot-31441b317" target="_blank" rel="noreferrer"><span className="li-icon">in</span></a><a href="https://github.com/sakshikhot26" target="_blank" rel="noreferrer"><span className="gh-icon">GH</span></a><a href="tel:+918767112437"><Phone/></a></div></div></section>
  </main>
  <footer className="wrap"><span>© 2026 Sakshi Khot. All rights reserved.</span><span>React.js · Node.js · MongoDB</span></footer>
 </div>
}
function Sparkle(){return <span className="sparkle">✦</span>}
createRoot(document.getElementById('root')).render(<App/>);
