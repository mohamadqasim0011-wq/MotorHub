/* ==========================================================================
   ABOUT PAGE INTERACTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Post Ad Button Logic
    const postAdBtn = document.getElementById('postAd');
    if (postAdBtn) {
        postAdBtn.addEventListener('click', () => {
            window.location.href = "sell.html";
        });
    }

    // 2. Button Booking Animation
    const buttons = document.querySelectorAll('.btn-red');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = "scale(0.95)";
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = "scale(1)";
        });
    });
});

/**
 * Global function for service buttons
 */
function bookService(serviceType) {
    alert(`Thank you for choosing Cars Hub!\n\nRedirecting you to our ${serviceType} booking portal...`);
    
    // In a real app, you would redirect to a specific form:
    // if(serviceType === 'Inspection') window.location.href = 'inspection-form.html';
}