// It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.
// areaOfPolygonInsideCircle(3, 3) // returns 11.691
// areaOfPolygonInsideCircle(5.8, 7) // returns 92.053
// areaOfPolygonInsideCircle(4, 5) // returns 38.042
function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    return Math.round((((numberOfSides * Math.pow(circleRadius, 2)) / 2) * (Math.sin((360 / numberOfSides) * (Math.PI / 180)))) * 1000) / 1000;
}

console.log(areaOfPolygonInsideCircle(4, 5));