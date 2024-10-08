function calculate() {
    var ageValue = document.getElementById("age").value;
    var bpValue = document.getElementById("hb").value;
    var ageNum = Number(ageValue);
    var bpNum = Number(bpValue);
    var age = ageNum * 0.7;
    var maxBp = 208 - age;
    var bp = bpNum * 3;
    var step1 = maxBp / bp;
    var vo2 = step1 * 15.3;
    $("#results h1").text(`Your VO2 max is ${Math.round(vo2)} ml/kg/min.`);
    $("#results").slideDown();
    return false
}