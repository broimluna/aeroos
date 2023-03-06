(function() {
  const currentScript = document.currentScript;
  window.addEventListener(
    "load",
    function() {
      const id = `s${Date.now()}`;
      const el = document.body.appendChild(document.createElement("div"));
      el.id = id;
      el.style.position = "fixed";

      el.className = "Screensaver";
      el.innerHTML = `<div><div><img style="width: 100px !important; height:100px !important;"src='system/img/systemlogo.png'></div></div>`;

      const width = el.offsetWidth;
      const height = el.offsetHeight;

      const style = document.body.appendChild(document.createElement("style"));

      style.textContent = `
#${id} {
  left: 0; top: 0; right:0; bottom: 0;
  z-index: 100000;
  color: #eee;
  cursor: none !important;
  background-color: /*#202020*/ #000;
	transition: 0.2s;
}
#${id} div {
  width: ${width}px;
  height: ${height}px;
  font-size: 0px;
  font-family: Helvetica, Arial;
  background-size: 100%;
  line-height: 1;
}
#${id} > div {
  animation: x${id} 15s linear infinite alternate;
}
#${id} > div > div {
  animation: y${id} 12s linear infinite alternate;
}
@keyframes x${id} {
  100% {
    transform: translateX(calc(100vw - ${width}px));
  }
}

@keyframes y${id} {
  100% {
    transform: translateY(calc(100vh - ${height}px));
  }
}
`;
      let timeoutId = null;
      let timeout =
        (currentScript && Number(currentScript.getAttribute("timeout"))) ||
        60000;

      function disable() {
        el.style.display = "none";
        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
          el.style.display = "block";
        }, timeout);
      }
      disable();
      document.addEventListener("mousemove", disable);
      document.addEventListener("keydown", disable);
      document.addEventListener("scroll", disable);
    },
    { once: true }
  );
})();