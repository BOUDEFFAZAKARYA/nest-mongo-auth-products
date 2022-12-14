import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';


import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [


    MongooseModule.forRoot(
      'mongodb+srv://zakarya:2813132002@cluster0.yb79teb.mongodb.net/test',
    ),
    ProductsModule,
    UserModule,
    AuthModule,
  
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
