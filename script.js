// Simple script to alert when a section is clicked
document.querySelectorAll("section h2").forEach((heading) => {
  heading.addEventListener("click", () => {
    alert(`You clicked on: ${heading.textContent}`);
  });
});
