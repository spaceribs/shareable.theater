const audienceLink = document.querySelector("#audience-link");
const audienceUrl = window.location.href.replace("projectionist", "audience");
audienceLink.value = audienceUrl;

function copy() {
  audienceLink.select();
  document.execCommand("copy");
}

document.querySelector("#copy").onclick = copy;
