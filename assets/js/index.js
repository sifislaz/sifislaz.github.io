let topOffset = 0;
const backToTop = document.querySelector('#backToTop');

addEventListener('DOMContentLoaded', () => {
    // Define the Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    for (let tooltip of tooltipTriggerList) {
        topOffset = tooltip.offsetTop;
        tooltip.setAttribute('data-bs-offset', `[0,${topOffset - 834}]`);
    }
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


});

// Recalculate the tooltip offset on window resize
addEventListener('resize', () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    for (let tooltip of tooltipTriggerList) {
        topOffset = tooltip.offsetTop;
        tooltip.setAttribute('data-bs-offset', `[0,${topOffset - 880}]`);
    }
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


});

addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        backToTop.style.display = 'block';
        backToTop.style.position = "sticky";
        backToTop.style.bottom = "5%";
    }
    else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
