/* 
step 1: get base value ot the triangle.
step 2: added an id in the base input field
step 3: use get element by id to access the input field.
step 4: get the base value . now it is string
step 5: convert the base value to number. using parse float method.
step 6: Now use the formula to get the result ;
step 7: set output in the Area calculator section use innerHTML
step 8: make empty input after click the input button use value = '';
*/
function triAngleCalculate(){
    const base = document.getElementById('triangle-base')
    const baseValue = base.value;
    const baseInput = parseFloat(baseValue)

    const height = document.getElementById('triangle-height');
    const heightValue = height.value;
    const heightInput = parseFloat(heightValue)
    const areaTriangle = 0.5 * baseInput * heightInput;
    document.getElementById("triangle-area").innerText = areaTriangle;
    base.value = '';
    height.value = '';
}