export interface IProduct {
    id?:number;
    url: string;
    title: string;
    typeOfMeasurement: string;
    amount: number;
    barcode: number;
    manufacturer: string;
    brand: string;
    description: string;
    price:{
      sum: number;
      typeOfCurrency: string;
    };
    keywords: string[]
  }
