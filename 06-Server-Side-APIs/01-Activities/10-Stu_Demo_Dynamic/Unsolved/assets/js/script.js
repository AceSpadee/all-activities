const userContainer = document.getElementById('users');
const fetchButton = document.getElementById('fetch-button');

function getApi() {
  const requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (let i = 0; i < data.length; i++) {
        const login = document.createElement('h3');
        const url = document.createElement('p');
        login.textContent = data[i].login;
        url.textContent = data[i].html_url;
        userContainer.append(login);
        userContainer.append(url);
      }

    });
}
fetchButton.addEventListener('click', getApi);
