const TRAITS = [
  "style",
  "practical",
  "classic",
  "modern",
  "elegant",
  "rugged",
  "unique",
  "professional",
  "mechanical",
  "compact",
  "experimental",
];

const questions = [
  {
    title: "持つなら？",
    subtitle: "そのキャラが拳銃を選ぶ時、一番大事にしそうなのは？",
    answers: [
      {
        text: "見た瞬間にかっこいいと思えるもの",
        scores: { style: 3, elegant: 2, unique: 1 }
      },
      {
        text: "見た目と実用性の両方",
        scores: { style: 2, practical: 2, professional: 1 }
      },
      {
        text: "飾り気より、信頼できる道具",
        scores: { practical: 3, rugged: 2, professional: 2 }
      },
    ],
  },
  {
    title: "普段の服装は？",
    subtitle: "キャラクターの外見全体に近いものを選んでください。",
    answers: [
      {
        text: "仕立てのいい服、モード、ドレス寄り",
        scores: { elegant: 3, style: 2, classic: 1 }
      },
      {
        text: "現代的で機能的",
        scores: { modern: 3, practical: 2, professional: 1 }
      },
      {
        text: "ラフ、ワークウェア、無骨",
        scores: { rugged: 3, practical: 2 }
      },
      {
        text: "かなり個性的。人と被らない",
        scores: { unique: 3, style: 2, experimental: 1 }
      },
    ],
  },
  {
    title: "道具の時代感は？",
    subtitle: "そのキャラが自然に惹かれそうなのは？",
    answers: [
      {
        text: "新しい設計、現代的なもの",
        scores: { modern: 3, practical: 1, experimental: 1 }
      },
      {
        text: "新旧より、完成度が高いもの",
        scores: { practical: 3, professional: 2 }
      },
      {
        text: "歴史や古さを感じるもの",
        scores: { classic: 3, mechanical: 1, elegant: 1 }
      },
    ],
  },
  {
    title: "変わった機構を見つけたら？",
    subtitle: "珍しい構造や、普通ではない設計への反応です。",
    answers: [
      {
        text: "面白い。仕組みまで知りたくなる",
        scores: { mechanical: 3, unique: 2, experimental: 3 }
      },
      {
        text: "理由があるなら好き",
        scores: { practical: 2, mechanical: 2, experimental: 1 }
      },
      {
        text: "実績のある普通の構造でいい",
        scores: { practical: 3, professional: 2, experimental: 0 }
      },
    ],
  },
  {
    title: "定番と珍品なら？",
    subtitle: "他人と同じものを持つことをどう感じますか？",
    answers: [
      {
        text: "定番には定番の理由がある",
        scores: { practical: 2, professional: 2, unique: 0 }
      },
      {
        text: "似合えばどちらでもいい",
        scores: { style: 1, practical: 1, elegant: 1, unique: 1 }
      },
      {
        text: "少し変わったものを選びたい",
        scores: { unique: 3, mechanical: 1, style: 1, experimental: 1 }
      },
      {
        text: "普通すぎると物足りない",
        scores: { unique: 3, style: 2, experimental: 3 }
      },
    ],
  },
  {
    title: "物語での立ち位置は？",
    subtitle: "職業名より、その人物がどう動くかで選んでください。",
    answers: [
      {
        text: "規律ある組織に属するプロ",
        scores: { professional: 3, practical: 2, modern: 1 }
      },
      {
        text: "独立して動く仕事人",
        scores: { professional: 2, style: 1, unique: 1 }
      },
      {
        text: "普段は武器を持たない。必要な時だけ使う",
        scores: { compact: 3, practical: 2 }
      },
      {
        text: "アウトロー、反体制、危うい人物",
        scores: { unique: 2, rugged: 2, style: 1, experimental: 1 }
      },
    ],
  },
  {
    title: "戦う時の印象は？",
    subtitle: "強さではなく、見ている側が受ける雰囲気です。",
    answers: [
      {
        text: "スマートで無駄がない",
        scores: { elegant: 2, professional: 3, modern: 1 }
      },
      {
        text: "冷静で堅実",
        scores: { practical: 3, professional: 2 }
      },
      {
        text: "荒っぽいが頼れる",
        scores: { rugged: 3, practical: 1 }
      },
      {
        text: "何をするか読めない",
        scores: { unique: 3, style: 1, experimental: 2 }
      },
    ],
  },
  {
    title: "素材感は？",
    subtitle: "そのキャラの持ち物として、しっくりくる質感は？",
    answers: [
      {
        text: "金属の重厚感や機械らしさ",
        scores: { classic: 2, mechanical: 3, elegant: 1 }
      },
      {
        text: "樹脂や新素材の機能的な感じ",
        scores: { modern: 3, practical: 2, professional: 1 }
      },
      {
        text: "変わった形や異質な組み合わせ",
        scores: { unique: 3, experimental: 3, style: 2 }
      },
      {
        text: "素材より、全体の似合い方が大事",
        scores: { style: 1, practical: 1, elegant: 1 }
      },
    ],
  },
  {
    title: "道具への愛着は？",
    subtitle: "拳銃以外の持ち物について考えてみてください。",
    answers: [
      {
        text: "かなりある。手入れや構造も好き",
        scores: { mechanical: 3, classic: 2, style: 1 }
      },
      {
        text: "気に入ったものなら長く使う",
        scores: { practical: 2, mechanical: 1, elegant: 1 }
      },
      {
        text: "仕事ができればそれでいい",
        scores: { practical: 3, professional: 3, modern: 1 }
      },
      {
        text: "道具そのものを収集したくなる",
        scores: { mechanical: 2, unique: 2, classic: 1, experimental: 2 }
      },
    ],
  },
  {
    title: "珍しいものなら、どちら？",
    subtitle: "珍品を選ぶとして、より惹かれる方向を選んでください。",
    answers: [
      {
        text: "未来的で、見たことのない設計",
        scores: { modern: 3, unique: 2, experimental: 3, mechanical: 1 }
      },
      {
        text: "古くて、今ではまず見ない奇妙な道具",
        scores: { classic: 3, unique: 2, experimental: 3, mechanical: 2 }
      },
      {
        text: "珍しいこと自体には興味がない",
        scores: { practical: 3, professional: 2, experimental: 0 }
      },
    ],
  },
  {
    title: "大きさとシルエットは？",
    subtitle: "キャラクターデザインとして持たせたい印象です。",
    answers: [
      {
        text: "小さめで控えめ",
        scores: { compact: 3, practical: 2 }
      },
      {
        text: "一般的な拳銃らしいバランス",
        scores: { practical: 2, professional: 2 }
      },
      {
        text: "大きくても、形に個性がある方がいい",
        scores: { style: 2, unique: 2, rugged: 1, experimental: 2 }
      },
    ],
  },
  {
    title: "最後に、一言で選ぶなら？",
    subtitle: "そのキャラに持たせたい雰囲気を直感で。",
    answers: [
      {
        text: "美しい",
        scores: { elegant: 3, style: 3 }
      },
      {
        text: "信頼できる",
        scores: { practical: 3, professional: 3 }
      },
      {
        text: "古くても格好いい",
        scores: { classic: 3, mechanical: 2 }
      },
      {
        text: "普通じゃない",
        scores: { unique: 3, experimental: 3, style: 1 }
      },
      {
        text: "静かで目立たない",
        scores: { compact: 3, practical: 2 }
      },
    ],
  },
];

