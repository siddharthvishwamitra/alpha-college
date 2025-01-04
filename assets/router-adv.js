$(document).ready(function() {
  const loadPage = (page) => {
    const pagePath = `pages/${page}.js`;

    $.getScript(pagePath)
      .done(function() {
        const pageContent = window.pageContent || "<h2>404 Not Found</h2><p>The page you are looking for doesn't exist.</p>";
        const pageTitle = window.pageTitle || 'Default Title';

        $('#content').html(pageContent);
        $('a').removeClass('active');
        $(`#${page}`).addClass('active');
        document.title = pageTitle;
      })
      .fail(function() {
        $('#content').html("<h2>404 Not Found</h2><p>The page you are looking for doesn't exist.</p>");
      });
  };

  const loadPageFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.keys().next().value || window.location.hash.substring(1) || 'home';
    loadPage(page);
  };

  loadPageFromUrl();

  $(document).on('click', 'a', function(e) {
    const linkId = $(this).attr('id');
    if (linkId) {
      e.preventDefault();
      history.pushState({ page: linkId }, '', `?${linkId}`);
      loadPage(linkId);
    }
  });

  window.onpopstate = loadPageFromUrl;
});