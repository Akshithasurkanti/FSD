function mul(num,callback){
    return callback(num*2,false);
}
function subtract(num,callback){
    return callback(num-3,false);
}
function add(num,callback){
    return callback(num+10,false);
}
mul(10,(mulres,err)=>{
    if(!err){
        subtract(mulres,(subres,err)=>{
            if(!err){
                add(subres,(addres,err)=>{
                    if(!err){
                        console.log(`Result is ${addres}`);
                    }
                    else{
                        console.log("Error in addition");
                    }
                })
            }
            else{
                console.log("Error in subtraction");
            }

        })
    }
        else{
            console.log("Error in multiplication");
           
        }
    })