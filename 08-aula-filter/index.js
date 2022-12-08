import { getPeople } from './StarWarsService.js'

async function main() {
    const starWarsPeople = await getPeople(1);
    // const starWarsPeopleFiltered = starWarsPeople.filter(person => person.gender === 'male');
    const starWarsPeopleFiltered = starWarsPeople
    .filter(person => {
        return person.gender === 'female';
    })
    .map((person) => { 
        return { name: person.name, gender: person.gender };
});
    console.log(starWarsPeopleFiltered);
}

main();
