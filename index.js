import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("fish");

console.log(list.size)
console.log(list.head)
console.log(list.tail())
console.log(list.contains("fish"));
console.log(list.at(3))
console.log(list.find("parrot"))
list.insertAt("ice-cream",4);
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
list.removeAt(5);
console.log(list.toString());