const guns = [
  {
    name: "Colt Python",
    jaName: "コルト・パイソン",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/ColtPython.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:ColtPython.jpg",
    imageCredit: "Sf46",
    imageLicense: "Public Domain",
    imageNote: "",
    traits: {
      style: 5, practical: 2.2, classic: 5, modern: 1, elegant: 5,
      rugged: 3, unique: 3.5, professional: 1.5, mechanical: 4, compact: 1,
      experimental: 1
    },
    tags: ["クラシック", "高級感", "存在感"],
    copy: "古典的な美しさと強い存在感を持つ人物に似合う一丁。",
    detail: "端正で華やかな外観を持つリボルバーです。実用品としての無難さより、完成された造形や威厳を重視するキャラクターに向きます。落ち着きがありながら、持ち物には明確なこだわりがある人物と相性がよいでしょう。",
  },
  {
    name: "Beretta 92FS Inox",
    jaName: "ベレッタ 92FS イノックス",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Beretta_92_FSi.JPG",
    imageSource: "https://commons.wikimedia.org/wiki/File:Beretta_92_FSi.JPG",
    imageCredit: "Prnrm",
    imageLicense: "CC BY-SA 3.0",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    imageNote: "",
    traits: {
      style: 5, practical: 3, classic: 3.5, modern: 3, elegant: 5,
      rugged: 1, unique: 3, professional: 3, mechanical: 4, compact: 1.5,
      experimental: 1
    },
    tags: ["華やか", "洗練", "存在感"],
    copy: "実用性を保ちながら、隠しきれない華やかさがある人物向け。",
    detail: "92FSの端正さに、さらに視覚的な存在感を足したタイプです。衣装や小物まで含めて見せ方を意識するキャラクターに似合います。",
  },
  {
    name: "Glock 17",
    jaName: "グロック 17",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Glock_17.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Glock_17.jpg",
    imageCredit: "Jmajonis",
    imageLicense: "CC BY-SA 3.0",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    imageNote: "",
    traits: {
      style: 1, practical: 5, classic: 1, modern: 5, elegant: 1,
      rugged: 3, unique: 1, professional: 5, mechanical: 1, compact: 2.5,
      experimental: 0.5
    },
    tags: ["合理的", "現代的", "実務派"],
    copy: "道具は道具、と割り切れる合理主義者に似合います。",
    detail: "装飾性よりも簡潔さと実務的な印象が強いタイプです。目立つことに価値を置かず、必要な仕事を確実にこなすキャラクターと相性がよいでしょう。",
  },
  {
    name: "H&K USP",
    jaName: "H&K USP",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/First-year_H%26K_USP_9mm_%2832415150000%29_modified.png",
    imageSource: "https://commons.wikimedia.org/wiki/File:First-year_H%26K_USP_9mm_(32415150000)_modified.png",
    imageCredit: "lifesizepotato / JayCoop",
    imageLicense: "CC0 1.0",
    imageLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    imageNote: "",
    traits: {
      style: 2, practical: 5, classic: 2, modern: 4, elegant: 1,
      rugged: 5, unique: 2, professional: 5, mechanical: 3, compact: 1.5,
      experimental: 1
    },
    tags: ["無骨", "堅実", "プロフェッショナル"],
    copy: "無駄に飾らず、仕事道具としての説得力を重視する人物向け。",
    detail: "大ぶりで無骨な印象があり、華美ではありません。冷静な工作員、警備要員、寡黙なプロなど、道具に信頼性と確かな存在感を求めるキャラクターに向きます。",
  },
  {
    name: "SIG Sauer P226",
    jaName: "SIG ザウエル P226",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Sig_Sauer_P226.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Sig_Sauer_P226.jpg",
    imageCredit: "Bruce Varner (Btvarner)",
    imageLicense: "CC BY-SA 3.0",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    imageNote: "",
    traits: {
      style: 3, practical: 5, classic: 3, modern: 3.5, elegant: 4,
      rugged: 3, unique: 2, professional: 5, mechanical: 3, compact: 1.5,
      experimental: 1
    },
    tags: ["上質", "堅実", "正統派"],
    copy: "真面目で隙がなく、それでいて品のある人物に似合います。",
    detail: "実務的な説得力が強い一方で、無骨一辺倒ではないタイプです。職人気質、高い訓練度、落ち着いた自信を持つキャラクターに合わせやすいでしょう。",
  },
  {
    name: "Walther P99",
    jaName: "ワルサー P99",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Walther_P99.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Walther_P99.jpg",
    imageCredit: "U.S. Bureau of Alcohol, Tobacco, Firearms and Explosives",
    imageLicense: "Public Domain",
    imageNote: "",
    traits: {
      style: 4, practical: 4, classic: 1, modern: 5, elegant: 4,
      rugged: 2, unique: 3, professional: 4, mechanical: 2.5, compact: 2.5,
      experimental: 2
    },
    tags: ["スマート", "現代的", "ひと癖"],
    copy: "端正なのに少し変わっている、知的な人物に似合うタイプ。",
    detail: "現代的で滑らかな雰囲気を持ちつつ、定番一辺倒ではない個性があります。合理的なのに趣味性もあり、知的で少し癖のあるキャラクターに向いています。",
  },
  {
    name: "CZ 75",
    jaName: "CZ 75",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Cz75.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Cz75.jpg",
    imageCredit: "Jason9811",
    imageLicense: "CC BY-SA 2.5",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/",
    imageNote: "",
    traits: {
      style: 4, practical: 4, classic: 4, modern: 2, elegant: 4,
      rugged: 2, unique: 2.5, professional: 3, mechanical: 4.5, compact: 2,
      experimental: 1.5
    },
    tags: ["通好み", "機械美", "控えめ"],
    copy: "目立つためではなく、自分の趣味で良いものを選ぶ人物向け。",
    detail: "古典的な美しさと機械的な魅力がありながら、過剰な自己主張はしません。道具に詳しい人物、静かなこだわりを持つ人物に似合います。",
  },
  {
    name: "M1911",
    jaName: "M1911",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/M1911_pistol.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:M1911_pistol.jpg",
    imageCredit: "Ecrelin",
    imageLicense: "CC0 1.0",
    imageLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    imageNote: "",
    traits: {
      style: 5, practical: 3.2, classic: 5, modern: 1, elegant: 4,
      rugged: 4, unique: 3, professional: 3, mechanical: 5, compact: 1.5,
      experimental: 1
    },
    tags: ["古典", "様式美", "強いこだわり"],
    copy: "古いものを古いからこそ愛せる、信念の強い人物に似合います。",
    detail: "歴史性と象徴性が非常に強いタイプです。最新性よりも伝統、手触り、形式を重視するキャラクターに向きます。",
  },
  {
    name: "Browning Hi-Power",
    jaName: "ブローニング・ハイパワー",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/FN_Hi_Power.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:FN_Hi_Power.jpg",
    imageCredit: "U.S. Bureau of Alcohol, Tobacco, Firearms and Explosives",
    imageLicense: "Public Domain",
    imageNote: "",
    traits: {
      style: 4, practical: 3.5, classic: 5, modern: 1.5, elegant: 5,
      rugged: 2, unique: 3, professional: 3, mechanical: 4, compact: 2,
      experimental: 1
    },
    tags: ["古典的", "優雅", "抑制"],
    copy: "クラシックが好きでも、過剰な主張は好まない人物に。",
    detail: "古典的な輪郭と端正さがあり、落ち着いた印象です。伝統を好みながらも、大げさな演出を必要としないキャラクターに合わせやすいでしょう。",
  },
  {
    name: "Walther PPK",
    jaName: "ワルサー PPK",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Das_walther_ppk.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Das_walther_ppk.jpg",
    imageCredit: "Jaikuma",
    imageLicense: "CC BY-SA 3.0",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    imageNote: "",
    traits: {
      style: 4.5, practical: 3, classic: 5, modern: 1, elegant: 5,
      rugged: 1, unique: 2.5, professional: 2.5, mechanical: 3, compact: 5,
      experimental: 1
    },
    tags: ["小型", "クラシック", "洗練"],
    copy: "目立ちすぎず、古典的な洗練を持つ人物に似合います。",
    detail: "小型で端正なシルエットを持つクラシックな一丁です。派手さよりも品のある存在感や携帯しやすいサイズ感を好むキャラクターに向きます。落ち着いた服装や、控えめながら持ち物にはこだわる人物とも相性がよいでしょう。",
  },
  {
    name: "Desert Eagle",
    jaName: "デザートイーグル",
    image: "https://images.unsplash.com/photo-1681680020165-6b6f7af3c6ce?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
    imageSource: "https://unsplash.com/photos/a-close-up-of-a-gun-on-a-black-surface-MsdDbOUTiu4",
    imageSourceName: "Unsplash",
    imageCredit: "Thomas Tucker",
    imageLicense: "Unsplash License",
    imageLicenseUrl: "https://unsplash.com/license",
    imageNote: "",
    traits: {
      style: 5, practical: 1, classic: 2, modern: 2.5, elegant: 1,
      rugged: 5, unique: 5, professional: 1, mechanical: 5, compact: 0,
      experimental: 3
    },
    tags: ["強烈", "派手", "ロマン"],
    copy: "合理性よりも存在感。持つだけで画面の印象を大きく変える人物向け。",
    detail: "視覚的なインパクトが非常に強く、実務的な無難さよりキャラクター性を前面に出すタイプです。派手好き、怪力、誇張された悪役などに向きます。",
  },
  {
    name: "FN Five-seveN",
    jaName: "FN ファイブセブン",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/FN_Five_Seven.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:FN_Five_Seven.jpg",
    imageCredit: "U.S. Bureau of Alcohol, Tobacco, Firearms and Explosives",
    imageLicense: "Public Domain",
    imageNote: "",
    traits: {
      style: 3, practical: 4, classic: 1, modern: 5, elegant: 2,
      rugged: 2, unique: 4.5, professional: 4, mechanical: 2.5, compact: 2,
      experimental: 2
    },
    tags: ["現代的", "特殊", "理屈派"],
    copy: "普通ではない理由を、きちんと説明できる人物に似合います。",
    detail: "現代的で独特な立ち位置を持つため、単なる奇抜さよりも『選ぶ理由がある』キャラクターに向きます。専門知識のある人物や合理的な変わり者と好相性です。",
  },
  {
    name: "Ruger P85",
    jaName: "ルガー P85",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Ruger_P89.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Ruger_P89.jpg",
    imageCredit: "U.S. Bureau of Alcohol, Tobacco, Firearms and Explosives",
    imageLicense: "Public Domain",
    imageNote: "※ P85の同系列であるRuger P89の参考画像",
    traits: {
      style: 1, practical: 5, classic: 3, modern: 2, elegant: 1,
      rugged: 5, unique: 1.5, professional: 3.5, mechanical: 3, compact: 1.5,
      experimental: 1
    },
    tags: ["地味", "頑丈", "実用品"],
    copy: "華やかさより、頑丈さと実直さを好む人物向け。",
    detail: "洗練された見栄えを競うというより、無骨で実直な印象を持つタイプです。実用品に妙な愛着を持つ人物や、飾らない性格のキャラクターに似合います。",
  },
  {
    name: "Kel-Tec P50",
    jaName: "ケルテック P50",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Lel-Kek_P50.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Lel-Kek_P50.jpg",
    imageCredit: "east718",
    imageLicense: "CC BY-SA 4.0",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    imageNote: "※ ブレース、光学照準器、ライト装着個体。Commons上の現行版はHohumによる色調調整あり",
    rare: "modern_oddity",
    traits: {
      style: 4, practical: 2.5, classic: 0, modern: 5, elegant: 1,
      rugged: 3, unique: 5, professional: 2, mechanical: 5, compact: 0,
      experimental: 5
    },
    tags: ["異色", "未来的", "変則設計"],
    copy: "普通の拳銃という枠にこだわらない、現代的な変わり者に。",
    detail: "新しい機構や変則的な設計そのものに魅力を感じるキャラクター向けです。単に目立ちたいのではなく、『なぜこんな構造なのか』まで面白がれる人物に似合います。",
  },
  {
    name: "Apache Revolver",
    jaName: "アパッチ・リボルバー",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Apache_revolver.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Apache_revolver.jpg",
    imageCredit: "Latente",
    imageLicense: "CC BY-SA 2.0",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    imageNote: "",
    rare: "antique_oddity",
    traits: {
      style: 4, practical: 0.5, classic: 5, modern: 0, elegant: 1,
      rugged: 4, unique: 5, professional: 0.5, mechanical: 5, compact: 3,
      experimental: 5
    },
    tags: ["珍品", "古典", "異様な機構"],
    copy: "古い珍品や奇妙な複合道具そのものに惹かれる人物向け。",
    detail: "通常の拳銃らしさより、歴史的な珍しさや奇妙な構造に価値を感じるキャラクターに似合います。骨董品、収集癖、危うい趣味性を持つ人物なら特に自然です。",
  },
];

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const nameInput = document.querySelector("#name-input");
const nameSlot = document.querySelector(".name-slot");
const nameError = document.querySelector("#name-error");
const startButton = document.querySelector("#start-button");

