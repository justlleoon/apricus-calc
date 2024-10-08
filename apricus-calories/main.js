var k = 0;

function toggleSystem() {
    if (k === 0) {
        $(".metric-type").show();
        $(".us-type").hide();
        $(".button").text("Change to US Units")
        usClearValue()
        document.getElementById("us-man").checked = true;
        document.getElementById("mt-age").value = "";
        document.getElementById("mt-cm").value = "";
        document.getElementById("mt-lb").value = "";
        k++
    } else if (k === 1) {
        $(".metric-type").hide();
        $(".us-type").show();
        $(".button").text("Change to Metric Units")
        mtClearValue()
        document.getElementById("mt-man").checked = true;
        document.getElementById("us-age").value = "";
        document.getElementById("us-ft").value = "";
        document.getElementById("us-in").value = "";
        document.getElementById("us-kg").value = "";
        k--
    } else {
        console.log("error! k must be atleast 0 or 1. please report this bug.")
    }
}

function metricCalculate() {    
    var uncountedMtAge = Number(document.getElementById("mt-age").value);
    var mtAge = Number(uncountedMtAge);
    var mtMan = document.getElementById("mt-man").checked;
    var mtWoman = document.getElementById("mt-woman").checked;
    var mtActivity = document.getElementById("mt-activity").value;
    var uncountedMtCm = Number(document.getElementById("mt-cm").value)
    var mtCm = Number(uncountedMtCm);
    var uncountedmtWeight = Number(document.getElementById("mt-kg").value);
    var mtWeight = Number(uncountedmtWeight);
    if (mtMan === true) {
        var mtManWeight = 13.75 * mtWeight;
        var mtManHeight = 5.003 * mtCm;
        var mtManAge = 6.75 * mtAge;
        var MtSubtotalCalories = 66.5 + mtManWeight + mtManHeight - mtManAge;
    } else if (mtWoman === true) {
        var mtWomanWeight = 9.563 * mtWeight;
        var mtWomanHeight = 1.850 * mtCm;
        var mtWomanAge = 4.676 * mtAge;
        var MtSubtotalCalories = 655.1 + mtWomanWeight + mtWomanHeight - mtWomanAge;
    } else {
        console.log("error! mt-gender is not man or woman. please report this bug.")
        return false;
    }
    if (mtActivity === "none") {
        var mttotalCalories = Math.round(MtSubtotalCalories * 1.2);
    } else if (mtActivity === "light") {
        var mttotalCalories = Math.round(MtSubtotalCalories * 1.35);
    } else if (mtActivity === "moderate") {
        var mttotalCalories = Math.round(MtSubtotalCalories * 1.55);
    } else if (mtActivity === "active") {
        var mttotalCalories = Math.round(MtSubtotalCalories * 1.75);
    } else if (mtActivity === "extra") {
        var mttotalCalories = Math.round(MtSubtotalCalories * 1.9);
    } else {
        console.log("error! mtActivity value does not exist. please report this bug.");
        return false;
    }
    $("#results h1").text(`We recomend ${mttotalCalories.toLocaleString()} calories per day to keep your current weight.`)
    $("#results").slideDown()
    if (mttotalCalories < 1500) {
        $("#results #note").show()
        $("#results br").show()
    } else {
        $("#results #note").hide()
        $("#results br").hide()
    }
    return false;
}

function usCalculate() {
    var uncountedUsAge = Number(document.getElementById("us-age").value);
    var usAge = Number(uncountedUsAge);
    var usMan = document.getElementById("us-man").checked;
    var usWoman = document.getElementById("us-woman").checked;
    var usActivity = document.getElementById("us-activity").value;
    var uncountedUsFt = Number(document.getElementById("us-ft").value);
    var usFt =  Number(uncountedUsFt) * 12;
    var uncountedUsIn = Number(document.getElementById("us-in").value);
    var usIn =  Number(uncountedUsIn) + Number(usFt);
    var usCm = Number(usIn) * 2.54;
    var uncountedUsWeight = Number(document.getElementById("us-lb").value);
    var usWeight = Number(uncountedUsWeight) / 2.205;
    if (usMan === true) {
        var usManWeight = 13.75 * usWeight;
        var usManHeight = 5.003 * usCm;
        var usManAge = 6.75 * usAge;
        var UsSubtotalCalories = 66.5 + usManWeight + usManHeight - usManAge;
    } else if (usWoman) {
        var usWomanWeight = 9.563 * usWeight;
        var usWomanHeight = 1.850 * usCm;
        var usWomanAge = 4.676 * usAge;
        var UsSubtotalCalories = 655.1 + usWomanWeight + usWomanHeight - usWomanAge;
    } else {
        console.log("error! us-gender is not man or woman. please report this bug.")
        return false;
    }
    if (usActivity === "none") {
        var ustotalCalories = Math.round(UsSubtotalCalories * 1.2);
    } else if (usActivity === "light") {
        var ustotalCalories = Math.round(UsSubtotalCalories * 1.35);
    } else if (usActivity === "moderate") {
        var ustotalCalories = Math.round(UsSubtotalCalories * 1.55);
    } else if (usActivity === "active") {
        var ustotalCalories = Math.round(UsSubtotalCalories * 1.75);
    } else if (usActivity === "extra") {
        var ustotalCalories = Math.round(UsSubtotalCalories * 1.9);
    } else {
        console.log("error! usActivity value does not exist. please report this bug.");
        return false;
    }
    $("#results h1").text(`We recomend ${ustotalCalories} calories per day to keep your current weight.`)
    $("#results").slideDown()
    if (ustotalCalories < 1500) {
        $("#results #note").show()
        $("#results br").show()
    } else {
        $("#results #note").hide()
        $("#results br").hide()
    }
    return false;
}