document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail-images img");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            // Añadir clase fade-out
            mainImage.classList.add("fade-out");

            // Esperar hasta que la animación termine
            setTimeout(() => {
                mainImage.src = this.getAttribute("data-src");
                mainImage.classList.remove("fade-out");
                mainImage.classList.add("fade-in");

                // Remover clase fade-in después de la transición
                setTimeout(() => {
                    mainImage.classList.remove("fade-in");
                }, 500); // Tiempo de la transición
            }, 500); // Tiempo de la transición
        });
    });
});


