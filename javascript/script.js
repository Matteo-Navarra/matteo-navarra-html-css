function sendMail(params) {
    var tempParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    emailjs.send('service_zmlxzyv', 'template_vlnrg8n', tempParams)
        .then(function(res) {
            console.log('succes', res.status);
        })
}