 const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent default form submit

    // Get all values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageText = document.getElementById('message').value.trim();

    // Validation
    if (firstName && lastName && email && messageText) {
      message.textContent = "Submitted successfully!";
      message.style.color = "green";
      form.reset(); // Optional: Clear form after submit
    } else {
      message.textContent = "Please fill out all columns.";
      message.style.color = "red";
    }
  });

  document.getElementById("searchIcon").addEventListener("click", function () {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();

  // Section IDs mapping
  const sections = ["home", "about", "product", "contact"];

  if (sections.includes(input)) {
    window.location.href = `#${input}`;  // Scroll to section
  } else {
    alert("No such section found!");
  }
});

document.getElementById("searchInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("searchIcon").click();  // Trigger icon click
  }
});

const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
});