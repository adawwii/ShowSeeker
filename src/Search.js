import React from 'react'

const Search = ()=>{
    return <>
    <form id='sBar'>
        <div className='inputsSectionHeader'>
    <input maxLength='50' placeholder='Search Shows...' id='searchBar' type="text" />
    <button id='searchButton' type="submit">search</button>
        </div>
    </form>
    </>
}

export default Search
