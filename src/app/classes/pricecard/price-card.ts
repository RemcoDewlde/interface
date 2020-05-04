export class PriceCard {
  // tslint:disable-next-line:variable-name
  _id: string;
  Name: string;
  productPrice: string;
  status: string;
  sellingPoints: SellingPoint[];
  sale: boolean;
  salePrice: string;
  marge: boolean;
}

export class SellingPoint {
  nameSellingPoint: string;
  valueSellingPoint: string;
}
