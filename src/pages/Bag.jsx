import React from 'react'
import ShopBagItem from '../components/ShopBagItem'
import './bag.css'

function Bag({games, reference}) {
  return (
    <>
        <section id="bag" className="bag" ref={reference}>
            <div className="container-fluid">
              <div className="row mb-3">
                <h1>My Bag</h1>
              </div>
            </div>
                {
                  games.length === 0 ? (
                    <h2>Your Bag is Empty.</h2>
                  ) : (
                    <>
                      <div className="row">
                        <div className="table-responsive">
                          <table className="shopBagTable table table-borderless align-middle">
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Preview</th>
                                <th>Game</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Payment</th>
                                <th>Remove</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                games.map((game, index)=>(
                                  <ShopBagItem index={index} key={game._id} game={game}/>
                                ))
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-between mt-5 mb-5">
                        <div className="col-lg-2 d-flex align-items-center">
                          <p className="itemCount">Total Items: {games.length}</p>
                        </div>
                        <div className="col-lg-10 d-flex justify-content-end align-items-center">
                          <div className="payment">
                            Total: ${games.reduce((acc, game) => acc + game.price * (1 - game.discount), 0).toFixed(2)}
                            <a href="#" className="ml-3">
                              Check out <i className="bi bi-wallet-fill"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
        </section>
    </>
  )
}

export default Bag