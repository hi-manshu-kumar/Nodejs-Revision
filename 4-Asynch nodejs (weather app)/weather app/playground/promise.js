var somePromise = new Promise( (resolve, reject) => {
    resolve("hey. It worked");
    reject("unable to fulfill");
});

somePromise.then( (data) => {
    console.log('success', data);
}, (data ) => {
    console.log('Error' ,data);
});
