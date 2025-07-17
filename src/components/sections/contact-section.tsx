"use client";

import { motion } from "framer-motion";
import { SocialLinkComponent } from "@/components/ui/social-link";
import { socialLinks } from "@/data/social";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
            <h3 className="text-2xl font-semibold mb-6">お気軽にご連絡ください</h3>
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
            className="bg-card rounded-lg p-8 border text-center"
          >
            <h4 className="text-xl font-semibold mb-4">プロジェクトについて</h4>
            <p className="text-muted-foreground mb-6">
              Web開発、UI/UXデザイン、フロントエンド開発のプロジェクトを承っております。
              まずはお気軽にお話をお聞かせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                メールで相談する
              </a>
              <a
                href="https://forms.google.com/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
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