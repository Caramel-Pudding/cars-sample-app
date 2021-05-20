import { GetCarsResponse } from "../network/gateways/get-all";
// eslint-disable sonarjs/no-duplicate-string
export const getCarsResponseStub: GetCarsResponse = {
  cars: [
    {
      stockNumber: 63_428,
      manufacturerName: "Mercedes-Benz",
      modelName: "CLC-Klasse",
      color: "yellow",
      mileage: {
        number: 100_049,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 44_298,
      manufacturerName: "Chrysler",
      modelName: "Saratoga",
      color: "green",
      mileage: {
        number: 100_133,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 20_458,
      manufacturerName: "Chrysler",
      modelName: "Crossfire",
      color: "white",
      mileage: {
        number: 100_206,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 49_056,
      manufacturerName: "BMW",
      modelName: "X4",
      color: "blue",
      mileage: {
        number: 100_237,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 53_044,
      manufacturerName: "Chrysler",
      modelName: "300 M",
      color: "red",
      mileage: {
        number: 100_368,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 16_023,
      manufacturerName: "BMW",
      modelName: "i3",
      color: "black",
      mileage: {
        number: 100_476,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 53_646,
      manufacturerName: "Tesla",
      modelName: "Model S",
      color: "green",
      mileage: {
        number: 100_625,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 88_398,
      manufacturerName: "Skoda",
      modelName: "Roomster",
      color: "white",
      mileage: {
        number: 100_730,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 17_352,
      manufacturerName: "Mercedes-Benz",
      modelName: "SL-Klasse",
      color: "green",
      mileage: {
        number: 100_736,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 23_343,
      manufacturerName: "Tesla",
      modelName: "Roadster",
      color: "green",
      mileage: {
        number: 100_759,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
  ],
  totalPageCount: 100,
  totalCarsCount: 1000,
} as GetCarsResponse;
// eslint-enable
