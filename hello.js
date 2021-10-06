var dt=new Date()
console.log("hello")
for(i=0;i<1000;i++){
    console.log("Loop")
}
console.log("end")
var diff=new Date()-dt
console.log(diff)

function longTask(millSecondTime){
    dt=new Date
    while((new Date-dt) <= millSecondTime){
}
}
console.log("started")
longTask(5000)
console.log("end")