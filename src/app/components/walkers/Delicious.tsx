import React from 'react'

const Delicious = () => {
    const items =[
            {
                src:'/hero.mp4', title:'A Delicious Treat',discription:'Beyond digital, we’ve been planning fun, eye-catching out-of-home campaigns designed to make an impact, ensuring Walker’s Shortbread remains top-of-mind for Canadian consumers. Combined with paid media efforts, our strategy seamlessly blends storytelling with performance-driven marketing, celebrating the rich history and irresistible taste of Walker’s Shortbread.'
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

export default Delicious
