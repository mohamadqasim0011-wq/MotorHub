/* ==========================================================================
   TEAM & CONTACT PAGE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Redirect (Post Ad)
    const postAdBtn = document.getElementById('postAd');
    if (postAdBtn) {
        postAdBtn.addEventListener('click', () => {
            window.location.href = "sell.html";
        });
    }

    // 2. Click effect on contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('click', () => {
            const label = card.querySelector('h3').innerText;
            console.log(`User wants to: ${label}`);
            // Simple visual feedback
            card.style.transform = "scale(0.98)";
            setTimeout(() => card.style.transform = "scale(1)", 100);
        });
    });

    // 3. Simple text greeting in console
    console.log("Welcome to the Motor Hub Team Page!");
});