export const locales = ["zh", "en", "ja"] as const;
export type Locale = (typeof locales)[number];

export type TranslationBlock = {
  title: string;
  summary: string;
  content: string[];
};

export type CategoryDefinition = {
  value: string;
  label: Record<Locale, string>;
};

export type ProjectItem = {
  slug: string;
  year: string;
  role: Record<Locale, string>;
  category: string;
  stack: string[];
  highlights: Record<Locale, string[]>;
  featured?: boolean;
  translations: Record<Locale, TranslationBlock>;
};

export type PlaceItem = {
  slug: string;
  location: Record<Locale, string>;
  category: string;
  tags: Record<Locale, string[]>;
  highlights: Record<Locale, string[]>;
  translations: Record<Locale, TranslationBlock>;
};

export const profile = {
  name: "侯家燊 (Ethan)",
  email: "ethanhou19990913@gmail.com",
  locations: {
    zh: "新竹，台灣",
    en: "Hsinchu, Taiwan",
    ja: "新竹、台湾",
  },
  translations: {
    zh: {
      title: "產品、內容與生活體驗整理者",
      intro: "這裡是我的個人網站，集中整理我最重要的專案、個人背景，以及我記錄的美食與景點。",
      about: [
        "我喜歡把做過的事整理成清楚可讀的內容，讓作品、想法與生活紀錄都能被快速理解。",
        "網站分成個人介紹、專案、美食與景點四個主軸，未來也可以持續擴充更多分類。",
      ],
      focusAreas: ["產品規劃", "內容整理", "個人品牌", "旅遊與生活紀錄"],
    },
    en: {
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
      title: "プロダクト、コンテンツ、日常体験を整理する人",
      intro:
        "このサイトでは、重要なプロジェクト、自己紹介、そして記録しておきたいグルメやスポットをまとめています。",
      about: [
        "これまでの仕事や考え方、生活の記録を、読みやすく整理された形で伝えるのが好きです。",
        "サイトは自己紹介、プロジェクト、グルメ、スポットの四つを軸に構成し、今後も分類を広げられるようにしています。",
      ],
      focusAreas: ["プロダクト企画", "コンテンツ整理", "パーソナルブランディング", "旅行と暮らしの記録"],
    },
  },
};

export const projectCategories: CategoryDefinition[] = [
  { value: "featured", label: { zh: "精選專案", en: "Featured", ja: "注目プロジェクト" } },
  { value: "web", label: { zh: "網站設計", en: "Web Design", ja: "Webデザイン" } },
  { value: "content", label: { zh: "內容企劃", en: "Content Strategy", ja: "コンテンツ企画" } },
  { value: "branding", label: { zh: "品牌整理", en: "Branding", ja: "ブランディング" } },
];

export const foodCategories: CategoryDefinition[] = [
  { value: "cafe", label: { zh: "咖啡廳", en: "Cafe", ja: "カフェ" } },
  { value: "brunch", label: { zh: "早午餐", en: "Brunch", ja: "ブランチ" } },
  { value: "dessert", label: { zh: "甜點", en: "Dessert", ja: "デザート" } },
];

export const viewCategories: CategoryDefinition[] = [
  { value: "city", label: { zh: "城市散步", en: "City Walk", ja: "街歩き" } },
  { value: "nature", label: { zh: "山海景點", en: "Nature", ja: "自然スポット" } },
  { value: "exhibition", label: { zh: "展覽空間", en: "Exhibition", ja: "展示空間" } },
];

