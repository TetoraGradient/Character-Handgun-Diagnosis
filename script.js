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
        scores: { style: 3, elegant: 1, unique: 1 }
      },
      {
        text: "見た目と実用性の両方",
        scores: { style: 2, practical: 2 }
      },
      {
        text: "飾り気より、実用性と信頼性",
        scores: { practical: 3, professional: 2, rugged: 1, unique: -1, experimental: -1 }
      },
      {
        text: "普通ではないものに惹かれる",
        scores: { unique: 3, experimental: 2, style: 1 }
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
        scores: { modern: 3, experimental: 1, classic: -1 }
      },
      {
        text: "新旧より、完成度が高いもの",
        scores: { practical: 3, professional: 2 }
      },
      {
        text: "歴史や古さを感じるもの",
        scores: { classic: 3, mechanical: 1, elegant: 1, modern: -1 }
      },
    ],
  },
  {
    title: "変わった機構を見つけたら？",
    subtitle: "珍しい構造や、普通ではない設計への反応です。",
    answers: [
      {
        text: "面白い。仕組みそのものに惹かれる",
        scores: { mechanical: 3, unique: 2, experimental: 3 }
      },
      {
        text: "実用上の理由があるなら好き",
        scores: { practical: 2, mechanical: 1, modern: 1 }
      },
      {
        text: "実績のある普通の構造でいい",
        scores: { practical: 3, professional: 2, classic: 1 }
      },
    ],
  },
  {
    title: "定番と珍品なら？",
    subtitle: "他人と同じものを持つことをどう感じますか？",
    answers: [
      {
        text: "定番には定番の理由がある",
        scores: { practical: 2, professional: 2, unique: -1, experimental: -1 }
      },
      {
        text: "似合えばどちらでもいい",
        scores: { style: 1, practical: 1, elegant: 1 }
      },
      {
        text: "少し変わったものを選びたい",
        scores: { unique: 2, mechanical: 1, style: 1 }
      },
      {
        text: "普通すぎると物足りない",
        scores: { unique: 3, style: 2, experimental: 3, professional: -1 }
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
        text: "荒っぽく、力強い",
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
        scores: { classic: 2, mechanical: 3, rugged: 1 }
      },
      {
        text: "磨かれた金属の端正な感じ",
        scores: { elegant: 3, style: 2, classic: 1 }
      },
      {
        text: "樹脂や新素材の機能的な感じ",
        scores: { modern: 3, practical: 2, professional: 1 }
      },
      {
        text: "変わった構造や異質な組み合わせ",
        scores: { unique: 3, experimental: 3, mechanical: 1 }
      },
    ],
  },
  {
    title: "道具への愛着は？",
    subtitle: "拳銃以外の持ち物について考えてみてください。",
    answers: [
      {
        text: "かなりある。手入れや構造も好き",
        scores: { mechanical: 3, classic: 1, style: 1 }
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
        scores: { modern: 3, unique: 2, experimental: 3, mechanical: 1, classic: -1 }
      },
      {
        text: "古くて、今ではまず見ない奇妙な道具",
        scores: { classic: 3, unique: 2, experimental: 3, mechanical: 2, modern: -1 }
      },
      {
        text: "珍しいこと自体には興味がない",
        scores: { practical: 3, professional: 2, unique: -1, experimental: -2 }
      },
    ],
  },
  {
    title: "大きさとシルエットは？",
    subtitle: "キャラクターデザインとして持たせたい印象です。",
    answers: [
      {
        text: "小型で控えめ",
        scores: { compact: 3, practical: 1, elegant: 1 }
      },
      {
        text: "標準的なフルサイズ",
        scores: { practical: 2, professional: 2 }
      },
      {
        text: "大型で、堂々とした存在感",
        scores: { style: 2, rugged: 2, mechanical: 1 }
      },
      {
        text: "普通の拳銃とは違うシルエット",
        scores: { unique: 3, experimental: 2, style: 1 }
      },
    ],
  },
  {
    title: "最後に、一言で選ぶなら？",
    subtitle: "そのキャラに持たせたい雰囲気を直感で。",
    answers: [
      {
        text: "美しい",
        scores: { elegant: 3, style: 3, rugged: -1 }
      },
      {
        text: "信頼できる",
        scores: { practical: 3, professional: 3, unique: -1, experimental: -2 }
      },
      {
        text: "無骨で頼れる",
        scores: { rugged: 3, practical: 1, elegant: -1 }
      },
      {
        text: "古くても格好いい",
        scores: { classic: 3, mechanical: 2, modern: -1 }
      },
      {
        text: "普通じゃない",
        scores: { unique: 3, experimental: 3, style: 1, practical: -1, professional: -1 }
      },
      {
        text: "静かで目立たない",
        scores: { compact: 3, elegant: 1, style: -1, rugged: -1 }
      },
    ],
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
    profile[trait] = Math.max(0, Math.min(5, (totals[trait] / max) * 5));
  });

  return profile;
}

const TRAIT_WEIGHTS = {
  style: 1,
  practical: 1.1,
  classic: 1,
  modern: 1,
  elegant: 0.9,
  rugged: 1,
  unique: 1.05,
  professional: 0.95,
  mechanical: 1,
  compact: 0.9,
  experimental: 1.05,
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

  // P50は「未来的な珍品」、Apacheは「古い珍品」を明確に選んだ時だけ候補にする。
  if (gun.rare === "modern_oddity") {
    return (
      selectedAnswers[9] === 0 &&
      selectedAnswers[11] === 4 &&
      profile.experimental >= 3.2 &&
      profile.unique >= 3.0 &&
      profile.modern >= 1.8
    );
  }

  if (gun.rare === "antique_oddity") {
    return (
      selectedAnswers[9] === 1 &&
      selectedAnswers[11] === 4 &&
      profile.experimental >= 3.2 &&
      profile.unique >= 3.0 &&
      profile.classic >= 2.0 &&
      profile.mechanical >= 2.0
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
