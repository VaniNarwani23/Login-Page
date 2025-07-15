import { useState } from "react";

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePassword = () => {
    setIsPasswordShown((prev) => !prev);
  };

  return (
    <div className="input-wrapper">
      <input
        type={type === "password" && isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        required
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === "password" && (
        <i
          className="material-symbols-rounded eye-icon"
          onClick={togglePassword}
          style={{ cursor: "pointer" }}
        >
          {isPasswordShown ? "visibility" : "visibility_off"}
        </i>
      )}
    </div>
  );
};

export default InputField;
