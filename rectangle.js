/* Rectangle Calculation Function */
function areaCalculate() {
  const width = inputValueById("rect-width-input");
  const length = inputValueById('rect-length-input')
  const area = width * length;
  getAreaValueById('rectangle-area', area)

}

/* Parallelogram Calculation Function */
function parallelogramAreaCalculate() {
    const width = inputValueById("para-width-input");
    const length = inputValueById('para-length-input')
    const area = width * length;
    getAreaValueById('parallelogram-area', area)
  
  }


/* Reuse function */
function inputValueById(inputId) {
  const inputValue = document.getElementById(inputId);
  const inputText = inputValue.value;
  const input = parseFloat(inputText);
  return input;
}

function getAreaValueById(element, area){
    const getArea = document.getElementById(element);
    getArea.innerText = area;

}
