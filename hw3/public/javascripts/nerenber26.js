eventHandler = function (event) {
    var check1 = document.getElementById("Notes").value.includes("vegan");
    var check2 = document.getElementById("Notes").value.includes("Vegan");
    if (check1) {
        alert("Alert: You entered \"vegan\", and cheesecake contains dairy!");
    }
    else if (check2) {
        alert("Alert: You entered \"Vegan\", and cheesecake contains dairy!");
    }
    else {
        var quan = document.getElementById("quantity").value;

        var radios = document.getElementsByName('top');
        var toppings;
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                toppings = radios[i].value;
                break;
            }
        }
        var notes = document.getElementById("Notes").value;

        const element1 = document.getElementById("Table");
        element1.remove();
        const element2 = document.getElementById("formDiv");
        element2.remove();

        var tempDiv = document.getElementById("temp");

        var newdiv = document.createElement("div");
        newdiv.innerHTML = '<span id="myText">Thanks for ordering!</span>';

        tempDiv.appendChild(newdiv);
        document.getElementById("myText").innerHTML = 'Thank you for ordering! <br>Quantity: ' + quan + '<br>Toppings: ' + toppings + '<br>Notes: ' + notes;
    }
}    
//
$(document).ready(function() {
    $("#OrderButton").click(eventHandler);
});

//function myFunction(selection) {
   // document.getElementById("dropdown").textContent = selection;
//}
