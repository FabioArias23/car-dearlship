/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Param,Post} from '@nestjs/common';
import { CarsService } from './cars.service';
import { get } from 'http';
import { Body, Delete, Patch, UsePipes } from '@nestjs/common/decorators';
import { ParseIntPipe, ParseUUIDPipe, ValidationPipe } from '@nestjs/common/pipes';
import { CreateCardDto,UpdateCarDto } from './dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {
// eslint-disable-next-line prettier/prettier

     constructor(
        private readonly carsService: CarsService
    ){}
    @Get()
    getAllCars(){
        return this.carsService.findAll()
    }
    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string){
        console.log({id});

       
        return this.carsService.findOneById((id))
    }
    @Post()
 
    createCar(@Body() createCardDto: CreateCardDto){
       return this.carsService.create( createCardDto)
    }
    @Patch(':id')
    updateCar(
        @Param( 'id',ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto )
        {
        return this.carsService.update(id,updateCarDto);
        }
    @Delete(':id')
    deleteCar(@Param('id',ParseUUIDPipe) id: string){
        return this.carsService.delete( id)
    }
}
