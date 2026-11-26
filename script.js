const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const currentYear = document.querySelector("#current-year");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.querySelector(".sr-only").textContent = isOpen ? "Menü öffnen" : "Menü schließen";
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.querySelector(".sr-only").textContent = "Menü öffnen";
      navigation.classList.remove("is-open");
    }
  });
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
