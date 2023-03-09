// alert('how are you')

const showAlert = () =>{
    alert('lend me some money')
}

const lendMoney = () =>{
   const res = confirm('will u lend me money!');
   console.log(res);
   if(res === true){
    alert('thanks man!')
   }else{
    alert('no problem man!')
   }

}
// prompt
const getInfo = () =>{
  const name =  prompt('tell me ur name!!');
  console.log(name)
  if(name === null){
    alert('do not empty please!')
  }else {
    confirm('do u give me intTime money?')
  }
}