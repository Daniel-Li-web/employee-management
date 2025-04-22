// test add ing text
// another text

// import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { EmployeesModule } from '../../employees/employees.module';
// import { Employee } from '../../employees/employee.entity';
// import { EmployeesModule } from './employees/employees.module';
// import { AttendanceModule } from './attendance/attendance.module';
// import { LeaveRequestsModule } from './leave-requests/leave-requests.module';
// import { SalariesModule } from './salaries/salaries.module';
// import { ApprovalsModule } from './approvals/approvals.module';

// @Module({
//   imports: [
//     SequelizeModule.forRoot({
//       dialect: 'postgres',  // Change to 'mysql' if needed
//       host: process.env.DB_HOST || 'localhost',
//       port: Number(process.env.DB_PORT) || 5432,
//       username: process.env.DB_USER || 'postgres',
//       password: process.env.DB_PASSWORD || '6730613044',
//       database: process.env.DB_DATABASE || 'employee',
//       synchronize: true, // Set to false in production
//       models: [Employee],
//       autoLoadModels: true,
//       sync: { alter: true },
//     }),
//     SequelizeModule.forFeature([Employee]), // Register Employee model
//     EmployeesModule, AttendanceModule, LeaveRequestsModule, SalariesModule, ApprovalsModule,
//   ],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from './employees/employees.module';
import { AttendanceModule } from './attendance/attendance.module';
import { LeaveRequestsModule } from './leave-requests/leave-requests.module';
import { SalariesModule } from './salaries/salaries.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '6730613044',
      database: process.env.DB_DATABASE || 'employee',
      autoLoadModels: true,
      synchronize: true, // Set to false in production
    }),
    EmployeesModule,
    AttendanceModule,
    LeaveRequestsModule,
    SalariesModule,
  ],
})
export class AppModule {}
