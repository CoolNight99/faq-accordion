const faqQuestionDivs = document.querySelectorAll(".faq-question-div");

const toggleFAQ = (faqAnswer, plusIcon) => {
    const isVisible = window.getComputedStyle(faqAnswer).display !== "none";
    faqAnswer.style.display = isVisible ? "none" : "block";
    plusIcon.src = isVisible
        ? "./assets/images/icon-plus.svg"
        : "./assets/images/icon-minus.svg";
};

faqQuestionDivs.forEach((faqQuestionDiv) => {
    const plusIcon = faqQuestionDiv.querySelector(".plus-icon");
    const faqAnswer = faqQuestionDiv.nextElementSibling;

    faqAnswer.style.display = "none";

    const handleToggle = () => toggleFAQ(faqAnswer, plusIcon);

    plusIcon.addEventListener("click", handleToggle);
    plusIcon.addEventListener("keypress", (event) => {
        if (event.key === "Enter") handleToggle();
    });
});