export const projects: ProjectItem[] = [
  {
    slug: "personal-brand-site",
    year: "2026",
    role: {
      zh: "企劃 / 設計 / 前端整合",
      en: "Strategy / Design / Frontend integration",
      ja: "企画 / デザイン / フロントエンド実装",
    },
    category: "featured",
    stack: ["Astro", "TypeScript", "Content Strategy"],
    highlights: {
      zh: ["重新定義首頁到內容頁的資訊層級", "建立可延展的分類架構", "讓後續新增內容只需修改資料檔"],
      en: [
        "Redefined the hierarchy from homepage to detail pages",
        "Built a scalable category structure",
        "Made future updates possible from a single data layer",
      ],
      ja: ["トップページから詳細ページまでの情報設計を再構成", "拡張しやすい分類構造を設計", "今後の更新をデータ編集中心にした"],
    },
    featured: true,
    translations: {
      zh: {
        title: "個人品牌網站重構",
        summary: "把個人介紹、作品與生活內容整合成一致的內容架構與瀏覽體驗。",
        content: [
          "這個專案的核心是把分散的自我介紹、作品展示和生活記錄整合成單一網站。",
          "首頁負責建立第一印象，About 放最重要的背景與精選專案，其他內容則各自有列表頁與詳情頁。",
          "這樣的做法也讓後續擴充更多類別、更多語言與更多內容時，不需要重寫整個前端結構。",
        ],
      },
      en: {
        title: "Personal Brand Site Redesign",
        summary: "A unified information structure for my profile, work, and lifestyle content.",
        content: [
          "The project brings scattered profile information, portfolio pieces, and personal notes into a single website.",
          "The homepage creates a quick first impression, the About page holds the most important context, and the rest of the content is split into list and detail pages.",
          "This structure also makes it easier to expand categories, languages, and content without rebuilding the frontend.",
        ],
      },
      ja: {
        title: "パーソナルブランドサイト再構築",
        summary: "自己紹介、作品、ライフスタイルの内容を一つの情報設計にまとめたサイトです。",
        content: [
          "分散していた自己紹介、作品紹介、生活の記録を、一つのサイトへ統合することがこのプロジェクトの中心です。",
          "トップページで第一印象をつくり、About に重要な背景と代表作を置き、その他は一覧ページと詳細ページに整理しました。",
          "この構造により、カテゴリや言語、掲載内容が増えても、フロント全体を作り直す必要がありません。",
        ],
      },
    },
  },
  {
    slug: "content-system-playbook",
    year: "2025",
    role: {
      zh: "資訊架構 / 編輯策略",
      en: "Information architecture / Editorial strategy",
      ja: "情報設計 / 編集戦略",
    },
    category: "content",
    stack: ["Information Architecture", "Editorial Design"],
    highlights: {
      zh: ["定義 slug、分類與摘要欄位", "讓列表頁與詳情頁共用資料格式", "降低日後維護成本"],
      en: [
        "Defined slug, category, and summary fields",
        "Shared one data format across list and detail pages",
        "Reduced long-term maintenance cost",
      ],
      ja: ["slug、分類、要約の基本項目を定義", "一覧と詳細で同じデータ形式を使用", "将来の運用コストを下げた"],
    },
    translations: {
      zh: {
        title: "內容系統整理計畫",
        summary: "建立一套能管理專案、文章與生活紀錄的內容欄位與分類規則。",
        content: [
          "當內容量開始增加，單靠單頁式網站很難維持清晰度。",
          "這個計畫聚焦在資料結構設計，確保每個內容類型都有一致欄位與明確分類邏輯。",
        ],
      },
      en: {
        title: "Content System Playbook",
        summary: "A reusable content model for projects, writing, and lifestyle notes.",
        content: [
          "Once content volume grows, a single-page portfolio quickly becomes difficult to navigate.",
          "This project focused on designing the data layer so each content type has consistent fields and clear category logic.",
        ],
      },
      ja: {
        title: "コンテンツシステム整理計画",
        summary: "プロジェクト、記事、生活記録を管理できる項目設計と分類ルールを整えました。",
        content: [
          "コンテンツ量が増えると、単一ページのポートフォリオでは整理しきれなくなります。",
          "この計画では、各コンテンツタイプが共通の項目と明確な分類ロジックを持つよう、データ構造に集中しました。",
        ],
      },
    },
  },
  {
    slug: "portfolio-storytelling",
    year: "2025",
    role: {
      zh: "內容策劃",
      en: "Content planning",
      ja: "コンテンツ企画",
    },
    category: "branding",
    stack: ["Narrative Design", "Content Writing"],
    highlights: {
      zh: ["強化專案背景、目標與成果敘事", "提升閱讀者快速理解的效率"],
      en: ["Strengthened the story around context, goals, and outcomes", "Improved how quickly readers understand each case"],
      ja: ["背景、目的、成果の物語性を強化", "読み手が短時間で理解しやすくなった"],
    },
    translations: {
      zh: {
        title: "作品集敘事優化",
        summary: "把專案描述從功能清單改為更容易理解的故事與成果脈絡。",
        content: [
          "好的作品集不是單純列功能，而是讓人理解你怎麼思考、怎麼推進事情。",
          "這個專案重新整理描述方式，讓每個案例都更像完整而有說服力的敘事。",
        ],
      },
      en: {
        title: "Portfolio Storytelling Refresh",
        summary: "Shifted project descriptions from feature lists to clearer narratives and outcomes.",
        content: [
          "A strong portfolio does more than list features. It helps readers understand how you think and move work forward.",
          "This project reframed each case study as a more complete and persuasive story.",
        ],
      },
      ja: {
        title: "ポートフォリオ表現の改善",
        summary: "機能一覧ではなく、背景と成果が伝わるストーリー型の説明に整理しました。",
        content: [
          "良いポートフォリオは機能を並べるだけでなく、どう考え、どう進めたかが伝わることが大切です。",
          "このプロジェクトでは、各事例をより説得力のある一つの物語として再構成しました。",
        ],
      },
    },
  },
];

