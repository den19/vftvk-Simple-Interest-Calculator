function calc()
{
    let principal = document.getElementById("interest").value;
	if (principal <= 0)
	{
   		alert("The Amount must be greater than zero.");
   		document.getElementById("interest").focus();
		document.getElementById("interest").click();
   		return null;
	}
	let amount = document.getElementById("amount").value;	
	let years = document.getElementById("years").value;
	let interest = principal * years * amount / 100;
	let currentDate = new Date();
  	let currentYear = currentDate.getFullYear();
	let futureYear = parseInt(currentYear) + parseInt(years);

	let msg = "If you deposit <mark>" + amount + "</mark>," 
	+ "<br/>at an interest rate of <mark>" + principal + "</mark>."
	+ "<br/>You will receive an amount of <mark>" + interest + "</mark>,"
	+ "<br/>in the year <mark>" + futureYear + "</mark><br/>";  
	document.getElementById("result").innerHTML = msg;
	document.getElementById("interest").focus();
}

function showInterest()
{
	let interest = document.getElementById("interest");
	let output = document.getElementById("rate");
	output.innerHTML = interest.value.concat("%");
}

