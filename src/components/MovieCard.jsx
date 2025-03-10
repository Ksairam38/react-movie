import React from 'react'
import PropTypes from 'prop-types'

function MovieCard({ movieList }) {


    return (
        <div className='m-[20px] mt-[40px] text-white '>
            <h1 className=' text-[30px] m-5'>Popular</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 object-center   '>
                {movieList.map((element) => (
                    <div className='bg-[#0F0D23] m-5 rounded-[10px] p-[10px]'>
                        <div className='flex items-center justify-center h-[300px]'>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${element.poster_path}`}
                                alt={element.title}
                                className='max-w-full max-h-full object-cover object-center'
                            />
                        </div>
                        <div className='text-left '>
                            {element.title} 
                        </div>
                        
                        <div className='flex align-middle text-[#9CA4AB]'>
                            <img src='/Rating.svg' alt='rating' className='inline'/>
                            <p className='inline font-bold'>   { element.vote_average}  . {element.original_language}  . {new Date(element.release_date).getFullYear()}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}


export default MovieCard;