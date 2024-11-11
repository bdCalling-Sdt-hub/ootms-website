import { Select } from "antd";
const options = [
  {
    label: "gold",
    value: "gold",
  },
  {
    label: "lime",
    value: "lime",
  },
  {
    label: "green",
    value: "green",
  },
  {
    label: "cyan",
    value: "cyan",
  },
];
const labelRender = (props) => {
  const { label, value } = props;
  if (label) {
    return value;
  }
  return <span>No option match</span>;
};
const Select = () => (
  <Select
    labelRender={labelRender}
    defaultValue="1"
    style={{
      width: "100%",
    }}
    options={options}
  />
);
export default Select;
