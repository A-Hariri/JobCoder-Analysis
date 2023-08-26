const images = [
    { src: "AI&Data.png", title: "هوش مصنوعی و داده (AI & Data Scientist)" },
    { src: "cybersecurity.png", title: "امنیت (Security)" },
    { src: "Network.png", title: "شبکه (Network)" },
    { src: "programming&Developer.png", title: "برنامه نویسی و توسعه ( Programming)" },
    { src: "UIUX.png", title: "طراحی (UI/UX)" }
]; // لیست تصاویر

let currentIndex = 0;

function showImage(indexChange) {
    currentIndex = (currentIndex + indexChange + images.length) % images.length;
    const imageElement = document.getElementById("image");
    const titleElement = document.getElementById("image-title");

    imageElement.src = images[currentIndex].src;
    imageElement.alt = "تصویر " + (currentIndex + 1);

    titleElement.textContent = images[currentIndex].title;
}

showImage(0);