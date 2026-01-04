/* ==========================================================================
   BUY PAGE LOGIC & DYNAMIC FILTERING
   ========================================================================== */

const carData = {
    "Toyota": ["Corolla", "Fortuner", "Yaris", "Camry"],
    "Honda": ["Civic", "City", "Accord", "BR-V"],
    "Suzuki": ["Swift", "Cultus", "Alto", "Wagon R"],
    "KIA": ["Sportage", "Picanto", "Stonic"]
};

const cities = ["Lahore", "Karachi", "Islamabad", "Peshawar", "Faisalabad"];

document.addEventListener('DOMContentLoaded', () => {
    const makeDropdown = document.getElementById('make');
    const modelDropdown = document.getElementById('model');
    const cityDropdown = document.getElementById('city');

    // 1. Populate Make Dropdown
    Object.keys(carData).forEach(make => {
        let option = document.createElement('option');
        option.value = make;
        option.textContent = make;
        makeDropdown.appendChild(option);
    });

    // 2. Populate City Dropdown
    cities.forEach(city => {
        let option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });

    // 3. Update Models dynamically based on selected Make
    makeDropdown.addEventListener('change', function() {
        const selectedMake = this.value;
        
        // Reset Model Dropdown
        modelDropdown.innerHTML = '<option>Select Model</option>';

        if (carData[selectedMake]) {
            carData[selectedMake].forEach(model => {
                let option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelDropdown.appendChild(option);
            });
        }
    });
});

// 4. Search Functionality
function searchCars() {
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const city = document.getElementById('city').value;

    if (make === "Select Make") {
        alert("Please select a car make to begin your search.");
        return;
    }

    // This is where you would normally filter the DOM or fetch from a database
    console.log(`Filtering for: ${make} ${model} in ${city}`);
    
    // UI Feedback
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.innerText = "Searching...";
    searchBtn.disabled = true;

    setTimeout(() => {
        alert(`Showing results for ${make} ${model} in ${city}`);
        searchBtn.innerText = "Search Cars";
        searchBtn.disabled = false;
    }, 800);
}

// 5. Post Ad Button Logic
document.getElementById('postAd').addEventListener('click', () => {
    alert("Redirecting to the Sell page to post your ad!");
    window.location.href = "sell.html";
});