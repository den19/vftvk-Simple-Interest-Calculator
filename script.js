/*
Melissa Connors
edX IBM Introduction to Cloud Development
*/

//Display slider value selected
function rateDisplay()
{
	var slider = document.getElementById("rate");
	var output = document.getElementById("displayRate");
	output.innerHTML = slider.value.concat("%");
}

//Populate the No. of Years drop-down
function listYears()
{
	//List should have 1-10 years
	for(var i=1; i<=10; i++)
	{
    		var select = document.getElementById("years");
    		var option = document.createElement("OPTION");
    		select.options.add(option);
    		option.text = i;
    		option.value = i;
	}
}

//Calculate the interest
function compute()
{
    	var principal = document.getElementById("principal").value;
	//Validate the prinicpal amount
	if (principal <= 0)
	{

   		alert("The Amount must be greater than zero.");

   		document.getElementById("principal").focus();
		document.getElementById("principal").click();

   		return null;

	}
	
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	
	var interest = principal * years * rate / 100;

	//Get the current year to calcuate this year plus No. of Years
	var currentDate = new Date();
  	var currentYear = currentDate.getFullYear();
	var futureYear = parseInt(currentYear) + parseInt(years);

	//Final caluclation message
	var finalMessage = "If you deposit <mark>" + principal + "</mark>," 
	+ "<br/>at an interest rate of <mark>" + rate + "%</mark>."
	+ "<br/>You will receive an amount of <mark>" + interest + "</mark>,"
	+ "<br/>in the year <mark>" + futureYear + "</mark><br/>";  
	document.getElementById("result").innerHTML = finalMessage;

	//Put the focus back in the amount
	document.getElementById("principal").focus();

}
