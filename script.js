document.addEventListener("DOMContentLoaded", () => {
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

    menu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  document.addEventListener("click", closeAll);
});
