import { calculateCagr } from './cagr';
import { extractData } from './extract-data';
import { urls } from './urls';

export const getRevenue = async (cik: string) => {
  const revenueOld = await extractData(urls.revenueOld, cik);
  const revenueNew = await extractData(urls.revenueNew, cik);
  return revenueNew.concat(revenueOld);
};

export const calculateRevenueYearlyStats = async (cik: string) => {
  const revenue = await getRevenue(cik);
  return {
    revenueGrowthInPercent: {
      oneYear: calculateCagr(revenue[0], revenue[1], 1),
      fiveYear: calculateCagr(revenue[0], revenue[4], 5),
      tenTear: calculateCagr(revenue[0], revenue[9], 10),
    },
  };
};
