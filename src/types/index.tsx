interface IOption {
  value: number;
  label: string;
}
interface ICount {
  bill: string | number;
  persons: string | number;
  tips: IOption["value"];
  total: number;
}

export type { IOption, ICount };
