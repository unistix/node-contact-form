

const contactForm = document.querySelector('.contact-form')

//slect form data
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let submitted = document.getElementById('submitted');


contactForm.addEventListener('submit', (e)=>{
	e.preventDefault();
	console.log('submit clicked');



	let formData = {
		name: name.value,
		email: email.value,
		subject: subject.value,
		message: message.value
	}

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type', 'application/json');
	
	
	
	xhr.onload = function(){
		
		if (xhr.status == 200 || xhr.readyState == 4) {
      		console.log("working")
      		console.log(xhr.responseText)
      		name.value = '';
      		email.value= '';
      		subject.value= '';
      		message.value='';

      		submitted.innerHTML = `Form Submitted`


    	}else{
    		
    		console.log("not working")
    		submitted.innerHTML = `Something went wrong`
    	}
	}
	xhr.send(JSON.stringify(formData))
	

	

})