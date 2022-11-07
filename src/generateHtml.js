
function renderHeader(license) {}
  
function renderBody(license) { }

function renderFooter(license) {
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

