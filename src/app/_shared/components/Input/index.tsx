import clsx from "clsx/lite";
import { Checkbox } from "./Checkbox";
import { InputProps } from "./types";

export const Input = (props: InputProps) => {
  const {
    label,
    name,
    type = "text",
    placeholder,
    className,
    labelClassName,
  } = props;

  if (type === "checkbox") {
    return <Checkbox {...props} />;
  }

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      {label && (
        <label
          className={clsx(
            "block mb-2 text-sm dark:text-white text-taupe-200",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        className={clsx(
          "w-full rounded-heavy bg-transparent dark:placeholder:text-timberwolf-500 text-taupe-200 bg-timberwolf dark:text-white text-sm border border-slate-200 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow",
          className
        )}
        placeholder={placeholder}
      />
    </div>
  );
};
