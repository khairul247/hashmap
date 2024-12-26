class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity);
        this.loadFactor = loadFactor;
        this.capacity = initialCapacity;
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        console.log(index);

        if (!this.buckets[index]){
            this.buckets[index] = [];
        }

        const existing = this.buckets[index].find(pair => pair[0] === value);

        if (existing){//update the new value 
            existing[1]=value;
        } else {
            this.buckets[index].push([key,value]);
        }

        this.size++;
    }
}

const test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
console.log(test.buckets);  // Check if the key-value pairs are added