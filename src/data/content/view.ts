import type { Locale } from "../../i18n/config";

export type ViewEntry = {
  slug: string;
  category: string;
  titleKey: string;
  summaryKey: string;
  locationKey: string;
  tagKeys: string[];
  highlightKeys: string[];
  content: Record<Locale, string[]>;
};

export const viewCategories = ["city", "nature", "exhibition"] as const;

export const views: ViewEntry[] = [
  {
    slug: "daan-city-walk",
    category: "city",
    titleKey: "view.daanCityWalk.title",
    summaryKey: "view.daanCityWalk.summary",
    locationKey: "view.daanCityWalk.location",
    tagKeys: [
      "view.daanCityWalk.tags.walk",
      "view.daanCityWalk.tags.neighborhood",
      "view.daanCityWalk.tags.halfDay",
    ],
    highlightKeys: [
      "view.daanCityWalk.highlights.walkable",
      "view.daanCityWalk.highlights.stops",
      "view.daanCityWalk.highlights.flexible",
    ],
    content: {
      zh: [
        "這條路線很適合沒有明確目的地，只想慢慢在城市裡移動的時候。",
        "沿途很容易自然穿插咖啡店、選物店與小型展覽空間。",
      ],
      en: [
        "This route works well when you do not want a strict destination and just want to move slowly through the city.",
        "You can easily mix in cafes, shops, and small exhibition spaces along the way.",
      ],
      ja: [
        "このルートは、はっきりした目的地を決めずに、街の中をゆっくり歩きたい日に向いています。",
        "途中でカフェやショップ、小さな展示空間を自然に組み合わせやすいのも魅力です。",
      ],
    },
  },
  {
    slug: "northeast-coast-view",
    category: "nature",
    titleKey: "view.northeastCoastView.title",
    summaryKey: "view.northeastCoastView.summary",
    locationKey: "view.northeastCoastView.location",
    tagKeys: [
      "view.northeastCoastView.tags.sea",
      "view.northeastCoastView.tags.drive",
      "view.northeastCoastView.tags.reset",
    ],
    highlightKeys: [
      "view.northeastCoastView.highlights.open",
      "view.northeastCoastView.highlights.photo",
      "view.northeastCoastView.highlights.route",
    ],
    content: {
      zh: [
        "這趟路線很容易一路延伸成小旅行，沿途有海景、停靠點和吃飯選擇。",
        "如果最近生活節奏太快，這種移動方式會很像一次乾淨的重開機。",
      ],
      en: [
        "The drive easily turns into a full mini-trip with sea views, stops, and food along the way.",
        "If your usual pace is fast, this kind of route feels like a clean mental reset.",
      ],
      ja: [
        "このドライブは海景色や立ち寄り先、食事どころも多く、そのまま小さな旅に広がっていきます。",
        "普段のペースが速いほど、こういう移動は気持ちをきれいにリセットする時間になります。",
      ],
    },
  },
  {
    slug: "warehouse-exhibition-stop",
    category: "exhibition",
    titleKey: "view.warehouseExhibitionStop.title",
    summaryKey: "view.warehouseExhibitionStop.summary",
    locationKey: "view.warehouseExhibitionStop.location",
    tagKeys: [
      "view.warehouseExhibitionStop.tags.exhibition",
      "view.warehouseExhibitionStop.tags.space",
      "view.warehouseExhibitionStop.tags.design",
    ],
    highlightKeys: [
      "view.warehouseExhibitionStop.highlights.identity",
      "view.warehouseExhibitionStop.highlights.scale",
      "view.warehouseExhibitionStop.highlights.photo",
    ],
    content: {
      zh: [
        "除了展覽本身，空間被保留下來並重新使用的方式也很值得看。",
        "如果你喜歡把展覽內容和空間設計一起感受，這一站會特別有收穫。",
      ],
      en: [
        "Beyond the show itself, the way the space has been preserved and adapted is worth paying attention to.",
        "If you enjoy experiencing exhibitions together with spatial design, this stop is especially rewarding.",
      ],
      ja: [
        "展示そのものだけでなく、空間が保存され、別の形で使われていること自体にも見る価値があります。",
        "展示内容と空間設計をあわせて味わいたい人には、特に満足度の高い立ち寄り先です。",
      ],
    },
  },
];
