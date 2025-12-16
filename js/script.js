const button= document.GetElementById("hamburger__button")
const menu = document.GetElementByClass(".mobile-menu")

button.addEventListener("click", () => {
  menu.classlist.toggle("open")
})
