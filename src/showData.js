const imageSrc='https://i.stack.imgur.com/81VAF.jpg';
let showId;
let showName;
let showSummary;
let showImage;
let showRate;
let showGenre;
let showUrl;
let showDate;
let webChannel;
let refUrl;
let mazeFinalData={}
function removeHtmlTags(str) {
    showSummary = str.replace(/<[^>]*>/g, '');
    return showSummary;
}

function createShowData(showData) {
    showId= showData.show.id;
    showName= showData.show.name;
    showSummary= showData.show.summary;
    if(showData.show.summary){
        removeHtmlTags(showSummary)
    }
    else{
        showSummary='N/A'
    }
    if(showData.show.image){
        showImage=showData.show.image.medium;
    }
    else{
        showImage = imageSrc;
    }
    if(showData.show.rating.average){
        showRate=showData.show.rating.average;
    }
    else{
        showRate='N/A'
    }
    if(showData.show.genres.length !==0){
        showGenre=[...showData.show.genres];
    }
    else{
        showGenre='N/A'
    }
    if(showData.show.officialSite){
        showUrl=showData.show.officialSite;
    }
    else{
        showUrl='N/A'
    }
    if(showData.show.premiered){
        showDate=showData.show.premiered;
    }
    else{
        showDate='N/A'
    }
    if(showData.show.webChannel){
        webChannel=showData.show.webChannel.name;
    }
    else{
        webChannel='N/A'
    }
    if(showData.show.url){
        refUrl=showData.show.url;
    }
    else{
        refUrl='N/A'
    }
     mazeFinalData={
        id: showId,
        img: showImage,
        showDesc: showSummary,
        showName: showName,
        showRate: showRate,
        showGenre: showGenre,
        officialSite: showUrl,
        showDate: showDate,
        webChannel: webChannel,
        refUrl: refUrl
    }   
return mazeFinalData;
}

export {createShowData,mazeFinalData};