function showToast(message) {
    const toast = document.createElement("div");

    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.background = "#0b1f5e";
    toast.style.color = "white";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "9999";
    toast.style.fontWeight = "bold";

    document.body.appendChild(toast);

    setTimeout(function() {
        toast.remove();
    }, 3000);
}

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const bookingSection = document.getElementById("booking");

        bookingSection.scrollIntoView({
            behavior: "smooth"
        });

        showToast("Book button clicked! Please complete your booking.");
    });
});

const confirmButton = document.getElementById("confirmButton");

if (confirmButton) {
    confirmButton.addEventListener("click", function() {
        showToast("Booking confirmed successfully!");
    });
}