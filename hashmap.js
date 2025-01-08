class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity);
        this.loadFactor = loadFactor;
        this.initialCapacity = initialCapacity;
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

        if (!this.buckets[index]){
            this.buckets[index] = [];
        }

        const existing = this.buckets[index].find(pair => pair[0] === key);

        if (existing){//update the new value 
            existing[1]=value;
        } else {
            this.buckets[index].push([key,value]);
            this.size++;
        }


        const loadFactor = this.size/this.buckets.length;
        if (loadFactor > 0.75){
            this.resize();
        }
    }

    resize() {
        
        const newBuckets = new Array(this.buckets.length * 2); //create new bucket with new size
        this.capacity = newBuckets.length;

        this.buckets.forEach(bucket => {
            if(bucket){
                bucket.forEach(([key,value])=>{
                    const newIndex =this.hash(key) //assign new hashcode for new bucket size
                    
                    if(!newBuckets[newIndex]){
                        newBuckets[newIndex] = [];
                    }

                    newBuckets[newIndex].push([key,value]);
                })
            }
        })

        this.buckets = newBuckets
    }

    get(key){
        const index = this.hash(key);
        if(!this.buckets[index]) return null;
        
        const checkBucket = this.buckets[index];
        const existingPair = checkBucket.find(pair => pair[0] === key);
        return existingPair ? existingPair[1] : null;
    }

    has(key) {
        const index = this.hash(key);
        if(!this.buckets[index]) return false;

        const checkBucket = this.buckets[index];
        const existingKey = checkBucket.find(pair => pair[0] === key);
        return existingKey ? true : false;
    }

    remove(key) {
        if(!this.has(key)) return false;

        const index = this.hash(key);
        const checkBucket = this.buckets[index];

        const elementIndex = checkBucket.findIndex(checkKey);
        checkBucket.splice(elementIndex,1);

        this.size--

        return true;

        function checkKey(pair) {
            return pair[0] === key;
        }
    }

    length() {
        return this.size;
    }

    clear() {
        this.capacity = this.initialCapacity;
        this.buckets = new Array(this.capacity);
        this.size = 0;

    }

    keys() {

        const keyList = [];
        for (let bucket of this.buckets){
            if (bucket){
                for (let pair of bucket){
                    keyList.push(pair[0]);
                }
            }
        }

        return keyList;
    }

    values() {

        const valueList = [];
        for (let bucket of this.buckets){
            if (bucket){
                for (let pair of bucket){
                    valueList.push(pair[1]);
                }
            }
        }

        return valueList;
    }

    entries() {

        const entryList = [];
        for (let bucket of this.buckets){
            if(bucket){
                for (let pair of bucket){
                    entryList.push(pair);
                }
            }
        }

        return entryList;
    }

}


// const test = new HashMap();

// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// console.log(test.entries())
// console.log(test.keys())
// console.log(test.values())
// console.log(test.length())
// console.log(test.capacity)

// test.set('moon', 'silver')

// console.log(test.length())
// console.log(test.capacity)

// test.clear()

// console.log(test.entries())
// console.log(test.keys())
// console.log(test.values())
// console.log(test.length())

// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// console.log(test.capacity)
// console.log(test.get("jacket"))
// console.log(test.remove("jacket"))
// console.log(test.values("ice cream"))
// console.log(test.length())
// console.log(test.entries())