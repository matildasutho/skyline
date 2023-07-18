import { useState } from "react";

export const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };
  return (
    <>
      {/* <label>
        <input defaultCheck={isToggled} onClick={callback} />
        <span>{label}</span>
      </label> */}
    </>
  );
};
