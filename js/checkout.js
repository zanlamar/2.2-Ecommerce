"use strict"

const fName = document.getElementById("fName");
const fEmail = document.getElementById("fEmail");
const fAddress = document.getElementById("fAddress");
const fLastN = document.getElementById("fLastN");
const fPassword = document.getElementById("fPassword");
const fPhone = document.getElementById("fPhone");

const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorAddress = document.getElementById("errorAddress");  
const errorLastN = document.getElementById("errorLastN");  
const errorPassword = document.getElementById("errorPassword");  
const errorPhone = document.getElementById("errorPhone");  

const regexfName = /^[A-Za-zÀ-ÿ\s]{3,}$/;
const regexPhone = /^\d{9}$/;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexAdress = /^.{3,}$/;

const validColor = "rgb(213, 255, 174)";
const invalidColor = "rgb(255, 224, 212 )";


let error = 0;

const validateInput = (field, regex) => {
	if(field.value.trim() == "" || !regex.test(field.value.trim())) {
		field.classList.add("is-invalid");
		field.classList.remove("is-valid");
		field.style.backgroundColor = invalidColor;
		console.log('error', field);
		return error++
	} else {
		field.classList.add("is-valid");
		field.classList.remove("is-invalid");
		field.style.backgroundColor = validColor;
		return 0;
	};
};

const submit = document.getElementById("btn-submit");

const validate = () => {
	validateInput(fName, regexfName);
	validateInput(fLastN, regexfName);
	validateInput(fPhone, regexPhone);
	validateInput(fEmail, regexEmail);
	validateInput(fPassword, regexPass); 
	validateInput(fAddress, regexAdress);
	
	if(error>0) {
		console.log("error")
		window.alert("Please fill in all required fields.");
	} else {
		console.log("success")
		window.alert("Form submitted successfully");
	}
};

submit.addEventListener("click", validate);


const blurValidation = (field, regex) => {
	if(field.value.trim() == "" || !regex.test(field.value.trim())) {
    	field.classList.add("is-invalid");
    	field.classList.remove("is-valid");
		field.style.backgroundColor = invalidColor;
  	} else {
    	field.classList.add("is-valid");
		field.classList.remove("is-invalid");
		field.style.backgroundColor = validColor;
  	}
};

fName.addEventListener("blur", () => {
	blurValidation(fName,regexfName);
});

fLastN.addEventListener("blur", () => {
	blurValidation(fLastN,regexfName);
});

fPhone.addEventListener("blur", () => {
	blurValidation(fPhone,regexPhone);
});

fEmail.addEventListener("blur", () => {
	blurValidation(fEmail,regexEmail);
});

fPassword.addEventListener("blur", () => {
	blurValidation(fPassword,regexPass);
});

fAddress.addEventListener("blur", () => {
	blurValidation(fAddress,regexAdress);
});


