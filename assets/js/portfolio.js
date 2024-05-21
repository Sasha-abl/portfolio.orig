// const scrollUP = document.querySelector('#scrolllllll')
// scrollUP.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     });
// });
const scrollUp = document.querySelector('#scroll-up');
const burger = document.querySelector('#burger-menu')
const nav = document.querySelector('nav')
const ul = document.querySelector('nav ul')
const navlink = document.querySelector('.nav-link')



scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        // left: 0,
        behavior: "smooth",
    });
});



burger.addEventListener('click', () =>{
    ul.list.toggle('show')
})



navlink.forEach(    (link) =>
    link.addEventListener('click', () =>{
ul.classList.remove("show")
})
);