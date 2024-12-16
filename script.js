/*let currentArticleIndex = 0;

// Fetch data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    if (window.location.pathname.includes("index.html")) {
      displayArticles(data);
    } else if (window.location.pathname.includes("view.html")) {
      displayArticleDetails(data);
    }
  });

// Display articles on Home Page
function displayArticles(articles) {
  const container = document.getElementById("articles-container");
  articles.forEach((article, index) => {
    const card = document.createElement("div");
    card.classList.add("article-card");
    card.innerHTML = `
      <img src="${article.image}" alt="${article.title}">
      <h2>${article.title}</h2>
    `;
    card.addEventListener("click", () => {
      localStorage.setItem("currentArticleIndex", index);
      window.location.href = "view.html";
    });
    container.appendChild(card);
  });
}

// Display article details on View Page
function displayArticleDetails(articles) {
  const articleIndex = parseInt(localStorage.getItem("currentArticleIndex"), 10);
  currentArticleIndex = articleIndex;
  const article = articles[articleIndex];
  const details = document.getElementById("article-details");

  details.innerHTML = `
    <img src="${article.image}" alt="${article.title}">
    <h2>${article.title}</h2>
    <h4>${article.subtitle}</h4>
    <p1><strong>Written By:</strong> ${article.by}</p1>
    <p><strong>introduction:</strong>${article.introduction}</p>
    <p><strong>Cause:</strong> ${article.cause}</p>
    <p><strong>Effects:</strong> ${article.effects}</p>
    <p><strong>Control:</strong> ${article.control}</p>
    <p><strong>Conclusion:</strong> ${article.conclusion}</p>
  `;

  document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.getElementById("prev-button").addEventListener("click", () => {
    if (currentArticleIndex > 0) {
      localStorage.setItem("currentArticleIndex", currentArticleIndex - 1);
      window.location.reload();
    }
  });

  document.getElementById("next-button").addEventListener("click", () => {
    if (currentArticleIndex < articles.length - 1) {
      localStorage.setItem("currentArticleIndex", currentArticleIndex + 1);
      window.location.reload();
    }
  });
}*/