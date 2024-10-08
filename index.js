const hero_section_right = document.querySelector('.hero-section-right');
console.log(hero_section_right);

hero_section_right.addEventListener('mouseenter', () => {
    gsap.to(".book", {
        x: 10,
        y: 40,
        duration:0.3
    });
    gsap.to(".headphone", {
        x: -10,
        y: -40,
        duration:0.3
    });
});

hero_section_right.addEventListener('mouseleave', () => {
    gsap.to(".book", {
        x: 0,
        y: 0,
        duration:0.3
    });
    gsap.to(".headphone", {
        x: 0,
        y: 0,
        duration:0.3
    });
});

document.getElementById("openSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("active");
  });
  
  document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("active");
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    // Get all the accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');

    // Loop through each button
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the 'collapsed' class
            button.classList.toggle('collapsed');

            // Find the corresponding collapse element
            const collapseTarget = document.querySelector(button.getAttribute('data-bs-target'));

            // Check if the target is currently showing
            if (collapseTarget.classList.contains('show')) {
                // Hide it
                collapseTarget.classList.remove('show');
            } else {
                // Show it
                collapseTarget.classList.add('show');
            }

            // Close any other open items
            accordionButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.add('collapsed');
                    const otherCollapseTarget = document.querySelector(btn.getAttribute('data-bs-target'));
                    otherCollapseTarget.classList.remove('show');
                }
            });
        });
    });
});
