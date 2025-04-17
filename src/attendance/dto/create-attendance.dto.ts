// src/attendance/dto/create-attendance.dto.ts
import { IsDate, IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAttendanceDto {
  @IsNotEmpty()
  @IsInt()
  employeeId: number;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  timeIn: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  timeOut?: Date;

  @IsOptional()
  @IsString()
  @IsIn(['present', 'late', 'half-day'])
  status?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}