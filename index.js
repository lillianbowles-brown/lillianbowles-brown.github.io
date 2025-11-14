// ------------------------------
// Smooth Scroll for Internal Links
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ------------------------------
// Auto-Update Footer Year
// ------------------------------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


// ------------------------------
// Quote of the Day
// ------------------------------
const quotes = [
  "Stay curious — it opens every door.",
  "Small steps create big change.",
  "Strategy begins with asking the right questions.",
  "Lifelong learning is a form of leadership.",
  "Impact happens when courage meets action.",
  "Progress, not perfection.",
  "Curiosity is a compass — follow it.",
  "Every new skill expands possibility.",
  "Your perspective is a strength.",
  "Growth happens when you choose to begin."
];

const quoteEl = document.getElementById("quote");
if (quoteEl) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = randomQuote;
}
