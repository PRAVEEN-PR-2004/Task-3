const display = document.getElementById("display");
function appendToDisplay(input)
{
display.value +=input;
}
function toCalculate()
{
   
    display.value = eval(display.value);
}
function toClear()
{
    try{

        display.value ="";
    }
    catch(error)
    {
        display.value="Error";
    }
}
function toDelete() {
   
    let currentValue = display.value;
    
    
    let newValue = currentValue.slice(0, -1);
    
    
    display.value = newValue;
}
