const sidebarItems = document.querySelectorAll(".sidebar__nav-item");

const resetElementEffect = (liElement, classActiveElement) => {
  liElement.forEach((item) => {
    item.classList.remove(classActiveElement);
    let imgName = item.children[0].children[0]?.alt;
    imgName !== undefined &&
      (item.children[0].children[0].src = `./assets/img/sidebar/${imgName}.png`);
  });
};

const activeElementEffect = (liElement, classActiveElement) => {
  liElement.forEach((item) => {
    item.onmouseenter = (e) => {
      resetElementEffect(liElement, classActiveElement);
      item.classList.add(classActiveElement);
      let imgName = e.target.children[0].children[0]?.alt;
      imgName !== undefined &&
        (e.target.children[0].children[0].src = `./assets/img/sidebar/Highlight-${imgName}.png`);
    };

    item.onmouseleave = () => {
      resetElementEffect(liElement, classActiveElement);
    };
  });
};

activeElementEffect(sidebarItems, "sidebar__nav-item--active");
