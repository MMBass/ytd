const sendBtn = document.querySelector('#send-button');
var IDinput = document.querySelector('#id-input');
var formatinput = document.querySelector('#format-input');

sendBtn.addEventListener('click',()=>{
//   fetch(`https://bass-ytd.herokuapp.com?v_id=${IDinput.value}&format=${formatinput.value}`);
  fetch(`https://bass-ytd.herokuapp.com`);
        // window.location.href = 
});

function copyExample(element){
    var range, selection, worked;

    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();        
      range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    
    try {
      document.execCommand('copy');
    }
    catch (err) {
    }
}
