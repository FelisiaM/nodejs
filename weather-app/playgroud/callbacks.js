var getUser = (id, callback) =>{
    var user = {
        id: id,
        name: 'Felisia'
    };
    
    setTimeout(() => {
        callback(user);        
    }, 3000);
};

getUser(12, (userObj) => {
    console.log(userObj);
})