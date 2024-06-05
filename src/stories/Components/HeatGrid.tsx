//Rounds num to nearest  100th
function roundnum(num: number) {
  const toReturn = Math.round(num / 100) * 100;
  if (toReturn === 0) {
    return 100;
  }
  if (toReturn === 1000) {
    return 900;
  }
  return toReturn;
}

//converts temp (0-100) to number Color value(100-900)
function calcColor(temp: number) {
  return roundnum(Math.trunc((temp * 950) / 100));
}

//creates a set of 35 random nums from 0 to 100
var temps: number[];
temps = [];
while (temps.length < 35) {
  var r = Math.floor(Math.random() * 100) + 1;
  if (temps.indexOf(r) === -1) temps.push(r);
}

export function HeatGrid() {
  const newTemps = temps.map((temp) => calcColor(temp));
  console.log(newTemps);
  return (
    <div className="grid grid-cols-7 grid-rows-5">
      {newTemps.map((temp) => (
        <div
          className={"m-5 p-5 text-center h-20 w-20 bg-indigo-" + temp}
        ></div>
      ))}
    </div>
  );
}

//<div className="m-5 p-5 text-center h-20 w-20 bg-indigo-600"></div>
