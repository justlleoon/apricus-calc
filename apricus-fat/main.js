var systemButton = 0;
function toggleSystem() {
    if (systemButton === 0) {
        $(".us-container").hide();
        $('input[name="mt-height"]').show();
        $("#cm").show()
        $("#kg").show()
        $("#lb").hide()
        $(".height-container p").text("Height (cm)")
        $(".weight-container p").text("Height (kg)")
        document.getElementById("cm").required = true;
        document.getElementById("ft").required = false;
        document.getElementById("in").required = false;
        document.getElementById("kg").required = true;
        document.getElementById("lb").required = false;
        document.getElementById("lb").value = "";
        document.getElementById("ft").value = "";
        document.getElementById("in").value = "";
        $("button#toggle").text("Change to Imperial Units")
        systemButton++
    } else {
        $(".us-container").show();
        $('input[name="mt-height"]').hide();
        $("#cm").hide()
        $("#kg").hide()
        $("#lb").show()
        $(".height-container p").text("Height (ft, in)")
        $(".weight-container p").text("Height (lb)")
        document.getElementById("cm").required = false;
        document.getElementById("ft").required = true;
        document.getElementById("in").required = true;
        document.getElementById("kg").required = false;
        document.getElementById("lb").required = true;
        document.getElementById("kg").value = "";
        document.getElementById("cm").value = "";
        $("button#toggle").text("Change to Metric Units")
        systemButton--
    }
}

function calculate() {
    var ageValue = document.getElementById("age").value;
    var ageNum = Number(ageValue);
    var ftValue = document.getElementById("ft").value;
    var ftNum = Number(ftValue);
    var ft = ftNum * 12;
    var inchValue = document.getElementById("in").value;
    var inchNum = Number(inchValue);
    var inch = ft + inchNum;
    var cmValue = document.getElementById("cm").value;
    var cmNum = Number(cmValue);
    var lbValue = document.getElementById("lb").value;
    var kgValue = document.getElementById("kg").value;
    var lb = Number(lbValue);
    var kg = Number(kgValue);
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    if (systemButton === 0) {
        var bmiHeight = inch * inch;
        var bmiStepOne = lb / bmiHeight;
        var bmi = 703 * bmiStepOne;
    } else if (systemButton === 1) {
        var metre = cmNum / 100;
        var bmiHeight = metre * metre;
        var bmi = kg / bmiHeight;
    } else {
        console.log("Error!")
        return false
    }
    if (male === true) {
        totalbf = 1.20 * bmi + 0.23 * ageNum - 16.2;
    } else if (female === true) {
        totalbf = 1.20 * bmi + 0.23 * ageNum - 5.4;
    } else {
        console.log("Error!")
        return false;
    }
    var bf = Math.round(totalbf);
    if (bf > 25 && male === true || bf > 32 && female === true) {
        //document.getElementById("results").style.backgroundColor = "red";
        $("#results").css("background-color", "red");
        $("#results p").html("Your body fat is considered <b>obese</b>.");
    } else if (bf > 18 && male === true || bf > 25 && female === true) {
        //document.getElementById("#results").style.backgroundColor = "yellow";
        $("#results").css("background-color", "#008000");
        $("#results p").html("Your body fat is considered <b>average</b>.");
    } else if (bf > 14 && male === true || bf > 21 && female === true) {
        //document.getElementById("#results").style.backgroundColor = "#03C03C";
        $("#results").css("background-color", "#03C03C");
        $("#results p").html("Your body fat is considered <b>fitness</b> level.");
    } else if (bf > 6 && male === true || bf > 14 && female === true) {
        //document.getElementById("#results").style.backgroundColor = "#50C878";
        $("#results").css("background-color", "#50C878");
        $("#results p").html("Your body fat is considered <b>athlete</b> level.");
    } else if (bf > 2 && male === true || bf > 10 && female === true) {
        //document.getElementById("#results").style.backgroundColor = "#318CE7";
        $("#results").css("background-color", "#318CE7");
        $("#results p").html("Your body fat is considered to have an <b>essential</b> amount of fats.");
    } else {
        //document.getElementById("#results").style.backgroundColor = "#00DDFF";
        $("#results").css("background-color", "#00DDFF")
        $("#results p").html("Your body fat is considered to have <b>less than essential</b> amounts of fats.")
    }
    $("#results h1").text(`Your body fat is ${bf}%.`);
    $("#results").slideDown();
    return false;
}