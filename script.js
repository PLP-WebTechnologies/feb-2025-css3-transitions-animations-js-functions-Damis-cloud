if (localStorage.getItem("animationApplied") === "true") {
    document.getElementById("animatedElement").classList.add("animate");
  }
  
  // Function to trigger animation and store preference in localStorage
  function triggerAnimation() {
    const box = document.getElementById("animatedElement");
  
    // Add the animation class
    box.classList.add("animate");
  
    // Store user preference in localStorage
    localStorage.setItem("animationApplied", "true");
  }
  
  // Add event listener to the button
  document.getElementById("animateBtn").addEventListener("click", triggerAnimation);