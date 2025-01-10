const faqQuestionDivs = document.querySelectorAll(".faq-question-div");

faqQuestionDivs.forEach((faqQuestionDiv) => {
    const plusIcon = faqQuestionDiv.querySelector(".plus-icon");
    const faqAnswer = faqQuestionDiv.nextElementSibling;

    faqAnswer.style.display = "none";

    plusIcon.addEventListener("click", () => {
        const isVisible = window.getComputedStyle(faqAnswer).display !== "none";

        if (!isVisible) {
            faqAnswer.style.display = "block"; 
            plusIcon.src = "./assets/images/icon-minus.svg";
        } 
        
        else {
            faqAnswer.style.display = "none";
            plusIcon.src = "./assets/images/icon-plus.svg";
        }
    });

    plusIcon.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const isVisible = window.getComputedStyle(faqAnswer).display !== "none";

            if (!isVisible) {
                faqAnswer.style.display = "block"; 
                plusIcon.src = "./assets/images/icon-minus.svg";
            } 
            
            else {
                faqAnswer.style.display = "none";
                plusIcon.src = "./assets/images/icon-plus.svg";
            }
        }
    });
});
