// src/attendance/entities/attendance.entity.ts
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Employee } from '../../employees/entities/employee.entity';

@Table
export class Attendance extends Model<Attendance> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  employeeId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  timeIn: Date;

  @Column({
    type: DataType.TIME,
    allowNull: true,
  })
  timeOut: Date;

  @Column({
    type: DataType.STRING,
    defaultValue: 'present',
  })
  status: string; // present, late, half-day

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  notes: string;

  @BelongsTo(() => Employee)
  employee: Employee;
}
