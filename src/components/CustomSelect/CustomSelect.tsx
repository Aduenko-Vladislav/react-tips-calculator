import Select, { StylesConfig } from "react-select";
import { IOption } from "../../types";

const options: IOption[] = [
  { value: 0.1, label: "10%" },
  { value: 0.15, label: "15%" },
  { value: 0.2, label: "20%" },
];
interface ICustomSelect {
  name: string;
  handleCustomSelect: (option: IOption | null) => void;
  value: number
}

export const CustomSelect = ({
  handleCustomSelect,
  value,
  name,
}: ICustomSelect) => {
  const customStyles: StylesConfig<IOption> = {
    control: (provided) => ({
      ...provided,
      padding: 20,
      borderRadius: 30,
      border: "none",
      display: "grid",
      gridTemplateColumns: "97% 3%",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0"
    }),

    singleValue: (provided) => ({
      ...provided,
      fontSize: 18,
      textAlign: "center",
      color: "rgba(117, 108, 108, 1)",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),

    indicatorsContainer: (provided) => ({
      ...provided,
      color: "rgba(117, 108, 108, 1)",
      padding: "0"
    }),
  };
  return (
    <Select
      name={name}
      options={options}
      onChange={handleCustomSelect}
      styles={customStyles}
      value={options.find((item) => item.value === value)}
      defaultValue={options[0]}
      isMulti={false}
    />
  );
};
export default CustomSelect;
