const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modal");


openModalBtn.addEventListener("click", function(){
    // console.log("button Clicked");
    modalOverlay.style.display = "flex";
})

closeModalBtn.addEventListener("click", function(){
    // console.log("button Clicked");
    modalOverlay.style.display = "none";
})