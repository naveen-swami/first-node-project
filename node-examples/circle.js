const {PI} = Math;

exports.area = (r) => PI * r *r;
exports.circumstacnce = r => 2 * PI * r;

// Every file in Node is called as Module;
// exports helps us to export the function so that we can use this function in other module.

function sayName(name){
    return console.log(`hello ${name}`);
}

exports.sayName = sayName;