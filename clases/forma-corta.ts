(() => {
    
    class Avenger {        
        static avgAge: number = 0;

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string
        ) {}
    }


    const antman: Avenger = new Avenger('Antman', 'Capital', 'Scott Lang');

    // console.log(antman);

    // console.log(antman.realName);

    // Avenger.avgAge = 55;
    // console.log(Avenger.avgAge);   

})();