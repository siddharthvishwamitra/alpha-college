$(document).ready(function() {
  const loadPage = (page) => {
    const pagePath = `pages/${page}.js`;

    $('#content').html('<p>Loading...</p>'); // Show loading message immediately

    $.getScript(pagePath)
      .done(function() {
        const pageContent = window.pageContent || "<h2>404 Not Found</h2><p>The page you are looking for doesn't exist.</p>";
        const pageTitle = window.pageTitle || 'Alpha College';

        $('#content').html(pageContent); // Update content
        $('a').removeClass('active');
        $(`#${page}`).addClass('active');
        document.title = pageTitle;
      })
      .fail(function() {
        $('#content').html("<h2>404 Not Found</h2><p>The page you are looking for doesn't exist.</p>"); // Show 404 error immediately
      });
  };

  const loadPageFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get('page') || 'home'; // Default to 'home' if no query parameter
    loadPage(page);
  };

  loadPageFromUrl(); // Initial page load

  $(document).on('click', 'a', function(e) {
    const linkId = $(this).attr('id');
    if (linkId) {
      e.preventDefault();
      history.pushState({ page: linkId }, '', `?page=${linkId}`);
      loadPage(linkId);
    }
  });

  window.onpopstate = loadPageFromUrl; // Handle back/forward navigation
});