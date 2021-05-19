export interface Car {
  readonly name: string;
}

export interface Manufacturer {
  readonly name: string;
  readonly models: Car[];
}
