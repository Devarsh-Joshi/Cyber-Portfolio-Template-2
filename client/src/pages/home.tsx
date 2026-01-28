import { motion } from "framer-motion";
import Nav from "@/components/nav";
import MatrixRain from "@/components/matrix-rain";
import TerminalIntro from "@/components/terminal-intro";
import GlitchText from "@/components/glitch-text";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Download, Terminal, User, Send, ExternalLink, ShieldCheck, Zap, Activity } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleAction = (label: string) => {
    toast({
      title: "PROTOCOL INITIATED",
      description: `Executing system action: ${label}`,
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "TRANSMISSION SENT",
      description: "Your message has been encrypted and sent to the secure server.",
    });
  };

  const skillGroups = [
    {
      title: "CORE CAPABILITIES",
      icon: ShieldCheck,
      skills: ["Zero Trust Architecture", "Cryptographic Protocols", "Cloud Security Posture", "Security Orchestration"]
    },
    {
      title: "THREAT INTELLIGENCE",
      icon: Activity,
      skills: ["Malware Analysis", "Memory Forensics", "Behavioral Analytics", "Dark Web Monitoring"]
    },
    {
      title: "TACTICAL OPERATIONS",
      icon: Zap,
      skills: ["Automated Red Teaming", "CI/CD Security", "Container Hardening", "API Pentesting"]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-primary/30">
      <MatrixRain />
      <div className="scanline" />
      
      <Nav />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 relative z-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-sm tracking-widest">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              SYSTEM ONLINE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans tracking-tight">
              SECURE.<br />
              <GlitchText text="DEFEND." className="text-white" /><br />
              <span className="text-primary">PROTECT.</span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg font-mono">
              Advanced security architecture and threat analysis for the digital age. protecting critical infrastructure from cyber adversaries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => {
                  handleAction("INITIATE_CONTACT");
                  const target = document.querySelector("#contact");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary text-black hover:bg-primary/90 font-bold font-mono text-md border-glow"
              >
                <Terminal className="w-4 h-4 mr-2" />
                INITIATE_CONTACT
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => handleAction("DOWNLOAD_CV")}
                className="border-primary/30 text-primary hover:bg-primary/10 font-mono text-md"
              >
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD_CV
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30" />
            <TerminalIntro />
            
            {/* Decorative Grid Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 border-r-2 border-t-2 border-primary/30 rounded-tr-3xl" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 border-l-2 border-b-2 border-primary/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20 bg-primary/5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)]" />
              <div className="flex items-center justify-center h-full">
                <User className="w-32 h-32 text-primary/20" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm border border-white/5 rounded-lg">
                <div className="font-mono text-xs text-primary mb-1">IDENTITY_HASH</div>
                <div className="font-mono text-[10px] break-all opacity-50">7A8F2B9C0D1E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-mono mb-6 flex items-center gap-2">
                <span className="text-primary">01.</span> ABOUT_OPERATOR
              </h2>
              <div className="space-y-4 font-mono text-muted-foreground leading-relaxed">
                <p>
                  As a Cyber Security Architect with over 8 years of experience in the shadows, I specialize in building impenetrable digital fortresses and identifying zero-day vulnerabilities before they can be exploited.
                </p>
                <p>
                  My journey started in the low-level kernel space, evolving into a full-scale offensive and defensive strategist. I believe that security is not a product, but a continuous process of evolution and adaptation.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded">
                    <div className="text-xs text-primary mb-1">LOCATION</div>
                    <div className="text-sm text-white">ENCRYPTED</div>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded">
                    <div className="text-xs text-primary mb-1">AVAILABILITY</div>
                    <div className="text-sm text-white">MISSION_READY</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { label: "VULNERABILITIES", value: "500+" },
               { label: "SYSTEMS SECURED", value: "120+" },
               { label: "YEARS EXP", value: "08" },
               { label: "CERTIFICATIONS", value: "15" }
             ].map((stat, i) => (
               <div key={i} className="text-center group">
                 <h3 className="text-4xl font-bold font-mono text-white mb-2 group-hover:text-primary transition-colors">{stat.value}</h3>
                 <p className="text-xs font-mono text-primary/70 tracking-widest">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Projects Section - MISSION_LOGS Redesign */}
      <section id="projects" className="py-32 relative z-10 overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-primary/30" />
              <div className="pl-6">
                <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 tracking-tighter">
                  <span className="text-primary text-2xl align-top mr-2">[02]</span>
                  MISSION_LOGS
                </h2>
                <p className="text-muted-foreground font-mono text-sm max-w-md border-l border-primary/10 pl-4">
                  Encrypted operation records. Real-time threat neutralized and system architecture deployments.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-24 bg-primary/20 hidden lg:block" />
              <Button 
                variant="outline" 
                onClick={() => handleAction("ARCHIVE_ACCESS")}
                className="border-primary/20 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-black group"
              >
                ACCESS_ARCHIVES 
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Aura-Scanner.v2"
              description="A polymorphic vulnerability analysis engine that identifies latent security gaps across distributed cloud clusters."
              tags={["Go", "Kubernetes", "gRPC"]}
              status="PUBLIC"
              delay={0.1}
            />
            <ProjectCard 
              title="Black-Box Protocol"
              description="Proprietary encryption layer for air-gapped systems utilizing hardware-backed entropy generators."
              tags={["C++", "VHDL", "Cryptography"]}
              status="CLASSIFIED"
              delay={0.2}
            />
            <ProjectCard 
              title="Sentinel-AI"
              description="Deep learning intrusion detection system capable of identifying zero-day lateral movement in enterprise networks."
              tags={["Python", "PyTorch", "Kafka"]}
              status="PUBLIC"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Redesigned Skills Section */}
      <section id="skills" className="py-32 bg-secondary/20 relative z-10 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-mono mb-16 text-center">
            <span className="text-primary">03.</span> TECHNOLOGICAL_ARSENAL
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillGroups.map((group, groupIdx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIdx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-mono font-bold text-lg text-white group-hover:text-primary transition-colors">
                    {group.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 font-mono text-sm text-muted-foreground p-2 rounded hover:bg-white/5 transition-colors">
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned to Direct Channel */}
      <section id="contact" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 rounded-2xl border border-primary/20 bg-background/40 backdrop-blur-xl relative group overflow-hidden"
            >
              {/* Easter Egg Background Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(0,255,255,0.1)_1px,rgba(0,255,255,0.1)_2px)] pointer-events-none" />
              
              <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-sm group-hover:w-12 group-hover:h-12 transition-all" />
              <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-sm group-hover:w-12 group-hover:h-12 transition-all" />

              <h2 className="text-3xl font-bold font-mono mb-4 text-glow">
                <span className="text-primary">04.</span> DIRECT_UPLINK
              </h2>
              <p className="text-muted-foreground font-mono mb-8 text-sm">
                Secure peer-to-peer connection via encrypted mail server.
              </p>

              <div className="relative inline-block group/email">
                <a 
                  href="mailto:operator@cybersec.io"
                  className="text-2xl md:text-4xl font-mono font-bold text-white hover:text-primary transition-all duration-300 flex items-center gap-4 group cursor-pointer pointer-events-auto"
                  onClick={(e) => {
                    // Force the mailto behavior just in case
                    window.location.href = "mailto:operator@cybersec.io";
                  }}
                >
                  <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">&gt;</span>
                  operator@cybersec.io
                </a>
                <div className="h-0.5 w-0 group-hover/email:w-full bg-primary transition-all duration-500 mt-2" />
              </div>

              <div className="mt-12 flex justify-center gap-8">
                <button 
                  onClick={() => {
                    handleAction("EASTER_EGG_1");
                    document.body.classList.toggle('invert');
                    setTimeout(() => document.body.classList.toggle('invert'), 100);
                  }}
                  className="text-[10px] font-mono text-primary/30 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  [ DECRYPT_HIDDEN_NODE ]
                </button>
                <button 
                  onClick={() => {
                    handleAction("RE-ROUTE_SIGNAL");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[10px] font-mono text-primary/30 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  [ TERMINATE_CONNECTION ]
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <footer className="py-8 border-t border-white/5 bg-black/40 text-center relative z-10">
        <p className="font-mono text-xs text-muted-foreground">
          © 2024 CYBERSEC PORTFOLIO. ALL RIGHTS RESERVED. <br />
          <span className="text-primary/50">SECURE CONNECTION ESTABLISHED // KEY_ID: 0x7E9A2F</span>
        </p>
      </footer>
    </div>
  );
}
