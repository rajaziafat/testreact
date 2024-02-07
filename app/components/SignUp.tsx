import { eye, eyeCross } from "@/app/components/SVG";
import useAuth from "@/lib/hooks/useAuth";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

export default function SignUp({
  setModal,
  setLogged
}: {
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
  setLogged: Dispatch<SetStateAction<boolean>>;
}) {
  const [isShown, setIsShown] = useState(false);
  const {form, setForm, register} = useAuth({ setLogged });

  const updateForm = (data: any) => {
    setForm((form) => ({ ...form, ...data }));
  };

  return (
    <div className="modal__form">
      <h2>Sign Up</h2>
      <div className="input__outer">
        <label htmlFor="">Your e-mail address</label>
        <div className="input ">
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => updateForm({ email: e.target.value })}
            value={form.email}
          />
        </div>
      </div>
      <div className="input__outer">
        <label htmlFor="">Your username</label>
        <div className="input ">
          <input
            type="text"
            placeholder="Your Username"
            onChange={(e) => updateForm({ username: e.target.value })}
            value={form.username}
          />
        </div>
      </div>
      <div className="input__outer">
        <label htmlFor="">Your password</label>
        <div className="input input--password">
          <input
            type={isShown ? "text" : "password"}
            placeholder="Your Password"
            onChange={(e) => updateForm({ password: e.target.value })}
            value={form.password}
          />
          <span onClick={() => setIsShown(!isShown)}>
            {isShown ? eyeCross : eye}
          </span>
        </div>
      </div>
      <div className="modal__form-btn">
        <button
          type="button"
          onClick={() => {
            register();
            setModal(null);
            toast("You are signed up successfully!");
          }}
          disabled={form.username === "" || form.password === "" || form.email === ""}
          className="button light"
        >
          Sign Up
        </button>
      </div>

      <p className="med">
        Already have an account?{" "}
        <button onClick={() => setModal("login")} type="button">
          Log in
        </button>
      </p>
    </div>
  );
}
