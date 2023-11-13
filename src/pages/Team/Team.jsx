import React from 'react'
import Card from '../../components/Team/Card.jsx'

const Team = () => {
  return (
    <main className='  flex flex-col items-center mb-20 '>
        <div className=' flex flex-col items-center w-4/5 mb-12'>
        <h2 className='text-3xl font-black tracking-wider text-center mb-7'>Meet The Team</h2>
        <p className='font-medium text-center tracking-wider leading-7 lg:w-1/2'>We're a passionate group of crypto enthusiasts who came together to build cutting-edge NFT products on Cardano.</p>
        </div>
        <section className='flex justify-center'>
          <Card/>
        </section>

    </main>
  )
}

export default Team