import { pizzaData as data } from './data'
import './index.css'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <h1>Fast React Pizza Co.</h1>
    </div>
  )
}

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to chose from. All from our
        stone oven, all organic, all delicious.
      </p>
      <ul className='pizzas'>
        {data.map(pizza => (
          <Pizza
            key={pizza.name}
            photo={pizza.photoName}
            name={pizza.name}
            ingredient={pizza.ingredients}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </main>
  )
}

const Pizza = ({ photo, name, ingredient, price, soldOut }) => {
  return (
    <li className={`pizza ${soldOut && 'sold-out'}`}>
      <img src={photo} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        {soldOut ? <span>Sold Out</span> : <span>{price}</span>}
      </div>
    </li>
  )
}

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour || hour <= closeHour
  console.log(isOpen)

  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>
          We're happy to Welcome You between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  )
}

export default App
