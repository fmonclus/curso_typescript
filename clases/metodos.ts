(() => {
    
    class Avenger {        
        static avgAge: number = 0;
        static getAvgAge() { 
            return this.avgAge;
        }

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string
        ) {}

        public bio(): string {
            return `${ this.name } + (${ this.team})`
        }
    }


    const antman: Avenger = new Avenger('Antman', 'Capital', 'Scott Lang');

    /// Solo se puede acceder a este metodo estatico llamando a la clase
    Avenger.avgAge = 55;
    console.log(Avenger.getAvgAge());

    /// llama al metodo publico
    console.log(antman.bio());
})();