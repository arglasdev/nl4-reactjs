import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile'
import { CompleteChallenges } from '../components/CompleteChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountDown } from '../components/CountDown';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section >

        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>


        <div>
          <ChallengeBox />
        </div>

      </section>

    </div>
  )
}
