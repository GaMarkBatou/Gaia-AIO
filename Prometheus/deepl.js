
async function translateText(text, targetLang = 'EN') {
  const apiKey = '1e794577-c2a9-46ef-b021-66514b6e613b:fx';
  const apiUrl = apiKey.endsWith(':fx')
    ? 'https://api-free.deepl.com/v2/translate'
    : 'https://api.deepl.com/v2/translate';

  const requestBody = {
    text: [text],
    target_lang: targetLang
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    if (data.translations && data.translations.length > 0) {
      return data.translations[0].text;
    } else {
      throw new Error('No translation returned from DeepL');
    }
  } catch (error) {
    console.error('Translation error:', error);
    alert('Translation failed: ' + error.message);
    return text; // fallback to original text
  }
}


  var entryViewer = document.getElementById('arid_WIN_0_536871792');

  const newTranslateEN = document.createElement("div");
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

  document.getElementById('WIN_0_536871792').appendChild(newTranslateEN);

  const transEn = document.getElementById('translateEng');
  transEn.style.setProperty('margin', '1px');
  transEn.style.setProperty('padding', '2px');

  transEn.addEventListener("click", async function () {
	//entryViewer = document.getElementById('arid_WIN_0_536871792');
    const textToTranslate = entryViewer.value;
    const translatedText = await translateText(textToTranslate, 'EN');
    entryViewer.value = translatedText;
  });


	/* {
      "matches": ["https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS%3AMain/*"], 
      "js": ["Prometheus/deepl.js"]
    },
	{
      "matches": ["https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS:Main/*"], 
      "js": ["Prometheus/deepl.js"]
    },
	{
      "matches": ["https://wtts.telekom.de/wtts/forms/ars-etts/eTTS%3AMain/*"], 
      "js": ["Prometheus/deepl.js"]
    },
	{
      "matches": ["https://wtts.telekom.de/wtts/forms/ars-etts/eTTS:Main/*"], 
      "js": ["Prometheus/deepl.js"]
    },
 */