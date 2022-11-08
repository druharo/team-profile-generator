
function renderHeader(data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
  <section> MY TEAM <section>`;
}
function renderBody(data) {
  let divs = '<div class="card-group">';
  for (i = 0; i < data.roles.length; i++) {
    divs = divs + `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${data.roles[i].name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.roles[i].role}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.roles[i].id}</li >
          <li class="list-group-item">Email: <a href="mailto://${data.roles[i].email}">${data.roles[i].email}</a></li>
          <li class="list-group-item">OfficeNumber: ${data.roles[i].officeNumber}</li>
          <li class="list-group-item">School: ${data.roles[i].school}</li>
          <li class="list-group-item">Github: <a href="https://github.com/${data.roles[i].gitHubUserName}">${data.roles[i].gitHubUserName}</a</li>
        </ul >
      </div>
    </div >  
    `
  }
  return divs + '</div>';
}

function renderFooter(data) {
  return `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>`
}
// Function to generate markdown for README
function generateHtml(data) {
  return `${renderHeader(data)}

${renderBody(data)}

${renderFooter(data)}
`;
}
// exports this page to index.js
module.exports = generateHtml;

