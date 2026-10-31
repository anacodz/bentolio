import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, FileSearch, Eye, BrainCircuit, Layers3, Mic, Workflow, BarChart3, FileText, Activity, ShieldCheck } from 'lucide-react';

const projects = [
  { n: '01', title: 'DocuQuery', type: 'MULTILINGUAL RAG · ENTERPRISE AI', desc: 'A multilingual document assistant that searches and synthesises information across PDFs using semantic retrieval and context-grounded Gemini responses.', tags: ['Python', 'LangChain', 'FAISS', 'Gemini'], icon: FileSearch, href: 'https://github.com/anacodz/docuquery' },
  { n: '02', title: 'Chayan', type: 'VOICE AI · RECRUITMENT', desc: 'A voice-first AI screening platform for tutor recruitment, combining multilingual speech transcription, rubric-based evaluation and recruiter-ready reports.', tags: ['Sarvam AI', 'Whisper', 'Gemini', 'Next.js'], icon: Mic, href: 'https://github.com/anacodz/chayan' },
  { n: '03', title: 'FLUX', type: 'SECURE FILE TRANSFER', desc: 'A lightweight, cross-platform Python utility for secure file transfers, with an emphasis on data integrity, encryption, compression and modular design.', tags: ['Python', 'Security', 'File Systems'], icon: Workflow, href: 'https://github.com/anacodz/FLUX' },
  { n: '04', title: 'Healthcare Infrastructure Analytics', type: 'HEALTHCARE · PREDICTIVE ANALYTICS', desc: 'An analytics project exploring COVID-19 indicators and healthcare capacity data, including a ventilator-demand prediction component.', tags: ['Python', 'Pandas', 'Scikit-learn', 'EDA'], icon: Activity, href: 'https://github.com/anacodz/-Healthcare-Project-' },
  { n: '05', title: 'Fintech Analytics Dashboard', type: 'PRODUCT ANALYTICS · SQL', desc: 'A fintech metrics simulation with synthetic user and transaction data, SQL analysis for DAU, retention and revenue, and an interactive dashboard.', tags: ['SQL', 'SQLite', 'Python', 'Chart.js'], icon: BarChart3, href: 'https://github.com/anacodz/fintech-analytics-clone', live: 'https://anacodz.github.io/fintech-analytics-clone/' },
  { n: '06', title: 'Document Forgery Detection', type: 'COMPUTER VISION · DEEP LEARNING', desc: 'A PyTorch transfer-learning experiment that frames authentic-versus-tampered image recognition as a binary classification task using synthetic tampering.', tags: ['PyTorch', 'ResNet18', 'OpenCV'], icon: ShieldCheck, href: 'https://github.com/anacodz/document-forgery-detection-cv' },
  { n: '07', title: 'Handwritten Digit Recognition', type: 'CNN · MNIST', desc: 'A convolutional neural network built with PyTorch to classify handwritten digits, achieving 99.26% test accuracy on MNIST.', tags: ['PyTorch', 'CNN', 'MNIST'], icon: BrainCircuit, href: 'https://github.com/anacodz/handwritten-digit-recognition-pytorch' },
  { n: '08', title: 'AI Job Role Classifier', type: 'NLP · CLASSIFICATION', desc: 'An NLP mini-project that classifies technology job descriptions into roles such as Data Scientist, AI Engineer and Web Developer.', tags: ['Python', 'TF-IDF', 'Naive Bayes'], icon: Layers3, href: 'https://github.com/anacodz/AI_JOB_CLASSIFIER' },
  { n: '09', title: 'Instagram Reach Analysis', type: 'DATA SCIENCE · MODELING', desc: 'A machine-learning project with a prepared Instagram dataset, model artifact and notebook-based analysis.', tags: ['Python', 'Pandas', 'ML'], icon: BarChart3, href: 'https://github.com/anacodz/instagram-reach-analysis' },
  { n: '10', title: 'Resume Analyser', type: 'NLP · DOCUMENT PARSING', desc: 'A Python application for parsing and analysing resume content, with a lightweight web interface.', tags: ['Python', 'Flask', 'NLP'], icon: FileText, href: 'https://github.com/anacodz/resume-analyser' },
];

const skills = ['Python', 'SQL', 'PyTorch', 'TensorFlow', 'LangChain', 'FAISS', 'HuggingFace', 'LLMs & RAG', 'Computer Vision', 'NLP', 'Edge AI', 'Voice AI', 'Pandas', 'Scikit-learn', 'AWS', 'Docker', 'Power BI', 'Tableau'];

