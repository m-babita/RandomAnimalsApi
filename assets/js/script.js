//selectors
let cat = document.querySelector('.cat'),
    dog = document.querySelector('.dog'),
    catBreed = document.querySelector('.select__cat'),
    dogBreed = document.querySelector('.select__dog');
    // random = Math.floor(Math.random() * 100)+1;

//event listeners

catBreed.addEventListener('click',getCat)
dogBreed.addEventListener('click',getDog)

//functions

async function getCat(){
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    cat.src = `${data[0].url}`;
}
async function getDog(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    dog.src = `${data.message}`;
}

// async function getDogData(){
//     const response = await fetch("https://dog.ceo/api/breeds/list/all")
//     const data = await response.json()
//     createDogList(data.message)
// }
// getDogData();
// function createDogList(breedList){
//     dogBreed.innerHTML = `
//     <select onChange="loadDogBreed(this.value)">
//         <option>Select a Dog Breed<option>
//         ${Object.keys(breedList).map(breed=>`<option>${breed}</option>`)}
//     </select>
//     `;
// }

// async function loadDogBreed(breed){
//     if(breed != "Select a Dog Breed"){
//         const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
//         const data = await response.json()
//         dog.src=`${data.message[random]}`;
//     }
// }


