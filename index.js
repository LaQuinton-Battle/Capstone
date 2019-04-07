import axios from 'axios';
import Slides from './src/Slides';
import Swiper from 'swiper';

var token = process.env.API_KEY; // eslint-disable-line no-process-env
var root = document.querySelector('.swiper-wrapper');
var State = {
    'albums': []
};

var swiper = new Swiper('.swiper-container', {
    'effect': 'flip',
    'grabCursor': true,
    'pagination': {
        'el': '.swiper-pagination',
    },
    'navigation': {
        'nextEl': '.swiper-button-next',
        'prevEl': '.swiper-button-prev',
    },
});

// TODO: use swiper somehow
console.log('swiper -> ', swiper);

function render(state){
    root.innerHTML = Slides(state);
}

axios
    .get('https://api.music.apple.com/v1/catalog/us/albums/1448263001', {
        'headers': {
            'authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        var album = response.data.data[0].attributes;

        State.albums.push(album);

        render(State);
    });


axios
    .get('https://api.music.apple.com/v1/catalog/us/albums/255836651', {
        'headers': {
            'authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        var album = response.data.data[0].attributes;

        State.albums.push(album);

        render(State);
    });