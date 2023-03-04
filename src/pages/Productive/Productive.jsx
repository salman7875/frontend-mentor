import classes from './Productive.module.css'
import img from '../../assets/illustration-stay-productive.png'

const Productive = () => {
  return (
    <section className={classes.productive}>
      <div className={classes.left}>
        <img src={img} alt='stay productive png' />
      </div>
      <div className={classes.right}>
        <h1 className={classes.heading}>Stay Productive, Wherever you are</h1>
        <p className={classes.p1}>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all your file storage needs.
        </p>
        <p className={classes.p2}>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href='#' className={classes.link}>
          See how Faylo works
        </a>
      </div>
    </section>
  )
}

export default Productive
