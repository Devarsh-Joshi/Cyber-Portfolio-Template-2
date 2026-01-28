import { Link } from "wouter";
import { Shield, Terminal, Cpu, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Nav() {
  const links = [
    { href: "#about", label: "ABOUT", icon: Terminal },
    { href: "#projects", label: "PROJECTS", icon: Shield },
    { href: "#skills", label: "SKILLS", icon: Cpu },
    { href: "#contact", label: "CONTACT", icon: Mail },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2 cursor-pointer">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-primary">CYBER<span className="text-white">SEC</span></span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-white/5 px-3 py-2 rounded"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
