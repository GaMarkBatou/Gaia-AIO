  
//arid_WIN_0_536871782

//document.getElementById("arid_WIN_0_536871782").addEventListener("change", function() {
	
const textArea = document.getElementById("arid_WIN_0_536871782");

function initializeCharacterCount(textArea) {
    // Look for an existing character count element next to the textArea
    let characterCount = textArea.parentNode.querySelector('.character-count');

    // If no such div exists, create it
    if (!characterCount) {
        characterCount = document.createElement('div');
        characterCount.className = 'character-count';
        characterCount.style.top = "165px";
        textArea.parentNode.insertBefore(characterCount, textArea.nextSibling);
    }

    // Return the existing or newly created element
    return characterCount;
}

function countCharacters() {
    const textArea = document.getElementById('arid_WIN_0_536871782');
    const characterCount = initializeCharacterCount(textArea);

    const count = textArea.value.length;
    characterCount.textContent = count + ' characters';

    // Change background color based on character count
    if (count > 3999) {
        textArea.style.backgroundColor = "#C82909"; // Red background when count exceeds 3999
    } else if (count > 3800) {
        textArea.style.backgroundColor = "#F59C27";
    } else if (count > 3600) {
        textArea.style.backgroundColor = "#F5D627";
    } else {
        textArea.style.backgroundColor = ""; // Transparent background when count is below 3600
    }
}

// Call countCharacters every 1500 ms
setInterval(() => {
    countCharacters();
}, 1500);
