//let str = "Привет"
//let a = 123
//let  flag = true
//console.log(typeof str, typeof a, typeof flag,)

// let a1 = 5 + 3
// let a2 = 5 - 3
// let a3 = 5 * 3
// let a4 = 5 / 3
// console.log(a1, a2, a3, a4)


//let a6 = 5 % 3
//let a7 = 3 % 5
//let a8 = 5 + `3`
//let a9 = `5` - 3
//let a10 = 75 + `кг`
//console.log(a6, a7, a8, a9, a10)


// let a = prompt('test',)
// if (a == 'test'){alert('Верно!')}
// else {alert('Неверно!')}


// let m = 55;
// let n = null
// if (m > 50) {
//     n = "большое";
// }
// else {
//     n = "маленькое";
// }
// console.log(n);


// &&


// let a = 4
// let b = 6
//
// a < b && console.log('a меньше b')


// let time = 28
// if (time > 0 && time <=15) {
//     console.log('I четверть')
// } else if (time > 15 && time <=30){
//     console.log('II четреть')
// } else if (time > 30 && time <=45){
//     console.log('III четреть')
// } else if (time > 45 && time <=60){
//     console.log('IV четреть')
// } else {
//     console.log('Не верный диапазон ')
// }


// for ( let i = 0; i <=5; i++) {
//     console.log('Hello', i)
// }


// let str = 'Hello'
// // console.log(str.length)
// for ( let i = 0; i <str.length; i++) {
//     console.log(str[i])
// }


// for ( i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }


// let count = 0
// while ( count < 10) {
//     count++
//     console.log('Hello', count)
// }


// let response = 'SUCCESS_FAULED'
//
// switch (response) {
//     case "SUCCESS_REQUEST":
//         console.log('Server ok')
//         break
//     case 'SUCCESS_FAULED':
//         console.log('Server not found')
//         break
//     default:
//         console.log('Status Error')
// }


// let num = [2,3,4,5,6,7, 'Ivan', 3,3,3,]
// console.log(num)
//
// for (let i = 0; i < num.length; i++) {
//     if (typeof num[i] === 'string')
//     console.log(num[i])
// }


// let num = [-2, 7, 9, 5, 8, 1, 12, 15, 17,3,]
// for (let i = 0; i < num.length; i++) {
//         if (num[i] > 0 && num[i] < 10)
//                 console.log(num[i])
//
// }


// let num = [-2, 7 ,'9б', 'Hello', 1, 12, 15, 'World', 17, 3]
// for (let i = 0; i < num.length; i++) {
//     if (typeof num[i] === 'string')
//         console.log(num[i])
// }


// let seasons = 1
// let result = null
// switch (seasons) {
//     case 1:
//         result = 'Зима'
//         break
//     case 2:
//         result= 'Весна'
//         break
//     case 3:
//         result = 'Лето'
//         break
//     case 4:
//         result = 'Осень'
//         break
//     default:
//         result = 'Status Error'
//
// }
// console.log(result)


// let everyDay = ['Понедельник', 'Вторник', 'Cреда', 'Четверг', 'Пятница', 'CУББОТТА', 'ВОСКРЕСЕНЬЕ']
// for (let i = 0; i < everyDay.length; i++) {
//         if(i < 5) {
//                 console.log(everyDay[i])
//         }
//         else {
//                 console.log(`<b>${everyDay[i]}</b>`)
//         }
// }

// function foo (num1, num2) {
//         //return num1 + num2
//         if ( num1 < 10) {
//                 return num1 + num2
//         }
//                 return num1 * num2
// }
//
// foo(5,9)
// console.log(foo(11,9))
// console.log(foo(115,900))


//spread
// let obj = {name: 'aidar'}
// let a = [5,4]
// let b = [...a, 56, 523,]
// let c = [...a,...b,obj.name, 'hello']
// console.log(c)


// let a = [5,5]
// let b = a.concat(1,2,3)
// console.log(b)


