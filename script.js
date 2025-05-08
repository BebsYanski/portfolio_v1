let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("ri-close-fill");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      message.style.display = "block";
    } else {
      message.style.display = "block";
      message.style.color = "red";
      message.textContent = "❌ Oops! Something went wrong. Please try again.";
    }
  } catch (error) {
    message.style.display = "block";
    message.style.color = "red";
    message.textContent = "❌ Network error. Please try again later.";
  }
});
