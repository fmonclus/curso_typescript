(() => {

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activos: boolean,
        poder: number
    }        

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500.123456
    }

    // const { poder, vision } = avengers;
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvengers = ({ ironman, ...resto }: Avengers ):void => {
        console.log( ironman, resto );
        return;
    }

    // printAvengers( avengers );

    // desestructurando arrays
    const avengersArr: string[] = [ 'Capital America', 'Iroman', 'Hulk' ];
    const [, iroman] = avengersArr;
    // console.log( iroman );

    // desestructurando arrays
    const avengersTuple: [string, boolean, number] = [ 'Capital America', true, 150.15 ];
    const [, , esUnNumero] = avengersTuple;
    // console.log( esUnNumero );
})();