import React, { useState } from 'react'

const Tour = (props) => {
    console.log(props)
    const{id,title,price,description,img,handleRemove}=props;
    const [readMore,setReadMore]=useState(false);

    function toggleReadMore(){
        setReadMore(!readMore);
    }
  return (
    <article className='rounded-lg overflow-hidden'>
        <img src={img} alt={title} className='aspect-video w-full object-cover object-center'/>
        <div className='py-2 px-2 flex justify-between items-center'>
            <h3 className='text-xl md:text-2xl font-semibold'>{title}</h3>
            <p className='px-4 py-1 bg-amber-200 rounded-full'>{price}</p>
        </div>
            <p className='text-gray-700 text-base tracking-wide'>
                {readMore ? description : description.slice(0,200).trim()+"... "}
                {/* {description} */}
                {/* {description.slice(0,200).trim()+"..."}{" "} */}
                <button className='cursor-pointer underline font-medium'onClick={toggleReadMore}>{readMore ? "show lses" : "read more"}</button>
            </p>
        
        <button className='bg-orange-500 text-white px-4 py-2 w-full capitalize cursor-pointer' onClick={()=>{handleRemove(id)}}>not interested</button>
    </article>
  )
}

export default Tour