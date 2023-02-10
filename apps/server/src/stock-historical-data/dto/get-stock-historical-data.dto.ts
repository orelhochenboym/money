import { ApiProperty } from '@nestjs/swagger/dist';

import { StockHistoricalDataYear } from '@money-meets-value/types';

export class GetStockHistoricalDataDto {
  @ApiProperty()
  revenueGrowthInPercent: StockHistoricalDataYear;

  @ApiProperty()
  profitMarginInPercent: StockHistoricalDataYear;

  @ApiProperty()
  freeCashFlowMarginInPercent: StockHistoricalDataYear;

  @ApiProperty()
  priceToEarningsHistoricalSummed: StockHistoricalDataYear;

  @ApiProperty()
  priceToFreeCashFlowHistorcalSummed: StockHistoricalDataYear;
}
