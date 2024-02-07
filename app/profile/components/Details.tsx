import React from "react";
import { linktrIcon } from "@/app/components/SVG";
import Side from "./Side";

export default function Details({
  form,
  updateForm,
  isLoading,
  updateProfile
}:{
  form: any,
  updateForm: any,
  isLoading: boolean,
  updateProfile: () => Promise<true | undefined>
}) {
  return (
    <>
      <h3>Profile Details</h3>
      <div className="profileMain__inner">
        <div className="input__outer">
          <label htmlFor="">User Name</label>
          <div className="input">
            <input
              type="text"
              placeholder="User Name"
              value={form.username}
              disabled
              onChange={(e) => updateForm({ username: e.target.value })}
            />
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Email</label>
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Description</label>
          <div className="input">
            <textarea
              name=""
              id=""
              placeholder="Description"
              rows={4}
              value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Product Link</label>
          <div className="input input--link">
            <input
              type="text"
              placeholder="Product Link"
              value={form.productLink}
              onChange={(e) => updateForm({ productLink: e.target.value })}
            />
            <span>{linktrIcon}</span>
          </div>
        </div>
        <button
          type="button"
          className="button publish"
          disabled={
            form.username === "" ||
            form.email === "" ||
            form.description === "" ||
            form.productLink === "" ||
            isLoading
          }
          onClick={() =>{
            updateForm({
              username: form.username,
              email: form.email,
              description: form.description,
              productLink: form.productLink,
            })
            updateProfile()
            }
          }
        >
          Save Changes
        </button>
      </div>
    </>
  );
}
