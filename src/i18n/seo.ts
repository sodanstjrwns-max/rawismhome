// SEO Meta data for each language
export type Language = 'ko' | 'en' | 'ja' | 'zh';

export const supportedLanguages: Language[] = ['ko', 'en', 'ja', 'zh'];

export const seoMeta: Record<Language, {
  htmlLang: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogLocale: string;
}> = {
  ko: {
    htmlLang: 'ko',
    title: 'RAWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기 | 홍대 데이트 기념일 맛집',
    description: '서울 연남동 프리미엄 샴페인바 RAWISM The Black. 당일 도축 온도체 한우 뭉티기와 샴페인이 만나는 특별한 밤. 체온이 남아있는 신선함 그대로, 부라타 치즈와 트러플의 조화. 홍대입구역 5분, 8석 한정 예약제.',
    keywords: '연남동 샴페인바, 연남동 데이트, 연남동 기념일, 홍대 샴페인바, 홍대 데이트, 홍대 기념일 레스토랑, 한우 뭉티기, 트러플 육회, 연남동 맛집',
    ogTitle: 'RAWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기',
    ogDescription: '당일 도축 온도체 한우의 생생한 육향. 체온이 남아있는 신선함 그대로 즐기는 뭉티기와 샴페인의 만남. 홍대입구역 5분, 8석 한정 예약제.',
    ogLocale: 'ko_KR'
  },
  en: {
    htmlLang: 'en',
    title: 'RAWISM The Black | Premium Champagne Bar in Hongdae Seoul | Korean Beef Tartare',
    description: 'RAWISM The Black - Premium champagne bar in Yeonnam-dong, Seoul. Fresh same-day slaughtered Korean beef tartare (Mungti-gi) paired with champagne. Italian burrata cheese and black truffle. 5 min from Hongdae Station, 8 seats only, reservation required.',
    keywords: 'Hongdae restaurant, Yeonnam-dong restaurant, Seoul champagne bar, Korean beef tartare, Seoul date spot, Hongdae date restaurant, Seoul anniversary dinner, Seoul romantic restaurant, Korean raw beef',
    ogTitle: 'RAWISM The Black | Premium Champagne Bar in Hongdae Seoul',
    ogDescription: 'Fresh same-day slaughtered Korean beef tartare with champagne pairing. A hidden gem in Seoul\'s trendy Yeonnam-dong. 5 min from Hongdae Station.',
    ogLocale: 'en_US'
  },
  ja: {
    htmlLang: 'ja',
    title: 'RAWISM The Black | 弘大プレミアムシャンパンバー | 韓牛ムンティギ | ソウル延南洞',
    description: 'RAWISM The Black - ソウル延南洞のプレミアムシャンパンバー。当日屠畜の新鮮な韓牛タルタル（ムンティギ）とシャンパンのペアリング。イタリア産ブラータチーズとブラックトリュフ。弘大駅から徒歩5分、8席限定、要予約。',
    keywords: '弘大 レストラン, 延南洞 レストラン, ソウル シャンパンバー, 韓牛 ユッケ, ソウル デート, 弘大 デート, ソウル 記念日, 延南洞 グルメ',
    ogTitle: 'RAWISM The Black | 弘大プレミアムシャンパンバー | ソウル延南洞',
    ogDescription: '当日屠畜の新鮮な韓牛ムンティギとシャンパンのペアリング。ソウル延南洞の隠れ家。弘大駅から徒歩5分。',
    ogLocale: 'ja_JP'
  },
  zh: {
    htmlLang: 'zh',
    title: 'RAWISM The Black | 弘大高级香槟酒吧 | 韩牛生拌 | 首尔延南洞',
    description: 'RAWISM The Black - 首尔延南洞高级香槟酒吧。当日屠宰的新鲜韩牛生拌（Mungti-gi）与香槟搭配。意大利布拉塔奶酪和黑松露。弘大站步行5分钟，仅8席，需预约。',
    keywords: '弘大餐厅, 延南洞餐厅, 首尔香槟吧, 韩牛生拌, 首尔约会, 弘大约会, 首尔纪念日, 延南洞美食',
    ogTitle: 'RAWISM The Black | 弘大高级香槟酒吧 | 首尔延南洞',
    ogDescription: '当日屠宰的新鲜韩牛生拌与香槟搭配。首尔延南洞的隐藏名店。弘大站步行5分钟。',
    ogLocale: 'zh_CN'
  }
};

export function getCanonicalUrl(lang: Language, baseUrl: string = 'https://rawism.pages.dev'): string {
  if (lang === 'ko') return baseUrl;
  return `${baseUrl}/${lang}`;
}

export function getHreflangLinks(baseUrl: string = 'https://rawism.pages.dev') {
  return {
    ko: baseUrl,
    en: `${baseUrl}/en`,
    ja: `${baseUrl}/ja`,
    zh: `${baseUrl}/zh`,
    xDefault: baseUrl
  };
}
