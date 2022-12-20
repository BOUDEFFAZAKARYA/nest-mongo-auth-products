import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


import { ProductsModule } from './products/products.module';


import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassModule } from './pass/pass.module';

import { TransportModule } from './transport/transport.module';


@Module({
  imports: [


    MongooseModule.forRoot(
      'mongodb+srv://zakarya:2813132002@cluster0.yb79teb.mongodb.net/test',
    ),
    ProductsModule,
    UserModule,
    AuthModule,
    PassModule,
    TransportModule,
  
  
  ],

 
})
export class AppModule {}
