document.addEventListener("DOMContentLoaded", function () {
    const dynamicText = document.getElementById("dynamic-text");
    const nameText = "Nourhan Nazieh";
    let index = 0;
    let isDeleting = false;
    let speed = 100; 
    let frameId;

    function typeEffect() {
        if (!isDeleting) {
            dynamicText.innerHTML = nameText.substring(0, index + 1);
            index++;

            if (index === nameText.length) {
                isDeleting = true;
                speed = 1000; 
            } else {
                speed = 100; 
            }
        } else {
            dynamicText.innerHTML = nameText.substring(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
                speed = 500; 
            } else {
                speed = 50; 
            }
        }

        frameId = setTimeout(typeEffect, speed);
    }

    typeEffect();
});
