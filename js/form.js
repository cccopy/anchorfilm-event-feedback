// hand form submit redirect
const scriptURL = 'https://script.google.com/macros/s/AKfycby6JS-TkhvzZrDegI-7q4raR7f675xRGhFmDxHUTZga0pvoaucYEvMIqmdIChn24F2mag/exec';
const form = document.forms['submit-to-google-sheet'];
form.addEventListener('submit', e => { 
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response);
            location.href = "./sucess.html";
        })
        .catch(error => console.error('Error!', error.message));
});
