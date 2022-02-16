// onClick a element for smooth scrolling 
const specialOffer = () => {
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top
    }, 500);
};


// onClick a element for smooth scrolling
const featuredMovie = () => {
    $('html, body').animate({
        scrollTop: $("#body-content").offset().top
    }, 500);
}

// onClick a element to top of page
const backToTop = () => {
    $('html, body').animate({
        scrollTop: $("#section-1").offset().top
    }, 500);
}

// onClick to show/hide an element
const toggleTrailer = () => {
    $('#landing-page-title-button').click(() => {
        $('#landing-page-title').hide();
        $('#landing-page-trailer').show();
    })
}