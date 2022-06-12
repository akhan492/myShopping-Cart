import React from 'react'

function Header() {
  return (
    <header className='row block   center'>
        <div>
            <a href="#/">
              <h1>My Small Shopping Cart</h1>
            </a>
        </div>
        <div className='row '>
            <a href="#/cart">Cart</a>
            <a href="#/signin">SignIn</a>
        </div>

    </header>
  )
}

export default Header