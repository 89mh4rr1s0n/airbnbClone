import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

const Search = ({ searchResults }) => {

    const router = useRouter();
    const { location, startDate, endDate, guests } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    //console.log(router.query)
    //console.log(location)
    //console.log(searchResults)

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${guests} guests`}/>

            <main className='flex'>
                <section className='flex-grow pt-10 px-5'>
                    <p className='text-xs mt-5'>300+ Stays - {range} for {guests} guest(s)</p>
                    
                    <h1 className='text-2xl font-semibold mt-2 pb-2'>Stays in {location}</h1>

                    <div className='hidden md:flex whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    {searchResults.map((item, i) => (
                        <InfoCard 
                        key={i}
                        img={item.img}
                        location={item.location}
                        title={item.title}
                        description={item.description}
                        star={item.star}
                        price={item.price}
                        total={item.total}
                        long={item.long}
                        lat={item.lat}
                        />
                    ))}
                </section>
                <section className='hidden lg:inline-flex lg:min-w-[600px]'>
                    <Map searchResults={searchResults}/>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Search;

export const getServerSideProps = async () => {
    const searchResults = await fetch("https://links.papareact.com/isz").
    then(
        (res) => res.json()
    );

    return {
        props: {
            searchResults: searchResults
        },
    };
}
