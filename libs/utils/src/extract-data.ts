import axios from 'axios';

import { SecResponse } from '@money-meets-value/types';

export const extractData = async (url: string, cik: string) => {
  const response: SecResponse = await axios
    .get(url.replace('###', cik))
    .then((res) => res.data);

  if (response.units.USD) {
    const filteredData = response.units.USD.filter(
      (data) => data.frame && !data.frame.includes('Q')
    );

    if (url.includes('SalesRevenueNet')) {
      return filteredData
        .filter((data) => !data.frame?.includes('2018'))
        .map((data) => data.val)
        .reverse();
    } else if (
      url.includes('RevenueFromContractWithCustomerExcludingAssessedTax')
    ) {
      return filteredData
        .filter((data) => !data.frame?.includes('2017'))
        .map((data) => data.val)
        .reverse();
    }
  }
  return [];
};
