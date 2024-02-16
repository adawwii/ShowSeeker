import React from 'react';

function siteLink(uRl,urlName){
if(uRl ==="N/A"){
    return <span className='anchorTag aTagNa'>{uRl}</span>
}
else {
    if(urlName==="N/A"){
        urlName=uRl
    }
    return <a href={uRl} target='_blank' className='anchorTag' rel="noopener noreferrer">{urlName}</a>
}

}

function siteLink2(uRl){
if(uRl ==="N/A"){
    return <span className='anchorTag2 aTagNa'>For More: {uRl}</span>
}
else {
    return <a href={uRl} target='_blank'  className='anchorTag2' rel="noopener noreferrer">For More <i  className="bi bi-box-arrow-up-right"></i></a>
}

}

function noDataCheck(D){
    if(D ==="N/A"){
    return <span className='aTagNa'>{D}</span>
}
else {
return D
}
}

function noObjCheck(D){
    if(D ==="N/A"){
    return <span className='aTagNa'>{D}</span>
}
else {
    const newD= D.map(modD=>{
        return modD+" "
    })
return `( ${newD+''})`
}
}

const AShow = ({ img , showDesc , showName, officialSite, showDate, showGenre, showRate, webChannel, refUrl})=>{
    
    return <article  className='show-style'>
        <section className='leftContainer'>
        <img  style={{ textAlign:'center' }} src={img} alt='img' />
        <div title='Rating' className='bookMark'>
            <div>
            <span>{showRate}</span>
            </div>
        </div>
        </section>
        <div className='rightContainer'>
        <span className='showName'>{noDataCheck(showName)}</span>
        <p className='dataParent'>

            <span className='showData'>
               <strong className='topicTitle'>Genre</strong> :  {noObjCheck(showGenre)}
            </span>
            
             <span className='showData'>
               <strong className='topicTitle'>Premierd</strong> :  {noDataCheck(showDate)}
            </span>

            <span className='showData'>
           <strong className='topicTitle'>Summary</strong> :  {noDataCheck(showDesc)}
            </span>

            <span className='showData'>
             <strong className='topicTitle'>officialSite</strong> :  {siteLink(officialSite,webChannel)}
            </span>
            
            <span className='showData forMore'>
             <strong  className='topicTitle'>{siteLink2(refUrl)}</strong>
            </span>
            </p>
        </div>
    </article>
}

export default AShow;
