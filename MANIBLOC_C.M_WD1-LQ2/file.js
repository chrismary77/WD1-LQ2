// Toggle Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const dropbtn = document.querySelector(".dropbtn");
  const dropdown = document.querySelector(".dropdown-content");

  // Show/Hide dropdown on button click
  dropbtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  // Close dropdown if user clicks outside
  window.addEventListener("click", (event) => {
    if (!event.target.matches('.dropbtn')) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  });
});