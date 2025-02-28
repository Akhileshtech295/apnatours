import React, { useState } from 'react'
import Tour from './Tour'
import tours from './data'

const Tours = () => {
    const [toursList,setToursList]=useState(tours)
    function handleRemove(id){
        const newToursList=toursList.filter((tour)=>{
            return tour.id !== id;
        });
        setToursList(newToursList);
        console.log(id);
    }
  return (
    <section className='container mx-auto px-2'>
        <div className='py-10'>
            <h2>Develop By:-<span className='text-blue-600 '>Akhilesh</span></h2>
            <h1 className='text-3xl md:text-6xl font-bold text-center mb-10 text-amber-300'><span className='text-orange-600'>Tour</span> locations</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 place-items-start'>
            {toursList.map((tour)=>{
            return <Tour key={tour.id} {...tour} handleRemove={handleRemove}/>;
            })}
        </div>
        
    </section>
  )
}

export default Tours;