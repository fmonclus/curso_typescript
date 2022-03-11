"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Que se yo');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('EL nombre debe de ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullname());
        }
    }
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 0;
    const antman = new Avenger('Antman', 'Capital', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.avgAge;
        }
        bio() {
            return `${this.name} + (${this.team})`;
        }
    }
    Avenger.avgAge = 0;
    const antman = new Avenger('Antman', 'Capital', 'Scott Lang');
    Avenger.avgAge = 55;
    console.log(Avenger.getAvgAge());
    console.log(antman.bio());
})();
//# sourceMappingURL=main.js.map