export const foods: PlaceItem[] = [
  {
    slug: "slow-morning-cafe",
    location: { zh: "台北中山", en: "Zhongshan, Taipei", ja: "台北・中山" },
    category: "cafe",
    tags: { zh: ["拿鐵", "安靜", "適合工作"], en: ["Latte", "Quiet", "Work-friendly"], ja: ["ラテ", "静か", "作業向き"] },
    highlights: {
      zh: ["店內採光舒服", "座位間距寬敞", "甜點表現穩定"],
      en: ["Comfortable natural light", "Spacious seating", "Reliable dessert quality"],
      ja: ["採光がやさしい", "席間が広い", "デザートが安定している"],
    },
    translations: {
      zh: {
        title: "Slow Morning Cafe",
        summary: "適合久坐整理思緒的咖啡廳，光線柔和、空間安靜。",
        content: ["這裡很適合帶電腦工作，也適合一個人安靜待著。", "如果你喜歡空間感和穩定的咖啡品質，這間會是安全選擇。"],
      },
      en: {
        title: "Slow Morning Cafe",
        summary: "A calm cafe with soft light and enough room to sit, work, and think.",
        content: ["It works well both for laptop time and for a quiet solo visit.", "If you value atmosphere and consistent coffee quality, this is an easy recommendation."],
      },
      ja: {
        title: "Slow Morning Cafe",
        summary: "やわらかな光と静かな空間で、長く過ごしやすいカフェです。",
        content: ["パソコン作業にも、一人で静かに過ごす時間にも向いています。", "空間の落ち着きと安定したコーヒーの品質を重視するなら、安心して選べる一軒です。"],
      },
    },
  },
  {
    slug: "green-table-brunch",
    location: { zh: "台北大安", en: "Da'an, Taipei", ja: "台北・大安" },
    category: "brunch",
    tags: { zh: ["早午餐", "沙拉", "朋友聚餐"], en: ["Brunch", "Salad", "Friends"], ja: ["ブランチ", "サラダ", "友人との食事"] },
    highlights: {
      zh: ["餐點均衡", "服務節奏舒服", "適合聚會"],
      en: ["Balanced dishes", "Relaxed service pace", "Good for meetups"],
      ja: ["料理のバランスが良い", "接客のテンポが心地よい", "集まりに向いている"],
    },
    translations: {
      zh: {
        title: "Green Table Brunch",
        summary: "份量足、節奏舒服的早午餐店，適合假日慢慢吃。",
        content: ["主餐與配菜的搭配完整，不會只有拍照好看而已。", "很適合安排成週末第一站，再接續附近行程。"],
      },
      en: {
        title: "Green Table Brunch",
        summary: "A relaxed brunch spot with satisfying portions and a comfortable pace.",
        content: ["The plates feel complete, not just visually appealing for photos.", "It works nicely as the first stop of a slow weekend plan."],
      },
      ja: {
        title: "Green Table Brunch",
        summary: "しっかり食べられて、週末にゆっくり過ごしやすいブランチのお店です。",
        content: ["メインと付け合わせのバランスがよく、見た目だけでは終わりません。", "週末の最初の予定として組み込むと、その後の流れも作りやすいです。"],
      },
    },
  },
  {
    slug: "cream-note-dessert",
    location: { zh: "台北信義", en: "Xinyi, Taipei", ja: "台北・信義" },
    category: "dessert",
    tags: { zh: ["甜點", "蛋糕", "下午茶"], en: ["Dessert", "Cake", "Tea time"], ja: ["デザート", "ケーキ", "ティータイム"] },
    highlights: {
      zh: ["口味平衡", "擺盤乾淨", "季節限定有驚喜"],
      en: ["Balanced flavor", "Clean presentation", "Seasonal specials are worth watching"],
      ja: ["味のバランスが良い", "盛り付けがきれい", "季節限定が楽しい"],
    },
    translations: {
      zh: {
        title: "Cream Note Dessert",
        summary: "甜點細節精緻，味道乾淨，適合想吃精巧系甜點的時候。",
        content: ["甜點層次做得很細，甜度也控制得剛好。", "如果喜歡偏精緻路線的甜點，這家很值得收進清單。"],
      },
      en: {
        title: "Cream Note Dessert",
        summary: "Carefully made desserts with clean flavors and polished presentation.",
        content: ["The layers and sweetness are handled with precision.", "If you enjoy delicate dessert styles, this one deserves a place on your list."],
      },
      ja: {
        title: "Cream Note Dessert",
        summary: "繊細で上品な味わいのデザートを楽しみたいときに合うお店です。",
        content: ["味の重なり方が丁寧で、甘さもほどよく整っています。", "繊細なタイプのスイーツが好きなら、ぜひ候補に入れたい一軒です。"],
      },
    },
  },
];

