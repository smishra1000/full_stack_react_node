const EventEmitter = require("events")

const eventEmitter =  new EventEmitter();

eventEmitter.on("place_order",function(data){
    console.log("order placed=",data);
})

eventEmitter.on("order_deliverd",function(data){
    console.log("order delivered at ",data)
})

eventEmitter.emit("place_order","price:200")
eventEmitter.emit("place_order","price:300")
eventEmitter.emit("order_deliverd","hyd")