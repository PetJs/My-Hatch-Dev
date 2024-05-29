class Nodel<T>{
    val: T;
    left: Nodel<T>  | null = null;
    right: Nodel<T> | null = null;

    constructor(val: T){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree<T>{
    root: Nodel<T> | null = null;

    constructor(){
        this.root = null;
    }

    insert(val: T){
        const newRoot = new Nodel(val);

        if(!this.root){
            this.root = newRoot;
            return;
        }
        let queue: Nodel<T>[] = [];
        queue.push(this.root);

        while(queue.length > 0){
            let curr = queue.shift();
            if(curr!.left === null){
                curr!.left = newRoot;
                return;
            }else if(curr!.right === null){
                curr!.right = newRoot;
                return;
            }else{
                queue.push(curr!.left);
                queue.push(curr!.right);
            }
        }
    }

    bfstransversal(){
        // if there is no root
        if(!this.root){
            return;
        }

        // if there is root
        let q: Nodel<T>[] = [];

        q.push(this.root);
        while(q.length > 0){
            let parentNode = q.shift()!;     // removes the first value in the queue
            // let transversalArr: Nodel<T>[] = [];     // create an arr to store the removed value

            //transversalArr.push(parentNode);     // Add the removed child to the array created
            console.log(parentNode.val);     // print it out

            // create an if statement to add the left or the right child of the removed node 
            if(parentNode!.left){
                q.push(parentNode!.left);
            }
            if(parentNode!.right){
                q.push(parentNode!.right);
            }
            // return transversalArr;
        }
    }

    preOrderTransversal(){
        if(!this.root){
            return;
        }

        let q: Nodel<T>[] = [];
        q.push(this.root);
        while(q.length > 0){
            let temp = q.shift()!;
            let preOrderTrans:Nodel<T>[] = [];

            preOrderTrans.push(temp);
            console.log(temp.val);

            if(temp.left!){
                q.push(temp.left!)
                let next = q.shift()!
                while(next.left){
                    q.push(next.left!);
                }
            }
            if(temp.right!){
                q.push(temp.right!)
                let next = q.shift()!
                while(next.left){
                    q.push(next.left!);
                }
            }
            return preOrderTrans;
        }
    }

    // David mark preOrder Transversal
    
    preOrder(node: Nodel<T> | null): T[]{
        if(!node){
            return [];
        }
        
        let output: T[] = [];
        output.push(node?.val!);
        output.push(...this.preOrder(node!.left!));
        output.push(...this.preOrder(node!.right!));
        
        return output;

    } 

    inOrder( node: Nodel<T> | null): T[]{
        if(!node){
            return [];
        }
        let output: T[] = [];

        output.push(...this.inOrder(node!.left));
        output.push(node?.val!);
        output.push(...this.inOrder(node!.right));

        return output;
    }

    postOrder(node: Nodel<T> | null): T[]{
        if(!node){
            return [];
        }

        let output: T[] =  [];

        output.push(...this.postOrder(node!.left));
        output.push(...this.postOrder(node!.right));
        output.push(node?.val!);

        return output;
    }
}


const btt = new BinaryTree();

btt.insert(3);
btt.insert(5);
btt.insert(7);
btt.insert(4);
btt.insert(8);
btt.insert(10);
btt.insert(13);
// btt.bfstransversal();
console.log("......................");
console.log(btt.inOrder(btt.root!));
console.log("......................");
console.log(btt.postOrder(btt.root!));
