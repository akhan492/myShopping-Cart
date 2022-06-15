import React from "react";
function Cart({ cartItems, onAdd, onRemove }) {
  // const itemTotal = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <aside className="cart block col-1">
      <h2 style={{ color: "purple" }}>Cart Items</h2>
      <div>{cartItems.length === 0 && <p>No items in cart</p>}</div>
      {cartItems &&
        cartItems.map((item) => (
          <div className="row" key={item.id}>
            <div className="col-2">{item.name}</div>
            <div className="cart-button col-2">
              <button className="add" onClick={() => onAdd(item)}>
                +
              </button>
              <button className="rem" onClick={() => onRemove(item)}>
                -
              </button>
            </div>
            <div>
              <p>{item.quantity}X ₹{item.price}</p>
            </div>
          </div>
        ))}
      <div>
      </div>
         
       {cartItems.length>0 && (<><hr /><strong>
        Total: ₹
          {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </strong></>) }
    </aside>
  );
}
export default Cart;
