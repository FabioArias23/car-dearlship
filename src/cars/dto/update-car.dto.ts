import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class UpdateCarDto{
    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string;
    
    @IsString()
    @IsOptional()
    readonly brand?:string;
    @IsString()
    @IsOptional()
    readonly model?:string;
    
}