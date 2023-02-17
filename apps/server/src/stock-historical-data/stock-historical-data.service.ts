import { Injectable } from '@nestjs/common';
import { GetStockHistoricalDataDto } from './dto';

@Injectable()
export class StockHistoricalDataService {
  getHistoricalData(cik: string): GetStockHistoricalDataDto {
    return {
      revenueGrowthInPercent: {
        oneYear: 1.0,
        fiveYear: 1.0,
        tenTear: 1.0,
      },
      profitMarginInPercent: {
        oneYear: 1.0,
        fiveYear: 1.0,
        tenTear: 1.0,
      },
      freeCashFlowMarginInPercent: {
        oneYear: 1.0,
        fiveYear: 1.0,
        tenTear: 1.0,
      },
      priceToEarningsHistoricalSummed: {
        oneYear: 1.0,
        fiveYear: 1.0,
        tenTear: 1.0,
      },
      priceToFreeCashFlowHistorcalSummed: {
        oneYear: 1.0,
        fiveYear: 1.0,
        tenTear: 1.0,
      },
    };
  }
}