// let arr = [-2, 7 ,'9б', 'Hello', 1, 12, 15, 'World', 17, 3]
// function foo (arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] === 'string') {
//             result = [...result, arr[i]]
//         }
//     }
//     return result
// }
//
// console.log(foo(arr))

// function foo (a,b) {
//     if (arguments.length < 2) {
//         return 'Минимальное количество аргументов 2'
//     }
//     return a + b
//
// }
//
// console.log(foo(1,2))

// let foo = function () {
//     return 'Hello'
// }
// console.log(foo())


// let obj = {
//     name: 'Ivan',
//     'my age': 29
// }
//
// let name = 'name'
// console.log(obj['name'])


// let obj1 = {
//     name: 'Ivan',
//     age: 27
// }
//
// let obj2 = {
//     name: 'Anna',
//     age: 29
// }
// let obj3 = {...obj1,...obj2}
// obj3.job = 'Barista'
// console.log(obj3)
// console.log(obj1)


// let userData = server.respanse
// userData.job = 'adasd'


// function foo (a,b) {
//     return a + b
// }
//
// console.log(foo(1,5))
// console.log(foo(100,200))

// function foo(name, surName) {
//     return `My Name Is:'${name} ${surName}`;
// }
// let a = foo('Anankin', 'SkyWalker')
// console.log(a)


// function task3 (val) {
//     return `${val} typeof ${typeof val}`
// }
//
// console.log(task3(1))


// function foo(num) {
//     if (num < 0) {
//         return 'Negative'
//     }
//     else if (num > 0) {
//         return 'Positive'
//     }
//     else if (num === 0) {
//         return 'Zero'
//     }
// }
//
// console.log(foo(0))


// function task5 (obj) {
//     return obj.id
// }
//
// console.log(task5({id:10}))


// function task6 (obj) {
//     if (obj.name.length %2 === 0) {
//         return 0;
//     }
//     return 1
// }
//
// console.log(task6({name:'xxxxx'}))


// function foo(a,b) {
//     if ( a > b) {
//         return 1
//     }
//     if ( a < b)
//     {
//         return -1
//     }
//     if ( a === b ) {
//         return 0
//     }
// }
// console.log(foo(1,1))


// function task8 (num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return 'Master Ioda'
//     }
//     if (num % 3 === 0) {
//         return 'Master'
//     }
//     if (num % 5 === 0) {
//         return 'Ioda'
//     }
//     return num
// }
// console.log(task8(15))


// let mass = [4,7,5,9,2,3]
// const task9 = (mass) => {
//     let result = []
//     for (let i = 0; i < mass.length; i++){
//             result = [...result, mass[i] * mass[i]]
//         }
//     return result
//
//
// }
//
// console.log(task9(mass))

//task1

// const task1 = (arr) => {
//     return arr.map((item) => {
//         if (typeof item === 'string') {
//             return null
//         }
//         return item
//     })
// }
// console.log(task1([4,6,'Ivan', 5, 'Denis']))


//task2
// let arr = ['Евдоким','Ivan','Игнат', 'Denis']
//
// const task = (arr) => {
//     return arr.filter((el) => el.length <= 5)
//
// }
// console.log(task(['Евдоким','Ivan','Игнат', 'Denis']))


//task3
// let arr = [7,8, 15, 30,2 ]
// const num1 = (arr) => {
//     return arr.map((el) => {
//         if (el % 5 === 0 && el % 3 === 0) {
//             return 0
//         }
//         return el **3
//     })
// }
// console.log(num1(arr))


//task4
// let a = ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']
//
// const name = (arr) => {
//     return arr.map((string) => string.length)
// }
//
// console.log(name(a))


//task5
// const task1 = (arr) => {
//     return arr.map((item) => {
//         if ( typeof item === "number") {
//             return `<div>{number}</div>`
//         }
//     })
// }
//
// console.log(task1([1,1,1,1,1,1,1,]))


