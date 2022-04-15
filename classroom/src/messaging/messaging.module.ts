import { Module } from '@nestjs/common';
import { PurchaseController } from './controller/purchases.controller';

@Module({ controllers: [PurchaseController] })
export class MessagingModule {}
