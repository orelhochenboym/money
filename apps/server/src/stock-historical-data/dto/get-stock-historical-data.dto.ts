import { ApiProperty } from '@nestjs/swagger/dist';

import { YearlyStats } from '@money-meets-value/types';

export class GetStockHistoricalDataDto {
  @ApiProperty()
  revenueGrowthInPercent: YearlyStats;

  @ApiProperty()
  profitMarginInPercent: YearlyStats;

  @ApiProperty()
  freeCashFlowMarginInPercent: YearlyStats;

  @ApiProperty()
  priceToEarningsHistoricalSummed: YearlyStats;

  @ApiProperty()
  priceToFreeCashFlowHistorcalSummed: YearlyStats;
}
