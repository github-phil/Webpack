export const fn = (tag, styleClass) => {
    console.log(styleClass);
    let div = document.getElementById(tag);
    let box = document.createElement('div');
    box.className = styleClass.app;
    box.innerHTML = '人很好的丫头25435646';
    div.appendChild(box);
};
