import Select from "react-select";
import { IOption } from "../../../../types";

const options: IOption[] = [
  { value: 0.1, label: "10%" },
  { value: 0.15, label: "15%" },
  { value: 0.2, label: "20%" },
];

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: state.selectProps.width,
    color: state.selectProps.menuColor,
    padding: 20,
    borderRadius: 30,
    border: "none",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    fontSize: 18,
    textAlign: "center",
    color: "rgba(117, 108, 108, 1)",
  }),

  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  indicatorContainer:(provided:any) =>({
    ...provided,
    color: "rgba(117, 108, 108, 1)"
  }),
};

const CustomSelect = ({ setTips }: any) => (
  <Select
    defaultValue={options[0]}
    options={options}
    onChange={(item) => setTips(item?.value)}
    styles={customStyles}
  />
);
export default CustomSelect;
