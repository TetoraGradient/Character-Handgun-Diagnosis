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
        text: "公的な組織に属するプロ",
        scores: { professional: 3, practical: 2, modern: 1 }
      },
      {
        text: "独立して動く仕事人",
        scores: { professional: 2, style: 1, unique: 1 }
      },
      {
        text: "一般人寄り。必要な時だけ使う",
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
    title: "存在感はどれくらい？",
    subtitle: "拳銃ではなく、キャラクター本人の存在感として。",
    answers: [
      {
        text: "かなり目立つ。視線を集める",
        scores: { style: 3, unique: 2, compact: 0 }
      },
      {
        text: "普段は落ち着いているが印象に残る",
        scores: { elegant: 2, professional: 2, style: 1 }
      },
      {
        text: "目立たず自然に馴染む",
        scores: { compact: 3, practical: 2 }
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
    name: "Beretta 92FS",
    jaName: "ベレッタ 92FS",
    traits: {
      style: 4, practical: 3.5, classic: 4, modern: 2.5, elegant: 5,
      rugged: 1.5, unique: 2, professional: 4, mechanical: 4, compact: 1.5,
      experimental: 1
    },
    tags: ["端正", "クラシック", "メカニカル"],
    copy: "実用品にも美しさを求める人物に似合う一丁。",
    detail: "端正なシルエットと機械らしい存在感を併せ持つタイプです。合理性だけで選ぶのではなく、道具の見た目や所作にもこだわるキャラクターと相性がよいでしょう。",
  },
  {
    name: "Beretta 92FS Inox",
    jaName: "ベレッタ 92FS イノックス",
    traits: {
      style: 5, practical: 3, classic: 4, modern: 2.5, elegant: 5,
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
    traits: {
      style: 4, practical: 4, classic: 1, modern: 5, elegant: 4,
      rugged: 2, unique: 4, professional: 4, mechanical: 3, compact: 2.5,
      experimental: 2
    },
    tags: ["スマート", "現代的", "ひと癖"],
    copy: "端正なのに少し変わっている、知的な人物に似合うタイプ。",
    detail: "現代的で滑らかな雰囲気を持ちつつ、定番一辺倒ではない個性があります。合理的なのに趣味性もあり、知的で少し癖のあるキャラクターに向いています。",
  },
  {
    name: "CZ 75",
    jaName: "CZ 75",
    traits: {
      style: 4, practical: 4, classic: 4, modern: 2, elegant: 4,
      rugged: 2, unique: 3.5, professional: 3, mechanical: 5, compact: 2,
      experimental: 1.5
    },
    tags: ["通好み", "機械美", "控えめ"],
    copy: "目立つためではなく、自分の趣味で良いものを選ぶ人物向け。",
    detail: "古典的な美しさと機械的な魅力がありながら、過剰な自己主張はしません。道具に詳しい人物、静かなこだわりを持つ人物に似合います。",
  },
  {
    name: "M1911",
    jaName: "M1911",
    traits: {
      style: 5, practical: 2.5, classic: 5, modern: 1, elegant: 4,
      rugged: 4, unique: 3, professional: 2.5, mechanical: 5, compact: 1.5,
      experimental: 1
    },
    tags: ["古典", "様式美", "強いこだわり"],
    copy: "古いものを古いからこそ愛せる、信念の強い人物に似合います。",
    detail: "歴史性と象徴性が非常に強いタイプです。最新性よりも伝統、手触り、形式を重視するキャラクターに向きます。",
  },
  {
    name: "Browning Hi-Power",
    jaName: "ブローニング・ハイパワー",
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
    name: "Desert Eagle",
    jaName: "デザートイーグル",
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
    traits: {
      style: 1, practical: 5, classic: 3, modern: 2, elegant: 1,
      rugged: 5, unique: 3.5, professional: 3, mechanical: 3, compact: 1.5,
      experimental: 1
    },
    tags: ["地味", "頑丈", "実用品"],
    copy: "華やかさより、頑丈さと実直さを好む人物向け。",
    detail: "洗練された見栄えを競うというより、無骨で実直な印象を持つタイプです。実用品に妙な愛着を持つ人物や、飾らない性格のキャラクターに似合います。",
  },
  {
    name: "Kel-Tec P50",
    jaName: "ケルテック P50",
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
  compact: 0.7,
  experimental: 1.25,
};

function similarity(profile, gunTraits) {
  let weightedDistance = 0;
  let maxDistance = 0;

  TRAITS.forEach((trait) => {
    const weight = TRAIT_WEIGHTS[trait] || 1;
    const diff = (profile[trait] || 0) - (gunTraits[trait] || 0);
    weightedDistance += weight * diff * diff;
    maxDistance += weight * 25;
  });

  const normalizedDistance = Math.sqrt(weightedDistance / maxDistance);
  return Math.max(0, 1 - normalizedDistance);
}

function rareResultEligible(gun, profile) {
  if (!gun.rare) return true;

  if (gun.rare === "modern_oddity") {
    return (
      profile.experimental >= 3.4 &&
      profile.modern >= 3.1 &&
      profile.unique >= 3.0
    );
  }

  if (gun.rare === "antique_oddity") {
    return (
      profile.experimental >= 3.4 &&
      profile.classic >= 3.1 &&
      profile.unique >= 3.0 &&
      profile.mechanical >= 2.6
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
    `MATCH ${matchScore.textContent}`;

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "結果をコピーしました。";
  } catch {
    copyStatus.textContent = "コピーできませんでした。ブラウザの権限をご確認ください。";
  }
});
