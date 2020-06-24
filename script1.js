var xNum = document.getElementById("xNum")
var yNum = document.getElementById("yNum")
var operationResults = document.getElementById("result")
var formAction = document.getElementById("form")
var smallNoteIfWeDidNotAddANumbers = document.getElementById("note")

formAction.addEventListener("submit", function(event) {
    if (!xNum.value || !yNum.value) {
        smallNoteIfWeDidNotAddANumbers.innerText = "Note : make sure that you have input a numbers"
    } else {
        var x = parseFloat(xNum.value);
        var y = parseFloat(yNum.value);

        var firstResult = x / y;
        var finaleResult = firstResult * 100;

        operationResults.innerText = "Result: " + finaleResult + "%"
        event.preventDefault();
    }
})