const questionTitle = document.querySelector("#question-title");
const questionSubtitle = document.querySelector("#question-subtitle");
const answersEl = document.querySelector("#answers");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const backButton = document.querySelector("#back-button");

const resultFor = document.querySelector("#result-for");
const resultTitle = document.querySelector("#result-title");
const resultTitleJa = document.querySelector("#result-title-ja");
const resultGunImage = document.querySelector("#result-gun-image");
const resultImageFigure = document.querySelector("#result-image-figure");
const resultImageCredit = document.querySelector("#result-image-credit");
const resultTags = document.querySelector("#result-tags");
const traitMeters = document.querySelector("#trait-meters");
const matchScore = document.querySelector("#match-score");
const matchBar = document.querySelector("#match-bar");
const resultCopy = document.querySelector("#result-copy");
const resultDetail = document.querySelector("#result-detail");
const retryButton = document.querySelector("#retry-button");
const copyButton = document.querySelector("#copy-button");
const copyStatus = document.querySelector("#copy-status");

let characterName = "";
let currentQuestion = 0;
let selectedAnswers = [];
let totals = emptyScore();

function emptyScore() {
  return Object.fromEntries(TRAITS.map((trait) => [trait, 0]));
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function normalizeName(value) {
  return value.trim().replace(/\s+/g, " ");
}

nameInput.addEventListener("input", () => {
  const name = normalizeName(nameInput.value);
  if (nameSlot) nameSlot.textContent = name || "[名前を入力]";
  nameError.textContent = "";
});

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") startQuiz();
});

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  characterName = normalizeName(nameInput.value);

  if (!characterName) {
    nameError.textContent = "キャラクター名を入力してください。";
    nameInput.focus();
    return;
  }

  currentQuestion = 0;
  selectedAnswers = [];
  totals = emptyScore();
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  questionTitle.textContent = question.title;
  questionSubtitle.textContent = question.subtitle;
  progressLabel.textContent =
    `${String(currentQuestion + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;

  backButton.disabled = currentQuestion === 0;
  answersEl.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer.text;
    button.addEventListener("click", () => selectAnswer(index));
    answersEl.appendChild(button);
  });
}

function selectAnswer(answerIndex) {
  const answer = questions[currentQuestion].answers[answerIndex];
  selectedAnswers[currentQuestion] = answerIndex;

  for (const [trait, value] of Object.entries(answer.scores)) {
    totals[trait] += value;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

backButton.addEventListener("click", () => {
  if (currentQuestion === 0) return;

  const previousIndex = currentQuestion - 1;
  const previousAnswerIndex = selectedAnswers[previousIndex];

  if (previousAnswerIndex !== undefined) {
    const previousAnswer = questions[previousIndex].answers[previousAnswerIndex];

    for (const [trait, value] of Object.entries(previousAnswer.scores)) {
      totals[trait] -= value;
    }

    selectedAnswers[previousIndex] = undefined;
  }

  currentQuestion = previousIndex;
  renderQuestion();
});

// 各軸は質問ごとの最大加点量が異なるため、0〜5へ正規化してから拳銃と比較する。
function getTraitMaxima() {
  const maxima = emptyScore();

  questions.forEach((question) => {
    TRAITS.forEach((trait) => {
      const best = Math.max(
        ...question.answers.map((answer) => answer.scores[trait] || 0)
      );
      maxima[trait] += best;
    });
  });

  return maxima;
}

const TRAIT_MAXIMA = getTraitMaxima();

function getProfile() {
  const profile = emptyScore();

  TRAITS.forEach((trait) => {
    const max = TRAIT_MAXIMA[trait] || 1;
    profile[trait] = Math.min(5, (totals[trait] / max) * 5);
  });

  return profile;
}

const TRAIT_WEIGHTS = {
  style: 1,
  practical: 1.1,
  classic: 1,
  modern: 1,
  elegant: 0.9,
  rugged: 0.9,
  unique: 1.1,
  professional: 0.9,
  mechanical: 1,
  compact: 0.85,
  experimental: 1.15,
};

function similarity(profile, gunTraits) {
  let dot = 0;
  let profileNorm = 0;
  let gunNorm = 0;

  TRAITS.forEach((trait) => {
    const weight = TRAIT_WEIGHTS[trait] || 1;
    const profileValue = profile[trait] || 0;
    const gunValue = gunTraits[trait] || 0;

    dot += weight * profileValue * gunValue;
    profileNorm += weight * profileValue * profileValue;
    gunNorm += weight * gunValue * gunValue;
  });

  if (profileNorm === 0 || gunNorm === 0) return 0;
  return dot / (Math.sqrt(profileNorm) * Math.sqrt(gunNorm));
}

function rareResultEligible(gun, profile) {
  if (!gun.rare) return true;

  if (gun.rare === "modern_oddity") {
    return (
      profile.experimental >= 3.3 &&
      profile.modern >= 3.0 &&
      profile.unique >= 3.0
    );
  }

  if (gun.rare === "antique_oddity") {
    return (
      profile.experimental >= 3.3 &&
      profile.classic >= 3.0 &&
      profile.unique >= 3.0 &&
      profile.mechanical >= 2.5
    );
  }

  return true;
}

function getRankedGuns() {
  const profile = getProfile();

  return guns
    .filter((gun) => rareResultEligible(gun, profile))
    .map((gun) => ({
      ...gun,
      similarity: similarity(profile, gun.traits),
    }))
    .sort((a, b) => b.similarity - a.similarity);
}

const RESULT_METERS = [
  ["style", "STYLE", "スタイル"],
  ["practical", "PRACTICAL", "実用性"],
  ["classic", "CLASSIC", "クラシック"],
  ["modern", "MODERN", "現代性"],
  ["elegant", "ELEGANT", "上品さ"],
  ["rugged", "RUGGED", "無骨さ"],
  ["unique", "UNIQUE", "個性"],
  ["mechanical", "MECHANICAL", "機械趣味"],
];

function getTraitLevel(trait) {
  const profile = getProfile();
  return Math.max(1, Math.min(5, Math.round(profile[trait] || 0)));
}

function renderTraitMeters() {
  traitMeters.innerHTML = "";

  RESULT_METERS.forEach(([trait, label, labelJa]) => {
    const level = getTraitLevel(trait);

    const row = document.createElement("div");
    row.className = "trait-meter-row";

    const labelEl = document.createElement("span");
    labelEl.className = "trait-meter-label";
    labelEl.innerHTML = `<strong>${label}</strong><span class="trait-meter-label-ja">（${labelJa}）</span>`;

    const blocks = document.createElement("div");
    blocks.className = "trait-meter-blocks";
    blocks.setAttribute("aria-label", `${label} ${level} / 5`);

    for (let i = 1; i <= 5; i += 1) {
      const block = document.createElement("span");
      block.className = `trait-meter-block${i <= level ? " active" : ""}`;
      blocks.appendChild(block);
    }

    const value = document.createElement("span");
    value.className = "trait-meter-value";
    value.textContent = `${level}/5`;

    row.append(labelEl, blocks, value);
    traitMeters.appendChild(row);
  });
}

function showResult() {
  const ranked = getRankedGuns();
  const best = ranked[0];

  // 表示上は極端な低得点が出ないよう、診断サイト向けのレンジに整える。
  const displayScore = Math.round(65 + best.similarity * 33);

  resultFor.textContent = `${characterName} に似合う拳銃は`;
  resultTitle.textContent = best.name;
  resultTitleJa.textContent = best.jaName || "";

  if (best.image) {
    resultImageFigure.hidden = false;
    resultGunImage.src = best.image;
    resultGunImage.alt = `${best.jaName || best.name}の参考画像`;

    const note = best.imageNote ? `<span class="result-image-note">${best.imageNote}</span>` : "";
    resultImageCredit.innerHTML =
      `${note}<span>画像: ${best.imageCredit} / ` +
      `<a href="${best.imageSource}" target="_blank" rel="noopener noreferrer">${best.imageSourceName || "Wikimedia Commons"}</a>` +
      ` / ${best.imageLicenseUrl
        ? `<a href="${best.imageLicenseUrl}" target="_blank" rel="noopener noreferrer">${best.imageLicense}</a>`
        : best.imageLicense}</span>`;
  } else {
    resultImageFigure.hidden = true;
    resultGunImage.removeAttribute("src");
    resultImageCredit.textContent = "";
  }
  matchScore.textContent = `${displayScore}%`;
  matchBar.style.width = `${displayScore}%`;
  resultCopy.textContent = best.copy;
  resultDetail.textContent = best.detail;
  renderTraitMeters();

  resultTags.innerHTML = "";
  best.tags.forEach((tagText) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagText;
    resultTags.appendChild(tag);
  });

  copyStatus.textContent = "";
  showScreen("result");
}

retryButton.addEventListener("click", () => {
  currentQuestion = 0;
  selectedAnswers = [];
  totals = emptyScore();
  nameInput.value = characterName;
  if (nameSlot) nameSlot.textContent = characterName || "[名前を入力]";
  showScreen("start");
});

copyButton.addEventListener("click", async () => {
  const text =
    `もし${characterName}が拳銃を選ぶなら\n` +
    `→ ${resultTitle.textContent}\n` +
    `${resultCopy.textContent}\n` +
    `MATCH ${matchScore.textContent}\n\n` +
    `https://tetoragradient.github.io/Character-Handgun-Diagnosis/`;

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "結果をコピーしました。";
  } catch {
    copyStatus.textContent = "コピーできませんでした。ブラウザの権限をご確認ください。";
  }
});


resultGunImage.addEventListener("error", () => {
  resultImageFigure.classList.add("image-load-error");
  resultGunImage.alt = "画像を読み込めませんでした";
});

resultGunImage.addEventListener("load", () => {
  resultImageFigure.classList.remove("image-load-error");
});
