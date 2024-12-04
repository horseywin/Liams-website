const project = document.getElementById("project-1");
let isHovering = false;

// Event listeners for mouseenter and mouseleave
project.addEventListener('mouseenter', () => {
isHovering = true;
});

project.addEventListener('mouseleave', () => {
isHovering = false;
});

// Use setInterval to continuously scroll the element when not hovering
setInterval(() => {
   if (project.scrollLeft >= project.scrollWidth - project.clientWidth) {
    project.scrollLeft = 0
   } else {
    if (!isHovering) {
        project.scrollLeft += 1
    }
   }
}
, 20);  // Adjust the interval as needed (30ms is a smooth scroll)
