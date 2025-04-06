export function formatURL(url) {
  url = url.trim().replace(/^[\[\]"]+|[\[\]"]+$/g, "");
  return url;
}
