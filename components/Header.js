import React,{ useState } from 'react'
import Image from 'next/image'
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Header = ({ placeholder }) => {

    const [searchInput, setSearchInput] = useState('')
    const [noOfGuests, setNoOfGuests] = useState(1)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests: noOfGuests
            }
        })
        setSearchInput("")
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetSearch = () => {
        setSearchInput("")
    }

    //console.log(searchInput)
    //console.log(noOfGuests)
    
    return <>

            <header className='sticky top-0 z-50 grid grid-cols-3 
            bg-white shadow-md md:px-4'>

                {/* left portion of nav */}
                <div className='flex flex-row p-4 m-0' onClick={() => router.push("/")}>
                    <div className='flex flex-row relative
                    h-10 w-10 min-h-10 min-w-10 flex-shrink-0 cursor-pointer'>
                        <Image
                        src='/airbnb-1.svg'
                        layout='fill'
                        objectFit='contain'
                        objectPosition="left"
                        />
                    </div>
                    <div>
                        <span 
                        style={{color: "rgb(255, 56, 92)"}} 
                        className='align-middle cursor-pointer
                        mt-1 font-semibold text-xl'>
                            matbnb
                        </span>
                    </div>
                </div>

                {/* center portion of nav */}
                <div className='my-4 flex flex-row border-2 rounded-full'>
                    <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='pl-5 bg-transparent outline-none flex-grow
                    text-gray-600' 
                    type="text"
                    placeholder={placeholder || 'start your search'}
                    />
                    <SearchIcon 
                    style={{backgroundColor: "rgb(255, 86, 92)"}}  
                    className='hidden md:inline-flex h-7 align-middle 
                    rounded-full p-1 cursor-pointer text-white m-1 
                    flex-shrink-0'/>
                </div>
    
                
                {/* right portion of nav */}
                <div className='flex items-center justify-end space-x-2 text-gray-500 pr-2'>
                    <p className='hidden md:inline cursor-pointer'>Become a host</p>
                    <GlobeAltIcon className='h-6 cursor-pointer'/>
                
                    <div className='flex border-2 border-gray-300 space-x-1 px-1 rounded-full'>
                        <MenuIcon className='h-6 cursor-pointer'/>
                        <UserCircleIcon className='h-6 cursor-pointer'/>
                    </div>
                </div>

                {searchInput &&
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["rgb(255, 56, 92)"]}
                    onChange={handleSelect}
                     />
                     <div className='flex items-center border-b mb-2 border-gray-300'>
                         <h2 className='text-xl flex-grow font-semibold'>Number of Guests</h2>
                         <UsersIcon className='h-5'/>
                         <input 
                         value={noOfGuests}
                         onChange={e => setNoOfGuests(e.target.value)}
                         type="number"
                         min={1}
                         className='w-12 pl-2 outline-none 
                         text-red-500 text-center'/>
                     </div>
                     <div className='flex mb-2'>
                        <button 
                        onClick={resetSearch} 
                        className='flex-grow hover:bg-black hover:text-white rounded-full'>
                            Cancel
                        </button>
                        <button 
                        onClick={search}
                        className='flex-grow text-red-500 hover:text-white hover:bg-red-500 rounded-full'>
                            Search
                        </button>
                     </div>
                </div>
                }
            
    
            </header>
       </> 
}

export default Header

