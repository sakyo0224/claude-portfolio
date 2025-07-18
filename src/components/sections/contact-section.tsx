"use client";

import { motion } from "framer-motion";
import { SocialLinkComponent } from "@/components/ui/social-link";
import { socialLinks } from "@/data/social";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 modern-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-secondary/5 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.1)_0%,transparent_50%)]" />
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
            Contact
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            お仕事のご相談やご質問がございましたら、お気軽にお声がけください。
            新しいプロジェクトやコラボレーションの機会をお待ちしています。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">お気軽にご連絡ください</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <SocialLinkComponent
                  key={social.name}
                  social={social}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 border border-white/10 text-center animated-border"
          >
            <h4 className="text-xl font-bold mb-4 text-foreground">プロジェクトについて</h4>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Web開発、UI/UXデザイン、フロントエンド開発のプロジェクトを承っております。
              まずはお気軽にお話をお聞かせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="gradient-button text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                メールで相談する
              </a>
              <a
                href="https://forms.google.com/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="glass border border-white/20 px-8 py-3 rounded-xl font-semibold text-foreground hover:bg-white/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                フォームで相談する
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}