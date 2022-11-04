// la programacion asincrona se hace con promesas

// fetch => asincrona => cuando tenga el resultado, se ejecuta el then
//const suma = async (a:number, b:number): Promise<number> => a+b;

//suma(3,4).then((v) => console.log(v));
//console.log("hola"); // lo ultimo que hace es comprobar si se ha resuelto alguna promesa

const getCharacter = async (page:number): Promise<any> => {
    const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    return await data.json();
}

getCharacter(1).then(data=>console.log(data.results[0].name));
getCharacter(2).then(data=>console.log(data.results[0].name));

const promesa1 = getCharacter(1);
const promesa2 = getCharacter(2);
const promesa3 = getCharacter(3);

Promise.all([promesa1, promesa2, promesa3]).then((values) =>{
    console.log(values[0].results[0].name);
    console.log(values[1].results[0].name);
    console.log(values[2].results[0].name);
    console.log("hola");
})


// array de numeros

const paginas:number[] = []
for (let i = 0; i<=42; i++){
    paginas.push(i);
}

const misPromesasGuays = paginas.map((page) => getCharacter(page));

Promise.all(misPromesasGuays).then((values) => {
    values.forEach((value) => console.log(value.results[0].name));
    console.log("hola");
})


const values = await Promise.all(misPromesasGuays);
values.forEach((value) => console.log(values[0].results[0].name));
console.log("hola");



export { };

