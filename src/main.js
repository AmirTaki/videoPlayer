const container = document.querySelector('.container')
const mainVideo = document.querySelector('video')
const progressBar = document.querySelector('.progress-bar')
const playPauseBtn = document.querySelector('.play-pause i')
const skipBackwrad = document.querySelector('.skip-backward i')
const skipForward = document.querySelector('.skip-forward i')
const volumeBtn = document.querySelector('.volume i ')

playPauseBtn.addEventListener('click', () => {
    mainVideo.paused ? mainVideo.play() : mainVideo.pause()
})


skipBackwrad.addEventListener('click', () => {
    mainVideo.currentTime -=5;     
})
skipForward.addEventListener('click', () => {
    mainVideo.currentTime +=5;     
})

volumeBtn.addEventListener("click", () => {
    if(!volumeBtn.classList.contains('fa-volume-high')){
        mainVideo.volume = .5
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high")
    }   
    else {
        mainVideo.volume = 0
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark")
    }
})

mainVideo.addEventListener('play', () => {
    playPauseBtn.classList.replace('fa-play', 'fa-pause')
})

mainVideo.addEventListener('pause', () => {
    playPauseBtn.classList.replace('fa-pause', 'fa-play')
})

mainVideo.addEventListener("timeupdate", (e) => {
    let {currentTime, duration} = e.target;
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`
})