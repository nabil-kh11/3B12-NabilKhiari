function verifMail(ch)
{
	var i=ch.indexOf("@");
	var j=ch.lastIndexOf(".");
	if((i<j) && (i>0) && (j>0))
	{
		return true;
	}
	else
	{
		return false;
	}
}
function sendMessage(){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    const error = document.querySelector('.alert-error');
	const success = document.querySelector('.alert-success');

	success.style.display = 'none'; 
	error.style.display = 'none'; 

     if (name.value === '' || email.value === '' || message.value === ''){
        error.style.display = 'block';
		error.innerHTML = '<span class="close-button"  onclick="this.parentElement.style.display=\'none\';">&times;</span><strong>The form is invalid. Some required fields are still empty</strong>';
		alert("ily'a des champs sont vides");
		return;
     } 
	 if(email.value !== '' && ! verifMail(email.value)){
		error.style.display = 'block';
		error.innerHTML = '<span class="close-button"  onclick="this.parentElement.style.display=\'none\';">&times;</span> <strong>The email is invalid</strong>';
		alert("email unvalide");
		return;
	}
	
	
	name.value ='';
	email.value ='';
	message.value ='';
	success.style.display = 'block';
	console.log(name);

	return;
	  
}
