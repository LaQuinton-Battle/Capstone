function Slide(slide){
    var dimension = 250;
    var url = slide
        .artwork
        .url
        .replace('{w}', dimension)
        .replace('{h}', dimension);

    return `
        <div class='swiper-slide'>
            <h3>${slide.name}</h3>
            <img src="${url}">
        </div>
    `;
}


export default function Slides(state){
    return state
        .albums
        .map(Slide)
        .join('');
}