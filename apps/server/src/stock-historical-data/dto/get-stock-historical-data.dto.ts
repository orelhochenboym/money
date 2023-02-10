import { ApiProperty } from '@nestjs/swagger/dist';

export class GetStockHistoricalDataDto {
  @ApiProperty()
  revenueGrowthInPercent: {
    oneYear: number;
    fiveYear: number;
    tenTear: number;
  };

  @ApiProperty()
  profitMarginInPercent: {
    oneYear: number;
    fiveYear: number;
    tenTear: number;
  };

  @ApiProperty()
  freeCashFlowMarginInPercent: {
    oneYear: number;
    fiveYear: number;
    tenTear: number;
  };

  @ApiProperty()
  priceToEarningsHistoricalSummed: {
    oneYear: number;
    fiveYear: number;
    tenTear: number;
  };

  @ApiProperty()
  priceToFreeCashFlowHistorcalSummed: {
    oneYear: number;
    fiveYear: number;
    tenTear: number;
  };
}
