const button = document.querySelectorAll(".fa");

button.forEach(item => {
    item.addEventListener("click",(e) => {
        const control = item.parentElement;
        const main = control.parentElement;
        main.classList.toggle("active");
    })
})