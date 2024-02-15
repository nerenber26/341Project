//Jonathan Nerenberg

//runs the order button
eventHandler = function (event) {
    
    //checks for vegan
    var check1 = document.getElementById("Notes").value.includes("vegan");
    var check2 = document.getElementById("Notes").value.includes("Vegan");
    if (check1) {
        alert("Alert: You entered \"vegan\", and cheesecake contains dairy!");
    }
    else if (check2) {
        alert("Alert: You entered \"Vegan\", and cheesecake contains dairy!");
    }
    else {
        //grabs values from various elements and stores in variables for printing
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

        //delete old elements
        const element1 = document.getElementById("Table");
        element1.remove();
        const element2 = document.getElementById("formDiv");
        element2.remove();

        //make new element
        var tempDiv = document.getElementById("temp");
        
        var newdiv = document.createElement("div");
        newdiv.innerHTML = '<span id="myText">Thanks for ordering!</span>';

        tempDiv.appendChild(newdiv);
        
        document.getElementById("myText").innerHTML = 'Thank you for ordering! <br>Quantity: ' + quan + '<br>Toppings: ' + toppings + '<br>Notes: ' + notes;
    }
}    

//caller of order function
$(document).ready(function() {
    $("#OrderButton").click(eventHandler);
});

//for dropdown menu
function myFunction(selection) {
    
    //make post request
    $.post("./orders", function(data, status){
        
        //change text using data json that returns from post request
        document.getElementById("list1").innerHTML = data[0].quantity + " " + data[0].topping;
        document.getElementById("list2").innerHTML = data[1].quantity + " " + data[1].topping;
        document.getElementById("list3").innerHTML = data[2].quantity + " " + data[2].topping;
      });
   
    document.getElementById("dropdown").textContent = selection;


}
