// Function to add a new list item to the ul with id 'proplanList'
function addListItem() {
    // Get the ul element by its id
    const ulElement = document.getElementById('proplanList');
    
    if (ulElement) {
        // Create a new li element
        const liElement = document.createElement('li');
        
        // Set the text content of the li element
        liElement.textContent = '24/7 Phone support';
        
        // Append the li element to the ul
        ulElement.appendChild(liElement);
    } else {
        console.error('Element with id "proplanList" not found.');
    }
}

// Function to move the element with id 'basic-plan' before the element with id 'pro-plan'
function moveBasicPlan() {
    const basicPlan = document.getElementById('basic-plan');
    const proPlan = document.getElementById('pro-plan');

    if (basicPlan && proPlan) {
        // Get the parent node of 'pro-plan' and insert 'basic-plan' before it
        proPlan.parentNode.insertBefore(basicPlan, proPlan);
    } else {
        console.error('Element with id "basic-plan" or "pro-plan" not found.');
    }
}

// Function to update the 'Get started' button of the 'pro-plan' element
function updateProPlanButton() {
    const proPlan = document.getElementById('pro-plan');
    if (proPlan) {
        // Find the button inside the 'pro-plan' element
        const button = proPlan.querySelector('button');
        if (button) {
            // Update the button styles
            button.style.backgroundColor = '#007bff';
            button.style.color = '#ffffff';
            button.textContent = 'Buy Now';
        } else {
            console.error('Button not found inside "pro-plan" element.');
        }
    } else {
        console.error('Element with id "pro-plan" not found.');
    }
}

// Function to update the storage amounts for the Basic and Pro plans
function updateStorageOffers() {
    const basicPlan = document.getElementById('basic-plan');
    const proPlan = document.getElementById('pro-plan');

    if (basicPlan) {
        // Find the storage element inside the 'basic-plan' and update its text
        const basicStorage = basicPlan.querySelector('.storage-amount');
        if (basicStorage) {
            basicStorage.textContent = '150GB Storage (50% more!)';
        } else {
            console.error('Storage element not found inside "basic-plan".');
        }
    } else {
        console.error('Element with id "basic-plan" not found.');
    }

    if (proPlan) {
        // Find the storage element inside the 'pro-plan' and update its text
        const proStorage = proPlan.querySelector('.storage-amount');
        if (proStorage) {
            proStorage.textContent = '250GB Storage (25% more!)';
        } else {
            console.error('Storage element not found inside "pro-plan".');
        }
    } else {
        console.error('Element with id "pro-plan" not found.');
    }
}

// Function to add a radio button to toggle between monthly and annual payment options
function addPaymentToggle() {
    const plans = [
        { id: 'basic-plan', monthlyPrice: 10 },
        { id: 'pro-plan', monthlyPrice: 20 }
    ];

    plans.forEach(plan => {
        const planElement = document.getElementById(plan.id);
        if (planElement) {
            // Create a container for the toggle
            const toggleContainer = document.createElement('div');
            toggleContainer.className = 'payment-toggle';

            // Create the monthly radio button
            const monthlyLabel = document.createElement('label');
            const monthlyRadio = document.createElement('input');
            monthlyRadio.type = 'radio';
            monthlyRadio.name = `${plan.id}-payment`;
            monthlyRadio.value = 'monthly';
            monthlyRadio.checked = true;
            monthlyRadio.addEventListener('change', () => updatePlanPrice(plan.id, plan.monthlyPrice, 'monthly'));
            monthlyLabel.appendChild(monthlyRadio);
            monthlyLabel.appendChild(document.createTextNode('Monthly'));

            // Create the annual radio button
            const annualLabel = document.createElement('label');
            const annualRadio = document.createElement('input');
            annualRadio.type = 'radio';
            annualRadio.name = `${plan.id}-payment`;
            annualRadio.value = 'annual';
            annualRadio.addEventListener('change', () => updatePlanPrice(plan.id, plan.monthlyPrice, 'annual'));
            annualLabel.appendChild(annualRadio);
            annualLabel.appendChild(document.createTextNode('Annual (2 months free)'));

            // Append the radio buttons to the container
            toggleContainer.appendChild(monthlyLabel);
            toggleContainer.appendChild(annualLabel);

            // Append the toggle container to the plan element
            planElement.appendChild(toggleContainer);

            // Add the initial price display
            const priceDisplay = document.createElement('div');
            priceDisplay.className = 'price-display';
            priceDisplay.textContent = `$${plan.monthlyPrice}/month`;
            planElement.appendChild(priceDisplay);
        } else {
            console.error(`Element with id "${plan.id}" not found.`);
        }
    });
}

// Function to update the price display based on the selected payment option
function updatePlanPrice(planId, monthlyPrice, paymentType) {
    const planElement = document.getElementById(planId);
    if (planElement) {
        const priceDisplay = planElement.querySelector('.price-display');
        if (priceDisplay) {
            if (paymentType === 'monthly') {
                priceDisplay.textContent = `$${monthlyPrice}/month`;
            } else if (paymentType === 'annual') {
                const annualPrice = monthlyPrice * 10; // 2 months free
                priceDisplay.textContent = `$${annualPrice}/year`;
            }
        } else {
            console.error('Price display element not found.');
        }
    } else {
        console.error(`Element with id "${planId}" not found.`);
    }
}
// Function to reset the document to its original HTML
function resetDocument() {
    // Fetch the original HTML from the server or a predefined source
    fetch('tarea2-3.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch the original HTML.');
            }
            return response.text();
        })
        .then(originalHTML => {
            // Replace the current document's body with the original HTML
            document.open();
            document.write(originalHTML);
            document.close();
        })
        .catch(error => {
            console.error('Error resetting the document:', error);
        });
}

// Ensure the function runs after the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     addListItem();
//     moveBasicPlan();
//     updateProPlanButton();
//     updateStorageOffers();
//     addPaymentToggle();
// });



