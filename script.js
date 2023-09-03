console.log("Welcome to spotify")

///initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3.mp3');
let msterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Let Me Love You", filePath:"1.mp3.mp3",coverPath:"DJSnakeLetMeLoveYou.jpg"},
    {songName:"What Jhumka ?", filePath:"2.mp3.mp3",coverPath:"jhuma2.jpg"},
    {songName:"Radha", filePath:"3.mp3.mp3",coverPath:"Student-Of-The-Year-2012-500x500.jpg"},
    {songName:"Heeriye", filePath:"4.mp3.mp3",coverPath:"heeriye.jpg"},
    {songName:"Apna Bana Le", filePath:"5.mp3.mp3",coverPath:"apnaba.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
//audioElemnt.play();
//Handle Play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }

})

//listento event
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})