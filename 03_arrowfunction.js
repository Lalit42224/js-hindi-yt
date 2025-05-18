// ArrowFunction//////////////// 
const user = {
    username : "lalit",
    price:234,
    
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.welcomeMessage()