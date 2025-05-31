
function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.add('hidden');
    });
  
    document.getElementById(tab).classList.remove('hidden');  //only show the selected tab on the screen
  
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('border-b-2', 'border-purple-700');
    });
    document.getElementById('tab-' + tab).classList.add('border-b-2', 'border-purple-700'); //highlight the selected tab button and uses classList property for styling 
  }
//Conversion Functions
  function kgToLb(kg) { return kg * 2.20462; }
  function lbToKg(lb) { return lb / 2.20462; }
  function kmToMi(km) { return km * 0.621371; }
  function miToKm(mi) { return mi / 0.621371; }
  function cToF(c) { return (c * 9/5) + 32; }
  function fToC(f) { return (f - 32) * 5/9; }
  
  function parseInput(input) {
    return input.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
  }
    function convert(from, to, inputId, resultId) {
    const inputStr = document.getElementById(inputId).value;
    const numbers = parseInput(inputStr);
  
    if (numbers.length === 0) {
      document.getElementById(resultId).innerText = 'Please enter valid number(s).';
      return;
    }
    let results = [];
  
    for (let num of numbers) {
      let converted;
      switch (from + '->' + to) {
        case 'kg->lb': converted = kgToLb(num); 
        break;
        case 'lb->kg': converted = lbToKg(num); 
        break;
        case 'km->mi': converted = kmToMi(num); 
        break;
        case 'mi->km': converted = miToKm(num); 
        break;
        case 'c->f': converted = cToF(num); 
        break;
        case 'f->c': converted = fToC(num); 
        break;
        default:
          converted = 'Error';
      }
      results.push(converted.toFixed(2));
    }
  
    //chk length of array and display output depending of numbver of values entered
    if (results.length === 1) {
      document.getElementById(resultId).innerText = `${numbers[0]} ${from.toUpperCase()} = ${results[0]} ${to.toUpperCase()}`;
    } else {
      document.getElementById(resultId).innerHTML =
        `<div>Input: [${numbers.join(', ')}] ${from.toUpperCase()}</div>` +
        `<div>Output: [${results.join(', ')}] ${to.toUpperCase()}</div>`;
    }
  }
  
  function handleConversion(event, tab) {
    event.preventDefault();  // this will stop the page from reloading
  }
    window.onload = () => {
    switchTab('weight');  //Function will get called automat on loading of webpage n based on selected category results will be generated
}
