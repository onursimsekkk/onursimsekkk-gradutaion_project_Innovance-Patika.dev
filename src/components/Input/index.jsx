import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <div className={props.className ? props.className : "mb-1"}>
      <input ref={ref} {...props} className="form-control p-2" type={props.type} />
      <br />
      {props.error && <p className="text-danger">{props.error.message}</p>}
    </div>
  );
});