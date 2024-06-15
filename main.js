const myStudents =[
    {
        Ism:"Elshod",
        login:2009,
        parol:9002,
    },
    {
        Ism:"Sanjar",
        login:2010,
        parol:2009,
    },
    {
        Ism:"Jaloliddin",
        login:2010,
        parol:2011,
    },
    {
        Ism:"Samir",
        login:2009,
        parol:2012,
    },
    {
        Ism:"Suhrob",
        login:3084,
        parol:4803,
    }
]

let userLogin = +prompt("Login kiriting");
let userParol = +prompt("Parol kiriting");

const result = myStudents.find(item => item.login == userLogin && item.parol == userParol);

if(result){
    alert(`${result.Ism} Hush kelibsiz`)
}else{
    alert("xato")
}