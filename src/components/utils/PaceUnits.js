const paceUnits = [
  {
    name: "min/km",
    min: 1,
    max: 1200.0,
    precision: 0,
    timeBased: true,
    toSecondsPerKm: v => v,
    fromSecondsPerKm: v => v
  },
  {
    name: "min/mi",
    min: 1,
    max: 1200.0,
    precision: 0,
    timeBased: true,
    toSecondsPerKm: v => v / 1.60934,
    fromSecondsPerKm: v => v * 1.60934
  },
  {
    name: "km/h",
    min: 0.1,
    max: 60.0,
    precision: 1,
    timeBased: false,
    toSecondsPerKm: v => 3600 / v,
    fromSecondsPerKm: v => 3600 / v
  },
  {
    name: "mi/h",
    min: 0.01,
    max: 30.0,
    precision: 2,
    timeBased: false,
    toSecondsPerKm: v => 3600 / 1.60934 / v,
    fromSecondsPerKm: v => 3600 / 1.60934 / v
  },
  {
    name: "m/s",
    min: 0.01,
    max: 30,
    precision: 2,
    timeBased: false,
    toSecondsPerKm: v => 1000 / v,
    fromSecondsPerKm: v => 1000 / v
  }
];

export default paceUnits;
