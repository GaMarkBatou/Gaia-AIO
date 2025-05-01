const divLCT = document.createElement("div");

        divLCT.innerHTML = "Local time";
		divLCT.id="lctime";
		
		document.body.appendChild(divLCT);
		

function getUTCOffset(countryCode) {
    const timeZones = {
        "AF": 4.5,   // Afghanistan
        "AL": 1,     // Albania
        "DZ": 1,     // Algeria
        "AS": -11,   // American Samoa
        "AD": 1,     // Andorra
        "AO": 1,     // Angola
        "AI": -4,    // Anguilla
        "AQ": 0,     // Antarctica
        "AG": -4,    // Antigua and Barbuda
        "AR": -3,    // Argentina
        "AM": 4,     // Armenia
        "AW": -4,    // Aruba
        "AU": 10,    // Australia (Eastern Standard Time)
        "AT": 1,     // Austria
        "AZ": 4,     // Azerbaijan
        "BS": -5,    // Bahamas
        "BH": 3,     // Bahrain
        "BD": 6,     // Bangladesh
        "BB": -4,    // Barbados
        "BY": 3,     // Belarus
        "BE": 1,     // Belgium
        "BZ": -6,    // Belize
        "BJ": 1,     // Benin
        "BM": -4,    // Bermuda
        "BT": 6,     // Bhutan
        "BO": -4,    // Bolivia
        "BA": 1,     // Bosnia and Herzegovina
        "BW": 2,     // Botswana
        "BR": -3,    // Brazil
        "BN": 8,     // Brunei
        "BG": 2,     // Bulgaria
        "BF": 0,     // Burkina Faso
        "BI": 2,     // Burundi
        "KH": 7,     // Cambodia
        "CM": 1,     // Cameroon
        "CA": -5,    // Canada (Eastern Standard Time)
        "CV": -1,    // Cape Verde
        "KY": -5,    // Cayman Islands
        "CF": 1,     // Central African Republic
        "TD": 1,     // Chad
        "CL": -3,    // Chile
        "CN": 8,     // China
        "CO": -5,    // Colombia
        "KM": 3,     // Comoros
        "CG": 1,     // Congo
        "CR": -6,    // Costa Rica
        "HR": 1,     // Croatia
        "CU": -5,    // Cuba
        "CY": 2,     // Cyprus
        "CZ": 1,     // Czech Republic
        "DK": 1,     // Denmark
        "DJ": 3,     // Djibouti
        "DM": -4,    // Dominica
        "DO": -4,    // Dominican Republic
        "EC": -5,    // Ecuador
        "EG": 2,     // Egypt
        "SV": -6,    // El Salvador
        "GQ": 1,     // Equatorial Guinea
        "ER": 3,     // Eritrea
        "EE": 2,     // Estonia
        "ET": 3,     // Ethiopia
        "FJ": 12,    // Fiji
        "FI": 2,     // Finland
        "FR": 1,     // France
        "GA": 1,     // Gabon
        "GM": 0,     // Gambia
        "GE": 4,     // Georgia
        "DE": 1,     // Germany
        "GH": 0,     // Ghana
        "GR": 2,     // Greece
        "GD": -4,    // Grenada
        "GT": -6,    // Guatemala
        "GN": 0,     // Guinea
        "GW": 0,     // Guinea-Bissau
        "GY": -4,    // Guyana
        "HT": -5,    // Haiti
        "HN": -6,    // Honduras
        "HU": 1,     // Hungary
        "IS": 0,     // Iceland
        "IN": 5.5,   // India				//error
        "ID": 7,     // Indonesia (Western Indonesia Time)
        "IR": 3.5,   // Iran
        "IQ": 3,     // Iraq
        "IE": 0,     // Ireland
        "IL": 2,     // Israel
        "IT": 1,     // Italy
        "JM": -5,    // Jamaica
        "JP": 9,     // Japan
        "JO": 2,     // Jordan
        "KZ": 5,     // Kazakhstan
        "KE": 3,     // Kenya
        "KI": 12,    // Kiribati
        "KP": 9,     // North Korea
        "KR": 9,     // South Korea
        "KW": 3,     // Kuwait
        "KG": 6,     // Kyrgyzstan
        "LA": 7,     // Laos
        "LV": 2,     // Latvia
        "LB": 2,     // Lebanon
        "LS": 2,     // Lesotho
        "LR": 0,     // Liberia
        "LY": 2,     // Libya
        "LI": 1,     // Liechtenstein
        "LT": 2,     // Lithuania
        "LU": 1,     // Luxembourg
        "MG": 3,     // Madagascar
        "MW": 2,     // Malawi
        "MY": 8,     // Malaysia
        "MV": 5,     // Maldives
        "ML": 0,     // Mali
        "MT": 1,     // Malta
        "MH": 12,    // Marshall Islands
        "MR": 0,     // Mauritania
        "MU": 4,     // Mauritius
        "MX": -6,    // Mexico (Central Standard Time)
        "FM": 11,    // Micronesia
        "MD": 2,     // Moldova
        "MC": 1,     // Monaco
        "MN": 8,     // Mongolia
        "ME": 1,     // Montenegro
        "MA": 0,     // Morocco
        "MZ": 2,     // Mozambique
        "MM": 6.5,   // Myanmar
        "NA": 1,     // Namibia
        "NR": 12,    // Nauru
        "NP": 5.75,  // Nepal
        "NL": 1,     // Netherlands
        "NZ": 12,    // New Zealand
        "NI": -6,    // Nicaragua
        "NE": 1,     // Niger
        "NG": 1,     // Nigeria
        "NO": 1,     // Norway
        "OM": 4,     // Oman
        "PK": 5,     // Pakistan
        "PW": 9,     // Palau
        "PA": -5,    // Panama
        "PG": 10,    // Papua New Guinea
        "PY": -4,    // Paraguay
        "PE": -5,    // Peru
        "PH": 8,     // Philippines
        "PL": 1,     // Poland
        "PT": 0,     // Portugal
        "QA": 3,     // Qatar
        "RO": 2,     // Romania
        "RU": 3,     // Russia (Moscow Time)
        "RW": 2,     // Rwanda
        "WS": 13,    // Samoa
        "SM": 1,     // San Marino
        "ST": 0,     // Sao Tome and Principe
        "SA": 3,     // Saudi Arabia
        "SN": 0,     // Senegal
        "RS": 1,     // Serbia
        "SC": 4,     // Seychelles
        "SL": 0,     // Sierra Leone
        "SG": 8,     // Singapore
        "SK": 1,     // Slovakia
        "SI": 1,     // Slovenia
        "SB": 11,    // Solomon Islands
        "SO": 3,     // Somalia
        "ZA": 2,     // South Africa
        "ES": 1,     // Spain
        "LK": 5.5,   // Sri Lanka
        "SD": 2,     // Sudan
        "SR": -3,    // Suriname
        "SZ": 2,     // Swaziland
        "SE": 1,     // Sweden
        "CH": 1,     // Switzerland
        "SY": 2,     // Syria
        "TW": 8,     // Taiwan
        "TJ": 5,     // Tajikistan
        "TZ": 3,	 // Tanzania
        "TH": 7,     // Thailand
        "TL": 9,     // Timor-Leste
        "TG": 0,     // Togo
        "TO": 13,    // Tonga
        "TT": -4,    // Trinidad and Tobago
        "TN": 1,     // Tunisia
        "TR": 3,     // Turkey
        "TM": 5,     // Turkmenistan
        "TV": 12,    // Tuvalu
        "UG": 3,     // Uganda
        "UA": 2,     // Ukraine
        "AE": 4,     // United Arab Emirates
        "GB": 0,     // United Kingdom
        "US": -5,    // United States (Eastern Standard Time)
        "UY": -3,    // Uruguay
        "UZ": 5,     // Uzbekistan
        "VU": 11,    // Vanuatu
        "VE": -4,    // Venezuela
        "VN": 7,     // Vietnam
        "YE": 3,     // Yemen
        "ZM": 2,     // Zambia
        "ZW": 2      // Zimbabwe
    };

    const offset = timeZones[countryCode];
    if (offset !== undefined) {
        const hours = Math.floor(offset);
        const minutes = (offset % 1) * 60;
        return (offset >= 0 ? "+" : "") + hours + (minutes ? ":" + minutes : "") + ":00";
    } else {
        return "Country code not found";
    }
}


