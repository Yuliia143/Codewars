function ageInDays(year, month, day) {
    let now = new Date();
    now.setHours(0, 0, 0, 0);
    let br = new Date(year, month - 1, day);
    return `You are ${(now - br) / 86400000} days old`;
}

console.log(ageInDays(2015, 11, 1));