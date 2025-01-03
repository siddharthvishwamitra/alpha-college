$(document).ready(function() {
  const pages = {
    home: '/src/home',
    about: '/src/about',
    contact: '/src/contact',
    notice: '/src/notice',
    faculty: '/src/faculty',
    results: '/src/results',
    payfee: '/src/payfee',
  };

  const loadPage = (linkId) => {
    if (pages[linkId]) {
      $('#content').load(pages[linkId]);
      $('a').removeClass('active');
      $(`#${linkId}`).addClass('active');
    }
  };

  const loadPageFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const linkId = queryParams.keys().next().value || 'home';
    loadPage(linkId);
  };

  loadPageFromUrl();

  $(document).on('click', 'a', function(e) {
    const linkId = $(this).attr('id');
    if (linkId && pages[linkId]) {
      e.preventDefault();
      history.pushState({ page: linkId }, '', `?${linkId}`);
      loadPage(linkId);
    }
  });

  window.onpopstate = loadPageFromUrl;
});