for (let i = 0; i < 6; i++) {
    console.log(i);
    
}
let obj = {
    name: 'John',
    age: 25,
    city: 'New York',
    country: 'USA', 
    occupation: 'Developer',
    skills: ['HTML', 'CSS', 'JavaScript'],
    languages: ['English', 'Spanish', 'French'],
    hobbies: ['Sports', 'Cooking', 'Reading']
}
for (const key in obj) {
    const element = obj[key];
    console.log(key,element);   
}
for (const c of "Yousuf") {
    console.log(c);
    
}
let i = "harry";
while (i.length < 10) {
    console.log(i.length);
    i++
}
