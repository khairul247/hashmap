import Node from './Node.js';

export default class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);

        if (this.head == null){
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }

        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;

        this.size++;
    }

    tail() {

        if (this.head == null){
            return null;
        } else {
            let current = this.head;
            while (current.nextNode !== null){
                current = current.nextNode;
            }

            return current;
        }
    }

    at(index) {
        if (index >= this.size || index < 0){
            return null;
        } else {
            let current = this.head;
            let counter = 0;
            while (counter !== index){
                current = current.nextNode;
                counter++;
            }
            return current;
        }
    }

    pop() { //remove last element
        if (this.size == 0){
            return null;
        } else if (this.size == 1){
            this.head = null;
        } else {
            let current = this.head;
            while (current.nextNode && current.nextNode.nextNode){
                current = current.nextNode;
            }
            current.nextNode = null;
            this.size--;
        }
    }

    // contains(value, node = this.head) { - recursion
    //     if (node === null) return false;
    //     if (node.value === value) return true;
    //     return this.contains(value,node.nextNode)
    // }

    contains(value) {
        let current = this.head;
        while (current !== null){
            if (current.value == value){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value){
        if (this.contains(value)){
            let current = this.head;
            let counter = 0;
            while(current.value != value){
                current = current.nextNode;
                counter++;
            }
            return counter;
        } else {
            return null;
        }
    } 

    toString(){
        let current = this.head;
        let result = "";

        while(current !== null){
            result += `(${current.value})`;

            if (current.nextNode !== null) {
                result += " -> ";
            }

            current = current.nextNode;
        }

        result += " -> null";
        return result;
    }

    insertAt(value, index){
        if (index == 0) return this.prepend(value);
        if (index == this.size) return this.append(value)
        if (index > this.size) return `Error, choose index equal or less than ${this.size}`;
        
        const newNode = new Node(value);
        newNode.nextNode = this.at(index);
        const prevNode = this.at(index-1);
        prevNode.nextNode = newNode;
        this.size++;

    }

    removeAt(index) {
        if (index == 0) return this.head = this.head.nextNode;
        if (index == this.size -1) return this.pop();
        
        const current = this.at(index);
        const prev = this.at(index-1);
        prev.nextNode = current.nextNode;
        this.size--;
    }
}
