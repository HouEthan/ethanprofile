import type { Locale } from "../../i18n/config";

export type ProfileContent = {
  location: string;
  title: string;
  intro: string;
  about: string[];
  focusAreas: string[];
};

export const profileBase = {
  name: "Ethan Hou",
  email: "ethanhou19990913@gmail.com",
};

export const profileContent: Record<Locale, ProfileContent> = {
  zh: {
    location: "台灣新竹",
    title: "整理產品、內容與日常體驗的人",
    intro: "這裡是我的個人網站，用來集中放最重要的專案、背景資料，以及我想留下的美食與景點記錄。",
    about: [
      "我喜歡把做過的事情整理成清楚、好讀的故事，讓人可以快速理解一個專案背後的思考、選擇與結果。",
      "這個網站目前分成個人介紹、專案、美食、景點四個主軸，之後也能再往更多分類擴充。",
    ],
    focusAreas: ["產品規劃", "內容系統", "個人品牌整理", "旅行與生活記錄"],
  },
  en: {
    location: "Hsinchu, Taiwan",
    title: "Curating products, content, and everyday experiences",
    intro:
      "This is my personal site for bringing together my key projects, background, and the food and places I want to remember.",
    about: [
      "I like turning what I have worked on into clear, readable stories so people can quickly understand the work, ideas, and experiences behind it.",
      "The site is organized around four areas: profile, projects, food, and places, with room to expand into more categories later.",
    ],
    focusAreas: ["Product planning", "Content systems", "Personal branding", "Travel and lifestyle notes"],
  },
  ja: {
    location: "台湾・新竹",
    title: "プロダクト、コンテンツ、日々の体験を整理する人",
    intro:
      "ここは私の個人サイトで、重要なプロジェクト、プロフィール、美食メモ、景点メモをひとつにまとめています。",
    about: [
      "取り組んできた仕事を、考え方や背景まで伝わる読みやすいストーリーとして整理するのが好きです。",
      "このサイトはプロフィール、プロジェクト、グルメ、スポットの四つを中心に構成していて、今後さらに広げられる余白も残しています。",
    ],
    focusAreas: ["プロダクト企画", "コンテンツ設計", "パーソナルブランディング", "旅と暮らしの記録"],
  },
};
