import React, { useState } from 'react'

const SearchBox = ({searchShow}) => {
    const [show, setShow] = useState('')
    const handleSubmit = (e) =>{
      e.preventDefault()
      searchShow(show.show.name)
    }
  
    return (
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto mt-15 text-slate-900 dark:text-slate-100">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
              <div className="flex items-center border-b-2 border-teal-500 py-2">
                <input onChange={e =>setShow(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder='Search show...'/>
                <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>Search</button>
              </div>
          </form>
      </div>
    )
}

export default SearchBox