"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  social: SocialLink;
  index: number;
}

export function SocialLinkComponent({ social, index }: SocialLinkProps) {
  const IconComponent = Icons[social.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.15,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.9 }}
      className="group flex items-center justify-center w-12 h-12 bg-card border rounded-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50"
    >
      {IconComponent && (
        <IconComponent 
          className={cn(
            "w-5 h-5 transition-colors duration-300",
            social.color,
            "group-hover:scale-110"
          )} 
        />
      )}
      <span className="sr-only">{social.name}</span>
    </motion.a>
  );
}