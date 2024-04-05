import './Product.css';
import Price from './Price';

function Product({title,idx}){
    let oldPrices=["150","11900","12000","4500","7852"];
    let newPrices=["300","4510","2013","4572","65421"];
    let Decription=
    [
        ["8000dpi", "5progrmmable buttons"],
        ["intuiative surface ","designed for i pad"],
        ["touch screen","wireless charging"],
        ["hi this kush","this id testing"]
    ];

    return(
        <div className="Product">
        <h4>{title}</h4>
       
        <p>{Decription[idx][0]}</p>
        <p>{Decription[idx][1]}</p>
      
       <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/> 
             
        </div>
    );
   
}
export default Product;