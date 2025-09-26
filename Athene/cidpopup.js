// Az XPath megadása
var xpath = "/html/body/div[1]/div[5]/div[5]/div[2]/div/div/table/tbody/tr[32]/td[3]/nobr/input";

// Függvény, amely megkeresi az elemet és visszanyeri annak tartalmát
function getElementContent() {
    var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var elementContent = element ? element.value : null;
    console.log(elementContent);
    localStorage.setItem('cid', elementContent);
}

setInterval(getElementContent, 500);

