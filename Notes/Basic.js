function example1() {
    setTimeout(() => console.log("hi"), 0); // macro task
    console.log("hello");
    console.log("hello1");
    console.log("hello2");
    console.log("hello3");
    console.log("hello4");
}

// example1();

console.log("------------------- -----------\n")
// output
// hello
// hello1
// hello2
// hello3
// hello4
// hi

//because hello setTimeOut is web api means it firstly store in browser stack after completed it's task
// it move to call back stack

// means first normal task exuited then other task exuited (micro, macro)

function example2() {
setTimeout(() => console.log("hi"), 0); // macro task
queueMicrotask(() => console.log("interesting hello")); // micro
queueMicrotask(() => console.log("interesting hello 1")); // micro
console.log("hello");
console.log("hello1");
console.log("hello2");
console.log("hello3");
console.log("hello4");
}

example2();

// output 
// hello
// hello1
// hello2
// hello3
// hello4
// interesting hello
// interesting hello 1
// hi

// here first normal task exuited then micro and at last macro