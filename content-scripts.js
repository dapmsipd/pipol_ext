// This code will add a button to the specified pages
console.log('content_scripts loaded');

function findDivWithTextContent(targetText) {
    const divsWithText = Array.from(document.querySelectorAll('div')); // Select all div elements

    const matchingDivs = divsWithText.filter(div => div.textContent.includes(targetText)); // Filter divs with specific text

    return matchingDivs;
}

function addButton() {
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    button.addEventListener('click', function() {
        alert('Button Clicked!');
    });

    const targetText = 'Regional Breakdown';
    const matchingDivs = findDivWithTextContent(targetText);

    // Assuming you want to add the button to the body of the page
    // const targetElement = document.getElementById('targetElement');
    matchingDivs[0].appendChild(button);
}

// Call the function to add the button
addButton();