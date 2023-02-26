import classes from './Navbar.module.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className={classes.logo}>
        <img src={logo} alt='logo svg' />
      </div>
      <ul className={classes.lists}>
        <li className={classes.list}>
          <a href='#'>Feature</a>
        </li>
        <li className={classes.list}>
          <a href='#'>Team</a>
        </li>
        <li className={classes.list}>
          <a href='#'>Sign In</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
