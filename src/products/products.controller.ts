import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
  UseInterceptors, UploadedFile, Request, StreamableFile
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';







import {
  ApiBearerAuth,

} from '@nestjs/swagger';

import path = require('path');
import { Product } from './product.model';
import { SampleDto } from './dtos/sampleDto';
import { join } from 'path';
import { createReadStream } from 'fs';



export const storage = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  })
};



@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }





  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }


  @UseInterceptors(FileInterceptor('file', storage))
  @Post('upload')
  async uploadFile(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
    //@Body('image') image: string,

   // @UploadedFile() file,
    @Request() req ,

  ) {

    
   // console.log(file);


    const product: Product = req.product;



    return {
      prodTitle,
      
      
    };
  }





  @UseGuards(JwtAuthGuard)



  @ApiBearerAuth()

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getProducts();
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
    @Body('price') prodImage: string,

  ) {
    await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice, prodImage);
    return null;
  }

  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
    await this.productsService.deleteProduct(prodId);
    return null;
  }





  @Get('imges')
  getFile() {
    const file = createReadStream(join(process.cwd(), 'uploads'));
    return new StreamableFile(file);

  }



}


