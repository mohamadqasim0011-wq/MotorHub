/* ==========================================================================
   HOME PAGE - CAR DATA & DISPLAY LOGIC
   ========================================================================== */

// 1. Your Car Database (The Array of Objects)
const cars = [
    {
        name: "Honda Civic RS 2022",
        location: "Islamabad",
        year: "2022",
        mileage: "12,000 km",
        price: "PKR 8,500,000",
        image: "../images/image1.jpg",
        tag: "Featured"
    },
    {
        name: "Suzuki Swift 2023",
        location: "Karachi",
        year: "2023",
        mileage: "5,000 km",
        price: "PKR 4,800,000",
        image: "../images/image2.jpg",
        tag: "New"
    },
    {
        name: "KIA Sportage 2021",
        location: "Faisalabad",
        year: "2021",
        mileage: "28,000 km",
        price: "PKR 7,200,000",
        image: "../images/image3.jpg",
        tag: "Featured"
    },
    {
        name: "Toyota Fortuner Legender 2023",
        location: "Peshawar",
        year: "2023",
        mileage: "4,000 km",
        price: "PKR 18,500,000",
        image: "../images/image4.jpg",
        tag: "Premium"
    },
    {
        name: "Honda City 1.2L CVT 2022",
        location: "Rawalpindi",
        year: "2022",
        mileage: "18,500 km",
        price: "PKR 4,600,000",
        image: "../images/image5.jpg",
        tag: "Verified"
    },
    {
        name: "TOyotta Rivo",
        location: "Lahore",
        year: "2024",
        mileage: "19,300 km",
        price: "PKR 5,750,000",
        image: "../images/image6.png",
        tag: "Verified"
    }
];

// 2. Function to display cars in the Grid
function displayCars() {
    const carContainer = document.getElementById('car-container');
    
    // Safety check: only run if the container exists on this page
    if (!carContainer) return;

    // Clear existing content
    carContainer.innerHTML = "";

    cars.forEach(car => {
        const carHTML = `
            <div class="car-card">
                <div class="image-container">
                    <img src="${car.image}" alt="${car.name}">
                    <span class="tag">${car.tag}</span>
                </div>
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p class="location">📍 ${car.location}</p>
                    <div class="specs">
                        <span>${car.year}</span> | <span>${car.mileage}</span>
                    </div>
                    <div class="price-row">
                        <span class="price">${car.price}</span>
                        <button class="view-details">View Details</button>
                    </div>
                </div>
            </div>`;
        carContainer.innerHTML += carHTML;
    });
}

/* ==========================================================================
   SEARCH & NAVIGATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Run the display function
    displayCars();

    // Search Button Interaction
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert("Searching for the best cars in your city...");
        });
    }

    // Post Ad Button
    const postAdBtn = document.getElementById('postAd');
    if (postAdBtn) {
        postAdBtn.addEventListener('click', () => {
            alert("Redirecting to the Seller Portal...");
        });
    }
});