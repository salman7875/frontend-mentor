import styles from './About.module.css'
import img1 from '../../assets/icon-access-anywhere.svg'
import img4 from '../../assets/icon-any-file.svg'
import img3 from '../../assets/icon-collaboration.svg'
import img2 from '../../assets/icon-security.svg'

const dATA = [
  {
    img: img1,
    title: 'Access your files, anywhere',
    desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
  },
  {
    img: img2,
    title: 'Security you can trust',
    desc: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
  },
  {
    img: img3,
    title: 'Real-time collaboration',
    desc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
  },
  {
    img: img4,
    title: 'Store any type of file',
    desc: `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.`
  }
]

const About = () => {
  return (
    <div className={styles.container}>
      {dATA.map(item => (
        <div className={styles.wrapper}>
          <img src={item.img} alt='' />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default About
