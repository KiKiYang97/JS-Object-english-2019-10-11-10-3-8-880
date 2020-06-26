var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var price = 0;
for(const i in fruit){
  price += fruit[i];
}
console.log(price);
