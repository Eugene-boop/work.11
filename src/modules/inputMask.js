'use strict';
// для применения маски нужно создать 2 инпута, один невидим
// с данными для отправки, второй с маской
// <input type="text" name="number" style="display:none;">
// <input type="text" name="masknumber"></input>
// именно в такой последовательности!
// применяется ко всем инпутам типа тел.
const inputMask = () => {
  let inputs = document.querySelectorAll('input[name="phone"]');

  
  inputs.forEach(inp => {
    const createMask = str => {
      if (!str.startsWith('+')) return '+' + str.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,   "$1 ($2) $3-$4-$5");
      return str.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
    };
    
    const destroyMask = str => {
      return str.replace(/\D/g,'').substring(0, 16);
    };

    inp.nextElementSibling.addEventListener('input', function() {
      inp.value = destroyMask(this.value);
      this.value = createMask(this.value);
    });  

  });
};

export default inputMask;