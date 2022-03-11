(() => {

    class Avenger {
        name;
        power;

        constructor(name = '', power = 0) {
            this.name = name;
            this.power = power;            
        }
    }

    class FlyingAvenger extends Avenger {
        flying;

        constructor(name = '', power = 0, flying = false) {
            super(name, power);
            this.flying = flying;          
        }
    }

    const hulk = new Avenger('Hulk', 9000);
    const falcon = new FlyingAvenger('Falcon', 150, true);

    console.log(hulk);
    console.log(falcon);

})();