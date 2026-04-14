import type { Locale } from "../../i18n/config";

export type FoodEntry = {
  slug: string;
  category: string;
  titleKey: string;
  summaryKey: string;
  locationKey: string;
  tagKeys: string[];
  highlightKeys: string[];
  content: Record<Locale, string[]>;
};

export const foodCategories = ["cafe", "brunch", "dessert"] as const;

export const foods: FoodEntry[] = [
  {
    slug: "slow-morning-cafe",
    category: "cafe",
    titleKey: "food.slowMorningCafe.title",
    summaryKey: "food.slowMorningCafe.summary",
    locationKey: "food.slowMorningCafe.location",
    tagKeys: [
      "food.slowMorningCafe.tags.latte",
      "food.slowMorningCafe.tags.quiet",
      "food.slowMorningCafe.tags.workFriendly",
    ],
    highlightKeys: [
      "food.slowMorningCafe.highlights.light",
      "food.slowMorningCafe.highlights.seating",
      "food.slowMorningCafe.highlights.dessert",
    ],
    content: {
      zh: [
        "這裡很適合帶電腦工作，也適合一個人安靜待著。",
        "如果你喜歡空間感和穩定的咖啡品質，這間會是很安全的選擇。",
      ],
      en: [
        "It works well both for laptop time and for a quiet solo visit.",
        "If you value atmosphere and consistent coffee quality, this is an easy recommendation.",
      ],
      ja: [
        "パソコン作業にも、一人で静かに過ごす時間にも向いています。",
        "空間の落ち着きと安定したコーヒーの品質を重視するなら、安心して選べる一軒です。",
      ],
    },
  },
  {
    slug: "green-table-brunch",
    category: "brunch",
    titleKey: "food.greenTableBrunch.title",
    summaryKey: "food.greenTableBrunch.summary",
    locationKey: "food.greenTableBrunch.location",
    tagKeys: [
      "food.greenTableBrunch.tags.brunch",
      "food.greenTableBrunch.tags.salad",
      "food.greenTableBrunch.tags.friends",
    ],
    highlightKeys: [
      "food.greenTableBrunch.highlights.balance",
      "food.greenTableBrunch.highlights.service",
      "food.greenTableBrunch.highlights.group",
    ],
    content: {
      zh: [
        "主餐和配菜的搭配完整，不只是拍照好看而已。",
        "很適合安排成週末第一站，再接著附近的散步或逛街行程。",
      ],
      en: [
        "The plates feel complete, not just visually appealing for photos.",
        "It works nicely as the first stop of a slow weekend plan.",
      ],
      ja: [
        "メインと付け合わせのバランスがよく、見た目だけで終わらない満足感があります。",
        "週末の最初の予定として入れて、その後に散歩や買い物をつなげる流れにも合います。",
      ],
    },
  },
  {
    slug: "cream-note-dessert",
    category: "dessert",
    titleKey: "food.creamNoteDessert.title",
    summaryKey: "food.creamNoteDessert.summary",
    locationKey: "food.creamNoteDessert.location",
    tagKeys: [
      "food.creamNoteDessert.tags.dessert",
      "food.creamNoteDessert.tags.cake",
      "food.creamNoteDessert.tags.teaTime",
    ],
    highlightKeys: [
      "food.creamNoteDessert.highlights.flavor",
      "food.creamNoteDessert.highlights.presentation",
      "food.creamNoteDessert.highlights.seasonal",
    ],
    content: {
      zh: [
        "甜點層次做得很細，甜度也控制得剛好。",
        "如果你偏好精緻路線的甜點，這家很值得先收進清單。",
      ],
      en: [
        "The layers and sweetness are handled with precision.",
        "If you enjoy delicate dessert styles, this one deserves a place on your list.",
      ],
      ja: [
        "味の重なり方が丁寧で、甘さもほどよく整っています。",
        "繊細なタイプのスイーツが好きなら、先に候補へ入れておきたい一軒です。",
      ],
    },
  },
];
