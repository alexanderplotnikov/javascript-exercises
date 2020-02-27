let findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    const oldest = people.sort(function(a, b) {
        let last = a.yearOfDeath == undefined ? currentYear - a.yearOfBirth: a.yearOfDeath - a.yearOfBirth;
        let next = b.yearOfDeath == undefined ? currentYear - b.yearOfBirth: b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;        
    });
    return oldest[0];
}
module.exports = findTheOldest
