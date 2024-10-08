function changeSystem() {
    var selectElement = document.getElementById("scale").value;
    if (selectElement === "one") {
        $("#lb").show()
        $("#kg").hide()
        document.getElementById("lb").required = true;
        document.getElementById("kg").required = false;
        document.getElementById("lb").value = "";
        document.getElementById("kg").value = "";
        $("#div-weight p").text("Your Weight (lb)")
    } else if (selectElement === "two") {
        $("#kg").show()
        $("#lb").hide()
        document.getElementById("kg").required = true;
        document.getElementById("lb").required = false;
        document.getElementById("lb").value = "";
        document.getElementById("kg").value = "";
        $("#div-weight p").text("Your Weight (kg)")
    } else {
        console.log("Error!")
    }
}

function calculate() {
    var min = document.getElementById("time").value;
    var time = Number(min);
    var calculatedTime = time / 60;
    var kgValue = document.getElementById("kg").value;
    var lbValue = document.getElementById("lb").value;
    var kgnum = Number(kgValue);
    var kg = kgnum * 2.205;
    var lb = Number(lbValue)
    if (lbValue === "") {
        var weight = kg / 150;
    } else if (kgValue === "") {
        var weight = lb / 150;
    } else {
        console.log("Error!")
    }
    var total = calculatedTime * 700 * weight;
    $("#results h1").text(`You burned ${total.toFixed(2)} calories during your HIIT workout.`);
    $("#results").slideDown();
    return false;
}