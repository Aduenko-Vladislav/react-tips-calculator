import Select from "react-select";

const options = [
  { value: 0.1, label: "10%" },
  { value: 0.15, label: "15%" },
  { value: 0.2, label: "20%" },
];

interface ISelect{
 
}

const CustomSelect = ({ setTips }: any) => (
  <Select
    defaultValue={options[0]}
    options={options}
    onChange={(item) => setTips(item?.value)}
  />
);
export default CustomSelect;
