console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(()=> {
    console.log("hi");
}, 0);
console.log('finishing up');