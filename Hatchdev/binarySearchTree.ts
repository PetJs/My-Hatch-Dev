class shabala{
    val: number;
    left: shabala | null = null
    right: shabala | null = null
    constructor(val: number){
        this.val = val;
        this.left;
        this.right;
    }
}

class BinarySearchTree{
    root: shabala | null = null

    private insertNode(newNode: shabala, node: shabala){
        if(newNode.val < node.val){
            if(node.left === null){
                node.left = newNode
            }
            else{
                this.insertNode(newNode, node.left)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(newNode, node.right);
            }
        }
    }

    insert(val: number){
        const newNode = new shabala(val)
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(newNode, this.root)
        }
    }
}