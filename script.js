// Accessing the button
const button = document.getElementById('changeButton');

// Adding event listener to the button
button.addEventListener('click', function() {
    // Changing text content dynamically
    document.getElementById('main-title').textContent = "Updated Title";
    document.getElementById('main-text').textContent = "The content has been changed via JavaScript!";

    // Modifying CSS styles via JavaScript
    document.getElementById('main-title').style.color = "blue";
    document.getElementById('main-text').style.fontSize = "18px";

    // Adding a new element
    const newElement = document.createElement('div');
    newElement.className = "new-element";
    newElement.textContent = "This is a dynamically added element!";
    document.getElementById('newElementContainer').appendChild(newElement);

    // Removing the button after it is clicked
    button.style.display = 'none';
});