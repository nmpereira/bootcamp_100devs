//Create a mouse object that has four properties and three methods

let mouse = {
  color: "black",
  type: "gaming",
  sensor_dpi: 2500,
  sensor_type: "fast",
};
mouse.plugin = () => `${mouse.color} mouse plugged in`;
mouse.changeDpi = (x) => {
  let olddpi = mouse.sensor_dpi;
  mouse.sensor_dpi = x;
  console.log(`${olddpi}  dpi changed to ${mouse.sensor_dpi}`);
};
mouse.color = "red";

console.log(mouse);

console.log(mouse.plugin());
mouse.changeDpi(1000);
console.log(mouse);
