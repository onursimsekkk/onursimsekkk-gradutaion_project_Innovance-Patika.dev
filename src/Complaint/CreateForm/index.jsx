import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Button } from "react-bootstrap";
import * as yup from "yup";
import { Input } from "../../components";
import { getFirestore, setDoc, doc } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";
import { SuccessComplaint } from "./SuccessComplaint";
import "./index.css";

const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  user_id: yup
    .number()
    .test(
      "len",
      "Must be exactly 11 characters",
      (val) => val.toString().length === 11
    )
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("must be 11 characters"),
  details: yup.string().required(),
});

export const CreateForm = memo(() => {
  const [{ isSuccess, successTicketId }, setState] = useState({
    isSuccess: false,
    successTicketId: undefined,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    const db = await getFirestore();
    const ticketId = uuidv4();

    try {
      await setDoc(doc(db, "tickets", ticketId), {
        first_name: data.first_name,
        last_name: data.last_name,
        age: data.age,
        user_id: data.user_id,
        date: data.date,
        details: data.details,
        ticket_id: ticketId,
        status: false,
        answer: "",
      });

      setState((state) => ({
        ...state,
        isSuccess: true,
        successTicketId: ticketId,
      }));
    } catch (e) {
      console.error("errorRequest Firebase:", e);
    }

    reset();
  };

  const closePopup = () => {
    setState((state) => ({ ...state, isSuccess: false }));
  };

  return (
    <>
      <div className="p-5 container-complaint d-flex justify-content-center">
        <Card className="text-center">
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <h2 className="mb-4">Create Complaint</h2>

              <Input
                {...register("first_name")}
                placeholder="First Name"
                error={errors.first_name}
                className="d-flex justify-content-center mb-3"
              />
              <Input
                {...register("last_name")}
                placeholder="Last Name"
                error={errors.last_name}
                className="d-flex justify-content-center mb-3"
              />
              <Input
                {...register("age")}
                placeholder="Your Age"
                error={errors.age}
                className="d-flex justify-content-center mb-3"
              />
              <Input
                {...register("user_id")}
                placeholder="ID Number"
                maxLength="11"
                error={errors.user_id}
                className="d-flex justify-content-center mb-3"
              />
              <Input
                {...register("date")}
                type="date"
                error={errors.date}
                className="d-flex justify-content-center mb-3"
              />
              <input
                type="file"
                {...register("file")}
                className="d-flex justify-content-center"
              />
              <div className="mb-2">
                <textarea
                  {...register("details")}
                  placeholder="Details"
                  error={errors.details}
                  className="details-textarea"
                />
                {errors.details && (
                  <p className="text-danger">{errors.details.message}</p>
                )}
              </div>
              <Button className="btn btn-primary" type="submit">
                Create
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
      {isSuccess && (
        <SuccessComplaint
          successTicketId={successTicketId}
          closePopup={closePopup}
        />
      )}
    </>
  );
});
