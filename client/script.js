var language = window.navigator.userLanguage || window.navigator.language;
if(language === "he"){
  getHebrow();
}

function getHebrow(){
  document.querySelector('#lang-tag').href = "he.css";
}
function getEnglish(){
  document.querySelector('#lang-tag').href = "en.css";
}

const sendBtnHe = document.querySelector('#send-button-he');
const getInfoBtnHe = document.querySelector('#get-info-button-he');
const sendBtnEn = document.querySelector('#send-button-en');
const getInfoBtnEn = document.querySelector('#get-info-button-en');

let main = document.querySelectorAll('main')[0];
var IDinput = document.querySelector('#id-input');
var formatInput = document.querySelector('#format-input');
var selectSection = document.querySelector('#select-section');
var firstH6 = document.querySelector('#first-h6');
const base_url = "https://bass-ytd.herokuapp.com/";

getInfoBtnEn.addEventListener('click',()=>{
  getInfo();
});
getInfoBtnHe.addEventListener('click',()=>{
  getInfo();
});

function getInfo(){
  getInfoBtnHe.className = "btn btn-warning progress-bar bg-warning progress-bar-striped progress-bar-animated mb-2";
  getInfoBtnEn.className = "btn btn-warning progress-bar bg-warning progress-bar-striped progress-bar-animated mb-2";
 
  fetch(`${base_url}getInfo?v_id=${IDinput.value}`)
  .then(response => response.json())
  .then(avilableFormats =>{
    creaetOptions(avilableFormats);
   });
}

sendBtnEn.addEventListener('click',()=>{
  getDown();
});
sendBtnHe.addEventListener('click',()=>{
  getDown();
});

function getDown(){
  sendBtnEn.className = "btn btn-danger progress-bar bg-danger progress-bar-striped progress-bar-animated mb-2";
  sendBtnHe.className = "btn btn-danger progress-bar bg-danger progress-bar-striped progress-bar-animated mb-2";
  window.location.href = `${base_url}download?v_id=${IDinput.value}&format=${formatInput.value}`;
  
  setTimeout(()=>{
  getInfoBtnEn.style.display = "block";
  getInfoBtnEn.className = "btn btn-warning mb-2";
  getInfoBtnHe.style.display = "block";
  getInfoBtnHe.className = "btn btn-warning mb-2";

  IDinput.style.display = "block";
  firstH6.style.display = "block";
  selectSection.style.display = "none";

  sendBtnEn.style.display = "none";
  sendBtnHe.style.display = "none";

  formatInput.innerHTML = '';
  IDinput.value = '';
  },1000);
}

function creaetOptions(list){
  getInfoBtnEn.style.display = "none";
  getInfoBtnHe.style.display = "none";

  IDinput.style.display = "none";
  firstH6.style.display = "none";
  selectSection.style.display = "block";
  sendBtnEn.style.display = "block";
  sendBtnHe.style.display = "block";
  for(item of list){
    formatInput.innerHTML += `<option value="${item.code}">${item.format} - ${item.quality}</option>`;
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
