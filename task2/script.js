const galleryImages = {
    animals: ["photos/animals/animal1.jpg", "photos/animals/animal2.jpg", "photos/animals/animal3.jpg", "photos/animals/animal4.jpg", "photos/animals/animal5.jpg", "photos/animals/animal6.jpg", "photos/animals/animal7.jpg"],

    wonders: ["photos/wonders/wonder1.jpg", "photos/wonders/wonder2.jpg", "photos/wonders/wonder3.jpg", "photos/wonders/wonder4.jpg", "photos/wonders/wonder5.jpg", "photos/wonders/wonder6.jpg", "photos/wonders/wonder7.jpg", "photos/wonders/wonder8.jpg"],


    birds: ["photos/birds/bird1.jpg", "photos/birds/bird2.jpg", "photos/birds/bird3.jpg", "photos/birds/bird4.jpg", "photos/birds/bird5.jpg", "photos/birds/bird6.jpg", "photos/birds/bird7.jpg", "photos/birds/bird8.jpg"],
  };
  
  let currentImages = [];
  let currentIndex = 0;
  
  function openGallery(category) {
    currentImages = galleryImages[category];
    currentIndex = 0; 
    showImage(); 
    document.getElementById("modal").style.display = "flex";
  }
  
  function showImage() {
    const img = document.getElementById("modal-img");
    img.src = currentImages[currentIndex]; // 
  }
  
  function closeGallery() {
    document.getElementById("modal").style.display = "none";
  }
  
  function deleteImage() {
    currentImages.splice(currentIndex, 1); 
    if (currentImages.length === 0) {
      closeGallery(); 
    } else {
      currentIndex = Math.min(currentIndex, currentImages.length - 1); 
      showImage();
    }
  }
  
  function shareImage() {
    alert('Sharing ${currentImages[currentIndex]}');
  }
  function viewNextImage() {
    if(currentImages.length > 0){
      currentIndex = (currentIndex + 1) % currentImages.length;
      showImage();
    }
  }
  function closeGallery(){
    document.getElementById("modal").style.display="none";
  }
  
  
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("modal").style.display === "flex") {
      if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % currentImages.length; 
        showImage();
      } else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length; 
        showImage();
      }
    }
  });