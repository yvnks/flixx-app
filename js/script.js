const global = {
  location: window.location.pathname,
};

document.addEventListener("DOMContentLoaded", () => {
  switch (global.location) {
    case "/":
    case "./index.html":
      console.log("Home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/search.html":
      console.log("Search");
    case "/tv-details.html":
      console.log("tv details");
      break;
  }
  hightlightActiveLink();
});

function hightlightActiveLink() {
  const links = document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute('href') === global.location) {
      link.classList.add("active");
    }
  });
}
