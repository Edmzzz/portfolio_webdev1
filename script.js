$(document).ready(function () {
    document.querySelector("meta[name=viewport]").setAttribute(
        'content',
        'width=device-width, initial-scale=' + (1 / window.devicePixelRatio) + ', maximum-scale=1.0, user-scalable=0'
      );      
    // Toggle the menu when the hamburger icon is clicked
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open'); // Toggle the 'open' class on the hamburger icon
        $('.nav-links').toggleClass('open'); // Toggle the 'open' class on the navigation links
    });

    // Close the menu when a navigation link is clicked
    $('.nav-links a').click(function () {
        const navIcon = $('#nav-icon1');
        const navLinks = $('.nav-links');

        // If the menu is open, close it
        if (navIcon.hasClass('open')) {
            navIcon.removeClass('open'); // Remove 'open' from the hamburger icon
            navLinks.removeClass('open'); // Remove 'open' from the navigation links
        }
    });

    // Reset the menu state on window resize
    $(window).resize(function () {
        const navIcon = $('#nav-icon1');
        const navLinks = $('.nav-links');

        if ($(window).width() > 768) {
            // Remove 'open' class for desktop view
            navIcon.removeClass('open');
            navLinks.removeClass('open');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-details");
    const modal = document.getElementById("project-modal");
    const modalDetails = modal.querySelector(".modal-details");
    const modalImage = modal.querySelector("#modal-image");
    const closeModal = modal.querySelector(".close");

    // Event listener for "Show More" buttons
    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const projectBox = button.closest(".project-box");
            const details = projectBox.querySelector(".project-details").innerHTML; // Get project details
            const imageSrc = projectBox.querySelector("img").src; // Get project image source
            
            modalImage.src = imageSrc; // Set the image in the modal
            modalDetails.innerHTML = details; // Insert details into the modal
            modal.style.display = "flex"; // Show the modal
        });
    });

    // Event listener to close the modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Function to initialize EmailJS
function initializeEmailJS(publicKey) {
    emailjs.init(publicKey); // Initialize EmailJS with your public key
}

// Function to handle form submission
function handleFormSubmission(formId, serviceID, templateID) {
    const form = document.getElementById(formId);

    // Ensure the form exists before attaching the event listener
    if (!form) {
        console.error(`Form with ID "${formId}" not found.`);
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        emailjs.sendForm(serviceID, templateID, this).then(
            () => {
                alert("Your message has been sent successfully!");
                form.reset(); // Reset the form after successful submission
            },
            (error) => {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            }
        );
    });
}

// Initialize EmailJS and set up form handling
initializeEmailJS("v2kJlaNvC8o3c3Edh"); // Replace with your EmailJS public key
handleFormSubmission("contact-form", "service_eezrt99", "template_ml7dhxq"); // Replace with your service and template IDs



