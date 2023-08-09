const contentInput = document.querySelector("#content-input");
const content = document.querySelector(".content");

function listenerContentInput() {
  contentInput.addEventListener('input', e => {
    const value = e.target.value;
    if (!value) return;
    content.innerHTML = value;
  })
}

listenerContentInput();