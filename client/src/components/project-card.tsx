import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock, Database, Radio, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status: "CLASSIFIED" | "PUBLIC";
  image?: string;
  delay?: number;
}

export default function ProjectCard({ title, description, tags, status, image, delay = 0 }: ProjectCardProps) {
  const Icon = status === "CLASSIFIED" ? Lock : Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Dynamic Border Glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-accent/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="relative bg-card/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden flex flex-col h-full">
        {/* Header Visual */}
        <div className="h-2 bg-gradient-to-r from-primary/80 via-accent/50 to-transparent" />
        
        <div className="p-6 flex-1">
          <div className="flex justify-between items-start mb-6">
            <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20 text-primary group-hover:scale-110 group-hover:border-primary transition-all duration-300">
              <Icon className="w-5 h-5" />
            </div>
            <Badge variant={status === "CLASSIFIED" ? "destructive" : "default"} className="font-mono text-[10px] tracking-tighter uppercase px-2 py-0 border-none">
              {status}
            </Badge>
          </div>

          <h3 className="text-xl font-bold font-mono text-white mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
            <span className="text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity">/</span>
            {title}
          </h3>

          <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono text-primary/60 border border-primary/20 px-2 py-0.5 rounded uppercase hover:bg-primary/5 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white/5 border-t border-white/5 flex gap-3 mt-auto">
          <Button size="sm" variant="ghost" className="flex-1 font-mono text-[10px] uppercase text-muted-foreground hover:text-primary hover:bg-primary/5 h-8">
            <Github className="w-3 h-3 mr-2" /> Source
          </Button>
          <Button size="sm" variant="ghost" className="flex-1 font-mono text-[10px] uppercase text-primary hover:bg-primary/10 h-8">
            <ExternalLink className="w-3 h-3 mr-2" /> Execute
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
