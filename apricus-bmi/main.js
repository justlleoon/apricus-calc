

function calculateBMI() {
    var inchvalue = document.getElementById("in").value;
    var kilovalue = document.getElementById("kg").value;
    var footvalue = document.getElementById("ft").value;
    var inch = Number(inchvalue);
    var foot = Number(footvalue);
    var kilo = Number(kilovalue);
    var height = foot * 12 + inch;
    var meters = height / 39.37;
    var squaredheight = meters * meters;
    var result = kilo / squaredheight;
    var bmi = result.toFixed(2);
    if (bmi < 18.5) {
        document.getElementById("results").style.backgroundColor = "#00DDFF";
        $("#results p").html("Your BMI is considered <b>underweight</b>. Consider increasing your calorie intake ( The healthy kind of course! ) and getting some excersise meant for building muscle.")
    } else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("results").style.backgroundColor = "#50C878";
        $("#results p").html("Your BMI is considered <b>heathly</b>. We reccomend to stay active and maintain a healthy diet.")
    } else if (bmi >= 24.9 && bmi < 29.9 ) {
        document.getElementById("results").style.backgroundColor = "orange";
        $("#results p").html("Your BMI is considered <b>overweight</b>. Start exercising regularly and have a managed diet.")
    } else if (bmi >= 29.9 && bmi < 34.9){
        document.getElementById("results").style.backgroundColor = "red";
        $("#results p").html("Your BMI is considered <b>obese ( class I )</b> It's very important to start exercising more often and have a managed diet. Doing so can reduce chances of diseases.")
    } else if (bmi >= 34.9 && bmi < 39.9){
        document.getElementById("results").style.backgroundColor = "red";
        $("#results p").html("Your BMI is considered <b>obese ( class II )</b> It's very important to start exercising more often and have a managed diet. Doing so can reduce chances of diseases.")
    } else {
        document.getElementById("results").style.backgroundColor = "red";
        $("#results p").html("Your BMI is considered <b>obese ( class III )</b> It's very important to start exercising more often and have a managed diet. Doing so can reduce chances of diseases.")
    }
    $("#results h1").text(`Your BMI is ${bmi}.`)
    $("#results").slideDown()
    return false
}