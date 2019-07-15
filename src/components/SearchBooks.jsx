import React from 'react'

function SearchBooks({ searchBooks, searchOptions, sortByTitle, sortByAuthor}) {
  let searchFieldRef = React.createRef()
  function searchAuthors(){
    searchFieldRef.current.value=""
    searchBooks('')
  }
    return (
        <>
          <form className="inline">
              <input className="col-md-3" ref={searchFieldRef} type="text" onChange={(e) => searchBooks(e)} placeholder="Search by Title" />
              <div className="col-md-5">
              <input className="check" type="checkbox" onChange={e => {searchOptions(e); searchAuthors()}}/>
                <label className="subtitle">Search by Author</label>
              </div>
              <button className="col-md-2 btn btn-light" onClick={(e) => sortByTitle(e)}>Sort by Title</button>
              <button className="col-md-2 btn btn-light" onClick={(e) => sortByAuthor(e)}>Sort by Author</button>
          </form>
        </>
    )
}
export default SearchBooks