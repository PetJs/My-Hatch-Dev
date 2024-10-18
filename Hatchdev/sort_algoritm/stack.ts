interface stack<T>{
    pop(): T | undefined;
    peek(): T |undefined ;
    size(): number;
    push(item: T): void; 
}

class callStack<T> implements stack<T>{
    private storage: T[] = [];

    constructor(private capacity: number = Infinity){

    }
    push(item: T): void {
        if(this.size() === this.capacity){
            return console.error("the stack is full");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.capacity
    }
}








// QUEUE

interface queue<T>{
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}


class aQueue<T> implements queue<T>{
    private storage: T[] = []

    constructor(private capacity: number = Infinity){}
    enqueue(item: T): void {
        if(this.size() === this.capacity){
            return console.log("the queue is full");
        }
        this.storage.push(item)
    }

    dequeue(): T | undefined {
        return this.storage.shift()
    }

    size(): number {
        return this.capacity;
    }
    
}

const q = new aQueue()
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.size();
