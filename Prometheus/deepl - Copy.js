/* async function translateText(text, targetLang = 'EN') {
  const apiKey = '1e794577-c2a9-46ef-b021-66514b6e613b:fx';
  const response = await fetch('https://api.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `auth_key=${apiKey}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`
  });

  const data = await response.json();
  return data.translations[0].text;
} */



async function translateText(text, targetLang = 'EN') {
  const apiKey = '1e794577-c2a9-46ef-b021-66514b6e613b:fx';
  const response = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `auth_key=${apiKey}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`
  });

  const data = await response.json();
  return data.translations[0].text;
}








var entryWiever = document.getElementById('arid_WIN_0_536871792');

var newTranslateEN = document.createElement("div");
	newTranslateEN.id = "translateen";
	newTranslateEN.style.position = "absolute";
	newTranslateEN.style.zIndex = "99999";
	newTranslateEN.style.top = "55px";
	newTranslateEN.style.left = "682px";
	newTranslateEN.style.width = "25px";
	newTranslateEN.style.height = "25px";
    newTranslateEN.innerHTML = "<button id='translateEng' type='button' title='Translate to ENG'>EN</button>";

	newTranslateEN.style.setProperty('height', '25px', 'important');
	newTranslateEN.style.setProperty('width', '25px', 'important');
	
	//
document.getElementById('WIN_0_536871792').appendChild(newTranslateEN);	
	/* FormApp--FormContainer */
	const transEn = document.getElementById('translateEng');
	transEn.style.setProperty('margin', '1px');
	transEn.style.setProperty('padding', '2px');


document.getElementById("translateEng").addEventListener("click", function() {
	
	//arid_WIN_0_536871792
	entryWiever = document.getElementById('arid_WIN_0_536871792');
	//runTranslation();
	
	var text2 = entryWiever.value;
	var replacetext2 = translateText(text2);
	entryWiever.value = replacetext2;
	
});