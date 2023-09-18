function print() {
  console.log("Hello there!!!");
}

export const OmilenoHobiSlika =() => {
    return (
   <div>
        <p className="tekst">Eve slika od moeto omileno hobi</p>
        <img className="hobi-slika" src="https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_640.jpg" onMouseOver={print}
        alt="omilen ohobi img"/>   
 
    </div>
    );
  };