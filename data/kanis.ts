export interface Kani {
  name: string;
  description: string;
  tips: { title: string; content: string }[];
}
export const kanis: Kani[] = [
  {
    name: "カニ一郎",
    description: "強いカニ",
    tips: [
      { title: "強さの秘密", content: "強いから" },
      { title: "生まれ", content: "琵琶湖" }
    ]
  },
  {
    name: "カニ二郎",
    description: "さらに強いカニ",
    tips: [{ title: "生まれ", content: "太平洋" }]
  },
  {
    name: "カニ三郎",
    description: "さすらいのカニ",
    tips: []
  }
];
