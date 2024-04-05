export default function Price({oldPrices,newPrices}){
  let oldStyles={textDecorationLine:"line-through"};
  let newStyles={ fontWeight:"Bold" };
  let styles=  {
    backgroundColor:"yellow",
    height:"30px", 
    borderBottomLeftRadius:"14px",
    borderBottomRightRadius:"14px",
    width:"200px",

  }; 
    return(
      
      <div style={styles}>

        <span style={oldStyles}>{oldPrices}</span>
        &nbsp;  &nbsp;  &nbsp; -&nbsp;
         
         <span style={newStyles }> {newPrices}</span>
      </div>
    );
}