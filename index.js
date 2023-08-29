const tabLinksEl = document.querySelectorAll(".tab-links");
const tabContentsEl = document.querySelectorAll(".tab-contents");
console.log(tabLinksEl);
console.log(tabContentsEl);

tabLinksEl.forEach((tablink) => {
   tablink.addEventListener("click", openTab);
});

function openTab(e){
   tabLinksEl.forEach((tablink) => {
      tablink.classList.remove("active-link");
   })

   e.target.classList.add("active-link");

   tabContentsEl.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
   })

   const targetText = e.target.textContent;
   const tab = document.getElementById(targetText);
   tab.classList.add("active-tab");   
}

const sideMenuEl = document.getElementById("sidemenu");
console.log(sideMenuEl);

function openMenu() {
   sideMenuEl.style.right = "0";
}

function closeMenu() {
   sideMenuEl.style.right = "-200px";
}