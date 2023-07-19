import React from 'react'
import { businessman, consultation, vector } from '../Assets'
import { About, AccordionData, Cards, Servicep1, Servicep2, Services, ServicesCard } from '../Data'
import Accordions from '../Components/Accordions'

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className='w-full md:flex block h-[420px] bg-hero bg-cover'>

        <div className='md:w-1/2 w-full h-full flex flex-col justify-center lg:px-15 md:pl-10 px-lg'>
          <h1 className='text-white lg:text-4xl text-2xl font-thin pb-lg'>Accountancy, <br />
            <span className='font-bold'>Bookkeeping & Tax Solutions.</span></h1>
          <p className='text-white pb-lg lg:text-base text-sm'>Our friendly and experienced team provide accountancy, bookkeeping and tax solutions for individuals and businesses throughout Hampshire, Surrey and Middlesex. Contact us today!</p>
          <div className='flex gap-md'>
            <button className='global-btn-invert cursor-pointer '>Get in touch</button>
            <button className='global-btn cursor-pointer'>Our services</button>
          </div>
        </div>

      </section>

      <section className=' w-full py-15 lg:px-[150px] md:px-10 px-xl'>

        {/* About Cards */}
        <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-lg '>
          {Cards.map((card) => (
            <div key={card.id} className='p-xl shadow-md shadow-gray-300 border rounded-lg'>
              <img src={card.icon} alt="consultation" />
              <h2 className='font-bold text-lg py-md'>{card.title}</h2>
              <p className='py-md'>{card.detail}</p>
              <div className='text-center my-md'>
                <button className='global-btn cursor-pointer'>Make an inquiry</button>
              </div>
            </div>
          ))}
        </div>

        {/* About Business */}
        <div className='w-full md:flex lg:h-[350px] md:h-[250px] h-[780px] bg-[rgb(169,196,202)] mt-10 rounded-xl'>

          <div className='md:w-2/5 w-full md:h-full h-2/5 flex items-center justify-center relative'>
            <img src={vector} alt="vector" className='absolute h-full left-[0] bottom-[0]' />
            <img src={businessman} alt="" className='absolute h-4/5 left-[30%] ' />
          </div>

          <div className='md:w-1/2 w-full md:h-full h-3/5 flex flex-col justify-center md:p-md p-[30px]'>
            <h1 className='font-bold lg:text-md md:text-sm text-md lg:py-md lg:'>{About.title}</h1>
            <p className='py-md lg:text-sm text-xs '>{About.detail}</p>
            <div className='lg:my-xl md:my-[0px] my-xl pl-sm'>
              <button className='global-btn cursor-pointer'>Get in touch</button>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className='w-full mt-10 flex flex-col items-center'>
          <h1 className='text-center md:text-4xl text-2xl md:w-[400px] font-semibold tracking-wide leading-10 mb-xl'>{Services.title}</h1>
          <p>{Services.detail}</p>
        </div>

        {/* About Cards */}
        <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-lg mt-10'>
          {ServicesCard.map((card) => (
            <div key={card.id} className='bg-[rgb(1,133,150)] text-white p-xl rounded-lg'>
              <h2 className='font-bold text-2xl py-sm'>{card.title}</h2>
              <p className='py-sm text-xs'>{card.detail}</p>
            </div>
          ))}
        </div>

        {/* Services Detail*/}
        <div className='w-full mt-10'>
          <div className='flex flex-col items-center'>
            <h1 className='text-center md:text-4xl text-2xl md:w-[600px] font-semibold tracking-wide leading-10 mb-xl'>{Servicep1.title}</h1>
          </div>

          <p>{Servicep1.detail}</p>

          <h1 className='text-left md:text-xl text-lg font-semibold pt-xl'>{Servicep2.title}</h1>
          <p className='pt-xl'>{Servicep2.detailp1}</p>
          <p className='pt-xl'>{Servicep2.detailp2}</p>
          <p className='pt-xl'>{Servicep2.detailp3}</p>

          <p className='pt-xl'>{Servicep2.listdetail}</p>
          <ul className=' list-disc pl-lg py-md'>
            {Servicep2.bullets.map(item => (
              <li key={item.id} className='py-sm'>{item.bullet}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className='w-full mt-10 flex flex-col items-center'>
          <h1 className='text-center md:text-4xl text-2xl font-semibold tracking-wide leading-10 mb-xl'>Revolut Business FAQs</h1>

          <div className='lg:w-3/5 md:w-4/5'>
            {AccordionData.map(data => (
              <Accordions key={data.id} title={data.title} content={data.detail} />
            ))}
          </div>
        </div>

      </section>
      
    </div>
  )
}

export default Home