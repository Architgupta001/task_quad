import React from 'react'
import { Link } from 'react-router-dom'

const showDetails = () => {    

  return (
    <div className='max-w-2xl rounded overflow-hidden shadow-lg bg-slate-50 dark:bg-slate-900 border-2 dark:border-slate-600 text-slate-900 dark:text-slate-100 flex items-center mx-auto mt-24'>
      
      <div className="px-6 py-4 w-full">
        <div className="font-bold text-purple-500 text-xl mb-2 text-center">
          {/* {show.show.name} */}
          Dummy Data
        </div>
        <ul className='mt-6'>
          <li>
            <strong>Summary: </strong>
            {/* {show.show.summary.replace(/<[^>]+>/g, '')} */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi numquam reprehenderit necessitatibus soluta nisi commodi saepe ipsum recusandae quaerat praesentium, doloribus rem modi provident laboriosam quas fugiat deleniti distinctio quae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam aut, illo optio, modi reiciendis vitae voluptatibus voluptas dolore possimus exercitationem, magni assumenda. Eveniet non provident eaque at sint praesentium quisquam.
          </li>
          <li>
            <strong>Genres: </strong>
            {/* {show.show.genres.join(', ')} */}
            Action, Adventure
          </li>
          <li>
            <strong>Status: </strong>
            {/* {show.show.status} */}
            Running
          </li>
          <li>
            <strong>Language:</strong> 
            {/* {show.show.language} */}
            English
          </li>
          <li>
            <strong>Premiered:</strong> 
            {/* {show.show.language} */}
            022-2-20
          </li>
          <li>
            <strong>Shows: </strong> 
            {/* {show.show.language} */}
            Mon, Wed, Fri
          </li>
          <li>
            <strong>Language:</strong> 
            {/* {show.show.language} */}
            English
          </li>
        </ul>
        <div className='mt-4 flex justify-between items-center text-slate-700 dark:text-slate-300' >
            <p >⭐<strong>8.1</strong></p>
            <Link to={`/contact`} className='shadow hover:shadow-lg transition duration-300'>
              <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 t py-1 px-2 rounded' type='submit'><strong>Book Now</strong></button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default showDetails