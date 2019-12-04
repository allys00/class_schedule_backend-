const Teacher = require("./Teacher");
const Student = require("./Student");
const Subscription = require("./Subscription");
const Class = require("./Class");


module.exports =  {
    ...Teacher,
    ...Student,
    ...Subscription,
    ...Class
}