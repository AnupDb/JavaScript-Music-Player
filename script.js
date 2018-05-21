const songs = ["bensound-thejazzpiano.mp3", "bensound-romantic.mp3", "bensound-ukulele.mp3"];

function createSongList() {
    const list = document.createElement('ol');

    for (let i = 0; i < songs.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));

        list.appendChild(item);

    }
    return list;
}
document.getElementById('songList').appendChild(createSongList());

document.getElementById('songList').onclick = function (e) {
    const clickedItem = e.target;
    //console.log(e);
    const source = document.getElementById('source');
    source.src = 'Songs/' + clickedItem.innerText;

    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing:";
    document.getElementById('currentSong').innerText = clickedItem.innerText;

    const player = document.getElementById("player");

    player.load();
    player.play();
};

const playButton = document.getElementById('play');
playButton.onclick = function () {
    if (player.readyState) {
        player.play();
    }
}
const pauseButton = document.getElementById('pause');
pauseButton.onclick = function () {
    player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = (e) => {
    const volume = e.target.value;
    player.volume = volume;
}

const updateProgress = () => {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById('progress');

        progressBar.value = (player.currentTime / player.duration) * 100;
    }
}
