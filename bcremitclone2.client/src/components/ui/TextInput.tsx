interface Label {
  htmlFor: string;
  labelName: string;
}
interface Input {
  type: "text" | "password" | "number";
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean
}
interface FormProps {
  label: Label;
  input: Input;
}

function TextInput({ label, input }: FormProps) {
  return (
    <section className="flex flex-col">
      <label
        htmlFor={label.htmlFor}
        className="text-md text-bluewhale font-semibold"
      >
        {label.labelName}
      </label>
      <input
        id={input.id}
        name={input.name}
        type={input.type}
        value={input.value}
        onChange={input.onChange || (() => { })}
        placeholder={input.placeholder}
        required={input.required}
        autoComplete="off"
        className="font-figtree border-2 p-3 border-gray-300 outline-gray-300 rounded-lg focus:outline-3"
      />
    </section>
  );
}

export default TextInput;