import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free-solid';

import { Luminous } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.css';

import '../sass/index.sass';

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('a.gallery');
    if (element) new Luminous(element);
});
