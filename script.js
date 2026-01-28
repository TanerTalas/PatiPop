document.addEventListener("DOMContentLoaded", () => {
  // Find a Pet menu
  const buttons = [
    {
      btn: document.getElementById("findAPet-btn"),
      menu: document.getElementById("findAPet-menu"),
    },
    {
      btn: document.getElementById("allAbout-btn"),
      menu: document.getElementById("allAbout-menu"),
    },
  ];

  function closeAll() {
    buttons.forEach(({ btn, menu }) => {
      btn.classList.remove("text-pink-500");
      menu.classList.add("hidden");
    });
  }

  buttons.forEach(({ btn, menu }) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const isOpen = !menu.classList.contains("hidden");
      closeAll();

      if (!isOpen) {
        btn.classList.add("text-pink-500");
        menu.classList.remove("hidden");
      }
    });

    menu.addEventListener("click", (e) => e.stopPropagation());
  });

  // All About menu
  const catsBtn = document.getElementById("catsKittens-button");
  const catsMenu = document.getElementById("catsKittens-menu");

  const dogsBtn = document.getElementById("dogsPuppies-button");
  const dogsMenu = document.getElementById("dogsPuppies-menu");

  function closeAllAboutMenus() {
    catsMenu.classList.add("invisible");
    dogsMenu.classList.add("invisible");

    catsBtn.classList.remove("bg-pink-600");
    dogsBtn.classList.remove("bg-pink-600");
  }

  catsBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = !catsMenu.classList.contains("invisible");
    closeAllAboutMenus();

    if (!isOpen) {
      catsMenu.classList.remove("invisible");
      catsBtn.classList.add("bg-pink-600");
    }
  });

  dogsBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = !dogsMenu.classList.contains("invisible");
    closeAllAboutMenus();

    if (!isOpen) {
      dogsMenu.classList.remove("invisible");
      dogsBtn.classList.add("bg-pink-600");
    }
  });

  catsMenu.addEventListener("click", (e) => e.stopPropagation());
  dogsMenu.addEventListener("click", (e) => e.stopPropagation());

  // Global click
  document.addEventListener("click", () => {
    closeAll();
    closeAllAboutMenus();
  });

  // mobile menu
  const openBtn = document.getElementById("mobileMenuOpen-btn");
  const closeBtn = document.getElementById("mobileMenuClose-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  openBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
