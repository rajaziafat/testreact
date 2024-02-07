import { noteIcon } from "@/app/components/SVG";
import React, { useState } from "react";

export default function Delete() {
  const [terms, setTerms] = useState(false);
  
  return (
    <>
      <h3>Delete Account</h3>
      <div className="profileMain__inner">
        <div className="note">
          {noteIcon}
          <h6>
            Deleting your account will delete all of the content you have
            created. It will be completely irrecoverable.
          </h6>
        </div>
        <div className="check">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="">I understand the consequences.</label>
        </div>
        <button type="button" className="button publish" disabled={!terms}>
          Delete Account
        </button>
      </div>
    </>
  );
}
