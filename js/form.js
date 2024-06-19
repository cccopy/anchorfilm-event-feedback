// hand form submit redirect
const scriptURL = 'https://script.google.com/macros/s/AKfycby6JS-TkhvzZrDegI-7q4raR7f675xRGhFmDxHUTZga0pvoaucYEvMIqmdIChn24F2mag/exec';
const form = document.forms['submit-to-google-sheet'];
form.noValidate = true;
let hasAnyFocused = false;

function hideError(f) {
	var error_id = f.getAttribute("aria-describedby"),
		el;
    if (error_id && (el = document.getElementById(error_id))) {
    	el.textContent = "";
    	el.style.color = "";
    }
}

function showError(f) {
	var error_id = f.getAttribute("aria-describedby"),
		el;
    if (error_id && (el = document.getElementById(error_id))) {
    	el.textContent = f.validationMessage;
    	el.style.color = "red";
    }	
}


function onFieldChange(event) {
	hasAnyFocused = false;
  	hideError(event.target);
}

for (const field of form.elements) {
  field.addEventListener("invalid", function(event) {
    
    showError(field);
    
    if (!hasAnyFocused) {
    	field.focus();
    	hasAnyFocused = true;
    }
    
    event.preventDefault();
  });
  // field.addEventListener("input", onFieldChange);
  field.addEventListener("change", onFieldChange);
}
form.addEventListener('submit', e => { 
	const isValid = form.reportValidity();
	if (isValid) {
		const loading = document.querySelector(".loading");
	    loading.classList.remove("hide");
	    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	        .then(response => {
	            console.log('Success!', response);
	            location.href = "./sucess.html";
	        })
	        .catch(error => console.error('Error!', error.message));
	} 
    e.preventDefault()
    
});
