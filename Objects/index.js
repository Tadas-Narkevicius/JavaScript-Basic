
// Objects
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

document.write(john.firstName);
document.write(john['lastName']);

john.job = 'designer';
john['isMarried'] = true;


var myCar = new Car(); 

myCar.maxSpeed(); 
myCar.speed = 50;       
myCar.driver = 'Jon';   
myCar['lastName'] = 'Povilaitis';
document.write(myCar.speed); 
