// Animated statistics

const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const update = () => {

        const speed = target / 80;

        count += speed;

        if (count < target) {

            counter.textContent = Math.ceil(count);

            setTimeout(update, 20);

        } else {

            counter.textContent = target;

        }

    };

    update();

});


// Scroll reveal

const sections = document.querySelectorAll(
    ".intro, .help, .how, .home-cta"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(section => {

    observer.observe(section);

});


// Console message

console.log("RoboMed Home Page loaded successfully!");// JavaScript Document

