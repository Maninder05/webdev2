
function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.add('hidden');
    });
  
    document.getElementById(tab).classList.remove('hidden');
  
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('border-b-2', 'border-purple-700');
    });
    document.getElementById('tab-' + tab).classList.add('border-b-2', 'border-purple-700');
  }
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
}