const $lightGallery = document.getElementById('lightgallery');
const lightGallery = window.lightGallery($lightGallery, {
    dynamic: true,
    plugins: [lgZoom, lgThumbnail],
    addClass: 'lg-custom-thumbnails',
    appendThumbnailsTo: '.lg-outer',
    animateThumb: false,
    allowMediaOverlap: true,
    mode: "lg-fade",
    dynamicEl: [
        {
            src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/1_001.jpg",
            thumb: "img/thumb1_001.jpg"
        },
        {
            src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/1_002.jpg",
            thumb: "img/thumb1_002.jpg"
        },
        {
            src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/1_003.jpg",
            thumb: "img/thumb1_003.jpg"
        }
    ]
});

$lightGallery.addEventListener("click", () => {
    lightGallery.openGallery(0);
});