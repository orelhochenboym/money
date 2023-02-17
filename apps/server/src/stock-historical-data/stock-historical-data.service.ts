import { Injectable } from '@nestjs/common';

import { calculateRevenueYearlyStats } from '@money-meets-value/utils';
import { GetStockHistoricalDataDto } from './dto';

@Injectable()
export class StockHistoricalDataService {
  async getHistoricalData(cik: string): Promise<GetStockHistoricalDataDto> {
    const revenueYearlyStats = await calculateRevenueYearlyStats(cik);
    return {
      ...revenueYearlyStats,
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
