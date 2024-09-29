"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.project-img');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => {
        observer.observe(image);
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the link that opens the modal
var link = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the link, open the modal 
link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

