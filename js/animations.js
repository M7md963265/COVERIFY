const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);