//task6
// const task = (arr) => {
//     return arr.filter((el) => el.length % 2 ===0)
// }
// console.log(task(['ab','abc','abcd']))


// const task = (str) => {
//     let result = []
//     for ( let i = 0; i < str.length; i++) {
//         if ( str[i] < 5 ) {
//             result = [...result, 0]
//         }
//         if ( str[i] > 5 ) {
//             result = [...result, 1]
//         }
//     }
//     return result
// }
//
// console.log(task('45385593107843568'))


// const a = (arr) => {
//     let result = 0
//     for ( let i = 0; i < arr.length; i++) {
//         result = result + result
//     }
//     return result %2 === 0 ? 'Четное' : 'Нечетное'
// }
//
// console.log(a(0,1,5))


// const task = (str) => {
//     let res = 0
//     let res1 = 1
//     for (let i = 0; i < str.length; i++)
//         if (str[i] === ')') {
//             res++
//             }
//      else if (str[i] === '(') {
//         res1++
//     }
//     return res === res1
//     }
//
// console.log(task('((()))))(())((()()(())()))()())(('));


// const str = '()(()()()()()()(()()()((((())))((()))';
// const count = [...str].filter(l => l === ')').length;
//
// console.log(count);


// const task = (num) => num.map((arr) => arr * 2)
//
// console.log(task([1,2,3]))


// const task = (num) => {
//     let res = []
//     for (let i = 1; i <= num; i++) {
//         res = [...res, i]
//     }
//     return res
// }
//     console.log(task(9))


// const task = (arr) => {
//     return arr.filter((el) => el.length > 4)
// }
// console.log(task(['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']))


