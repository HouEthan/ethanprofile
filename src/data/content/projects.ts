import type { Locale } from "../../i18n/config";

export type ProjectEntry = {
  slug: string;
  year: string;
  category: string;
  featured?: boolean;
  stack: string[];
  roleKey: string;
  highlightKeys: string[];
  titleKey: string;
  summaryKey: string;
  content: Record<Locale, string[]>;
};

export const projectCategories = ["featured", "web", "content", "branding"] as const;

export const projects: ProjectEntry[] = [
  {
    slug: "personal-brand-site",
    year: "2026",
    category: "featured",
    featured: true,
    stack: ["Astro", "TypeScript", "Content Strategy"],
    roleKey: "projects.personalBrandSite.role",
    highlightKeys: [
      "projects.personalBrandSite.highlights.hierarchy",
      "projects.personalBrandSite.highlights.structure",
      "projects.personalBrandSite.highlights.maintenance",
    ],
    titleKey: "projects.personalBrandSite.title",
    summaryKey: "projects.personalBrandSite.summary",
    content: {
      zh: [
        "這個專案把分散的個人介紹、作品整理與生活內容整合成同一個網站入口。",
        "首頁負責快速建立第一印象，About 集中最重要的背景資訊，其餘內容則拆成列表頁與詳情頁。",
        "這種結構也讓未來擴充分類、語言與內容類型時，不需要重做整個前端。",
      ],
      en: [
        "The project brings scattered profile information, portfolio pieces, and personal notes into a single website.",
        "The homepage creates a quick first impression, the About page holds the most important context, and the rest of the content is split into list and detail pages.",
        "This structure also makes it easier to expand categories, languages, and content without rebuilding the frontend.",
      ],
      ja: [
        "このプロジェクトでは、散らばっていたプロフィール、作品、ライフスタイルの記録を一つの入口にまとめました。",
        "トップページで第一印象をつくり、About に重要な背景情報を集約し、それ以外の内容は一覧ページと詳細ページに分けています。",
        "この構造にしておくことで、今後カテゴリや言語、コンテンツ種別を増やすときも、フロントエンドを大きく作り直さずに済みます。",
      ],
    },
  },
  {
    slug: "content-system-playbook",
    year: "2025",
    category: "content",
    stack: ["Information Architecture", "Editorial Design"],
    roleKey: "projects.contentSystemPlaybook.role",
    highlightKeys: [
      "projects.contentSystemPlaybook.highlights.slug",
      "projects.contentSystemPlaybook.highlights.format",
      "projects.contentSystemPlaybook.highlights.cost",
    ],
    titleKey: "projects.contentSystemPlaybook.title",
    summaryKey: "projects.contentSystemPlaybook.summary",
    content: {
      zh: [
        "當內容量變多之後，單頁式作品集很快就會變得難以瀏覽。",
        "這個專案的重點是在資料層先定好規則，讓每一種內容都有一致欄位與明確分類邏輯。",
      ],
      en: [
        "Once content volume grows, a single-page portfolio quickly becomes difficult to navigate.",
        "This project focused on designing the data layer so each content type has consistent fields and clear category logic.",
      ],
      ja: [
        "コンテンツ量が増えると、1 ページだけのポートフォリオはすぐに見づらくなります。",
        "このプロジェクトでは、各コンテンツ型に共通の項目と明確な分類ルールを持たせるため、まずデータレイヤーの設計に重点を置きました。",
      ],
    },
  },
  {
    slug: "portfolio-storytelling",
    year: "2025",
    category: "branding",
    stack: ["Narrative Design", "Content Writing"],
    roleKey: "projects.portfolioStorytelling.role",
    highlightKeys: [
      "projects.portfolioStorytelling.highlights.context",
      "projects.portfolioStorytelling.highlights.readability",
    ],
    titleKey: "projects.portfolioStorytelling.title",
    summaryKey: "projects.portfolioStorytelling.summary",
    content: {
      zh: [
        "好的作品集不只是列出功能，而是要幫讀者理解你怎麼思考、怎麼推動事情前進。",
        "這個專案把每個案例都重新整理成更完整也更有說服力的敘事方式。",
      ],
      en: [
        "A strong portfolio does more than list features. It helps readers understand how you think and move work forward.",
        "This project reframed each case study as a more complete and persuasive story.",
      ],
      ja: [
        "良いポートフォリオは機能を並べるだけではなく、どう考え、どう前に進めたかまで伝えてくれます。",
        "このプロジェクトでは、それぞれの事例をより完整で説得力のあるストーリーとして再構成しました。",
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
