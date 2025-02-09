document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const cardBody = this.closest(".card-body");
            const shortDesc = cardBody.querySelector(".short-description");
            const fullDesc = cardBody.querySelector(".full-description");

            if (fullDesc.classList.contains("d-none")) {
                fullDesc.classList.remove("d-none");
                shortDesc.classList.add("d-none");
                this.textContent = "Read Less";
            } else {
                fullDesc.classList.add("d-none");
                shortDesc.classList.remove("d-none");
                this.textContent = "Read More";
            }
        });
    });
    
    
    
});
