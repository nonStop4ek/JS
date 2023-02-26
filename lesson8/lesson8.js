// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// this.array =    function users() {
//
//     console.log(new User(this.id, this.name, this.surname, this.email, this.phone));
//
// }

// }

// let user = new User(1,2,3,4,32);
// console.log(user)
// let user1= new User(12,'leha','kurduk','11stgod',38098123123)
// let user2= new User(2,'vovka','purduk','10stgod',38098123123)
// let user3= new User(3,'jager','puplad','9stgod',38098123123)
// let user4= new User(34,'anton','chehov','8stgod',38098123123)
// let user5= new User(5,'petro','budas','7stgod',38098123123)
// let user6= new User(6,'sara','shevchenko','6stgod',38098123123)
// let user7= new User(73,'Oleh','familya','5stgod',38098123123)
// let user8= new User(8,'kolya','familya2','4stgod',38098123123)
// let user9= new User(9,'petya','nepomny','3stgod',38098123123)
// let user10= new User(10,'vasya','arka','2stgod',38098123123)
// let ussers =[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
// console.log(ussers);
// - Взяти масив з  User[] з попереднього завдання,
// та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(ussers.filter((ele) => ele.id %2===0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let usersSort=    ussers.sort((a, b)=>{
//     return a.id-b.id
//
// })
// console.log(usersSort)


// - створити класс для об'єктів Client з полями id, name, 
// surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {constructor(id,name,surname,email,phone,order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//
// }
//    
// }
// let client1=new Client(1,'adam1','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','pizza','meat'])
// let client2=new Client(2,'adam2','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','pizza4cheese','pizza','pizza'])
// let client3=new Client(3,'adam3','myhamedov','adasdf@gmail.com',919391312,['pizza'])
// let client4=new Client(4,'adam4','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','sushi'])
// let client5=new Client(5,'adam5','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','pizza','sushi','pizza','sushi','pizza','sushi'])
// let client6=new Client(6,'adam6','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','sushi2','sushi2','sushi2'])
// let client7=new Client(7,'adam7','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','sushi2','sushi2','sushi2','sushi2','sushi2','sushi2'])
// let client8=new Client(8,'adam8','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','sushi2','sushi2'])
// let client9=new Client(9,'adam9','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','sushi2'])
// let client10=new Client(11,'adam10','myhamedov','adasdf@gmail.com',919391312,['pizza','sushi','sushi2','sushi2','sushi2'])
// let clients=[client1,client2,client2,client3,client4,client5,client6,client7,client8,client9,client10]
// console.log(clients);
//   let clientsSort=  clients.sort((a,b)=>{
// // if (b.order.length<a.order.length)
//    return a.order.length -b.order.length
// })
// console.log(clientsSort);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
// поточний об'єкт car

// {
//     function Car(model, producer, graduationYear, maxSpeed, engineCapacity) {
//         this.model = model
//         this.producer = producer
//         this.graduationYear = graduationYear
//         this.maxSpeed = maxSpeed
//         this.engineCapacity = engineCapacity;
//         // this.drivers=[]
//         this.drive = function () {
//             console.log(`Їдемо зі швидкістью ${this.maxSpeed} на годину`)
//         }
//         this.info = function () {
//             console.log(`model: ${this.model}, producer: ${this.producer}, graduation year: ${this.graduationYear}, engine capacity: ${this.engineCapacity}`)
//
//         }
//         this.increaseMaxSpeed = function (Newspeed) {
//             this.maxSpeed = Newspeed
//         }
//         this.changeYear = function (newValue) {
//             this.graduationYear = newValue
//
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver
//
//
//         }
//
//
//     }
//
//
//     let car1 = new Car('M3', 'BMW', 2003, 270, '3l')
//     let car2 = new Car('M32', 'BM2W', 20203, 2720, '3l2')
//     car2.drive()
//     car2.increaseMaxSpeed(5435)
//     car1.drive()
//     car1.info()
//     car1.increaseMaxSpeed(323)
//     car1.addDriver('sdf')
//     car1.changeYear(2001)
//     console.log(car1);
// }

// {
//     class Car {
//
//
//         constructor(model, producer, graduationYear, maxSpeed, engineCapacity) {
//             this.model = model
//             this.producer = producer
//             this.graduationYear = graduationYear
//             this.maxSpeed = maxSpeed
//             this.engineCapacity = engineCapacity;
//             // this.drivers=[]
//             this.drive = function () {
//                 console.log(`Їдемо зі швидкістью ${this.maxSpeed} на годину`)
//             }
//             this.info = function () {
//                 console.log(`model: ${this.model}, producer: ${this.producer}, graduation year: ${this.graduationYear}, engine capacity: ${this.engineCapacity}`)
//
//             }
//             this.increaseMaxSpeed = function (Newspeed) {
//                 this.maxSpeed = Newspeed
//             }
//             this.changeYear = function (newValue) {
//                 this.graduationYear = newValue
//
//             }
//             this.addDriver = function (driver) {
//                 this.driver = driver
//
//
//             }
//
//
//         }
//     }
//
//
//     let car1 = new Car('M3', 'BMW', 2003, 270, '3l')
//     let car2 = new Car('M32', 'BM2W', 2003, 2720, '3l2')
//     car1.info()
//     car2.info()
//     car1.addDriver('vasya')
//     car2.addDriver('Peetya')
//     car2.changeYear(2000)
//     car1.changeYear(2033)
//     car1.increaseMaxSpeed(230)
//     car2.increaseMaxSpeed(330)
//     console.log(car1);
//     console.log(car2);
// }


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Popelushko(name,age,footSize) {
    this.name=name
    this.age=age
    this.footSize=footSize
}
class Prince extends Popelushko{
    constructor(name,age,findSize) {
        super(name,age);
        this.findSize=findSize
    }
}
let pop1=new Popelushko('anna',33,36)
let pop2=new Popelushko('anna',33,38)
let pop3=new Popelushko('anna',33,37)
let pop4=new Popelushko('anna',33,322)
let pop5=new Popelushko('anna',33,31)
let pop6=new Popelushko('anna',33,317)
let pop7=new Popelushko('anna',33,17)
let pop8=new Popelushko('anna',33,27)
let pop9=new Popelushko('anna',33,47)
let pop10=new Popelushko('anna',33,57)
let pops=[pop1,pop2,pop3,pop4,pop5,pop6,pop7,pop8,pop9,pop10]
let prn1=new Prince ('kolya',23,317)
for (let i = 0; i < pops.length; i++) {
    const pops1Element = pops[i];
    if (prn1.findSize===pops1Element.footSize) {
        console.log(pops[i])
    }
}

let popss=pops.find((value) => {
    return value.footSize===prn1.findSize


        })
console.log(popss);
