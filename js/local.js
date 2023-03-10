const Hello = localStorage.getItem('hello')
console.log(Hello);


const setAge = () =>{
   window.localStorage.setItem('age', 31)
   window.localStorage.setItem('age', 75)
   window.localStorage.setItem('age', 89)
}