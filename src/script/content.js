const contentInput = document.querySelector("#content-input");
const content = document.querySelector(".content");
const addTitle = document.querySelector(".add-title");

function listenerContentInput() {
  contentInput.addEventListener("input", (e) => {
    const contentNoSave = document.querySelector(".nosave");
    const value = e.target.value;
    if (!value) return;
    contentNoSave.innerHTML = value;
  });
}

// 监听回车事件
function listenerEnter() {
  contentInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      // 修改当前nosave的className为saved
      const contentNoSave = document.querySelector(".nosave");
      contentNoSave.className = "saved";
      // 创建新的nosave
      const newContentNoSave = document.createElement("p");
      newContentNoSave.className = "nosave";
      content.appendChild(newContentNoSave);
      // 清空输入框
      contentInput.value = "";
    }
  });
}

// 监听添加标题事件
function listenerAddTitle() {
  addTitle.addEventListener("click", (e) => {
    const value = contentInput.value;
    if (!value) return;
    const newTitle = document.createElement("p");
    newTitle.className = "text-right mt-4 w-full";
    newTitle.innerHTML = value;
    content.appendChild(newTitle);
  });
}

listenerContentInput();
listenerEnter();
listenerAddTitle();
