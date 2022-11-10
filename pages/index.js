import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import { liveAnywhere } from '../data'

export default function Home({ exploreData, /*liveAnywhereData*/ }) {
  return (
    <div>
      <Head>
        <title>airbnb--clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>
    <Banner/>

    <main className='max-w-7xl mx-auto px-8'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {/* display exploreData */}
          {exploreData?.map((ed, i) => (
            <SmallCard 
            key={i}
            img={ed.img}
            location={ed.location}
            distance={ed.distance}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        <div className='flex space-x-3 overflow-scroll scrollbar-hide pb-5'>
          {liveAnywhere?.map((la, i) => (
            <MediumCard 
            key={i}
            title={la.title}
            img={la.img}
            />
          ))}
        </div>
      </section>

      <LargeCard
      img="https://links.papareact.com/4cj"
      title="The Greatest Outdoors"
      description="Wishlists curated by Matbnb."
      buttonText="Get Inspired"
      />

    </main>

    <Footer/>

    </div>
  )
}

export async function getStaticProps() {
  const explore = await fetch('https://www.jsonkeeper.com/b/4G1G')
  console.log(explore)
  const exploreData = await explore.json()

  // const liveAnywhere = await fetch('https://jsonkeeper.com/b/VHHT')
  // const liveAnywhereData = await liveAnywhere.json()

  return {
    props: {
      exploreData,
      // liveAnywhereData
    },
  }
}
