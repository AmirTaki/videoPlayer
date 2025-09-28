const container = document.querySelector('.container')
const mainVideo = document.querySelector('video')
const progressBar = document.querySelector('.progress-bar')
const playPauseBtn = document.querySelector('.play-pause i')
const skipBackwrad = document.querySelector('.skip-backward i')
const skipForward = document.querySelector('.skip-forward i')

playPauseBtn.addEventListener('click', () => {
    mainVideo.paused ? mainVideo.play() : mainVideo.pause()
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