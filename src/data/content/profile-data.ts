import introPhoto from "../../assets/profile/intro.jpg";
import portraitPhoto from "../../assets/profile/portrait.jpg";
import type { Locale } from "../../i18n/config";

export type ProfileContent = {
  location: string;
  title: string;
  intro: string;
  about: string[];
  focusAreas: string[];
  skills: string[];
  certifications: string[];
  experience: string[];
};

export const profileBase = {
  name: "侯家燊 (Ethan)",
  email: "ethanhou19990913@gmail.com",
  introPhoto,
  portraitPhoto,
};

export const profileContent: Record<Locale, ProfileContent> = {
  zh: {
    location: "台灣新竹",
    title: "具 AI 技術與好奇心的軟體研發工程師",
    intro: "這裡是我的個人網站，用來放專案、背景資料，以及我想留下的美食與景點記錄。",
    about: [
      "我喜歡把做過的事情整理成清楚、好讀的故事，讓人可以快速理解一個專案背後的思考、選擇與結果。",
      "這個網站目前分成個人介紹、專案、美食、景點四個主軸，之後也能再往更多分類擴充。",
    ],
    focusAreas: ["AI 工具", "網際網路", "產品規劃", "個人品牌", "旅行與生活記錄"],
    skills: ["C#", "Kotlin", "WPF", "Dart", "HTML", "Python", "Java"],
    certifications: ["CEH"],
    experience: [
      "中原大學資訊管理學系",
      "中原大學資訊管理學碩士",
      "台灣大哥大第五屆 T 大使暨資安實習生",
    ],
  },
  en: {
    location: "Hsinchu, Taiwan",
    title: "A software engineer with AI interests and strong curiosity",
    intro: "This is my personal site for bringing together my projects, background, and the food and places I want to remember.",
    about: [
      "I like turning what I have worked on into clear, readable stories so people can quickly understand the thinking, choices, and outcomes behind a project.",
      "The site is currently organized around four areas: profile, projects, food, and places, with room to expand into more categories later.",
    ],
    focusAreas: ["AI tools", "Internet", "Product planning", "Personal branding", "Travel and lifestyle notes"],
    skills: ["C#", "Kotlin", "WPF", "Dart", "HTML", "Python", "Java"],
    certifications: ["CEH"],
    experience: [
      "Department of Information Management, Chung Yuan Christian University",
      "Master of Information Management, Chung Yuan Christian University",
      "Taiwan Mobile 5th T Ambassador and cybersecurity intern",
    ],
  },
  ja: {
    location: "台湾・新竹",
    title: "AI 技術と好奇心を持つソフトウェアエンジニア",
    intro: "ここは私の個人サイトで、プロジェクト、プロフィール、そして残しておきたいグルメやスポットの記録をまとめています。",
    about: [
      "これまで取り組んできたことを、考え方や選択、結果まで伝わる読みやすいストーリーとして整理するのが好きです。",
      "このサイトは自己紹介、プロジェクト、グルメ、スポットの四つを中心に構成していて、今後さらに広げられる余白も残しています。",
    ],
    focusAreas: ["AI ツール", "インターネット", "プロダクト企画", "パーソナルブランディング", "旅と暮らしの記録"],
    skills: ["C#", "Kotlin", "WPF", "Dart", "HTML", "Python", "Java"],
    certifications: ["CEH"],
    experience: [
      "中原大学 情報管理学科",
      "中原大学 情報管理学修士",
      "台湾モバイル 第 5 期 T Ambassador・情報セキュリティインターン",
    ],
  },
};
