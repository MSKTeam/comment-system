export function getBlogspotPostIdFromURL() {
  var url = window.location.href;
  var matches = url.match(/\/(\d+)\/?$/);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return null;
}
