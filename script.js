// script.js
const START_DATE = new Date("2025-04-10T00:00:00-04:00"); // Eastern Time
const MAX_DAYS = 23;

const now = new Date();
const today = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
const dayNumber = Math.min(Math.max(1, Math.floor((today - START_DATE) / 86400000) + 1), MAX_DAYS);

let currentDay = dayNumber;

const imageEl = document.getElementById("wallpaper");
const titleEl = document.getElementById("title");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const downloadBtn = document.getElementById("downloadBtn");

function updateUI() {
  const dayStr = String(currentDay).padStart(3, "0");
  const imageUrl = `https://perfectos.pro/f/wallpaper_25-01/images/perfectos_wallpaper_25-01_${dayStr}.jpg`;
  imageEl.src = imageUrl;
  downloadBtn.href = imageUrl;
  titleEl.textContent = `Perfectos Wallpapers '25 Vol. 1 – Day ${currentDay} of 23`;

  prevBtn.style.visibility = currentDay > 1 ? "visible" : "hidden";
  nextBtn.style.visibility = currentDay < dayNumber ? "visible" : "hidden";
}

prevBtn.onclick = (e) => {
  e.preventDefault();
  if (currentDay > 1) {
    currentDay--;
    updateUI();
  }
};

nextBtn.onclick = (e) => {
  e.preventDefault();
  if (currentDay < dayNumber) {
    currentDay++;
    updateUI();
  }
};

updateUI();
