import { useState } from "react";

export function Form(props: any){
   
    const [newItem, setNewItem] = useState<string>(""); // 
    
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    
        props.onSubmit(newItem)
    
    
        // Optionally, clear the newItem state after submission
        setNewItem("");
      }

    return (
        <>
            <form onSubmit={handleSubmit} className='new-item-form'>
                <div className='from-row'>
                    <label htmlFor='item'>New ITEM</label>
                    <div className='input'>
                        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id='item' />
                        <button>Add</button>
                    </div>
                </div>
            </form>
        </>
    )
}