window.onresize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`window size: ${width}x${height}`); 
}

window.onbeforeunload = (event) => {
    event.preventDefault();
    event.returnValue = 'Are you sure you want to close';
}