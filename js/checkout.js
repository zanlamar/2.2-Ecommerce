"use strict"
/*
En aquest exercici hauràs d'implementar la lògica perquè els camps del formulari compleixin les següents condicions:

- Tots els camps són obligatoris.
- Tots els camps han de tenir almenys 3 caràcters.
- El nom i cognoms han de contenir només lletres.
- El telèfon ha de contenir només números.
- La contrasenya ha d'incloure números i lletres.
- L'email ha de tenir format d'email.

Quan l'usuari/ària introdueixi un camp que no compleixi les validacions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge a la part inferior.

*/



// Exercise 6
const validate = () => {
	
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");


	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById("errorAddress");  
	const errorLastN = document.getElementById("errorLastN");  
	const errorPassword = document.getElementById("errorPassword");  
	const errorPhone = document.getElementById("errorPhone");  


	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.trim() == "")
		error++;
	
	if(fLastN.value.trim() == "")
		error++;	

	if(fPhone.value.trim() == "")
		error++;

	if(fEmail.value.trim() == "")
		error++;

	if(fPassword.value.trim() == "")
		error++;

	if(fAddress.value == "")
		error++;

	if(error>0) {
		alert("Please fill in all required fields.");
	} else {
		alert("Form submitted successfully");
	}
};
