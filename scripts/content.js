const div = document.createElement('div');
div.innerHTML = 'Hello, world!';
div.id = 'chrome-ext-test';
div.style.zIndex = 9999;
div.style.position = 'absolute';
div.style.fontSize = '72px';
document.body.appendChild(div);