document.addEventListener("DOMContentLoaded", () => {
  const clearButton = document.getElementById("clear-filter");
  const filtersWrapper = document.querySelector(".filters-wrapper");

  if (!clearButton || !filtersWrapper) return;

  clearButton.addEventListener("click", () => {
    const checkboxes = filtersWrapper.querySelectorAll(
      'input[type="checkbox"]'
    );

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });
});
