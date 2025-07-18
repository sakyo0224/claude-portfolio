"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { formatDate } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30 group">
        <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative z-10 text-center">
            <motion.div 
              className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl font-bold text-primary">
                {project.title.charAt(0)}
              </span>
            </motion.div>
            <p className="text-sm text-muted-foreground font-medium">
              {formatDate(project.completedAt)}
            </p>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold line-clamp-2">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                Featured
              </span>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="w-full flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full flex items-center gap-2 hover:bg-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </motion.a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}