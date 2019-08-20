// Test Passed: Value == 'Clint Eastwood'
// No Last Name
// Test Passed: Value == 'Clint' without space after firstName
// No First Name
// Test Passed: Value == 'Eastwood' without space before lastName
class Dinglemouse{
    constructor( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return (this.firstName+" "+this.lastName).trim();
    }

}
console.log(new Dinglemouse("Clint", "Eastwood").getFullName());
console.log(new Dinglemouse("Clint").getFullName());
console.log(new Dinglemouse("Eastwood").getFullName());