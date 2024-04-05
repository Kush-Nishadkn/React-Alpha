import './ProductTab.css';

import Product from './Product';



function ProductTab(){
  let styles={
    display: 'flex',
    flexWrap:'wrap',
    justifyContent:'center',
   alignItem:'center',
margin:"2rem",
padding:"5rem"


  }
  return(
 <div style={styles }>
 
    <Product title="Logitech mx Mastre" idx={0}/>
    <Product  title="himalayan mx Mastre" idx={1}/>
    <Product  title="linkeding mx Mastre" idx={2}/>
    <Product  title="facebook mx Mastre" idx={3}/>
    </div>

  );
  
}
export default ProductTab;