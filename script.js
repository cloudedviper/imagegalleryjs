document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});
