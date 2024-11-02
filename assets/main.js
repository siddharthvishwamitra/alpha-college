$(document).ready(function() {
    // Function to load content based on URL
    const loadPageFromUrl = () => {
      const queryParams = new URLSearchParams(window.location.search);
      let page = 'src/home'; // Default page
      let linkId = 'homelink'; // Default link ID for home

      if (queryParams.has('notice')) {
        page = 'src/notice';
        linkId = 'notice';
      } else if (queryParams.has('faculty')) {
        page = 'src/faculty';
        linkId = 'faculty';
      } else if (queryParams.has('results')) {
        page = 'src/results';
        linkId = 'results';
      } else if (queryParams.has('about')) {
        page = 'src/about';
        linkId = 'about';
      } else if (queryParams.has('contact')) {
        page = 'src/contact';
        linkId = 'contact';
      }

      $('#content').load(page);

      // Update active link based on loaded content
      $('#nav a').removeClass('active');
      $(`#${linkId}`).addClass('active');
    };

    loadPageFromUrl(); // Load on initial page load

    // Handle link clicks to load content and update URL without reloading
    $('#nav a').on('click', function(e) {
      e.preventDefault();

      const page = $(this).attr('href');
      const linkId = $(this).attr('id'); // Get the ID of clicked link
      const pageTitle = $(this).text(); // Use link text as title

      // Update URL and history state
      history.pushState({ page: linkId }, pageTitle, `?${linkId}`);
      document.title = `Alpha College - ${pageTitle}`;
      
      // Load the page content
      $('#content').load(page);

      // Update active link
      $('#nav a').removeClass('active');
      $(this).addClass('active');
    });

    // Listen for back/forward navigation events
    window.onpopstate = function(event) {
      loadPageFromUrl();
    };
  });

  // NProgress loading bar settings
  $(document).ready(function() {
    $('body').show();
    $('.version').text(NProgress.version);
    NProgress.start();
    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);
    
    $("#nav a").click(function() {
      NProgress.start();
      setTimeout(function() {
        NProgress.set(0.4);
        setTimeout(function() {
          NProgress.done();
        }, 300);
        NProgress.start();
      }, 300);
    });
  });

  // Disable right-click context menu
  $(document).bind("contextmenu", function(e) {
    return false;
  });