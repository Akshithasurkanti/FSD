function greet(name,callback){
    const message="Hi";
    return callback(message);
}
function print(message){
    console.log(message);
}
greet("Nikki",print)
