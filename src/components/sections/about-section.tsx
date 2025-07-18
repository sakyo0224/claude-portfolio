"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "フロントエンド開発",
      description: "React、Next.js、TypeScriptを使用したモダンなWebアプリケーション開発",
    },
    {
      icon: Palette,
      title: "UI/UXデザイン",
      description: "ユーザビリティを重視した直感的なインターフェースの設計と実装",
    },
    {
      icon: Rocket,
      title: "パフォーマンス最適化",
      description: "高速で効率的なWebアプリケーションの構築と最適化",
    },
  ];

  return (
    <section id="about" className="py-20 clean-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            常に新しい技術を学び、質の高いソフトウェアの開発に努めています。
            ユーザー体験を最優先に考え、技術的な課題を解決することに情熱を注いでいます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}