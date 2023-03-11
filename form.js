const myForm = document.querySelector('#myForm');

myForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const fullname = document.querySelector('#fullname').value;
	const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const phonenumber = document.querySelector('#phonenumber').value;
    

	const formData = {
		fullname,
		username,
        email,
        phonenumber
        

	};

	localStorage.setItem('formData', JSON.stringify(formData));

    console.log(formData);

	window.location.href = '/details.html';
});
