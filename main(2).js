var VUUKLE_CONFIG = {
  apiKey: '35b198b3-0c86-4c5f-a57f-64670150d8ee',
  articleId: '',
};

  (function() {
    function getBlogspotPostIdFromURL() {
      var url = window.location.href;
      var matches = url.match(/\/(\d+)\/?$/);
      if (matches && matches.length > 1) {
        return matches[1];
      }
      return null;
    }

    var postId = getBlogspotPostIdFromURL();
    if (postId) {
      VUUKLE_CONFIG.articleId = postId;
    }
    var d = document,
      s = d.createElement('script');
    s.src = 'https://cdn.vuukle.com/platform.js';
    (d.head || d.body).appendChild(s);
  })();
