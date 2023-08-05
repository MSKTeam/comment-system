  var vuukleCommentsElement = document.getElementById('vuukle-comments');
  if (vuukleCommentsElement && vuukleCommentsElement.hasAttribute('id-post')) {
    var articleId = vuukleCommentsElement.getAttribute('id-post');
    var VUUKLE_CONFIG = {
      apiKey: `35b198b3-0c86-4c5f-a57f-64670150d8ee`,
      articleId: articleId,
    };
  }
  (function() {
    var d = document,
      s = d.createElement('script');
    s.src = 'https://cdn.vuukle.com/platform.js';
    (d.head || d.body).appendChild(s);
  })();
