document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'), {
        interval:2000, //Set the interval in milliseconds (2000 ms = 2 seconds)
        wrap: true, //Enable looping
    });

});