import React, { Component } from 'react'
import './app.css'



const products = [
  {
  name: "Jan Kowaski",
  adress: "Rzeszow",
  data_ur: "22.28.1989",
  email: "tdi19@wp.pl",
  photo: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    name: "test1 test2",
  adress: "gruzja",
  data_ur: "11.28.1999",
  email: "tdvv@wp.pl",
  photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "test3 test4",
  adress: "czarna gora ",
  data_ur: "11.28.2999",
  email: "hdi@wp.pl",
  photo: "https://randomuser.me/api/portraits/women/4.jpg"
  }
]

class Products extends Component {
  render() {
   
    return (
      <section>
          <h1>Contact list HERE!</h1>
          { products.map (product => (
          <div>
              <header>name: {product.name}</header>
              <p>
              <img src={product.photo} alt="User"/> 
              </p>
              <p>
                 adress {product.adress}
              </p>
              data_ur {product.data_ur}
              <span></span>
              <p>
              email user {product.email}
              </p>
          
          </div>
          ))}
          
      </section>

  
          )     
  }
}
      


            

export default Products
