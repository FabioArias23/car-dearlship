/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

export class Car {
  id: number;
  brand: string;
  model: string;
}

@Injectable()
export class CarsService {
  private readonly cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findOneById(id: number): Car {
    const car = this.cars.find((car) => car.id === id);
    if(!car){
        throw new NotFoundException(`car with id ${id} not found/ tu id no se encontro`)
    } return car
  }

  findAll() {
    return this.cars;
  }
}
