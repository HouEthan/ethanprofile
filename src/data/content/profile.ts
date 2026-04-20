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
  education: string[];
  experience: string[];
  highlights: string[];
};

export const profileBase = {
  name: "侯家燊 (Ethan Hou)",
  email: "ethanhou19990913@gmail.com",
  introPhoto,
  portraitPhoto,
};

export const profileContent: Record<Locale, ProfileContent> = {
  zh: {
    location: "台灣新竹",
    title: "擁抱新技術的軟體研發工程師",
    intro: "我把履歷中的學習、專題、實習與證照整理成更容易閱讀的網站內容，讓人可以快速理解我的技術背景與實作方向。",
    about: [
      "我目前的背景結合資訊管理、軟體開發與資安實務，熟悉 Python、Java、Node.js 等開發工具，也持續把 AI 與產品思維帶進實作中。",
      "在學期間我參與專題競賽、擔任學助，也在台灣大哥大參與 AI 相關計畫與資安場景實作。這些經驗讓我不只關心技術本身，也重視怎麼把系統做得更有價值、更能解決問題。",
    ],
    focusAreas: ["AI 工具", "網際網路", "產品規劃", "個人品牌", "旅行與生活記錄"],
    skills: ["C#", "Kotlin", "WPF", "Dart", "HTML", "Python", "Java", "Node.js", "MySQL"],
    certifications: ["CEH 道德駭客證照"],
    education: [
      "中原大學資訊管理學系",
      "中原大學資訊管理學碩士",
      "研究論文：以生成式 AI 分析金融社群文章情緒對股市之影響",
    ],
    experience: [
      "台灣大哥大 T 大使 AI 自動化設計計畫：使用 Azure OpenAI API、Python 與 prompt engineering，結合圖像系統產出自動生成社交貼文流程。",
      "偽冒網站 URL 偵測專題：結合 AI 技術提升釣魚網站偵測的準確性與效率。",
      "專題競賽開發：負責 Java 後端開發、API 串接與 IoT 整合，並在校內專題競賽獲得佳績。",
      "會議管理系統：使用 Node.js、MongoDB 與 Jitsi Meet 進行後端與視訊整合開發。",
      "學助經驗：協助同學克服程式學習挫折，累積溝通、引導與問題拆解能力。",
    ],
    highlights: [
      "110 學年度專題競賽第一名",
      "110 學年度專題競賽第三名",
      "111-2 學期學助",
      "CEH 道德駭客證照",
    ],
  },
  en: {
    location: "Hsinchu, Taiwan",
    title: "A software engineer who actively embraces new technology",
    intro: "I turned the content of my resume into a cleaner website format so visitors can quickly understand my technical background, projects, and hands-on experience.",
    about: [
      "My background combines information management, software development, and cybersecurity practice. I work with tools such as Python, Java, and Node.js, and I keep exploring how AI can be applied in real products and workflows.",
      "During school I joined project competitions, worked as a teaching assistant, and took part in AI-related planning and security-oriented work at Taiwan Mobile. Those experiences shaped how I think about building useful systems, not just writing code.",
    ],
    focusAreas: ["AI tools", "Internet", "Product planning", "Personal branding", "Travel and lifestyle notes"],
    skills: ["C#", "Kotlin", "WPF", "Dart", "HTML", "Python", "Java", "Node.js", "MySQL", "Tomcat JSP"],
    certifications: ["CEH Certified Ethical Hacker"],
    education: [
      "BBA in Information Management, Chung Yuan Christian University",
      "Master of Information Management, Chung Yuan Christian University",
      "Research topic: Using generative AI to analyze sentiment in financial communities and its impact on the stock market",
    ],
    experience: [
      "Taiwan Mobile T Ambassador AI automation project: used Azure OpenAI API, Python, and prompt engineering to build an automated social content generation workflow.",
      "Phishing URL detection project: combined AI techniques to improve the accuracy and efficiency of malicious website detection.",
      "Capstone competition project: handled Java backend development, API integration, and IoT connections, and received strong results in campus competitions.",
      "Conference management system: built backend services with Node.js and MongoDB and integrated Jitsi Meet for conferencing.",
      "Teaching assistant experience: helped students work through programming challenges and strengthened my communication and problem-solving skills.",
    ],
    highlights: [
      "1st place in the 2021 academic-year project competition",
      "3rd place in the 2021 academic-year project competition",
      "Teaching assistant in semester 111-2",
      "CEH certification",
    ],
  },
  ja: {
    location: "台湾・新竹",
    title: "新しい技術を積極的に取り入れるソフトウェアエンジニア",
    intro: "履歴書の内容をそのまま PDF で置くのではなく、技術背景や実務経験が伝わりやすい形に整理して個人サイトへ載せています。",
    about: [
      "私の背景は、情報管理、ソフトウェア開発、情報セキュリティ実務を横断しています。Python、Java、Node.js などを扱いながら、AI をどう実務に活かせるかを継続して探っています。",
      "在学中はプロジェクトコンテストへの参加、学習支援、そして台湾モバイルでの AI・セキュリティ関連の実務経験を積みました。技術だけでなく、価値のある仕組みをどう作るかを大切にしています。",
    ],
    focusAreas: ["AI ツール", "インターネット", "プロダクト企画", "パーソナルブランディング", "旅と暮らしの記録"],
    skills: ["C#", "Kotlin", "WPF", "Dart", "HTML", "Python", "Java", "Node.js", "MySQL", "Tomcat JSP"],
    certifications: ["CEH 倫理ハッカー資格"],
    education: [
      "中原大学 情報管理学科",
      "中原大学 情報管理学修士",
      "研究テーマ：生成 AI を用いた金融コミュニティ感情分析と株式市場への影響",
    ],
    experience: [
      "台湾モバイル T Ambassador AI 自動化企画：Azure OpenAI API、Python、prompt engineering を用いて、自動ソーシャル投稿生成フローを構築。",
      "偽装サイト URL 検知プロジェクト：AI 技術を組み合わせて、フィッシングサイト検知の精度と効率を向上。",
      "卒業プロジェクト競賽：Java バックエンド開発、API 連携、IoT 統合を担当し、学内コンテストで成果を獲得。",
      "会議管理システム：Node.js、MongoDB、Jitsi Meet を使ったバックエンドと会議機能の統合を担当。",
      "学習支援経験：学生のプログラミング学習をサポートし、説明力と問題解決力を磨きました。",
    ],
    highlights: [
      "2021 学年度プロジェクト競賽 1 位",
      "2021 学年度プロジェクト競賽 3 位",
      "111-2 学期 学習支援",
      "CEH 資格取得",
    ],
  },
};
