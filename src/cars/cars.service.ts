/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';
import { CreateCardDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Injectable()
export class CarsService {
  private cars: Car[] = [
    //{
     // id: uuid(),
      //brand: 'Toyota',
      //model: 'Corolla',
    //},
  ];

  findOneById(id: string): Car {
    const car = this.cars.find((car) => car.id === id);
    if(!car){
        throw new NotFoundException(`car with id ${id} not found/ tu id no se encontro`)
    } return car
  }

  findAll() {
    return this.cars;
  }
  create( createCardDto: CreateCardDto){
   const car: Car = {
     id: uuid(),
    ...createCardDto
   }
   this.cars.push(car)
    return car;
  }
  update( id: string, updateCarDto: UpdateCarDto ) {

    let carDB = this.findOneById( id );
   if(updateCarDto.id && updateCarDto.id !== id )
   throw new BadRequestException(`car id is not valid inside body`)
    this.cars = this.cars.map( car => {

        if ( car.id === id ) {
            carDB = { ...carDB,...updateCarDto, id }
            return carDB;
        }

        return car;
    })
    
    return carDB;
}
delete( id: string ) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const car = this.findOneById( id );
  this.cars = this.cars.filter( car => car.id !== id );
  
}
fillCarsWithSeedData(cars: Car[] ){
this.cars = cars

}
}
