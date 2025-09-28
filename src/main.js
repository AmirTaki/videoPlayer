const container = document.querySelector('.container')
const mainVideo = document.querySelector('video')
const playPauseBtn = document.querySelector('.play-pause i')

playPauseBtn.addEventListener('click', () => {
    mainVideo.paused ? mainVideo.play() : mainVideo.pause()
})

mainVideo.addEventListener('play', () => {
    playPauseBtn.classList.replace('fa-play', 'fa-pause')
})