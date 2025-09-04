/*const QUOTES = [
  {
    text: "La voie n’est pas dans le ciel. La voie est dans le cœur.",
    author: "Bouddha",
    img: "une image du bouddha en peinture traditionnelle bouddhiste.jpeg",
    alt: "Portrait de Bouddha (illustration)"
  },
  {
    text: "Ce que tu fais aujourd’hui peut améliorer tous tes lendemains.",
    author: "Ralph Waldo Emerson",
    img: "waldo-emerson.jpg",
    alt: "Portrait de Ralph Waldo Emerson"
  },
  {
    text: "La vérité est une terre sans chemins.",
    author: "Jiddu Krishnamurti",
    img: "jiddu-krishnamurti.jpg",
    alt: "Portrait de Krishnamurti"
  },
  {
    text: "Dieu est une sphère infinie dont le centre est partout, la circonférence nulle part.",
    author: "Attribué à Alain de Lille",
    img: "alain-lille.jpg",
    alt: "Portrait médiéval stylisé"
  },
  {
    text: "Connais-toi toi-même, et tu connaîtras l’univers et les dieux.",
    author: "Maximes delphiques",
    img: "maximes-delphiques.jpg",
    alt: "Bas-relief grec stylisé"
  }
];

const quoteTextEl   = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const authorImageEl = document.getElementById("authorImage");
const newQuoteBtn   = document.getElementById("newQuoteBtn");

let lastIndex = -1;
let isAnimating = false; // empêche les clics pendant l'anim

function pickRandomIndex(){
  if (QUOTES.length <= 1) return 0;
  let i;
  do { i = Math.floor(Math.random() * QUOTES.length); }
  while (i === lastIndex);
  lastIndex = i;
  return i;
}

function showRandomQuote(){
  if (isAnimating) return; // protection anti-spam
  isAnimating = true;
  newQuoteBtn.disabled = true;
  const i = pickRandomIndex();
  const q = QUOTES[i];

  // Durée (doit correspondre aux durées CSS)
  const DURATION = 400; // ms

  // Ajout de la classe fade-out pour disparaitre
  quoteTextEl.classList.add("fade-out");
  quoteAuthorEl.classList.add("fade-out");
  authorImageEl.classList.add("fade-out");

  // Après la transition, on remplace le contenu puis on fade-in
  setTimeout(() => {
    quoteTextEl.textContent = `"${q.text}"`;
    quoteAuthorEl.textContent = `— ${q.author}`;
    authorImageEl.src = q.img;
    authorImageEl.alt = q.alt || `Portrait de ${q.author}`;

    // swap classes
    quoteTextEl.classList.remove("fade-out");
    quoteAuthorEl.classList.remove("fade-out");
    authorImageEl.classList.remove("fade-out");

    quoteTextEl.classList.add("fade-in");
    quoteAuthorEl.classList.add("fade-in");
    authorImageEl.classList.add("fade-in");

    // nettoyage des classes après l'animation pour pouvoir rejouer
    setTimeout(() => {
      quoteTextEl.classList.remove("fade-in");
      quoteAuthorEl.classList.remove("fade-in");
      authorImageEl.classList.remove("fade-in");
      isAnimating = false;
      newQuoteBtn.disabled = false;
    }, DURATION);
  }, DURATION);
}

// Événements : clic + initialisation au chargement
newQuoteBtn.addEventListener("click", showRandomQuote);

// Affiche une citation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  // small delay pour laisser le rendu initial s'appliquer
  setTimeout(showRandomQuote, 100);
});*/

const QUOTES = [
  {
    text: "La voie n’est pas dans le ciel. La voie est dans le cœur.",
    author: "Bouddha",
    img: "une image du bouddha en peinture traditionnelle bouddhiste.jpeg",
    alt: "Portrait de Bouddha (illustration)"
  },
  {
    text: "Ce que tu fais aujourd’hui peut améliorer tous tes lendemains.",
    author: "Ralph Waldo Emerson",
    img: "waldo-emerson.jpg",
    alt: "Portrait de Ralph Waldo Emerson"
  },
  {
    text: "La vérité est une terre sans chemins.",
    author: "Jiddu Krishnamurti",
    img: "jiddu-krishnamurti.jpg",
    alt: "Portrait de Krishnamurti"
  },
  {
    text: "Dieu est une sphère infinie dont le centre est partout, la circonférence nulle part.",
    author: "Attribué à Alain de Lille",
    img: "alain-lille.jpg",
    alt: "Portrait médiéval stylisé"
  },
  {
    text: "Connais-toi toi-même, et tu connaîtras l’univers et les dieux.",
    author: "Maximes delphiques",
    img: "maximes-delphiques.jpg",
    alt: "Bas-relief grec stylisé"
  }
];

const quoteTextEl   = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const authorImageEl = document.getElementById("authorImage");
const newQuoteBtn   = document.getElementById("newQuoteBtn");

let lastIndex = -1;
let isAnimating = false;
let firstLoad = true;

function pickRandomIndex(){
  if (QUOTES.length <= 1) return 0;
  let i;
  do { i = Math.floor(Math.random() * QUOTES.length); }
  while (i === lastIndex);
  lastIndex = i;
  return i;
}

function setQuoteContent(q) {
  quoteTextEl.textContent = `"${q.text}"`;
  quoteAuthorEl.textContent = `— ${q.author}`;
  authorImageEl.src = q.img;
  authorImageEl.alt = q.alt || `Portrait de ${q.author}`;
}

function animateChange(q) {
  if (isAnimating) return;
  isAnimating = true;
  newQuoteBtn.disabled = true;

  quoteTextEl.classList.add('fade-out');
  quoteAuthorEl.classList.add('fade-out');
  authorImageEl.classList.add('fade-out');

  const DURATION = 400;

  setTimeout(() => {
    setQuoteContent(q);

    // swap classes to fade in
    quoteTextEl.classList.remove('fade-out');
    quoteAuthorEl.classList.remove('fade-out');
    authorImageEl.classList.remove('fade-out');

    quoteTextEl.classList.add('fade-in');
    quoteAuthorEl.classList.add('fade-in');
    authorImageEl.classList.add('fade-in');

    setTimeout(() => {
      quoteTextEl.classList.remove('fade-in');
      quoteAuthorEl.classList.remove('fade-in');
      authorImageEl.classList.remove('fade-in');

      isAnimating = false;
      newQuoteBtn.disabled = false;
    }, DURATION);
  }, DURATION);
}

function showRandomQuote(){
  const i = pickRandomIndex();
  const q = QUOTES[i];

  if (firstLoad) {
    // affichage initial : pas d'animation
    setQuoteContent(q);
    firstLoad = false;
    // si tu veux que la pop soit jouée *après* le premier rendu*, tu peux
    // décommenter la ligne suivante pour ajouter la classe pop ponctuellement :
    // document.querySelector('.quote-card').classList.add('pop');
  } else {
    // après le premier affichage, on anime au clic
    animateChange(q);
  }
}

// initialisation lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  showRandomQuote();
  // écouteur pour le bouton
  newQuoteBtn.addEventListener('click', showRandomQuote);
});
