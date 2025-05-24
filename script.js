document.getElementById('color-filter').addEventListener('change', function() {
    const filterClass = this.value;
    const images = document.querySelectorAll('.filter-image');
    images.forEach(img => {
        img.className = 'filter-image';
        if (filterClass !== 'default') {
            img.classList.add(filterClass);
        }
    });
});

let currentFontSize = 16; 

document.getElementById('increase-font').addEventListener('click', function() {
    currentFontSize += 2; 
    document.body.style.fontSize = currentFontSize + 'px'; 
});

document.getElementById('reset-font').addEventListener('click', function() {
    currentFontSize = 16; 
    document.body.style.fontSize = currentFontSize + 'px'; 
});

document.getElementById('decrease-font').addEventListener('click', function() {
    currentFontSize -= 2; 
    document.body.style.fontSize = currentFontSize + 'px'; 
});

