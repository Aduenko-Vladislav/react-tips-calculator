export interface IOption {
  value: number
  label: string;
}

export interface ICount {
  bill: string | number;
  persons: string | number;
  tips: IOption["value"];
  total: number;
}
