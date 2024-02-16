const searchApi= async (FilmName)=>{
    const config= { headers: { Accept: 'application/json' } }
    const preData= await fetch(`https://api.tvmaze.com/search/shows?q=${FilmName}`,config)
    const jsonData=preData.json()
    // console.log(jsonData)
    return jsonData;
}

export default searchApi;