fetch(
  // Explain each parameter in comments below.
  // per page=10 state=open sort=created direction=desc
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

// per page means how many results are returned on a page which is 10

// state open means it Indicates the state of the issues to return which is open

// sort created means What to sort results by. it sorts created

// direction desc means The direction to sort the results by