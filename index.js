const tabLinksEl = document.querySelectorAll(".tab-links");
const tabContentsEl = document.querySelectorAll(".tab-contents");
const seeMoreEl = document.getElementById("seeMore");
const workListEl = document.querySelectorAll(".work");
// console.log(workListEl);
// console.log(seeMoreEl);
// console.log(tabLinksEl);
// console.log(tabContentsEl);

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

let filteredWorkList = [];

for(let i = 0; i < workListEl.length; i++){
   if(workListEl[i].classList.contains("seeMore")){
      filteredWorkList = [...filteredWorkList, workListEl[i]];
   }
}

seeMoreEl.addEventListener("click", (e) => {
   if(e.target.textContent === "See More"){
      filteredWorkList.forEach((work) => {
         work.classList.remove("seeMore");
      });
      e.target.textContent = "See Less" ;
   }
   else{
      filteredWorkList.forEach((work) => {
         work.classList.add("seeMore");
      });
      e.target.textContent = "See More" ;
   }
})


console.log(filteredWorkList);
