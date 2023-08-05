import { getBlogspotPostIdFromURL } from 'https://cdn.jsdelivr.net/gh/MSKTeam/comment-system@main/getBlogspotPostId.js';

var VUUKLE_CONFIG = {
  apiKey: '35b198b3-0c86-4c5f-a57f-64670150d8ee',
  articleId: '',
};

(function () {
  var postId = getBlogspotPostIdFromURL();

  if (postId) {
    VUUKLE_CONFIG.articleId = postId;
  }

  var d = document,
    s = d.createElement('script');
  s.src = 'https://cdn.vuukle.com/platform.js';
  (d.head || d.body).appendChild(s);
})();
