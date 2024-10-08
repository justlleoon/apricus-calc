function calculate() {
    let agevalue = document.getElementById("age").value;
    let ftvalue = document.getElementById("ft").value;
    let inchvalue = document.getElementById("in").value;
    let cmvalue = document.getElementById("cm").value;
    let cm = Number(cmvalue);
    let age = Number(agevalue);
    let ft = Number(ftvalue);
    let inch = Number(inchvalue);
    let toLbs = 2.205;
    if (cmvalue === "") {
        var height = ft * 12;
        var totalheight = height + inch;
    } else {
        var height = cm / 2.54;
        var totalheight = height;
    } 
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    if (totalheight < 61) {
        document.getElementById("results").style.backgroundColor = "#50C878";
        $("#results p").show()
        //$("#results h1").hide()
        $("#results table").hide()
        $("#results h2").hide()
        return false
    } 
    if (male === true) {
        var equationheight = totalheight - 60;
        var eq1start = equationheight * 2.7;
        var eq1 = 48 + eq1start;
        var eq2start = equationheight * 2.3;
        var eq2 = 50 + eq2start;
        var eq3start = equationheight * 1.9;
        var eq3 = 52 + eq3start;
        var eq4start = equationheight * 1.41;
        var eq4 = 56.2 + eq4start;
        var addedEq = eq1 + eq2 + eq3 + eq4;
        var idealWeight = addedEq / 4;
        var eq1Lb = eq1 * toLbs;
        var eq2Lb = eq2 * toLbs;
        var eq3Lb = eq3 * toLbs;
        var eq4Lb = eq4 * toLbs;
        var idealLb = idealWeight * toLbs;
    } else if (female === true) {
        var equationheight = totalheight - 60;
        var eq1start = equationheight * 2.2;
        var eq1 = 45.5 + eq1start;
        var eq2start = equationheight * 2.3;
        var eq2 = 45.5 + eq2start;
        var eq3start = equationheight * 1.7;
        var eq3 = 49 + eq3start;
        var eq4start = equationheight * 1.36;
        var eq4 = 53.1 + eq4start;
        var addedEq = eq1 + eq2 + eq3 + eq4;
        var idealWeight = addedEq / 4;
        var eq1Lb = eq1 * toLbs;
        var eq2Lb = eq2 * toLbs;
        var eq3Lb = eq3 * toLbs;
        var eq4Lb = eq4 * toLbs;
        var idealLb = idealWeight * toLbs;
    } else {
        console.log("Error! Gender Value is not male nor female!")
    }
    document.getElementById("results").style.backgroundColor = "#50C878";
    $("#results").slideDown()
    $("#results p").hide()
    $("#results table").show()
    //$("#results h1").show()
    $("#results h2").show()
    //$("#results h1").text(`Your ideal weight is ${idealWeight.toFixed(2)}kg.`)
    $("#results td#formula1").text(eq1.toFixed(2) + "kg");
    $("#results td#formula2").text(eq2.toFixed(2) + "kg");
    $("#results td#formula3").text(eq3.toFixed(2) + "kg");
    $("#results td#formula4").text(eq4.toFixed(2) + "kg");
    $("#results td#average").text(idealWeight.toFixed(2) + "kg");
    $("#results td#f1-lb").text(eq1Lb.toFixed(2) + "lb");
    $("#results td#f2-lb").text(eq2Lb.toFixed(2) + "lb");
    $("#results td#f3-lb").text(eq3Lb.toFixed(2) + "lb");
    $("#results td#f4-lb").text(eq4Lb.toFixed(2) + "lb");
    $("#results td#average-lb").text(idealLb.toFixed(2) + "lb");
    document.getElementById("results").style.display = "flex";
    return false
}

function changeSystem() {
    let selectTagValue = document.getElementById("scale").value;
    if (selectTagValue === "metric") {
        document.getElementById("ft").required = false;
        document.getElementById("ft").value = "";
        $("#ft").hide()
        $("#in").hide()
        $("#cm").show()
        document.getElementById("in").required = false;
        document.getElementById("in").value = "";
        document.getElementById("cm").required = true;
        document.getElementById("cm").value = "";
        document
        $("span#imsep").hide()
    } else {
        document.getElementById("cm").required = false;
        document.getElementById("cm").value = "";
        $("#ft").show()
        $("#in").show()
        $("#cm").hide()
        document.getElementById("in").required = false;
        document.getElementById("in").value = "";
        document.getElementById("ft").required = true;
        document.getElementById("ft").value = "";
        $("span#imsep").show()
    }
}