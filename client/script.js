const sendBtn = document.querySelector('#send-button');
const getInfoBtn = document.querySelector('#get-info-button');
let main = document.querySelectorAll('main')[0];
var IDinput = document.querySelector('#id-input');
var formatInput = document.querySelector('#format-input');
var selectSection = document.querySelector('#select-section');
var firstH6 = document.querySelector('#first-h6');
const base_url = "https://bass-ytd.herokuapp.com/";
// const base_url = "http://localhost:5000/";


getInfoBtn.addEventListener('click',()=>{
  getInfoBtn.className = "btn btn-warning progress-bar bg-warning progress-bar-striped progress-bar-animated mb-2";
 
  fetch(`${base_url}getInfo?v_id=${IDinput.value}`)
  .then(response => response.json())
  .then(avilableFormats =>{
    creaetOptions(avilableFormats);
   });
});

sendBtn.addEventListener('click',()=>{
  sendBtn.className = "btn btn-danger progress-bar bg-danger progress-bar-striped progress-bar-animated mb-2";
  window.location.href = `${base_url}download?v_id=${IDinput.value}&format=${formatInput.value}`;
  
  setTimeout(()=>{
  getInfoBtn.style.display = "block";
  getInfoBtn.className = "btn btn-warning mb-2";
  IDinput.style.display = "block";
  firstH6.style.display = "block";
  selectSection.style.display = "none";
  sendBtn.style.display = "none";
  },1000);
});

function creaetOptions(list){
  getInfoBtn.style.display = "none";
  IDinput.style.display = "none";
  firstH6.style.display = "none";
  selectSection.style.display = "block";
  sendBtn.style.display = "block";
  for(item of list){
    formatInput.innerHTML += `<option value="${item.code}">mp4 - ${item.quality}</option>`;
  }
}

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
