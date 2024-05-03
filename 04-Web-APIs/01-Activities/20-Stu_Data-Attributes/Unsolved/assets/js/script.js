const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  if (element.matches('div')) {
    const state = element.getAttribute('data-state');
    
    if (state === "hidden") {
      element.setAttribute('data-state', 'revealed');
      element.textContent = element.getAttribute("data-number");
    } else {
      element.setAttribute('data-state', 'hidden');
      element.textContent = "";
    }
  
  }
});
