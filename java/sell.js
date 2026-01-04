/* ==========================================================================
   SELL PAGE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Redirect (Post an Ad)
    const postAdBtnNav = document.getElementById('postAd');
    const postAdHero = document.getElementById('postAdNow');

    const handleAdClick = () => {
        // Since we are already on the sell page, we can scroll to a form 
        // or redirect to a specific listing creator page.
        alert("Redirecting you to the Ad Creator Form...");
        // window.location.href = "create-ad.html"; 
    };

    if (postAdBtnNav) postAdBtnNav.addEventListener('click', handleAdClick);
    if (postAdHero) postAdHero.addEventListener('click', handleAdClick);

    // 2. Simple Scroll Animation for Feature Cards
    const cards = document.querySelectorAll('.feature-card');
    
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if(cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    });

    // Initial state for animation
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
    });
});