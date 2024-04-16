function validEmail(str) {
  //your JS code here.
	  return /^(\w+)\@(\w+)\.(\w+)$/.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
