function applyEventListeners(projectDivId, popupDivName) {
    console.log("ADDING EVENT LISTENERS")
    document.getElementById(projectDivId).addEventListener("click", () => {
        console.log("Spawning popup")
        document.getElementById(popupDivName).style.display = "block";
    });
}

function addProject(title, description, imageURLList, popupDivName, projectDivId) {
    const BodyTag = document.getElementsByTagName("body")[0];
    const projectDiv = document.getElementById("projects");
    let imageInsertionCode = ""
    
    imageURLList.forEach((imageURL) => {
        imageInsertionCode += `<div style="${"background-image: url(" + imageURL + ");"}" class="popup-image"></div>`
    })
    projectDiv.innerHTML += `
    <div class="project-tile" id=${projectDivId} style="${"background-image: url(" + imageURLList[0] + ");"}">
        <h2 class="project-title">${title}</h2>
    </div>
    `;
    BodyTag.innerHTML += `
        <div id="${popupDivName}" class="popupDiv" style="display: none;">
            <div class="popup");">
                <h1 class="popup-title">${title}</h1>
                <h3 class="popup-description">${description}</h3>
                <div class="popup-image-container">
                    ${imageInsertionCode}
                </div>
            </div>
            <div class="popup-exit"></div>
        </div>
    `;
    applyEventListeners(projectDivId, popupDivName,)
}

//THIS IS START OF WHERE YOU EDIT

// Tetris
addProject("Example", "Examples are the backbone of understanding and learning, providing a clear and tangible way to grasp complex concepts. They bridge the gap between theory and practice, showing how ideas work in real-world scenarios. Without examples, even the most well-explained ideas can feel abstract and confusing. Whether you’re coding, solving a math problem, or learning a new skill, examples give you a foundation to build upon. They also inspire creativity by showcasing what’s possible, helping you apply the knowledge to your unique needs. In short, examples aren’t just helpful—they’re essential.", ["example.jpeg", "example2.webp", "example3.avif"], "tetris-popup", "tetris-game");

//THIS IS THE END OF WHERE YOU EDIT

// Function to handle popup exit
document.querySelectorAll(".popup-exit").forEach(exit => {
    exit.addEventListener("click", () => {
        console.log("EXIT CLICKED");
        const activePopups = document.querySelectorAll('.popupDiv');
        activePopups.forEach(popup => popup.style.display = "none");
    });
});

document.querySelectorAll("#navbar ul li a").forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");  // Get the target element ID (hash)
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Get the top position of the target element
            const targetPosition = targetElement.offsetTop;

            // Adjusted scroll offset to ensure visibility
            const navbarHeight = 300;  // Adjust this value based on your navbar height
            const scrollPosition = targetPosition - navbarHeight;

            // Smooth scroll to the target position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });

            console.log("Scrolling to", targetId);
        }
    });
});