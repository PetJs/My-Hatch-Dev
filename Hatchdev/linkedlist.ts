/* class node {
    data: number;
    next: any;
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head: any;
    size: number;
    constructor(){
        this.head = null;
        this.size = 0
    }

    //insert first node
    insertFirst(data){
        this.head = new node(data, this.head);
        this.size++;
    }

    // insert last node
    insertLast(data){
        let node1 = new node(data);
        let current;

        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node1;
        }
        this.size++;
    }

    // insert at index
    insertAt(data, index){
        // if a user try to input into an index out of range
        if(index > 0 && index > this.size){
            return `node is not up to ${index}`;
        }
        // if a user trys to put it at the head
        if(index === 0){
            this.head = new node(data, this.head);
            return;
        }

        const node2 = new node(data);
        let current, previous;

        current = this.head;
        let count: number = 0;

        while(count < index){
            previous = current; // node before the index
            count++;
            current = current.next // node after the index
        }

        node2.next = current;
        previous.next = node2;

        this.size++;
    }

    // get at index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if (count == index){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return;
    }

    // remove at index
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // clear list
    clearList(){
        this.head = null;
        this.size = 0;
        console.log("The linked list has been cleared");
    }

    // print list data
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertAt(300, 1);
ll.insertAt(200, 2);
ll.insertAt(500, 100);
ll.insertLast(700);

// ll.clearList();

ll.printListData();

console.log(ll) */