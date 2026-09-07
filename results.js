const resultList = document.querySelector("#gun-result-list");

function makeCredit(gun) {
  const sourceName = gun.imageSourceName || "Wikimedia Commons";
  const license = gun.imageLicenseUrl
    ? `<a href="${gun.imageLicenseUrl}" target="_blank" rel="noopener noreferrer">${gun.imageLicense}</a>`
    : gun.imageLicense;

  const note = gun.imageNote
    ? `<span class="result-card-image-note">${gun.imageNote}</span>`
    : "";

  return `
    ${note}
    <span>
      画像: ${gun.imageCredit} /
      <a href="${gun.imageSource}" target="_blank" rel="noopener noreferrer">${sourceName}</a>
      / ${license}
    </span>
  `;
}

guns.forEach((gun, index) => {
  const article = document.createElement("article");
  article.className = "gun-result-card";
  article.id = `result-${index + 1}`;

  article.innerHTML = `
    <div class="gun-result-card-index">${String(index + 1).padStart(2, "0")}</div>

    <div class="gun-result-card-heading">
      <h2 class="gun-result-card-name">${gun.name}</h2>
      <p class="gun-result-card-name-ja">${gun.jaName || ""}</p>
    </div>

    <figure class="gun-result-card-figure">
      <div class="gun-result-card-image-frame">
        <img
          class="gun-result-card-image"
          src="${gun.image || ""}"
          alt="${gun.jaName || gun.name}の参考画像"
          loading="lazy"
        />
      </div>
      <figcaption class="gun-result-card-credit">
        ${makeCredit(gun)}
      </figcaption>
    </figure>

    <div class="tag-list gun-result-card-tags">
      ${gun.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>

    <p class="gun-result-card-copy">${gun.copy}</p>
    <p class="gun-result-card-detail">${gun.detail}</p>
  `;

  const img = article.querySelector(".gun-result-card-image");
  img.addEventListener("error", () => {
    article.classList.add("image-load-error");
    img.alt = "画像を読み込めませんでした";
  });

  resultList.appendChild(article);
});
