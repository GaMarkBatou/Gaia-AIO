const inputElement = document.getElementById('arid_WIN_0_536871782');
//const inputElement = document.querySelectorAll('input');

function getCETorCEST() {
    const date = new Date();
    const jan = new Date(date.getFullYear(), 0, 1);
    const jul = new Date(date.getFullYear(), 6, 1);
    const stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());

    if (date.getTimezoneOffset() < stdTimezoneOffset) {
        return 'CEST';
    } else {
        return 'CET';
    }
}


 inputElement.addEventListener('click', function(event) {

		const inputValue = event.target.value;
		var closuretimeforks = document.getElementById("arid_WIN_0_536871869").value.trim()
		let replacedValue = inputValue;
		replacedValue = replacedValue.replace(/XclosureTimeX/gi, closuretimeforks + " "+ getCETorCEST());
		event.target.value = replacedValue;

});