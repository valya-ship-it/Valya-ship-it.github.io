const hamburger = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('iconHamburger');
const closeIcon = document.getElementById('iconClose');

let isOpen = false;

hamburgerBtn.addEventListener("click", () => {
isOpen = !isOpen;

  if (isOpen) {
    mobileNav.classList.remove("translate-x-full");
    mobileNav.classList.add("translate-x-0");

    hamburgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");

    document.body.style.overflow = "hidden";
  } else{
    mobileNav.classList.remove("translate-x-0");
    mobileNav.classList.add("translate-x-full");

    document.body.style.overflow = "";

    closeIcon.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
  }
})