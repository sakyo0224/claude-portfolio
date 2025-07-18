"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 modern-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(var(--accent)/0.1),transparent)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      <div className="section-divider absolute top-0 left-0 w-full" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            これまでに手がけたプロジェクトの一部をご紹介します。
            各プロジェクトで新しい技術に挑戦し、ユーザー体験の向上を追求しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/80 mb-4 text-lg">
            さらに多くのプロジェクトが今後追加予定です
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}