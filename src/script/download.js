const btn = document.querySelector(".btn");
function downloadListener() {
  // 添加按钮点击事件
  btn.addEventListener("click", () => {
    // #capture 就是我们要获取截图对应的 DOM 元素选择器
    html2canvas(document.querySelector(".card"), {
      useCORS: true, // 【重要】开启跨域配置
      // scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
      scale: 3,
      allowTaint: true, // 允许跨域图片
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      // 将截图后的图片下载
      const link = document.createElement("a");
      link.download = "截图.jpg";
      link.href = imgData;
      link.click();
    });
  });
}

downloadListener();

