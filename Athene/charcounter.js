  
//arid_WIN_0_536871782

//document.getElementById("arid_WIN_0_536871782").addEventListener("change", function() {
const textArea = document.getElementById("arid_WIN_0_536871782");

  function countCharacters() {
        const textArea = document.getElementById('arid_WIN_0_536871782');
        let characterCount = textArea.nextElementSibling;

        if (!characterCount || !characterCount.classList.contains('character-count')) {
            characterCount = document.createElement('div');
            characterCount.className = 'character-count';
			characterCount.style.top = "165px";
            textArea.parentNode.insertBefore(characterCount, textArea.nextSibling);
        }

        const count = textArea.value.length;
        characterCount.textContent = count + ' characters';
		if (count > 3999) {
        textArea.style.backgroundColor = "#C82909"; // Red background when count exceeds 3999
		} else if (count > 3800) {
			textArea.style.backgroundColor = "#F59C27"; // Transparent background when count is below 4000
		} else if (count > 3600) {
			textArea.style.backgroundColor = "#F5D627"; // Transparent background when count is below 4000
		} else {
			textArea.style.backgroundColor = ""; // Transparent background when count is below 4000
		}
		
    }

setInterval(() => {
    // Inicializálás
    countCharacters();
}, 1500);
