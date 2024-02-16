import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';
//api
import searchApi from './searchApi';
//component
import AShow from './Ashow';
import Search from './Search';


//variables & functions
import {createShowData, mazeFinalData} from './showData';
let mazeData;
let searchActivated='a';

//activateComponent
const activateComponent=()=>{
//components
function ShowList() { //the first letter needs to be in uppercase

    return (
        <>
        <section className='headerSection' id='headerSection'>
            <div className='siteName'>
                <span>ShowSeeker <sub>powered by TVmaze</sub></span>
            </div>
            <Search/>
        </section>

    <section id='showList' className='showList'>
        {
            mazeData.map(showData=>{

                createShowData(showData) 
                return <AShow
                {...mazeFinalData}
                key={mazeFinalData.id}
                    />
            })
        }
    </section>
    
        </>
    )



}

ReactDom.render(<ShowList />,document.getElementById('root'))

}
//end of activating component

//activate api
const defaultActivate=()=>{
searchApi(searchActivated)
.then(result=>{
    if(!result[0]) throw `No Data Found :(`;
     mazeData = result;
    // console.log(mazeData)
return activateComponent();
})
.catch(err=>{
    console.log('sorry, ',err)
})
.then(()=>{
const searchForm=document.querySelector('#sBar');
const inputE=document.querySelector('#searchBar');
// console.log(searchForm)
searchForm.addEventListener('submit',function (e){
    e.preventDefault();
    // console.log(inputE.value)
    searchActivated=inputE.value;
    return defaultActivate(searchActivated)
})
})
.then(()=>{
    // console.clear(); //activate only in the end of project
})
.catch(err=>{
    console.log('sorry, problem after rendering!! :( ::',err)
})
}

defaultActivate();
