import { TextInputCompTypes } from "@/app/types";

const TextInputWithLabel = ({
  string,
  inputType,
  placeholder,
  error,
  label,
  isDisabled = false,
  onUpdate,
}: TextInputCompTypes) => (
  <div className="flex flex-col items-start md:flex-row md:items-center md:justify-start w-full">
    <label className="text-base w-full md:w-1/5">{label}:</label>
    <div className="w-full md:w-4/5 ">
      <input
        placeholder={placeholder}
        disabled={isDisabled}
        className="
                block
                w-full
                bg-[#F1F1F2]
                text-gray-800
                border
                border-gray-300
                rounded-md
                py-2.5
                px-3
                focus:outline-none
            "
        value={string || ""}
        onChange={(event) => onUpdate(event.target.value)}
        type={inputType}
        autoComplete="off"
      />

      <div className="text-red-500 text-[14px] font-semibold">
        {error ? error : null}
      </div>
    </div>
  </div>
);

export default TextInputWithLabel;
