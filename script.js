// ========== 📧 CONTACT FORM FUNCTIONALITY ========== //
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get all form values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const messageText = document.getElementById('message').value.trim();

  // Validate all inputs are filled
  if (firstName && lastName && email && messageText) {
    message.textContent = "✅ Submitted successfully!";
    message.style.color = "green";

    form.reset(); // Clear form inputs

    // Hide message after 3 seconds
    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    message.textContent = "❌ Please fill out all fields.";
    message.style.color = "red";
  }
});


// ========== 🔍 SEARCH BAR FUNCTIONALITY ========== //
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");
const navLinks = document.querySelectorAll(".nav-right li a");

searchIcon.addEventListener("click", function () {
  const input = searchInput.value.trim().toLowerCase();
  const validSections = ["home", "about", "product", "contact"];

  if (validSections.includes(input)) {
    window.location.href = `#${input}`;
    setActiveNav(input);
  } else {
    alert("⚠️ No such section found!");
  }
});

searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchIcon.click();
  }
});


// ========== ✅ ACTIVE NAV LINK FUNCTIONALITY ========== //
function setActiveNav(currentId) {
  navLinks.forEach(link => {
    const href = link.getAttribute("href").substring(1);
    if (href === currentId) {
      link.classList.add("active-nav");
    } else {
      link.classList.remove("active-nav");
    }
  });
}

// Optional: Automatically highlight section while scrolling (Bonus feature)
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 200; // Offset for fixed navbar
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      setActiveNav(link.getAttribute("href").substring(1));
    }
  });
});


///////

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 200;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      setActiveNav(link.getAttribute("href").substring(1));
    }
  });
});

window.addEventListener("load", () => {
  const currentHash = window.location.hash.substring(1);
  if (currentHash) {
    setActiveNav(currentHash);
  } else {
    setActiveNav("home"); // default active nav
  }
});

// ========== ✅ Burger ========== //

const burger = document.getElementById("burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
   burger.classList.toggle("active"); // ✅ add this line
});


