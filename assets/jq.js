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

  const pageTitles = {
    home: 'Alpha College',
    about: 'About',
    contact: 'Contact',
    notice: 'Notice',
    faculty: 'Faculty',
    results: 'Results',
    payfee: 'Pay Fee',
  };

  const loadPage = (linkId) => {
    if (pages[linkId]) {
      $('#content').load(pages[linkId], function(response, status) {
        if (status === 'error') {
          $('#content').html('<h1>404 - Page Not Found</h1>');
          document.title = '404 - Page Not Found';
        }
      });
      $('a').removeClass('active');
      $(`#${linkId}`).addClass('active');
      document.title = pageTitles[linkId] || 'Default Title';
    } else {
      $('#content').html('<h1>404 - Page Not Found</h1>');
      document.title = '404 - Page Not Found';
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