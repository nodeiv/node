document.addEventListener('DOMContentLoaded', function () {

    const listItems = document.querySelectorAll('.list-item');
    const videoContainer = document.querySelector('.video-container');
    const videoElement = videoContainer.querySelector('video');

    listItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            const videoSrc = item.getAttribute('data-video');
            videoElement.querySelector('source').src = videoSrc;
            videoContainer.style.opacity = '1';
            videoContainer.style.filter = 'blur(0px)';
            videoContainer.classList.add('show');
            videoElement.load();
            videoElement.play();
        });

        item.addEventListener('mouseout', () => {
            videoElement.pause();
            videoContainer.style.opacity = '0';
            videoContainer.style.filter = 'blur(5px)';
        });
    });


    function adjustVideoSize() {
        if (window.innerWidth < 768) {
            videoElement.classList.add('small-screen');
        } else {
            videoElement.classList.remove('small-screen');
        }
    }
    adjustVideoSize();
    window.addEventListener('resize', adjustVideoSize);
});