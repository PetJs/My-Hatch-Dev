// import cabbageImage from '../assets/cabbage.svg'
// import appleImage from '../assets/apple.svg'
// import garlicImage from '../assets/garlic.svg'

export const MyButton = ({textContent, bgColor, textColor}) => {

    return (
        <div style={{backgroundColor: bgColor || "red", color: textColor}}>
            <button>{textContent}</button>
        </div>
    )
}

const products = [
    { 
        title: 'Cabbage', 
        isFruit: false, 
        id: 1,
        imageUrl: 'https://www.istockphoto.com/photos/cabbage'
    },
    { 
        title: 'Garlic', 
        isFruit: false, 
        id: 2,
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fgarlic&psig=AOvVaw1Kf-8BOtlVu_9p5Nvxqrg8&ust=1719741176574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCKCimuDHgIcDFQAAAAAdAAAAABAE' 
    },
    { 
        title: 'Apple', 
        isFruit: true, 
        id: 3,
        imageUrl: 'https://www.shutterstock.com/search/apple' 
    },
  ];
  
export default function ShoppingList() {
    const listItems = products.map (product =>
        <>
            <div key={product.id}>
                <li
                    style={{
                        color: product.isFruit ? 'magenta' : 'darkgreen'
                    }}
                >
                    {product.title}
                </li>
                <img src={product.imageUrl} alt={product.title} />
            </div>
        </>
    );

    return (
        <ul>{listItems}</ul>
    );
}