function noCETCEST(countryCode){
	
	const timeZones = {
        "JP": 9,     // Japan
		"IN": 5.5,   // India	
		"CN": 8,     // China
		"BR": -3,    // Brazil
		"AU": 10,    // Australia (Eastern Standard Time)
		"EG": 2,     // Egypt
		"OM": 4,     // Oman
		"SA": 3,     // Saudi Arabia
		"NP": 5.75,  // Nepal
		"VN": 7,     // Vietnam
		"MX": -6,    // Mexico (Central Standard Time)
		"IL": 2,     // Israel
		"UA": 2,     // Ukraine
	}
	
	const offset = timeZones[countryCode];
    if (offset !== undefined) {
		return -1;
	} else {
		return 0;
	}
	
	
	
}

function getCETCESTDIF() {
    const date = new Date();
    const jan = new Date(date.getFullYear(), 0, 1);
    const jul = new Date(date.getFullYear(), 6, 1);
    const stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());

    if (date.getTimezoneOffset() < stdTimezoneOffset) {
        return -1;
    } else {
        return 0;
    }
}


async function updateLocalTime() {


    function displayLocalTime() {
        const localZip = document.getElementById("arid_WIN_0_536871001").value.trim().substring(0, 2);
        const offsetString = getUTCOffset(localZip);
		const noCET = noCETCEST(localZip)
    //  console.log(localZip);
	//	console.log(offsetString);
		
        /* if (offsetString === "Country code not found") {
            //console.error("Invalid country code");
			document.getElementById('lctime').textContent = `Unknown Country`;
            return;
        } */

        const offsetParts = offsetString.split(":");
        const offsetHours = parseInt(offsetParts[0]);
        const offsetMinutes = parseInt(offsetParts[1]) || 0;
		//console.log(offsetParts);
		//console.log(offsetHours);
		//console.log(offsetMinutes);
		//console.log(getCETCESTDIF);

        function updateTime() {
            const now = new Date();
            now.setUTCHours(now.getUTCHours() + offsetHours + getCETCESTDIF() + noCET);

            now.setUTCMinutes(now.getUTCMinutes() + offsetMinutes);

			const year = now.getUTCFullYear();
			const month = String(now.getUTCMonth() + 1).padStart(2, '0');
			const day = String(now.getUTCDate()).padStart(2, '0');

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
	//		console.log(hours);
	//		console.log(minutes);
	//		console.log(seconds);
			if (hours != "NaN")
			{	
				document.getElementById('lctime').textContent = `Local Time: ${year}-${month}-${day} ${hours}:${minutes}`;
			} else {
				document.getElementById('lctime').textContent = `Unknown Location`;
			}
            
        }
    
        updateTime(); 

    }
	displayLocalTime();
}

setTimeout(async () => {
    await updateLocalTime();
    
    // Update the time every minute after the initial 6 seconds
    setInterval(async () => {
        await updateLocalTime();
    }, 1000); // Frissítés 10 percenként
}, 8000); // Várakozás 8 másodpercig




