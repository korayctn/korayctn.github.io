(() => {
  let arrow = document.getElementById("arrow");
  const changeDisplayBlock = (item) => {
    item.style.display = "block";
  };
  const changeDisplayNone = (item) => {
    item.style.display = "none";
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > "100") {
      changeDisplayBlock(arrow);
    } else {
      changeDisplayNone(arrow);
    }
  });
  arrow.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
})();
