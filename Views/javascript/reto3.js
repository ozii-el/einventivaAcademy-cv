function addListItem() {
    const ulElement = document.getElementById('proplanList');
    
    if (ulElement) {
        const liElement = document.createElement('li');
        liElement.textContent = '24/7 Phone support';
        ulElement.appendChild(liElement);
    } else {
        console.error('Element with id "proplanList" not found.');
    }
}

function moveBasicPlan() {
    const basicPlan = document.getElementById('basic-plan');
    const proPlan = document.getElementById('pro-plan');

    if (basicPlan && proPlan) {
        proPlan.parentNode.insertBefore(basicPlan, proPlan);
    } else {
        console.error('Element with id "basic-plan" or "pro-plan" not found.');
    }
}

function updateProPlanButton() {
    const proPlan = document.getElementById('pro-plan');
    if (proPlan) {
        const button = proPlan.querySelector('button');
        if (button) {
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

function updateStorageOffers() {
    const basicPlan = document.getElementById('basic-plan');
    const proPlan = document.getElementById('pro-plan');

    if (basicPlan) {
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

function addPaymentToggle() {
    const plans = [
        { id: 'basic-plan', monthlyPrice: 10 },
        { id: 'pro-plan', monthlyPrice: 20 }
    ];

    plans.forEach(plan => {
        const planElement = document.getElementById(plan.id);
        if (planElement) {
            const toggleContainer = document.createElement('div');
            toggleContainer.className = 'payment-toggle';
            const monthlyLabel = document.createElement('label');
            const monthlyRadio = document.createElement('input');
            monthlyRadio.type = 'radio';
            monthlyRadio.name = `${plan.id}-payment`;
            monthlyRadio.value = 'monthly';
            monthlyRadio.checked = true;
            monthlyRadio.addEventListener('change', () => updatePlanPrice(plan.id, plan.monthlyPrice, 'monthly'));
            monthlyLabel.appendChild(monthlyRadio);
            monthlyLabel.appendChild(document.createTextNode('Monthly'));
            const annualLabel = document.createElement('label');
            const annualRadio = document.createElement('input');
            annualRadio.type = 'radio';
            annualRadio.name = `${plan.id}-payment`;
            annualRadio.value = 'annual';
            annualRadio.addEventListener('change', () => updatePlanPrice(plan.id, plan.monthlyPrice, 'annual'));
            annualLabel.appendChild(annualRadio);
            annualLabel.appendChild(document.createTextNode('Annual (2 months free)'));
            toggleContainer.appendChild(monthlyLabel);
            toggleContainer.appendChild(annualLabel);
            planElement.appendChild(toggleContainer);
            const priceDisplay = document.createElement('div');
            priceDisplay.className = 'price-display';
            priceDisplay.textContent = `$${plan.monthlyPrice}/month`;
            planElement.appendChild(priceDisplay);
        } else {
            console.error(`Element with id "${plan.id}" not found.`);
        }
    });
}

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

function resetDocument() {
    fetch('tarea2-3.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch the original HTML.');
            }
            return response.text();
        })
        .then(originalHTML => {
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



