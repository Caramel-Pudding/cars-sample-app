interface Mileage {
  readonly number: number;
  readonly unit: string;
}

enum FuelType {
  Petrol = "Petrol",
  Diesel = "Diesel",
}

export interface Car {
  readonly stockNumber: number;
  readonly manufacturerName: string;
  readonly modelName: string;
  readonly color: string;
  readonly mileage: Mileage;
  readonly fuelType: FuelType;
  readonly pictureUrl: string;
}

interface ManufacturerCar {
  name: string;
}
export interface Manufacturer {
  readonly name: string;
  readonly models: ManufacturerCar[];
}
