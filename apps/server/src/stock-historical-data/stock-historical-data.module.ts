import { Module } from '@nestjs/common';
import { StockHistoricalDataController } from './stock-historical-data.controller';
import { StockHistoricalDataService } from './stock-historical-data.service';

@Module({
  imports: [],
  controllers: [StockHistoricalDataController],
  providers: [StockHistoricalDataService],
  exports: [],
})
export class StockHistoricalDataModule {}
