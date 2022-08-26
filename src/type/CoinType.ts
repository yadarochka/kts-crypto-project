export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: any;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_data: {
    current_price: {
      usd: number;
    };
    price_change_24h_in_currency: {
      usd: number;
    };
    price_change_percentage_24h: number;
  };
};
