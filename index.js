// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
// DOM manipulation functions

// DOM manipulation functions that match the test expectations

// 1. Function to add an element to the DOM
function addElementToDOM(containerId, textContent) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }
  
  const newElement = document.createElement('div');
  newElement.textContent = textContent;
  newElement.className = 'added-element';
  container.appendChild(newElement);
}

// 2. Function to remove an element from the DOM
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
    return true;
  }
  return false;
}

// 3. Function to simulate a button click
function simulateClick(containerId, clickMessage) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }
  
  // Clear and add click message
  container.innerHTML = '';
  const messageElement = document.createElement('div');
  messageElement.textContent = clickMessage;
  messageElement.className = 'click-result';
  container.appendChild(messageElement);
}

// 4. Function to handle form submission (matching test expectations)
function handleFormSubmit(formId, contentContainerId) {
  const form = document.getElementById(formId);
  const input = document.getElementById('user-input');
  const contentContainer = document.getElementById(contentContainerId);
  const errorMessage = document.getElementById('error-message');
  
  if (!form || !input || !contentContainer || !errorMessage) {
    console.error('Required elements not found');
    return false;
  }
  
  // Prevent default form submission
  if (form.addEventListener) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
  }
  
  const inputValue = input.value.trim();
  
  // Check for empty input
  if (inputValue === '') {
    errorMessage.textContent = 'Input cannot be empty';
    errorMessage.classList.remove('hidden');
    return false;
  }
  
  // Clear any previous error
  errorMessage.textContent = '';
  errorMessage.classList.add('hidden');
  
  // Add submitted content to the container
  const submittedElement = document.createElement('div');
  submittedElement.textContent = inputValue;
  submittedElement.className = 'submitted-content';
  contentContainer.appendChild(submittedElement);
  
  // Clear the input field
  input.value = '';
  
  return true;
}

// 5. Alternative form submission function for actual form events
function handleRealFormSubmit(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }
  
  const input = document.getElementById('user-input');
  const dynamicContent = document.getElementById('dynamic-content');
  const errorMessage = document.getElementById('error-message');
  
  if (!input || !dynamicContent || !errorMessage) {
    console.error('Required elements not found');
    return false;
  }
  
  const inputValue = input.value.trim();
  
  if (inputValue === '') {
    errorMessage.textContent = 'Input cannot be empty';
    errorMessage.classList.remove('hidden');
    return false;
  }
  
  errorMessage.textContent = '';
  errorMessage.classList.add('hidden');
  
  const submittedElement = document.createElement('div');
  submittedElement.textContent = inputValue;
  submittedElement.className = 'submitted-content';
  dynamicContent.appendChild(submittedElement);
  
  input.value = '';
  return true;
}

// 6. Initialize form event listener
function initializeForm() {
  const form = document.getElementById('user-form');
  if (form) {
    form.addEventListener('submit', handleRealFormSubmit);
  }
}

// 7. Helper function to simulate button with actual button click
function handleButtonClick() {
  const dynamicContent = document.getElementById('dynamic-content');
  if (!dynamicContent) {
    console.error('Dynamic content element not found');
    return;
  }
  
  const clickElement = document.createElement('div');
  clickElement.textContent = 'Button was clicked!';
  clickElement.className = 'button-click';
  dynamicContent.appendChild(clickElement);
}

// 8. Initialize button event listener
function initializeButton() {
  const button = document.getElementById('simulate-click');
  if (button) {
    button.addEventListener('click', handleButtonClick);
  }
}

// 9. Initialize all event listeners
function initializeApp() {
  initializeForm();
  initializeButton();
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    handleRealFormSubmit,
    handleButtonClick,
    initializeApp
  };
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// submission update 