// const str = (arr) => {
//     let res = true
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === ' ') {
//             res = false
//         }
//     }
//     return res
// }
// console.log(str(`dscsd  csdcds`))


// const num = (arr) => {
//     let res = []
//     let result = []
//     let res1 = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             res = [...res, arr[i]]
//         }
//         if (arr[i] % 2 === 1) {
//             result = [...result, arr[i]]
//         }
//         res1 = [...res, ...result ]
//     }
//     return res1
// }
// console.log(num([1, 2, 3, 4, 5, 6]))


//  !! приводят к логическому типу
//  NaN не число


// const num = (a) => {
//     let res = []
//     let res1 = []
//     let res2 = []
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] %2 === 0) {
//             res = [...res, a[i] - 1]
//         }
//         if (a[i] %2 === 1) {
//             res1 = [...res1, a[i] + 1]
//         }
//         res2 = [...res, ...res1]
//     }
//     return res2
// }
//
//
// console.log(num([1,2,3,4,5,6,7,4,2]))


// const a = (num) => {
//     return num.map((el) => el % 2 === 0 ? el - 1 : el + 1 )
// }
//
// console.log(a([1,2,3,4,5,6,7,4,2]))


//task1
//  const task = (arr,arr1) => {
//     return arr.map((num, idx) => num + arr1[idx])
// }
// console.log(task([2,4], [1,3]))
// // console.log(task([1,7],[9,3]))


//task2
// const num = (arr) => {
//     return arr.map((el) =>el * 2)
//
// }
// // console.log(num([1,2,3,4,5,]))
// console.log(num([7,14]))


//task3
// const task = (arr) => {
//     return arr.map((obj) => obj.id)
//
// }
// // console.log(task([{id: 1},{id: 2},{id: 3},{id: 4}]))
// console.log(task([{id: true}]))


//task4
// const num = (arr) => {
//     return arr.map((item) => {
//         return `[<div>${item}</div>]`
//     })
// }
// console.log(num([1,2]))
// console.log((num(['Ivan'])))


//task5
// const str = (arr) => {
//     return arr.filter((el) => el.length % 2 === 0)
//
// }
// // console.log(str(['ab','abc','abcd']))
// console.log(str(['abc','abcde']))


//task6
// const task = (arr) => {
//    return arr.map((num) => num *2).filter((num) => num % 10 === 0)
// }
//
// console.log(task([1,2,3,7,10,5]))
// // console.log(num([1,2,3,7,9,4]))


//task7
// const task = (a) => {
//     return a.filter((el) => el === true)
//
// }
// console.log(task([true,false,true,true]))
// console.log(task([false,true]))


//task8
// const task = (a) => {
//     return a.filter((el) => typeof el === 'boolean')
// }
// console.log(task([true, false, true,true, undefined, true, undefined]))
// console.log(task([undefined, true, undefined]))


//task9
// const num = (arr) => {
//     return arr.reduce((acc, rec) => acc + rec
//         )
// }
// console.log(num([1,2,3,4,5]))
// console.log(num([2, 11, 5]))


//task10
// const task = (a) =>{
//     return a.reduce((acc,rec) => {
//         return acc && rec
//         }
//     )
// }
// // console.log(task([true,true,true,true]))
// console.log(task([true,false,true]))


//task11
// const task = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         return{
//             ...acc, [`field ${ idx + 1 }`] : rec
//         }
//     },{})
// }
// console.log(task([true,1,'wow','you are smart, bro']))


//task12
// const task = (obj1) => {
//     return Object.keys(obj1).reduce((acc,rec) => {
//         if (typeof obj1[rec] === 'string') {
//             return { [rec]: obj1[rec] }
//         }
//         return acc
//     }, {})
// }
// // console.log(task({ name: 'pilot', isActive: true }))
// console.log(task({isActive: true}))


//task13
// const task = (obj1) => {
//     return Object.keys(obj1).reduce((acc,rec) => {
//         if ( !obj1[rec]) {
//             return [rec]
//         }
//         return acc
//     },{})
// }
//
// console.log(task( {isActive: false, isPilot: true,}))


//task14
// const task = (num) => {
//     return num.reduce((acc, rec ,) => {
//         return acc + rec / num.length;
//     },0)
// }
// console.log(task([4, 6,]))
// console.log(task([2,4]))


//task15
// const task = (arr,) => {
//     return arr.reduce((acc,rec) => {
//         return rec (acc)
//     }, 5)
//
// }
//
// console.log(task([ (a) => a+ 1, (a) => a * 2 ]))
// // console.log(task([ (a) => a - 1, (a) => a * 2 ]))
// console.log(task([ (a) => a + 2, (a) => a * 5, (a) => a - 5 ]))

// Curring

// const curring = (width) => {
//     return (height) => {
//         return `${width} x ${height}`
//     }
// }

// console.log(curring(4)(4))
// let fullHd = curring(1920)
// console.log(fullHd(1080))
// console.log(fullHd(768))
// let quadHd = curring(2130)
// console.log(quadHd(2450))

// const  curring = (host) => {
//     return (url) => {
//         return (service) => {
//             return `${host}${url}${service}`
//         }
//     }
// }
//
// let googleService = curring('https://')('google.com')
// console.log(googleService('/cloud'))

// Closure  Замыкание
// {
//     let a = 5
// }
// console.log(a)



// Сontext -тело родительского обьекта
// This - контескт текущего обьекта

// const example = {
//     name: 'Ivan',
//     x: 5,
//     y: 2,
//     func: function () {
//         return this.name
//     },
//     secondFunc: function () {
//         return this.x + this.y
//     }
// }
// console.log(example.secondFunc())

// => не имеет своего контекста

// this = window - глобальный обьект
// NodeJS = global || ENV || process


// const panda = {
//     name: 'Kung Fu Panda',
//     task: ['Sleep', 'Eat','Drink', 'Jump'],
//     showTask: function () {
//         return this.task.map((task) => {
//             return `${this.name } ${task}`
//         })
//     }
// }
// console.log(panda.showTask())


// function foo() {
//     return  this.name && this.age ? 'Ok' : 'Error'
// }
//
// let foo2 = foo.bind({
//     name: 'Ivan',
//     age: 19
// })
//
// console.log(foo2())


// Chaining - это Выполнение последовательных функций

// let names = ['Nazym', 'Aydar', 'Ivdsadan'].map((el) => el).filter((el) => el.length < 6)
//
// console.log(names)


// function foo() {
//     let count = 0
//     return {
//         goLeft: function (value) {
//            count = count - value
//             return this
//         },
//         goRight: function (value) {
//             count += value
//             return this
//         },
//         resultFunc: function () {
//             return count
//         }
//     }
// }
// console.log(foo().goLeft(5).goRight(8).resultFunc())


// function foo() {
//     let result = []
//     return {
//         goStr: function (str) {
//             result = [...result, str]
//             return this
//         },
//         goNum: function (num) {
//             result = [...result,num]
//             return this
//         },
//         resultArray: function () {
//             return result
//         }
//     }
// }
// console.log(foo().goStr('Hello').goNum(9).resultArray())


//Метод toUpperCase() возвращает значение строки, преобразованное в верхний регистр. Метод toUpperCase() не изменяет значение самой строки.
//Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.


// const task = (array) => array.map((el) => {
//    return el[0].toUpperCase() + el.substring(1)
// })
//
// console.log(task(['hello','name','dog','car']))


// const task = {
//     x: 5,
//     y: 4,
//     goLeft: function () {
//         console.log(this.x + 1)
//         return this
//     },
//     goRight: function () {
//         console.log(this.x - 1)
//         return this
//     },
//     goDown: function () {
//         console.log(this.y + 1)
//         return this
//     },
//     goUp: function () {
//         console.log(this.y - 1)
//         return this
//     },
//     coords: function () {
//         return `[x:${this.x},y:${this.y}]`
//     }
// }
// console.log(task.goLeft().goRight().goDown().goUp().coords())
// console.log(task.coords())


// function foo() {
//     let res = []
//     return {
//         setName: function (name) {
//             res = [...res , name]
//             return this
//         },
//         setPrefix: function (prefix) {
//             res = [...res , prefix]
//             return this
//         },
//         addAchievement: function (addAchievement) {
//             res = [...res, addAchievement]
//             return this
//         },
//         achievements: function (achievements) {
//             res = [...res, achievements]
//             return this
//         },
//         getObject: function () {
//             return res
//         }
//     }
// }
//
// console.log(foo().setName('Vader').setPrefix('Darth').addAchievement('built Death Star').achievements('got a cookies').getObject())

// function coords (x,y) {
//
//     return {
//         x: x,
//         y: y,
//         goLeft() {
//            this.x = this.x - 1
//             return this
//         },
//         goRight () {
//             this.x = this.x + 1
//             return this
//         },
//         goUp () {
//             this.y = this.y - 1
//             return this
//
//         },
//         goDown () {
//             this.y = this.y + 1
//             return this
//         },
//         resultCoords () {
//             return [this.x , this.y]
//         }
//     }
// }
//
// console.log(coords(2,5).goLeft().goRight().goUp().goDown().resultCoords())

// function init () {
//     return {
//         setName (name) {
//             this.name = name
//             return this
//         },
//         setPrefix (prefix) {
//             this.prefix = prefix
//             return this
//         },
//         addAchievement (value) {
//             this.achievements = [this.achievements, value]
//             return this
//         },
//         achievement () {
//             return this
//         },
//         getObject () {
//             return this
//         },
//         format () {
//             return `${this.prefix} ${this.name} who ${this.addAchievement}, ${this.achievements}`
//         }
//     }
// }
//
// console.log(init().setName('Vader').setPrefix('Darth').addAchievement('built Death Star').achievement('got a cookies').getObject().format())

// function foo () {
//     return this
// }
// let foo2 = foo.bind({name: 'Tom'})
// console.log(foo2())

// const events = {
//     guests: [
//         {name: 'Катя', email: 'k@gmail.com', age: 17},
//         {name: 'Иван', email: 'i@gmail.com', age: 20},
//         {name: 'Саша', email: 'ca@gmail.com', age: 25}
//     ],
//     message: 'Добро пожаловать на тусу',
//     geEvents () {
//         return this.guests.filter(({age}) => age >= 18)
//             .map(( { name, email } ) => {
//                 return {
//                     text: `Привет ${name}, ${this.message}`,email
//                 }
//             })
//     }
// }
// console.log(events.geEvents())



// let [one,two,three, ...rest] = [1,2,3,4,5,6]
//
// console.log(rest)

// let { name , age } = {
//     name: 'Tom',
//     age: 29
// }
// console.log(name,age)

// Деструктиризация

// let nums = [1,-2,3,4,5,9,123]
//
// console.log(Math.min.apply(null, nums))

// let wallet = {
//     transaction: [5647,5235,98123,65422],
//     getMax () {
//         return Math.max.apply(null,this.transaction)
//     },
//     getMin () {
//         return Math.min(...this.transaction)
//     }
// }
// console.log(wallet.getMin())


// let gitHubAdmin = {
//     lang: 'JavaScript',
//     userList: [
//         { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//         { firstName: 'Kseniya', lastName: 'К.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
//         { firstName: 'Jing', lastName: 'К.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
//         { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 12, language: 'JavaScript', githubAdmin: 'no' }
//     ],
//     result () {
//         return this.userList.filter(({language,githubAdmin})=>language === 'JavaScript' && githubAdmin === 'yes')
//     }
// }
// console.log(gitHubAdmin.result())


//11
// Отложенные действия

 // setTimeout(() => {
 //     console.log('2 second')
 // }, 2000)

// let interval = setInterval(() => {
//     count++
//     console.log(`interval ${ count }  second`)
//     count >= 5 && clearInterval(interval)
// }, 2000)


// let SET_REQUEST = 'SET_REQUEST'
//
// setTimeout(() => {
//     SET_REQUEST = 'RESPONSE_OK'
// }, 10000)
//
// let serverInterval = setInterval(() => {
//     switch (SET_REQUEST) {
//         case "SET_REQUEST":
//             console.log('Non Response')
//             break
//         case 'RESPONSE_OK':
//             console.log('Server response ok')
//             break
//         default:
//             console.log('request not found')
//     }
//     SET_REQUEST === 'RESPONSE_OK' && clearInterval(serverInterval)
// },2000)

// let div = Array.from(document.getElementsByClassName('example'))
// console.log(div.map((el) => el))

// let div = [...document.getElementsByClassName('example')]
// console.log(div)

// let idDiv = document.getElementById('example')
// console.log(idDiv)


//let tagName = document.getElementsByTagName('div')
//console.log(tagName)


// let idName = [...document.querySelector('#exapmle')].innerText = newText
// console.log(idName)

// let idName = [...document.querySelector('#exapmle')]
// idName.addEventListener('click', () => {
//     idName.innerText = 'Clicked'
// })

// let className = [...document.querySelectorAll('.example')]
// console.log(className)

// let tagName = [...document.querySelectorAll('div')]
// console.log(tagName)

// setTimeout(() => {
//     document.querySelector('#example').innerText = 'Timeout Changet'
// }, 4000)


// let tagName = [...document.querySelectorAll('div')]
//
// let newArr =  tagName.forEach((div) => div.innerText = 'Hi')
// console.log(newArr)

// let tagName = [...document.querySelectorAll('div')]
//
// tagName.forEach(div => div.addEventListener('click', () => {
//     div.innerText = 'Clicked'
//     localStorage.setItem('saveClick', 'Айдар это пример для тебя')
// }))
// setTimeout(() => {
//     localStorage.removeItem('saveClick')
// }, 2000)

// let [minus,plus] = [...document.querySelectorAll('.btn')]
// let span = document.querySelector('.count')
//
// minus.addEventListener('click', () => {
//     if (span.innerText > 0){
//         return span.innerText--
//     }
// })
//
//
// plus.addEventListener('click', () => {
//     span.innerText++
// })

//12
