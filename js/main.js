// // Booking system variables
// let currentStep = 1;
// const totalSteps = 6;

// // Initialize the booking system
// document.addEventListener('DOMContentLoaded', function () {
//     setupNavigation();
//     setupCleaningOptions();
//     setupPropertyTypeSelection();
//     setupFormSubmission();
//     updateSummary();
// });

// function setupNavigation() {
//     document.querySelectorAll('.next-step').forEach(btn => {
//         btn.addEventListener('click', () => {
//             if (validateCurrentStep()) {
//                 nextStep();
//             }
//         });
//     });

//     document.querySelectorAll('.prev-step').forEach(btn => {
//         btn.addEventListener('click', () => {
//             prevStep();
//         });
//     });
// }

// function nextStep() {
//     if (currentStep < totalSteps) {
//         document.getElementById(`step${currentStep}`).classList.remove('active');
//         currentStep++;
//         document.getElementById(`step${currentStep}`).classList.add('active');
//         updateSummary();
//     }
// }

// function prevStep() {
//     if (currentStep > 1) {
//         document.getElementById(`step${currentStep}`).classList.remove('active');
//         currentStep--;
//         document.getElementById(`step${currentStep}`).classList.add('active');
//     }
// }

// function validateCurrentStep() {
//     const currentStepElement = document.getElementById(`step${currentStep}`);
//     const requiredFields = currentStepElement.querySelectorAll('[required]');
    
//     for (let field of requiredFields) {
//         if (!field.value.trim()) {
//             field.focus();
//             alert('Please fill in all required fields');
//             return false;
//         }
//     }
//     return true;
// }

// function setupCleaningOptions() {
//     document.querySelectorAll('.cleaning-option').forEach(option => {
//         option.addEventListener('click', function () {
//             this.classList.toggle('selected');
//         });
//     });
// }

// function setupPropertyTypeSelection() {
//     document.querySelectorAll('.property-type').forEach(type => {
//         type.addEventListener('click', function () {
//             document.querySelectorAll('.property-type').forEach(t => t.classList.remove('selected'));
//             this.classList.add('selected');
//         });
//     });
// }

// function setupFormSubmission() {
//     document.getElementById('booking-form').addEventListener('submit', function (e) {
//         e.preventDefault();

//         if (!document.getElementById('terms').checked) {
//             alert('Please accept the terms and conditions');
//             return;
//         }

//         const formData = new FormData(this);
//         const bookingData = {};

//         for (let [key, value] of formData.entries()) {
//             bookingData[key] = value;
//         }

//         bookingData.extras = Array.from(document.querySelectorAll('.cleaning-option.selected'))
//             .map(option => option.dataset.option);

//         const selectedPropertyType = document.querySelector('.property-type.selected');
//         if (selectedPropertyType) {
//             bookingData.propertyType = selectedPropertyType.dataset.type;
//         }

//         console.log('Booking Data:', bookingData);
//         alert('Booking submitted successfully! You will receive a confirmation email shortly.');
//     });
// }

// function updateSummary() {
//     const cleaningLevel = document.getElementById('cleaning-level')?.value;
//     if (cleaningLevel) {
//         document.getElementById('selected-service').textContent =
//             cleaningLevel === 'standard' ? 'Standard House Cleaning' : 'Deep House Cleaning';
//     }

//     const serviceDate = document.getElementById('service-date')?.value;
//     const serviceTime = document.getElementById('service-time')?.value;
//     if (serviceDate && serviceTime) {
//         document.getElementById('selected-date').textContent = `${serviceDate} at ${serviceTime}`;
//     }

//     const frequency = document.querySelector('input[name="frequency"]:checked')?.value;
//     if (frequency) {
//         const frequencyText = {
//             'one-time': 'One Time',
//             'weekly': 'Weekly',
//             'biweekly': 'Bi-weekly',
//             'monthly': 'Monthly'
//         };
//         document.getElementById('selected-frequency').textContent = frequencyText[frequency];
//     }
// }

// // Update summary on changes
// document.getElementById('service-date')?.addEventListener('change', updateSummary);
// document.getElementById('service-time')?.addEventListener('change', updateSummary);
// document.querySelectorAll('input[name="frequency"]').forEach(el => {
//     el.addEventListener('change', updateSummary);
// });
