const runButton = document.querySelector("#runButton");
const steps = [...document.querySelectorAll("[data-step]")];
const themeToggle = document.querySelector("#themeToggle");
const rootHtml = document.documentElement;

themeToggle.addEventListener("click", () => {
  const isDark = rootHtml.getAttribute("data-theme") === "dark";
  const nextTheme = isDark ? "light" : "dark";
  rootHtml.setAttribute("data-theme", nextTheme);
  themeToggle.textContent = nextTheme === "dark" ? "Mode Terang" : "Mode Gelap";
});

runButton.addEventListener("click", async () => {
  runButton.disabled = true;

  for (const item of steps) {
    const badge = item.querySelector(".status");
    badge.className = "status";
    badge.textContent = "Menunggu";
  }

  for (const item of steps) {
    const badge = item.querySelector(".status");
    badge.className = "status active";
    badge.textContent = "Diproses";
    await new Promise((resolve) => setTimeout(resolve, 650));
    badge.className = "status done";
    badge.textContent = "Selesai";
  }

  runButton.disabled = false;
});
