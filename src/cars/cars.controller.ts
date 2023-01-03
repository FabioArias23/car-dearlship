/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Param,Post} from '@nestjs/common';
import { CarsService } from './cars.service';
import { get } from 'http';
import { Body, Delete, Patch, UsePipes } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes';

@Controller('cars')
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
    getCarById(@Param('id', ParseIntPipe)id: number){
        console.log({id});

       
        return this.carsService.findOneById((id))
    }
    @Post()
    createCar(@Body() body: any){
        return body;
    }
    @Patch(':id')
    updateCar(@Body() body: any){
        return body;
    }
    @Delete(':id')
    deleteCar(@Param('id',ParseIntPipe) id: number){
        return {
            method: 'delete',
            id
        }
    }
}
