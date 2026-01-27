import { title } from 'process'
import React from 'react'

const ContentWithVideo = () => {
    const items =[
        {
            src:'/hero.mp4', title:'125 Years of Walker',discription:'Our approach has focused on crafting visually engaging content, including dynamic reels and high-quality photography that capture the indulgence and heritage of Walker’s Shortbread in a modern, shareable way. By partnering with influencers who authentically love the brand, we’ve expanded its reach and introduced Walker’s to new audiences in fresh and creative ways.'
        },
        {
          src:'/hero.mp4'
        }
    ]
  return (
    <section className='w-full bg-white py-20'>
      <div className='flex flex-col-reverse  lg:flex-row  gap-8 px-4 md:flex justify-between w-full'>
    <div className=' w-[90%] mx-auto space-y-5'>
      {items.map((item)=>(
        <div className='h-[90vh] flex flex-col-reverse'>
          <video src={item.src}
          loop
          muted
          autoPlay
          className='h-full object-cover'></video>
        </div>
      ))}
    </div>
    <div className=' w-[90%]  mx-auto mb-10'>
{items.map((item)=>(
  <div className=''>
    <h1 className='text-5xl font-bold mb-5'>{item.title}</h1>
    <p className='text-xl'>{item.discription}</p>
    <div className='h-[90vh] mt-16'>
    <video src={item.src}
          loop
          muted
          autoPlay
          className='h-full object-cover'></video>
          </div>
  </div>
))}
    </div>
    </div>
    </section>
  )
}

export default ContentWithVideo
