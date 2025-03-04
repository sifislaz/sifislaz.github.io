let topOffset = 0;
addEventListener('DOMContentLoaded',()=>{
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    for(let tooltip of tooltipTriggerList){
        topOffset = tooltip.offsetTop;
        tooltip.setAttribute('data-bs-offset',`[0,${topOffset-880}]`);
    }
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


})


addEventListener('resize',()=>{
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    for(let tooltip of tooltipTriggerList){
        topOffset = tooltip.offsetTop;
        tooltip.setAttribute('data-bs-offset',`[0,${topOffset-880}]`);
    }
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


})