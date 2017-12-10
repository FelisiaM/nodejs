var square = (x) => x * x;

var square1 = x => x * x;

var square2 = (x) => {
    return x * x;
};

//console.log(square(9));

var user = {
    name: 'Felisia',
    sayHi: () => {
        console.log(arguments);//this wont work        
        console.log(`Hi. I'm ${this.name}`);//wont work becaus arrow function do not bind to this keyword
    },
    sayHiAlt(){
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);        
    }
}

user.sayHi(1, 2);