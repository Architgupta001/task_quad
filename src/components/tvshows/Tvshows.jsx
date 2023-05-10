import React from "react"
import { Link } from "react-router-dom"


const Tvshows = ({show}) => {
 
  return (
    <div className='rounded-3xl overflow-hidden bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 hover:transition-all dark:hover:transition-all shadow-lg m-5 border dark:border-slate-60'>
      {/* <img src={show.show.image.medium} alt="" className="w-full rounded shadow" /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {show.show.name}
        </div>
        <ul className="text-slate-700 dark:text-slate-300">
          {/* <li>
            <strong>Summary: </strong>
            {show.show.summary.replace(/<[^>]+>/g, '')}
          </li> */}
          <li>
            <strong>Genres: </strong>
            {show.show.genres.join(', ')}
          </li>
          <li>
            <strong>Status: </strong>
            {show.show.status}
          </li>
          <li>
            <strong>Language: </strong> 
            {show.show.language}
          </li>
          <li>
            <strong>Premiered: </strong> 
            {show.show.premiered}
          </li>
          
        </ul>

        <div className='mt-4 flex justify-between items-center text-slate-700 dark:text-slate-300' >
            <p >⭐<strong>{show.show.rating.average === null? "null":`${show.show.rating.average}`}</strong></p>
            <Link to={`/${show.show.id}`} className='shadow hover:shadow-lg transition duration-300'>
              <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 t py-1 px-2 rounded' type='submit'><strong>Book Now</strong></button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Tvshows

