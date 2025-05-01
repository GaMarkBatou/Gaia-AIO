const divLCT = document.createElement("div");

        divLCT.innerHTML = "Local time";
		divLCT.id="lctime";
		
		document.body.appendChild(divLCT);
		
		
		//const tzoneResponse = await fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=${apiKey}&format=xml&country=${plz2}&zone=*${city}*&fields=zoneName`);




async function getLocalTime(countryCode) {
    const apiKey = '9X4HWJRJFQLN';
    const listTimeZoneUrl = `https://api.timezonedb.com/v2.1/list-time-zone?key=${apiKey}&format=xml&country=${countryCode}`;
    
    // Fetch the time zone list
    const response = await fetch(listTimeZoneUrl);
    const xmlData = await response.text();
    
    // Parse the XML to get the zoneName
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
    const zoneName = xmlDoc.getElementsByTagName('zoneName')[0].textContent;
    
    // Fetch the local time using the zoneName
    const getTimeZoneUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${zoneName}`;
    const timeResponse = await fetch(getTimeZoneUrl);
    const timeData = await timeResponse.json();
    
        // Remove the seconds from the formatted date and time
    let formattedTime = timeData.formatted.slice(0, -3);
	// ---- proba       
	

    // Get the last 2 characters after removing the last 3 characters
    let lastTwoChars = formattedTime.slice(-2);
    
    // Convert the last 2 characters to a number
    let lastTwoNumber = parseInt(lastTwoChars, 10);
    
    // Replace the last 2 characters based on the specified conditions
    if (lastTwoNumber >= 1 && lastTwoNumber <= 20) {
        formattedTime = formattedTime.slice(0, -2) + '10';
    } else if (lastTwoNumber >= 21 && lastTwoNumber <= 40) {
        formattedTime = formattedTime.slice(0, -2) + '30';
    } else if (lastTwoNumber > 40) {
        formattedTime = formattedTime.slice(0, -2) + '50';
    }

	// ---- proba 
	
    // Return the formatted date and time without seconds
    return formattedTime;

}
        

async function updateLocalTime() {
    const localZip = document.getElementById("arid_WIN_0_536871001").value.trim().substring(0, 2);
    let localTime = await getLocalTime(localZip);
    
    console.log(localZip);
    console.log(localTime);
    
    // Display the date and time
    document.getElementById('lctime').textContent = `Local Time ~ ${localTime} ~`;
}

// Initial call to set the time after 6 seconds
setTimeout(async () => {
    await updateLocalTime();
    
    // Update the time every minute after the initial 6 seconds
    setInterval(async () => {
        await updateLocalTime();
    }, 600000); // Frissítés 10 percenként
}, 8000); // Várakozás 8 másodpercig



