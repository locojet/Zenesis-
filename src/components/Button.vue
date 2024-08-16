<template>
  <div class="img-container">
    <button class="styled-button">Buchen</button>
  </div>
</template>

<style>
/* Globale Styles */

/* Container Styles */
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13vh; /* Full viewport height */
  
}

/* Button Styles */
.styled-button {
  background-color: #4CAF50; /* Green background */
  color: white; /* White text */
  padding: 1rem 2rem; /* Padding for size */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  font-size: 1rem; /* Font size */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */
}

/* Button Hover Effects */
.styled-button:hover {
  background-color: #45a049; /* Darker green on hover */
  transform: translateY(-3px); /* Slight upward movement on hover */
}



/* Adjustments for Smaller Viewports */
@media (max-width: 768px) {
  .img-container {
    margin-top: 3rem; /* Higher height on smaller screens */
  }
}

</style>
