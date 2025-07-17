import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "claude-code-tutorial",
    title: "Claude Code Tutorial",
    description: "Claudeを使用したコードチュートリアルアプリケーション。インタラクティブな学習体験を提供します。",
    longDescription: "Next.js、React、TypeScriptを使用して構築されたモダンな学習プラットフォーム。ユーザーがAIと対話しながらコーディングスキルを向上させることができます。レスポンシブデザインと直感的なUIを特徴としています。",
    image: "/images/claude-code-tutorial.jpg",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "AI"],
    liveUrl: "https://claude-code-tutorial-jade.vercel.app/",
    githubUrl: "",
    featured: true,
    completedAt: new Date("2024-01-15"),
  },
];