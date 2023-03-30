const style = getComputedStyle(document.documentElement);
const script = style.getPropertyValue("--script");
new Function(script)();


function raws(){alert('good');}
