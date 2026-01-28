type OptionItem = string | { label: string; value: string };
interface Label {
  htmlFor: string;
  labelName: string;
}
interface Select {
  id: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
  required?: boolean;
}

interface Option {
  optionItems: OptionItem[]
}

interface SelectorProps {
  label: Label;
  select: Select;
  option: Option
}

function SelectInput({ label, select, option }: SelectorProps) {
  return (
    <section className="flex flex-col">
      <label
        htmlFor={label.htmlFor}
        className="text-md text-bluewhale font-semibold"
      >
        {label.labelName}
      </label>
      <select
        id={select.id}
        name={select.name}
        value={select.value}
        onChange={select.onChange}
        className="p-3 font-figtree border-2 border-gray-300 outline-gray-300 rounded-lg focus:outline-3"
      >
        {option.optionItems.map((item) => {
          if (typeof item === "string") {
            return (
              <option key={item} value={item }>
                {item}
              </option>
            );
          } 
          else if ("value" in item && "label" in item) {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          }
        })}
      </select>
    </section>
  );
}

export default SelectInput;