import React from 'react'
import { useCart } from '../context/cartContext';

const cart = () => {

    const [cart, setCart] = useCart();
      //total price
  const totalPrice = () => {
  try {
    var total = 0;
    cart?.map((item) => {
      total = total + parseFloat(item.price); 
    });
    return total;
  } catch (error) {
    console.log(error);
  }
};

  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
};
const getAmount = () => {
    let total = 0;
    cart?.map((item) => {
      total = total + item.price;
    });
    return total;
  };

  //handle payment
  const handlePayment = async () => {
    try {
      let a = [];
      cart.map((p) => {
        a.push(p._id);
      });
      let amount = getAmount();
      localStorage.removeItem("cart");
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };
  

    return (
    <div
          className="container"
          
        >
          <div className="row">
            <div className="col-md-12">
              <h1 className={`text-center  p-2 mb-1`}>
                {`Hello user`}
              </h1>
              <h4 className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart `
                  : " Your Cart Is Empty"}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              {cart?.map((p) => (
                <div className="row mb-2 p-3 card flex-row" key={p._id}>
                  <div className="col-md-4">
                    {console.log(cart)}
                    <img
                      src={p.src}
                      className="card-img-top"
                      alt={p.name}
                      width="100px"
                      height={"100px"}
                    />
                  </div>
                  <div className="col-md-8">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price : {p.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4 text-center">
              <h2>Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total : {totalPrice()} </h4>
              
                <>
                  <div className="mb-3">
                    <h4>Current Address</h4>
                    <h5>Mumbai</h5>
                    <button
                      className="btn btn-outline-warning"
                    >
                      Update Address
                    </button>
                  </div>
                </>
               
              <div className="mt-2">
                {!cart?.length ? (
                  ""
                ) : (
                  <>
                    

                    <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                    >
                      Make Payment
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
  )
}

export default cart
