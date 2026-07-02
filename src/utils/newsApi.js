const API_KEY = import.meta.env.VITE_NEWS_API_KEY || 7bb4c33fd93544ddafdd205b169af55b

const BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(new Error(`Error: ${res.status}`));
  }
  return res.json();
}

function getDates() {
  const today = new Date();
  const weekAgo = new Date();

  weekAgo.setDate(today.getDate() - 7);

  return {
    from: weekAgo.toISOString().slice(0, 10),
    to: today.toISOString().slice(0, 10),
  };
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getNews(query) {
  const { from, to } = getDates();

  const params = new URLSearchParams({
    q: query,
    apiKey: API_KEY,
    from,
    to,
    pageSize: "100",
  });

  return fetch(`${BASE_URL}?${params.toString()}`)
    .then(checkResponse)
    .then((data) =>
      data.articles
        .filter(
          (article) =>
            article.title &&
            article.description &&
            article.urlToImage &&
            article.publishedAt &&
            article.source?.name &&
            article.url
        )
        .map((article, index) => ({
          id: article.url || `${query}-${index}`,
          keyword: query,
          title: article.title,
          text: article.description,
          date: formatDate(article.publishedAt),
          source: article.source.name,
          image: article.urlToImage,
          url: article.url,
          isSaved: false,
        }))
    );
}