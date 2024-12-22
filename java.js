const btn = document.querySelector(".menu_btn");

const list = document.querySelector(".nav_list");

btn.addEventListener(('click'), ()=>{
    list.classList.toggle('active');
});