/* 
  NOTE: To use this lightbox function, you need the following HTML and CSS:

  HTML:
  - A container with the ID "bild-container" that wraps the images.
  - Each image should be inside an element with the class "bild-wrapper".
  - A lightbox div with the ID "lightbox" that will be used to display the selected image.

  Example:
  <div id="bild-container">
      <div class="bild-wrapper">
          <img src="image1.jpg" alt="Image 1">
      </div>
      <div class="bild-wrapper">
          <img src="image2.jpg" alt="Image 2">
      </div>
  </div>
  <div id="lightbox"></div>

  CSS:
  - The lightbox div should be hidden by default and become visible when the "show" class is added.
  - Recommended styling for the lightbox:
      #lightbox {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          align-items: center;
          justify-content: center;
          z-index: 1000;
      }
      #lightbox.show {
          display: flex;
      }
      .close {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          font-size: 24px;
          color: white;
      }

  Tip:
  - Use `console.log` outputs to check the lightbox status (e.g., clicks and content).
  - Ensure all required IDs and classes are present in your HTML.
*/


// Select the main container for the images and the lightbox
let imageContainer = document.getElementById("bild-container");
let lightbox = document.getElementById("lightbox");

// Add an event listener for clicks on the image container
imageContainer.addEventListener("click", function(evt) {
    console.log("Image container clicked."); // Debugging output

    // Find the closest element with the class 'bild-wrapper'
    let imageWrapper = evt.target.closest(".bild-wrapper");
    console.log("Found bild-wrapper:", imageWrapper);

    if (imageWrapper) {
        // Get the image element inside the wrapper
        let image = imageWrapper.querySelector("img");
        console.log("Found image:", image);

        if (image) {
            // Add the clicked image to the lightbox
            lightbox.innerHTML = `<div class="close">X</div> ${image.outerHTML}`;
            lightbox.classList.add("show");
            console.log("Lightbox content set and shown.");
        }
    }
});

// Add an event listener for clicks on the lightbox
lightbox.addEventListener("click", function(evt) {
    console.log("Lightbox clicked."); // Debugging output

    // Close the lightbox if the click is outside the image
    if (!evt.target.hasAttribute("src")) {
        lightbox.classList.remove("show");
        console.log("Lightbox hidden.");
    }
});
