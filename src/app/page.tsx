import NewArrivalsSection from '@/components/ArrivalsSection'
import Dawnhero from '@/components/Dawnhero'
import DressStyleSection from '@/components/Dress'
import Hero from '@/components/Hero'
import CustomerReviewSection from '@/components/Review'

import TopSellingSection from '@/components/TopSellingSection'
// import Wishlist from '@/components/Wishlist'
import React from 'react'

function page() {
  return (
    
    <div> 
      <Hero/>
<Dawnhero/>
<NewArrivalsSection/>
<TopSellingSection/>
<DressStyleSection/>
<CustomerReviewSection/>


    </div>
  )
}

export default page





