document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const randomImageElement = document.getElementById('randomImage');

    // Function to get a random image filename
    function getRandomImage() {
        const totalImages = 31; // Total number of images in the folder
        const randomIndex = Math.floor(Math.random() * totalImages) + 1;
        return `kusmetcheta/${randomIndex}-01.png`; // Adjust the folder name and extension as needed
    }

    // Function to set a random image to the <img> element inside .card__content
    function setRandomImage() {
        const randomImage = getRandomImage();
        randomImageElement.src = randomImage;
    }

    // Add click event listener to the .card element
    card.addEventListener('click', function() {
        // Toggle between card front and back on each click
        //this.querySelector('.card__inner').classList.toggle('is-flipped');
        
        // Set a new random image when card is flipped
        if (this.querySelector('.card__inner').classList.contains('is-flipped')) {
            setRandomImage();
        } 
        // else {
        //     // If flipping back to front, reset to the card back image
        //     randomImageElement.src = 'images/card_back.png'; // Adjust path if needed
        // }
    });

    // Initially set a random image when the page loads
    setRandomImage();
});



document.addEventListener('DOMContentLoaded', function() {
  const videoIntro = document.getElementById('videoIntro');
  const introVideo = document.getElementById('introVideo');

  // Play video intro on page load
  introVideo.play();

  // Fade out video intro when finished
  introVideo.addEventListener('ended', function() {
      videoIntro.classList.add('fade-out');
  });
});
