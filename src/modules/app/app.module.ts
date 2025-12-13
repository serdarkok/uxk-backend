import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { LocationModule } from '../location/location.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT ?? '5432'),
      dialect: 'postgres',
      autoLoadModels: true,
      synchronize: true,
      logging: false,

    }),
    LocationModule,
    CategoryModule,
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
