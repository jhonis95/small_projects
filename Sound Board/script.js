const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)//put all the btn in the div buttons
})
function stopSongs() {// to pause the over sound
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause() //this two line to pause the sound
        song.currentTime = 0;
    })
}