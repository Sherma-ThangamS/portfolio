export const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // If the path already has "assets/", avoid duplicating it
  if (cleanPath.startsWith("assets/")) {
    return `/${cleanPath}`;
  }
  return `/assets/${cleanPath}`;
};
