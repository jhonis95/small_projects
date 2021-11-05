const jokeEl=document.getElementById('joke');
const jokeBtn=document.getElementById('jokeBtn');

jokeBtn.addEventListener('click',generateJoke)
//asynchronous way
generateJoke()
async function generateJoke(){
    const confg={
        headers:{
            'Accept':'application/json'
        } 
    }
    const res =await fetch('https://icanhazdadjoke.com',confg)//when you use await the function have to be async
    const data =await res.json()
    jokeEl.innerHTML=data.joke
}
//synchronous way
// generateJoke()
// function generateJoke(){
//     const confg={
//         headers:{
//             'Accept':'application/json'
//         } 
//     }
//     fetch('https://icanhazdadjoke.com',confg)
//         .then((res)=>res.json())//allow this code running while have something else happening
//         .then((data)=>{
//             jokeEl.innerHTML=data.joke;
//         })
// }