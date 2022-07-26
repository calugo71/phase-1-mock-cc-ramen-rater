// write your code here
//Major user error when first creating the fetch. killed too much time on it. 
//used fetch source with '../ramens' at the end
function getRamen() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => console.log(data))}
getRamen();

function renderRamenMenu() {
    let menu=getElementById('ramen-menu');
    img.src = 'http://localhost:3000/ramens';
    let img = document.createElement('img')
    menu.add.img
}
