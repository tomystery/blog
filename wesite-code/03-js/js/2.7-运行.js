var name = "小白";
var obj = {
    name: "小红"
};

function sayName() {
    return this.name;
}
console.log(sayName.call(this));   //小白
console.log(sayName.call(obj));    //小红