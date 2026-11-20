const destinations = [
  {
    num: "01",
    country: "FRANCE",
    city: "Paris",
    desc: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    lang: "French",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "02",
    country: "JAPAN",
    city: "Tokyo",
    desc: "Tokyo blends ultramodern neon-lit skyscrapers with historic temples, vibrant street food, and rich traditions.",
    continent: "Asia",
    food: "Sushi, Ramen",
    place: "Mount Fuji & Shibuya",
    lang: "Japanese",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "03",
    country: "ITALY",
    city: "Rome",
    desc: "Rome is a living museum of ancient history, world-renowned cuisine, and timeless Renaissance architecture.",
    continent: "Europe",
    food: "Pizza, Carbonara",
    place: "Colosseum",
    lang: "Italian",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "04",
    country: "EGYPT",
    city: "Cairo",
    desc: "Cairo is the vibrant heart of Egypt, home to ancient wonders, bustling bazaars, and the timeless Nile River.",
    continent: "Africa",
    food: "Koshary, Falafel",
    place: "Pyramids of Giza",
    lang: "Arabic",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80",
  },
];

let currentIndex = 0;

const counterEl = document.getElementById("dest-counter");
const countryEl = document.getElementById("dest-country");
const cityEl = document.getElementById("dest-city");
const descEl = document.getElementById("dest-desc");
const continentEl = document.getElementById("dest-continent");
const foodEl = document.getElementById("dest-food");
const placeEl = document.getElementById("dest-place");
const langEl = document.getElementById("dest-lang");
const imgEl = document.getElementById("dest-img");
const badgeNumEl = document.getElementById("badge-num");

const dots = document.querySelectorAll(".dot");

function updateDestination() {
  const item = destinations[currentIndex];

  counterEl.textContent = `${item.num} / 0${destinations.length}`;
  countryEl.textContent = item.country;
  cityEl.textContent = item.city;
  descEl.textContent = item.desc;
  continentEl.textContent = item.continent;
  foodEl.textContent = item.food;
  placeEl.textContent = item.place;
  langEl.textContent = item.lang;
  badgeNumEl.textContent = item.num;

  imgEl.src = item.image;
  imgEl.alt = `${item.city} City`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex);
  });
}

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    currentIndex = idx;
    updateDestination();
  });
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
  updateDestination();
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % destinations.length;
  updateDestination();
});

document.getElementById("explore-more-btn").addEventListener("click", () => {
  const item = destinations[currentIndex];
  alert(
    `Discover ${item.city} in ${item.country}!\nFamous Place: ${item.place}`,
  );
});
