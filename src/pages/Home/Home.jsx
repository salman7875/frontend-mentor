import classes from './Home.module.css'
import introImg from '../../assets/illustration-intro.png'

const Home = () => {
  return (
    <main className={classes.main}>
      <div className={classes.image}>
        <img src={introImg} alt='Intro png' />
      </div>
      <div className={classes.info}>
        <h1>All your file in one secure location, accessible anywhere</h1>
        <p>
          Fylo shares all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers
        </p>
        <button className={classes.btn}>Get Started</button>
      </div>
    </main>
  )
}

export default Home
