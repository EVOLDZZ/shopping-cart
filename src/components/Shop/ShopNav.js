import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ShopNav() {
    let params = useParams()

    return(
        <div className='overflow-hidden'>              
            <div className='font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700'>
                {params.collection === undefined && <h1> Bloom's Collection </h1>}
                {params.collection === 'airPurifying' && <h1>Air Purifying Plants</h1>}
                {params.collection === 'beginner' && <h1>Plants for Beginners</h1>}
                {params.collection === 'pet-friendly' && <h1>Pet Friendly Plants</h1>}
                {params.collection === 'succulents' && <h1>Succulents</h1>}
            </div>
            <div className='font-body text-gray-600 text-center'>
                {params.collection === undefined && <p>Shopping for plants has never been easier</p>}
                {params.collection === 'airPurifying' && <p>Breathe easy with these air cleaning plants.</p>}
                {params.collection === 'beginner' && <p>Easy to care for, even for first time plant owners. </p>}
                {params.collection === 'pet-friendly' && <p>Safe plants for your fuzzy friends.</p>}
                {params.collection === 'succulents' && <p>Beautiful small plants that can survive sporadic watering.</p>}
            </div>

            <div className='flex flex-wrap space-y-2 md:space-y-0 space-x-2 md:space-x-4 w-full items-end 
            justify-center md:mt-6 mb-6 md:mb-12 font-body text-gray-700'>
                <Link to={'/shop'} className={params.collection === undefined && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Shop All</button>
                </Link>
                <Link to={`/shop/airPurifying`} className={params.collection === 'airPurifying' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Air Purifying</button>
                </Link>
                <Link to={`/shop/beginner`} className={params.collection === 'beginner' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Beginner Friendly</button>
                </Link>
                <Link to={`/shop/pet-friendly`} className={params.collection === 'pet-friendly' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Pet Friendly</button>
                </Link>
                <Link to={`/shop/succulents`} className={params.collection === 'succulents' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Succulents</button>
                </Link>
            </div>
        </div>
    )
}

export default ShopNav