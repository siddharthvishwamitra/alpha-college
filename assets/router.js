$(document).ready(function() {
  const pages = {
    home: '/src/home',
    about: '/src/about',
    contact: '/src/contact',
    notice: '/src/notice',
    faculty: '/src/faculty',
    results: '/src/results',
    payfee: '/src/payfee',
    enrolment: '/src/enrolment',
    examform: '/src/exam-form',
    unavailable: '/src/unavailable'
  };

  const pageTitles = {
    home: 'Alpha College',
    about: 'About',
    contact: 'Contact',
    notice: 'Notice',
    faculty: 'Faculty',
    results: 'Results',
    payfee: 'Pay Fee',
    enrolment: 'Apply for Enrolment',
    examform: 'Fill Exam Form',
    unavailable: 'Service Unavailable'
  };

  const loadPage = (linkId) => {
    if (pages[linkId]) {
      $('#content').load(pages[linkId], function(response, status) {
        if (status === 'error') {
          $('#content').html('<h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p>');
          document.title = 'Page Not Found';
        }
      });
      $('a').removeClass('active');
      $(`#${linkId}`).addClass('active');
      document.title = pageTitles[linkId] || 'Alpha College Untitled';
    } else {
      $('#content').html('<h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p>');
      document.title = 'Page Not Found';
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