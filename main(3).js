  var VUUKLE_CONFIG = {
    apiKey: '35b198b3-0c86-4c5f-a57f-64670150d8ee',
    articleId: '', // Giữ một chỗ trống ở đây để sau đó thêm ID bài viết
  };

  (function() {
    // Hàm lấy ID bài viết từ URL của trang
    function getBlogspotPostIdFromURL() {
      var url = window.location.href;
      var matches = url.match(/\/(\d+)\/?$/);
      if (matches && matches.length > 1) {
        return matches[1];
      }
      return null;
    }

    var postId = getBlogspotPostIdFromURL();

    // Nếu lấy được ID bài viết từ URL, thêm nó vào VUUKLE_CONFIG
    if (postId) {
      VUUKLE_CONFIG.articleId = postId;
    }

    // Tiến hành chèn script của Vuukle vào trang
    var d = document,
      s = d.createElement('script');
    s.src = 'https://cdn.vuukle.com/platform.js';
    (d.head || d.body).appendChild(s);
  })();
