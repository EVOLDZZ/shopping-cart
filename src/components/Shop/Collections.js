import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import ShopDisplay from './ShopDisplay'
import Nav from '../Header/Header'
import Footer from '../Footer/Footer'
import ShopHero from '../Shop/ShopHero'
import ShopNav from '../Shop/ShopNav'

function Collections() {
    let { collection } = useParams()
    const products = useSelector(state => state.cart.products)
    let currentPlantCollection = []
    
    switch(collection) {
        case 'airPurifying':
            currentPlantCollection = products.filter(item => item.purify)
            break
        case 'beginner':
            currentPlantCollection = products.filter(item => item.beginner)
            break
        case 'pet-friendly':
            currentPlantCollection = products.filter(item => item.petFriendly)
            break
        case 'succulents':
            currentPlantCollection = products.filter(item => item.succulent)
            break
        default:
            break
    }

    let plants = currentPlantCollection.map(plant =>
        <ShopDisplay
        key={plant.id}
        name={plant.name} 
        light={plant.light}
        price={plant.price}
        purify={plant.purify}
        beginner={plant.beginner}
        petFriendly={plant.petFriendly}
        img={plant.img}
      />)
        
   return (
      <div className='h-screen relative'>
        <Nav />
        <ShopHero />
        <ShopNav />
        <div className='grid grid-cols-2 md:grid-cols-3 mx-8 mb-14 gap-x-8 gap-y-12'>
            {plants}
        </div>
        <Footer />
      </div>
    )
  }
export default Collections