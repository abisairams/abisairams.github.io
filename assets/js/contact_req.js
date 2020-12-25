const form = document.contact_form;
const name = form.name;
const email = form.email;
const subject = form.subject;
const message = form.message;
const submit = form.submit;

if (name.value == '' ) {};



function validate() {
	if (name.value == '')
		return false;
	if (email.value == '')
		return false;
	if (subject.value == '')
		return false;
	if (message.value == '')
		return false;

	return true;
}

function doRequest(e) {
	e.preventDefault();
	if(!validate())
		return;

	fetch('./assets/mail.php', {
		method: 'post',
		body: new FormData(form)
	}).then(res => res.text())
	.then(res => {
		if (res == 1) {
			submit.value = 'Mensaje enviado';
			submit.setAttribute('disabled', true)
		};
	});

}

form.addEventListener('submit', doRequest, false)