// var namedOne = new NamedOne("Naomi","Wang")
// namedOne.firstName // -> "Naomi"
// namedOne.lastName  // -> "Wang"
// namedOne.fullName  // -> "Naomi Wang"
class NamedOne{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(newValue) {
        if(newValue.split(' ').length > 1){
            [this.firstName, this.lastName] = newValue.split(' ');
        }
    }
}