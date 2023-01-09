/* eslint-disable prettier/prettier */
import {Car } from './../../cars/interfaces/car.interface'
import { v4 as uuid } from 'uuid';


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corola'
    },
    {
        id: uuid(),
        brand: 'honda',
        model: 'civic'
    },
    {
        id: uuid(),
        brand: 'fiat',
        model: '1'
    },
];

