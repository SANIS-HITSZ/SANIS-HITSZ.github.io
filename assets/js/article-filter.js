document.addEventListener("DOMContentLoaded", function () {
  var filters = document.querySelectorAll("[data-article-filter]");
  var articles = document.querySelectorAll("[data-article]");
  var empty = document.querySelector("[data-article-empty]");

  if (!filters.length || !empty) return;

  function updateArticles() {
    var activeFilters = {};
    filters.forEach(function (filter) {
      activeFilters[filter.dataset.articleFilter] = filter.value;
    });

    var visibleCount = 0;
    articles.forEach(function (article) {
      var visible = Object.keys(activeFilters).every(function (key) {
        return activeFilters[key] === "all" || article.dataset[key] === activeFilters[key];
      });
      article.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    empty.hidden = visibleCount > 0;
  }

  filters.forEach(function (filter) {
    filter.addEventListener("change", updateArticles);
  });
  updateArticles();
});