export const views: PlaceItem[] = [
  {
    slug: "daan-city-walk",
    location: { zh: "台北大安", en: "Da'an, Taipei", ja: "台北・大安" },
    category: "city",
    tags: { zh: ["散步", "街區", "半日行程"], en: ["Walk", "Neighborhood", "Half-day trip"], ja: ["散歩", "街区", "半日コース"] },
    highlights: {
      zh: ["步行友善", "沿途店家豐富", "隨時可調整節奏"],
      en: ["Easy to walk", "Lots of stops along the way", "Flexible pace"],
      ja: ["歩きやすい", "立ち寄り先が多い", "気分に合わせて調整しやすい"],
    },
    translations: {
      zh: {
        title: "大安散步路線",
        summary: "適合半日散步的城市路線，咖啡、街景與小店密度都很高。",
        content: ["這條路線適合沒有特定目的地，只想在城市裡慢慢移動的日子。", "沿路可以彈性安排咖啡店、選物店和小型展覽空間。"],
      },
      en: {
        title: "Da'an City Walk",
        summary: "A half-day city route with cafes, street scenes, and lots of small stops.",
        content: ["This route works well when you do not want a strict destination and just want to move slowly through the city.", "You can easily mix in cafes, shops, and small exhibition spaces along the way."],
      },
      ja: {
        title: "大安街歩きルート",
        summary: "カフェや街並み、小さなお店が密集した、半日向きの散歩コースです。",
        content: ["特定の目的地を決めず、街の中をゆっくり移動したい日にちょうどいいルートです。", "途中でカフェ、セレクトショップ、小さな展示空間を自由に組み合わせられます。"],
      },
    },
  },
  {
    slug: "northeast-coast-view",
    location: { zh: "新北東北角", en: "Northeast Coast, New Taipei", ja: "新北・東北角" },
    category: "nature",
    tags: { zh: ["海景", "兜風", "放空"], en: ["Sea view", "Drive", "Reset"], ja: ["海景", "ドライブ", "リセット"] },
    highlights: {
      zh: ["視野遼闊", "適合拍照", "移動路線順暢"],
      en: ["Wide-open view", "Good for photos", "Smooth route"],
      ja: ["視界が広い", "写真を撮りやすい", "移動の流れが良い"],
    },
    translations: {
      zh: {
        title: "東北角看海行程",
        summary: "海景開闊、節奏放慢，很適合需要切換心情的時候。",
        content: ["一路上可以把看海、停留和吃東西串成一個完整的小旅行。", "如果平常工作節奏快，這種行程會很有重置感。"],
      },
      en: {
        title: "Northeast Coast Reset Trip",
        summary: "An open coastal route that helps you slow down and reset.",
        content: ["The drive easily turns into a full mini-trip with sea views, stops, and food along the way.", "If your usual pace is fast, this kind of route feels like a clean mental reset."],
      },
      ja: {
        title: "東北角の海を見る小旅行",
        summary: "海を見ながら気分を切り替えたいときに合う、開放感のあるルートです。",
        content: ["海を見る時間、立ち寄り、食事までつなげて、小さな旅として楽しめます。", "普段の仕事のペースが速い人ほど、気持ちを切り替えやすいコースです。"],
      },
    },
  },
  {
    slug: "warehouse-exhibition-stop",
    location: { zh: "台北松山", en: "Songshan, Taipei", ja: "台北・松山" },
    category: "exhibition",
    tags: { zh: ["展覽", "空間", "設計觀察"], en: ["Exhibition", "Space", "Design watch"], ja: ["展示", "空間", "デザイン観察"] },
    highlights: {
      zh: ["場域特色強", "展覽尺度舒服", "拍照節奏好"],
      en: ["Strong spatial identity", "Comfortable exhibition scale", "Great photo rhythm"],
      ja: ["空間の個性が強い", "展示のスケール感が良い", "写真が撮りやすい"],
    },
    translations: {
      zh: {
        title: "倉庫系展覽空間",
        summary: "保留工業感的展覽空間，適合看展也適合觀察場域設計。",
        content: ["除了展覽本身，空間如何被保留與改造也很值得看。", "如果你喜歡展覽與空間設計一起被體驗，這裡會很有趣。"],
      },
      en: {
        title: "Warehouse-Style Exhibition Stop",
        summary: "An industrial-style venue that is as interesting as the exhibition inside it.",
        content: ["Beyond the show itself, the way the space has been preserved and adapted is worth paying attention to.", "If you enjoy experiencing exhibitions together with spatial design, this stop is especially rewarding."],
      },
      ja: {
        title: "倉庫系の展示空間",
        summary: "展示そのものだけでなく、空間の使い方も楽しめる工業的な会場です。",
        content: ["展示内容に加えて、空間がどう残され、どう改修されているかを見るのも面白いポイントです。", "展示と空間デザインを一緒に味わいたい人には特におすすめです。"],
      },
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getCategoryLabel(
  categories: CategoryDefinition[],
  value: string,
  locale: Locale,
) {
  return categories.find((category) => category.value === value)?.label[locale] ?? value;
}
