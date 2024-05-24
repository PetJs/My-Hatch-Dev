class lNode {
    data: any;
    next: lNode | null;
  
    constructor(data: any) {
      this.data = data;
      this.next = null;
    }
  }
  
  class DoublingLinkedList {
    head: lNode | null;
    tail: lNode | null;
    size: number;
  
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    add(data: any): void {
      const newNode = new lNode(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    delete(data: any): void {
      let current = this.head;
      let prev;
  
      while (current!== null) {
        if (current.data === data) {
          if (prev === null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
          this.size--;
          return;
        }
  
        prev = current;
        current = current.next;
      }
    }
  
    printList(): void {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Test the code
  const list = new DoublingLinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);

  console.log(list);

  //list.delete(3);
  //list.printList();  // Output: 1 2