var arr = [
    {songName:"Jale 2",url:"./songs/Jale 2 (Sapna Choudhary)(PagalWorld.com.pe).mp3",img:"./images/jale.webp",dur:"2:39"},
    {songName:"Pehle Bhi Main",url:"./songs/Pehle Bhi Main Tumse Mila Hu(PagalWorld.com.pe).mp3",img:"./images/Animal.jpg",dur:"4:10"},
    {songName:"Ram siya ram",url:"./songs//_Ram Siya Ram(PagalWorld.com.pe).mp3",img:"./images/ram.jpg",dur:"3:50"},
    {songName:"Arjan Vailly",url:"./songs/Arjan Vailly_192(Ghantalele.com).mp3",img:"./images/Animal.jpg",dur:"3:02"},
]
var allsongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction() {
    var clutter = "";

arr.forEach(function(elem,index){
    clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
    <h2>${elem.songName}</h2>
    </div>
    <h6>${elem.dur}</h6>
</div>`
})
allsongs.innerHTML = clutter;

audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allsongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0

play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click",function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click",function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})