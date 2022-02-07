const test = document.getElementById("main");

test.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory"

let name = "Stefan"

newHeader.textContent = `${name} is the champion`
