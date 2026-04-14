export type Category = {
  label: string;
  value: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  category: string;
  stack: string[];
  highlights: string[];
  content: string[];
  featured?: boolean;
  link?: string;
};

export type PlaceItem = {
  slug: string;
  title: string;
  summary: string;
  location: string;
  category: string;
  tags: string[];
  highlights: string[];
  content: string[];
};

export const profile = {
  name: "侯家燊(Ethan)",
  title: "具AI技術充滿好奇心的軟體研發工程師",
  intro:
    "這裡是我的個人網站，集中整理我最重要的專案、個人背景，以及我記錄的美食與景點。",
  about: [
    "我喜歡把做過的事整理成清楚可讀的內容，讓作品、想法與生活紀錄都能被快速理解。",
    "網站會分成個人介紹、專案、美食與景點四個主軸，未來也可以持續擴充更多分類。",
  ],
  focusAreas: ["產品研發", "內容架構整理", "個人品牌", "旅遊與生活紀錄"],
  contact: {
    email: "ethanhou19990913@gmail.com",
    location: "Hsinchu, Taiwan",
  },
};

export const projectCategories: Category[] = [
  { label: "精選專案", value: "featured" },
  { label: "網站設計", value: "web" },
  { label: "內容企劃", value: "content" },
  { label: "品牌整理", value: "branding" },
];

export const foodCategories: Category[] = [
  { label: "咖啡廳", value: "cafe" },
  { label: "早午餐", value: "brunch" },
  { label: "甜點", value: "dessert" },
];

export const viewCategories: Category[] = [
  { label: "城市散步", value: "city" },
  { label: "山海景點", value: "nature" },
  { label: "展覽空間", value: "exhibition" },
];

export const projects: ProjectItem[] = [
  {
    slug: "personal-brand-site",
    title: "個人品牌網站重構",
    summary: "把個人介紹、作品與生活內容整合成一致的內容架構與瀏覽體驗。",
    year: "2026",
    role: "企劃 / 設計 / 前端整合",
    category: "featured",
    stack: ["Astro", "TypeScript", "Content Strategy"],
    highlights: [
      "重新定義首頁到內容頁的資訊層級",
      "把專案與生活內容整理成可延展的分類架構",
      "讓後續新增內容只需修改資料檔",
    ],
    content: [
      "這個專案的核心是把分散的自我介紹、作品展示和生活記錄整合成單一網站。",
      "我希望首頁能快速建立印象，About 承載最重要的背景與精選專案，其餘內容則分流到各自列表頁與詳情頁。",
      "這種設計也讓之後的內容擴充更輕鬆，例如新增不同專案類型、更多美食分類或旅遊主題。",
    ],
    featured: true,
  },

  {
    slug: "content-system-playbook",
    title: "內容系統整理計畫",
    summary: "建立一套能管理專案、文章與生活紀錄的內容欄位與分類規則。",
    year: "2025",
    role: "資訊架構 / 編輯策略",
    category: "content",
    stack: ["Information Architecture", "Editorial Design"],
    highlights: [
      "定義 slug、分類與摘要欄位",
      "讓列表與詳情頁能共用資料格式",
      "降低日後維護成本",
    ],
    content: [
      "當內容量開始增加，單靠單頁式網站很難維持清晰度。",
      "這個計畫聚焦在資料結構的設計，確保每個內容類型都有一致欄位與明確分類邏輯。",
    ],
  },

  {
    slug: "portfolio-storytelling",
    title: "作品集敘事優化",
    summary: "把專案描述從功能清單改為更容易理解的故事與成果脈絡。",
    year: "2025",
    role: "內容策劃",
    category: "branding",
    stack: ["Narrative Design", "Content Writing"],
    highlights: [
      "強化每個專案的背景、目標與成果",
      "提升閱讀者快速理解的效率",
    ],
    content: [
      "好的作品集不是列功能，而是讓人理解你如何思考、如何推進事情。",
      "這個專案重新整理描述方式，讓每個案例都更像一段完整而有說服力的敘事。",
    ],
  },
  
];

export const foods: PlaceItem[] = [
  {
    slug: "slow-morning-cafe",
    title: "Slow Morning Cafe",
    summary: "適合久坐整理思緒的咖啡廳，光線柔和、空間安靜。",
    location: "台北中山",
    category: "cafe",
    tags: ["拿鐵", "安靜", "適合工作"],
    highlights: ["店內採光舒服", "座位間距寬敞", "甜點表現穩定"],
    content: [
      "這裡很適合帶電腦來工作，也適合一個人安靜待著。",
      "如果你喜歡空間感和穩定的咖啡品質，這間會是安全選擇。",
    ],
  },
  {
    slug: "green-table-brunch",
    title: "Green Table Brunch",
    summary: "份量足、節奏舒服的早午餐店，適合假日慢慢吃。",
    location: "台北大安",
    category: "brunch",
    tags: ["早午餐", "沙拉", "朋友聚餐"],
    highlights: ["餐點均衡", "服務節奏舒服", "適合聚會"],
    content: [
      "主餐與配菜的搭配完整，不會只有拍照好看而已。",
      "很適合安排成週末的第一站，再接續附近行程。",
    ],
  },
  {
    slug: "cream-note-dessert",
    title: "Cream Note Dessert",
    summary: "甜點細節精緻，味道乾淨，適合想吃精巧系甜點的時候。",
    location: "台北信義",
    category: "dessert",
    tags: ["甜點", "蛋糕", "下午茶"],
    highlights: ["口味平衡", "擺盤乾淨", "季節限定有驚喜"],
    content: [
      "甜點層次做得很細，甜度也控制得剛好。",
      "如果喜歡偏精緻路線的甜點，這家很值得收進清單。",
    ],
  },
];

export const views: PlaceItem[] = [
  {
    slug: "daan-city-walk",
    title: "大安散步路線",
    summary: "適合半日散步的城市路線，咖啡、街景與小店密度都很高。",
    location: "台北大安",
    category: "city",
    tags: ["散步", "街區", "半日行程"],
    highlights: ["步行友善", "沿途店家豐富", "隨時可調整節奏"],
    content: [
      "這條路線適合沒有特定目的地，只想在城市裡慢慢移動的日子。",
      "沿路可彈性安排咖啡店、選物店和小型展覽空間。",
    ],
  },
  {
    slug: "northeast-coast-view",
    title: "東北角看海行程",
    summary: "海景開闊、節奏放慢，很適合需要切換心情的時候。",
    location: "新北東北角",
    category: "nature",
    tags: ["海景", "兜風", "放空"],
    highlights: ["視野遼闊", "適合拍照", "移動路線順暢"],
    content: [
      "一路上可以把看海、停留和吃東西串成一個完整的小旅行。",
      "如果平常工作節奏快，這種行程會很有重置感。",
    ],
  },
  {
    slug: "warehouse-exhibition-stop",
    title: "倉庫系展覽空間",
    summary: "保留工業感的展覽空間，適合看展也適合觀察場域設計。",
    location: "台北松山",
    category: "exhibition",
    tags: ["展覽", "空間", "設計觀察"],
    highlights: ["場域特色強", "展覽尺度舒服", "拍照節奏好"],
    content: [
      "除了展覽本身，空間如何被保留與改造也很值得看。",
      "如果你喜歡展覽與空間設計一起被體驗，這裡會很有趣。",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
