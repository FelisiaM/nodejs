console.log('Starting app');

setTimeout(() => {
    console.log('will print after 2 seconds, but not block the rest of the statements')
}, 2000);

setTimeout(() => {
    console.log('will print immediately after Finishing app')    
}, 0);

console.log('Finishing app');