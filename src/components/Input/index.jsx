import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <div className={props.className ? props.className : "mb-3"}>
      <input ref={ref} {...props} className="p-1" type={props.type} />
      <br />
      {props.error && <p className="text-danger">{props.error.message}</p>}
    </div>
  );
});