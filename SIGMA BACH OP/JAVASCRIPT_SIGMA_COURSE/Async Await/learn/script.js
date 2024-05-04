// const URL = "https://cat-fact.herokuapp.com/facts"
// const getData = async ()=>{
//     console.log("Data pending...")
//     const response =await fetch(URL)
//     console.log(response)
//     console.log("Data is transfer success fully")
// }
// getData()
let random = parseInt(Math.random()*5)
console.log(random)
const p = document.querySelector('p')
const btn = document.querySelector('button')
const URL = "https://cat-fact.herokuapp.com/facts";
const getData = async ()=>{
    const response =await fetch(URL)
    const data = await response.json();
    console.log(data)
    p.innerHTML = data[random].text
}
btn.addEventListener('click',getData)
