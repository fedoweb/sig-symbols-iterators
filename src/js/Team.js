export default class Team {
    constructor() {
        this.members = new Set();
    }

    /*
    add(character) {
        if(this.members.has(character)) {
            throw new Error("Персонаж уже в команде");
        }

        this.members.add(character);
    }
    */

    addAll(...characters) {
        characters.forEach(character => this.members.add(character));
    }

    toArray() {
        return Array.from(this.members);
    }

    [Symbol.iterator]() {
        let team = this.toArray();
        let current = 0;
        return {
            next: () => {
                if (current < team.length) {
                    let result = team[current];
                    current++;
                    return {value: result, done: false};
                }

            return {value: undefined, done: true};
            }
        };
    }
}