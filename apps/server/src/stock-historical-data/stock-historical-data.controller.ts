import { Controller, Get, Param } from '@nestjs/common';

import { GetStockHistoricalDataDto } from './dto';
import { StockHistoricalDataService } from './stock-historical-data.service';

@Controller('get-stock-historical-data')
export class StockHistoricalDataController {
  constructor(
    private readonly stockHistoricalDataService: StockHistoricalDataService
  ) {}

  @Get(':cik')
  getStockHistoricalData(@Param('cik') cik: string): GetStockHistoricalDataDto {
    return this.stockHistoricalDataService.getHistoricalData(cik);
  }
}
