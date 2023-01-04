import { IsString, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateCardDto{
    @IsString({message: 'the brand most be a cool string'})
    readonly brand:string;
    @IsString()
    @MinLength(3)
    readonly model:string;
    
}