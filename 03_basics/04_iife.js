// Immediately Invoked Fuction Expression (IIFE)
 
(function chai() {
    // named IIFE
    console.log("DB Connected");
})();




( (name) => {
    /// unnamed iffe using arrow fuction
    console.log(`DB connected Two ${name}`);
    
})('lalit')