export default function App() {
 return <div className="site-shell">
  <header className="topbar"><a className="wordmark" href="#home">ANANYA<span>.</span></a><nav><a href="#home">Home</a><a href="#about">About</a><a href="#research">Research</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav><div className="top-actions"><a className="social-icon" href="https://github.com/anacodz" aria-label="GitHub"><Github/></a><a className="social-icon" href="https://www.linkedin.com/in/ananya04singh/" aria-label="LinkedIn"><Linkedin/></a><a className="pill-button dark small" href="#contact">Let’s connect <ArrowRight/></a></div></header>
  <main>
   <section className="hero section-wrap" id="home"><div className="hero-copy"><div className="eyebrow"><span>HELLO, I’M</span><i/></div><h1>Ananya Singh</h1><p className="hero-role">AI / ML ENGINEER &amp; RESEARCHER</p><p className="hero-description">I build practical AI systems across multilingual NLP, retrieval-augmented generation, computer vision and edge AI. I enjoy turning research questions into working products and measurable outcomes.</p><div className="hero-buttons"><a className="pill-button dark" href="#projects">Explore my work <ArrowRight/></a><a className="pill-button outline" href="mailto:ana21singh@gmail.com"><Mail/> Get in touch</a></div><p className="availability"><span/> Open to AI/ML, data and research opportunities.</p></div>
    <div className="hero-art"><div className="photo-halo"/><div className="photo-frame"><img src="data:image/webp;base64,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
" alt="Anime-inspired illustration of Ananya Singh waving, wearing a dark blazer and white shirt"/></div></div>
   </section>
   <section className="research-section section-wrap" id="research"><div className="section-kicker"><span>RESEARCH &amp; PUBLICATIONS</span><i/></div><h2>Researching ideas. Testing what works.</h2><p className="section-intro">Selected research contributions in edge AI and brain-computer interfaces.</p><div className="research-grid">
    <article className="research-card"><div className="research-meta"><span>CONFERENCE PAPER</span><span className="research-status">ACCEPTED · ICCCN 2026</span></div><h3>On-Device AI: Vision Encoder Optimization for Edge Visual LLMs</h3><p>Co-authored peer-reviewed international conference research benchmarking eight vision encoder architectures across four edge hardware platforms, including Raspberry Pi 5, Google Coral TPU and NVIDIA Jetson Orin Nano.</p><div className="tag-row"><span>EfficientNet</span><span>EfficientFormer</span><span>MobileViT</span><span>TensorRT</span><span>TFLite</span></div></article>
    <article className="research-card"><div className="research-meta"><span>SYSTEMATIC REVIEW</span><span className="research-status">PEER-REVIEWED · IIT KHARAGPUR</span></div><h3>Deep Learning for Motor Imagery EEG-Driven BCIs</h3><p>Co-authored a systematic review in collaboration with IIT Kharagpur, synthesising 100+ studies and comparing 17 deep learning architectures on BCI Competition IV-2a.</p><div className="tag-row"><span>EEG</span><span>BCI</span><span>Deep Learning</span><span>PRISMA</span></div><a className="text-link" href="https://github.com/anacodz/med-rag" target="_blank" rel="noreferrer">Review pipeline &amp; research artifacts <ArrowUpRight/></a></article>
   </div></section>
   <section className="projects-section section-wrap" id="projects"><div className="section-kicker"><span>SELECTED PROJECTS</span><i/><a href="https://github.com/anacodz" target="_blank" rel="noreferrer">VIEW GITHUB <ArrowRight/></a></div><h2>Building across AI, data and product</h2><p className="section-intro">A broader selection of research-driven builds, machine-learning experiments and data products.</p><div className="project-grid">{projects.map(p=>{const Icon=p.icon;return <a className="project-card" href={p.href} target="_blank" rel="noreferrer" key={p.n}><div className="project-visual"><span>{p.n} / PROJECT</span><div className="project-icon"><Icon/></div><i/></div><p className="project-kind">{p.type}</p><h3>{p.title}</h3><p className="project-description">{p.desc}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><span>GitHub <ArrowUpRight/></span>{p.live && <span onClick={e=>{e.preventDefault();e.stopPropagation();window.open(p.live,'_blank','noopener,noreferrer')}}>Live demo <ArrowUpRight/></span>}</div></a>})}</div></section>
   <section className="about-section section-wrap" id="about"><div className="section-kicker"><span>A LITTLE ABOUT ME</span><i/></div><div className="about-grid"><h2>Curiosity first.<br/><em>Impact always.</em></h2><div className="about-copy"><p>I’m an Information Technology graduate from KIIT with a focus on AI systems, machine learning and data-driven products. My work spans multilingual RAG applications, voice AI, computer vision and edge-deployed visual models.</p><p>I enjoy the full lifecycle: understanding a problem, exploring the research, designing a system, evaluating it and making the result useful to people.</p><a className="text-link" href="https://github.com/anacodz" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight/></a></div></div><div className="skill-cloud">{skills.map(s=><span key={s}>{s}</span>)}</div></section>
   <section className="experience-section section-wrap" id="experience"><div className="section-kicker"><span>EDUCATION &amp; EXPERIENCE</span><i/></div><div className="experience-grid"><h2>Learning, building<br/><em>and growing.</em></h2><div><div className="experience-item"><span className="experience-date">JUL 2025 — AUG 2025</span><h3>Network Security Analyst Intern</h3><p>Damodar Valley Corporation (DVC), Koderma</p><span className="experience-detail">Optimised SQL-driven security log ingestion by 12%, mapped 100+ IT/OT network dependencies and prepared stakeholder-facing performance and compliance reports.</span></div><div className="experience-item"><span className="experience-date">2022 — 2026</span><h3>B.Tech — Information Technology</h3><p>Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar</p><span className="experience-detail">Bachelor of Technology in Information Technology. Research interests include AI systems, edge AI, multilingual NLP and healthcare applications.</span></div></div></div></section>
   <section className="contact-section section-wrap" id="contact"><div className="contact-card"><div className="section-kicker light"><span>LET’S CONNECT</span><i/></div><h2>Have an idea?<br/><em>Let’s build it.</em></h2><p>Open to conversations about AI/ML roles, research collaborations and interesting projects.</p><a className="pill-button cream" href="mailto:ana21singh@gmail.com">ana21singh@gmail.com <ArrowUpRight/></a><div className="contact-decoration">A<span>.</span></div></div></section>
  </main>
  <footer className="footer section-wrap"><a className="wordmark" href="#home">ANANYA<span>.</span></a><p>Designed with intention. Built with curiosity.</p><div><a href="https://github.com/anacodz">GitHub</a><a href="https://www.linkedin.com/in/ananya04singh/">LinkedIn</a><a href="mailto:ana21singh@gmail.com">Email</a></div><span>© 2026 Ananya Singh</span></footer><Analytics/>
 </div>
}
