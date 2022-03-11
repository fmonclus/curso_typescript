(() => {

    type Avenger = {
        name: string,
        weapon: string
    }

    const iroman: Avenger = {
        name: 'Iroman',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ iroman, captainAmerica, thor];

    // es un forEach de c#
    for (const iterator of avengers) {
        console.log( `${ iterator.name } - ${ iterator.weapon }`);         
    }

})()