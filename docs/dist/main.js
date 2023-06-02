const firstDiv = document.getElementById("first-div");
const lasttDiv = document.getElementById("last-div");
const background = document.getElementById("background");
const wrappers = document.getElementById("wrapper");

document.addEventListener('scroll', () => {
    let start = firstDiv.getBoundingClientRect().top;
    let end = lasttDiv.getBoundingClientRect().top;
    let maxScroll = end-start- window.innerHeight;
    // let translatePercent = start*1000 / maxScroll; //fast
    let translatePercent = start*100 / maxScroll; //fast
    // console.log(`start: ${start}    end: ${end}`);
    // console.log(`wrapperHeight: ${wrapperHeight},   window: ${window.scrollY},    start: ${start}`);
    console.log(translatePercent);
    background.style.transform = `translate(0, ${translatePercent}%)`;
    

});

// wrapper.scrollTop = 0;