/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
import { ProductsService } from './products.service';
export declare const storage: {
    storage: import("multer").StorageEngine;
};
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): Promise<{
        id: string;
    }>;
    uploadFile(prodTitle: string, prodDesc: string, prodPrice: number, req: any): Promise<{
        prodTitle: string;
    }>;
    getAllProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getProduct(prodId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number, prodImage: string): Promise<any>;
    removeProduct(prodId: string): Promise<any>;
    getFile(): StreamableFile;
}
