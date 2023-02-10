import { Module } from '@nestjs/common';

import { StockHistoricalDataModule } from '../stock-historical-data';

@Module({
  imports: [StockHistoricalDataModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
