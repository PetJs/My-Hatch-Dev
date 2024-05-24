class node<T>{
    data: T;
    next: node<T>;

    constructor(val: T ){
        this.data = val;
    }
}
class LinkedList<T>{
    head: node<T>

    add(val: T){
        const newNode = new node(val)

        // if we don't have "head"
        if (!this.head){
            this.head =  newNode;
            return;
        }

        // if we have "head"
        let currentNode = this.head;
        while(currentNode.next != undefined){
            currentNode = currentNode.next
        } 

        currentNode.next = newNode; 
                       
    }

    addHead(val: T){
        const temp = this.head;

        const newHead = new node(val);
        
        this.head = newHead;
        
        newHead.next = temp;

    }

    search(val:T){
        if(!this.head){
            return;
        }
        let currentNode = this.head;
        let index = 0;

        while(currentNode){
            if(currentNode.data == val){
                console.log(`Found at position ${index}`)
                return;
            }
            index ++;
            currentNode = currentNode.next
        }

    }

    printListData(){
        
        if(!this.head){
            return;
        }
        
        let currentnode = this.head;
        while(currentnode){
            console.log(`The node is ${currentnode.data}`);
            currentnode = currentnode.next;
        }
    } 
} 

const l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.addHead(6);
// l.printListData();
console.log(l);