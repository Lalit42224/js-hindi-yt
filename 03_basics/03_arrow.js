// ArrowFunction//////////////// 
const user = {
    // username : "lalit",
    // price:234,
    
    // welcomeMessage: function(){
    //     console.log(`${this.username},welcome to website`);
    //     console.log(this);
        
    // }
}
// console.log(this);

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);
/////////////////////////////////////////////


// function chai(){
//     let username = "lalit"
//     console.log(this.username);
    
// }
// chai()

  const chai = ()  =>  {
    let username = "lalit"
    console.log(this.username);
    
  }
  chai()