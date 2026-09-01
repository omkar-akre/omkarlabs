const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}
