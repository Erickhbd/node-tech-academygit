import fetch from 'node-fetch';

async function  main() {
    const user = 'Erickhbd';
    const user2 = 'rprrafa';
    const apiUrl = 'https://api.github.com';
    // fetch(`${apiUrl}/users/${user}`)
    //     .then((response) => {
    //         return response.json();
    //     }).then((user) => {
    //         console.log(user);
    //     })
    // const response = await fetch(`${apiUrl}/users/${user}`); //paralelismo
    // const response2 = await fetch(`${apiUrl}/users/${user2}`); refatorar

    const promise = fetch(`${apiUrl}/users/${user}`);
    const promise2 = fetch(`${apiUrl}/users/${user2}`);

    const promises = await Promise.all([promise,promise2]);

    const githubUser = await promises[0].json();
    const githubUser2 = await promises[1].json();

    // const githubUser = await response.json();
    // const githubUser2 = await response2.json();
        console.log(`Erick ID: ${githubUser.id}`);
        console.log(`Rafa ID: ${githubUser2.id}`);
    // console.log(githubUser);
}

main();