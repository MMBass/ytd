function startHistory(){
  ["SEARCH_HISTORY","WATCH_HISTORY","DOWN_HISTORY"].forEach(e => {
    if(!Array.isArray(JSON.parse(window.localStorage.getItem(e)))) window.localStorage.setItem(e,JSON.stringify([]));
  });
}

function saveHistory(type, payload){
  let arr = JSON.parse(window.localStorage.getItem(type));
  if( type === "SEARCH_HISTORY") arr.push({search:payload, id:Date.now()});
  else arr.push(payload);
  if(arr.length >= 100) arr.pop(); // max array 100
  window.localStorage.setItem(type,JSON.stringify(arr));
}

function removeFromHistory(type, id){
  let arr = JSON.parse(window.localStorage.getItem(type));
  arr = arr.filter(e => e.id !== id);
  window.localStorage.setItem(type,JSON.stringify(arr));
}

function deleteHistory(type){
  if(window.confirm("Are you sure?")){
    window.localStorage.setItem(type,JSON.stringify([]));
    window.location.reload();
  }
}

module.exports = {saveHistory, removeFromHistory, deleteHistory, startHistory};