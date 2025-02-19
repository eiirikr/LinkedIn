const profileMenuEl = document.getElementById("profileMenu");

function toggleMenu() {
  profileMenuEl.classList.toggle("open-menu");
}

const sideActivityEl = document.getElementById("sidebarActivity");
const moreLinkEl = document.getElementById("showMoreLink");

function toggleActivity() {
  sideActivityEl.classList.toggle("open-activity");

  if (sideActivityEl.classList.contains("open-activity")) {
    moreLinkEl.innerHTML = `Show less <b>-</b>`;
  } else {
    moreLinkEl.innerHTML = `Show more <b>+</b>`;
  }
}
