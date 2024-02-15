function thermalConv(){
    var thermInput = parseFloat(document.getElementById("suhu").value);
    if (isNaN(suhuInput)){
        document.getElementById("result").innerHTML = "Masukkan suhu yang valid!";
        document.getElementById("result").classList.add("error");
        return;
    }
    var unit = document.getElementById("unit").value;
    var result, explain;
    if (unit === "celsius"){
        result = thermInput*9/5+32;
        explain = thermInput + " Celsius sama dengan " + result.toFixed(2) + " Fahrenheit.";
    } else{
        result = (thermInput -32)*5/9;
        explain = thermInput + "Fahrenheit sama dengan " + result.toFixed(2) + " Celsius.";
    }

    document.getElementById("result").innerHTML = explain;
    document.getElementById("result").classList.remove("error");
    
    //Change button colour
    document.getElementById("convertBtn").classList.remove("green");
    document.getElementById("convertBtn").classList.remove("pink");
    document.getElementById("convertBtn").classList.add("blue");
    document.getElementById("resetBtn").classList.remove("blue");
    document.getElementById("resetBtn").classList.add("pink");
}

function reset() {
    document.getElementById("thermal").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").classList.remove("error");

    // Mengembalikan warna tombol ke warna semula
    document.getElementById("convertBtn").classList.remove("blue");
    document.getElementById("convertBtn").classList.add("pink");
    document.getElementById("resetBtn").classList.remove("pink");
    document.getElementById("resetBtn").classList.add("blue");
}

function scrollToTemperatureForm() {
    document.getElementById('temperature-form').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollToFormula() {
    document.getElementById('formula-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}