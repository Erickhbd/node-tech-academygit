import { getPeople } from './StarWarsService.js'

async function main() {
    const starWarsPeople = await getPeople(1);
    // for(let i=0; i<starWarsPeople.length; i++)                for
    // console.log(starWarsPeople[i].name);

    // for(let propPerson in starWarsPeople[0]) {
    //     console.log(starWarsPeople[0] [propPerson]);          for in
    // }

    for(let person of starWarsPeople) {
        console.log(person.name);    //                          for of
    }
}

main();