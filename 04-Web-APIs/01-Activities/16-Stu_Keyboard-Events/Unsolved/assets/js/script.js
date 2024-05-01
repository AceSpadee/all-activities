function keydownAction(event) {
  document.querySelector("#key").textContent = event.key
  document.querySelector("#code").textContent = event.code
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction(event) {
  document.querySelector("#key").textContent = event.key
  document.querySelector("#code").textContent = event.code
  const key = event.key;
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
  
document.addEventListener("keydown", keydownAction);
