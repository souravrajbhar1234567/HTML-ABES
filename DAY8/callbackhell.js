const bookTicekt=()=>{
    setTimeout(()=>{
        console.log("Ticket booked");
        payment();
        function payment(){
            setTimeout(()=>{
                console.log("Payment done");
                orderFood();
                function orderFood(){
                    setTimeout(()=>{
                        console.log("Food ordered");
                        foodDelivered();
                        function foodDelivered(){
                            setTimeout(()=>{
                                console.log("Food delivered");
                            },3000)
                        }
                    },2000)
                }
            },4000)
        }
    },5000)         

} 
const printMessage=()=>{
    console.log("message");
}

const bookTicektAsync=async()=>{}
bookTicekt();
printMessage();
waitFun(2000,"login successful")
.then(()=>waitFun(1000,"user data fetched") )
.then(()=>waitFun(2000,"ticket booked") )
.then(()=>waitFun(3000,"food ordered") )
.then(()=>waitFun(4000,"food delivered") )
.catch((err)=>console.log(err))

function waitFun(time,message){
    return new Promise((resolve,reject)=>{
        if(message){
            setTimeout(()=>{
                console.log(message);
                resolve();
            },time)
        }else{
            reject("error occured")
        }
    })
}                           
    

