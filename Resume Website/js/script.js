//Typing Animation on home page
var typingEffect = new Typed(".typing-effect", {
  strings: ["UI Designer", "Frontend Developer", "Backend Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});

//Smooth Scrolling
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

// Copyright Year
var year = document.getElementById("year");
year.innerText = new Date().getFullYear();

// Skills Tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");

      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      button.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

// Projects Data
const projects = [
  {
    title: "Healthy Bites",
    tech: ["HTML", "CSS", "Bootstrap", "Javascript", "JSON"],
    desc: "Created an interactive web application enabling users to effortlessly access real-time nutritional information for food items, eliminating the need for physical store visits or label checks.",
    src: "https://sparsh47.github.io/HealthyBites/",
  },
  {
    title: "Notes App",
    tech: ["HTML", "CSS", "Javascript", "ReactJs"],
    desc: "Designed and developed a fully functional Notes Taking App using React.js, aiming to assess knowledge of the framework and showcase creativity in building a practical web application.",
    src: "https://sparsh47.github.io/Notes-App/",
  },
  {
    title: "Leads Tracker",
    tech: ["HTML", "CSS", "Javascript", "JSON"],
    desc: "Built a user-friendly and efficient bookmarking solution that enables seamless organization of website links, offering automatic capturing from the current page and manual addition of custom links.",
    src: "https://sparsh47.github.io/bookmark-extension/",
  },
  {
    title: "Simon Game",
    tech: ["HTML", "CSS", "Javascript", "jQuery"],
    desc: "Developed the Simon Game, a classic memory-based web game, as one of the first independent projects during the early stages of the individual's web development journey.",
    src: "https://sparsh47.github.io/simon-game/",
  },
  {
    title: "Calculator",
    tech: ["HTML", "CSS", "Javascript"],
    desc: "Developed a responsive calculator web app using HTML, CSS, and JavaScript, showcasing front-end development skills and usability.",
    src: "https://lovely-kringle-3322c3.netlify.app/",
  },
  {
    title: "Headphones Landing Page",
    tech: ["HTML", "CSS", "Javascript"],
    desc: "Crafted an immersive headphone landing page with stunning visuals, smooth animations, and interactive elements, blending design and functionality",
    src: "https://cool-horse-e38e65.netlify.app/",
  },
  {
    title: "BlackJack Game",
    tech: ["HTML", "CSS", "Javascript"],
    desc: "Designed an interactive Blackjack game with HTML, CSS, and JavaScript, providing a thrilling gaming experience and testing strategic skills.",
    src: "https://sparsh47.github.io/Blackjack-Game/",
  },
  {
    title: "Qr Code Generator",
    tech: ["HTML", "CSS", "Javascript", "API"],
    desc: "Created a QR code generator web app using HTML, CSS, and JavaScript, simplifying QR code creation for URLs, text, and contact details.",
    src: "https://sparsh47.github.io/qr-code-generator/",
  },
  {
    title: "Drum Kit",
    tech: ["HTML", "CSS", "Javascript"],
    desc: "Created an interactive Drum Kit web app with responsive design, realistic sounds, and keyboard support, showcasing front-end development skills.",
    src: "https://strong-valkyrie-d88d03.netlify.app/",
  },
  {
    title: "Rating Component",
    tech: ["HTML", "CSS", "Javascript"],
    desc: "Created a web-based rating component in HTML, CSS, and JavaScript to enhance user engagement and feedback on websites.",
    src: "https://strong-valkyrie-d88d03.netlify.app/",
  },
];

// Rendering projects data in portfolio section
var portfolio = document.querySelector(".swiper-wrapper");
projects.forEach((project) => {
  var projectDiv = document.createElement("div");
  projectDiv.classList.add("card");
  projectDiv.classList.add("swiper-slide");

  var projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;

  var projectDesc = document.createElement("p");
  projectDesc.textContent = project.desc;

  var techStack = document.createElement("ul");
  project.tech.forEach((skill) => {
    var skills = document.createElement("li");
    skills.textContent = skill;
    techStack.appendChild(skills);
  });

  var projectLink = document.createElement("a");
  projectLink.href = project.src;
  projectLink.target = "_blank";
  projectLink.textContent = "Visit";

  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectDesc);
  projectDiv.appendChild(techStack);
  projectDiv.appendChild(projectLink);

  portfolio.appendChild(projectDiv);
});

// Swiper JS
let swiper = new Swiper(".project__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
