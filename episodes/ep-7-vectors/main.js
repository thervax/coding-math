let v1 = new Vector(10, 5);

console.log(v1.getAngle());
console.log(v1.getLength());

v1.setAngle(Math.PI / 6);
v1.setLength(100);

v1.print();

let v2 = new Vector(10, 5);
let v3 = new Vector(5, 2.5);
let v4 = v2.subtract(v3);

v4.print();
