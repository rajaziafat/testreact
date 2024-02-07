import { linktrIcon } from "@/app/components/SVG";
import React from "react";

export default function General({
  form,
  updateForm,
  isLoading,
  handleCreateProduct
}: {
  form: any;
  updateForm: any;
  isLoading: boolean
  handleCreateProduct: any
}) {
  const formatNumberComma = (n: any) => {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const formatCurrency = (value: any, blur: string) => {
    let input_val = value;
    if (input_val === "") {
      return "";
    }
    if (input_val.indexOf(".") >= 0) {
      let decimal_pos = input_val.indexOf(".");
      let left_side = input_val.substring(0, decimal_pos);
      let right_side = input_val.substring(decimal_pos);
      left_side = formatNumberComma(left_side);
      right_side = formatNumberComma(right_side);
      if (blur === "blur") {
        right_side += "00";
      }
      right_side = right_side.substring(0, 2);
      input_val = left_side + "." + right_side;
    } else {
      input_val = formatNumberComma(input_val);

      if (blur === "blur") {
        input_val += ".00";
      }
    }

    return input_val;
  };
  return (
    <div className="addProduct__form">
      <div className="addProduct__form-inner">
        <div className="input__outer">
          <label htmlFor="">Product Title</label>

          <div className="input">
            <input
              type="text"
              placeholder="Product Title"
              value={form.title}
              onChange={(e) => updateForm({ title: e.target.value })}
            />
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Product Description</label>
          <div className="input">
            <textarea
              name=""
              id=""
              rows={4}
              placeholder="Product Description"
              value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Product Price ($)</label>

          <div className="input input--amount">
            <input
              type="text"
              value={form.price}
              placeholder="Product Price ($)"
              onChange={(e) =>
                updateForm({
                  price: formatCurrency(e.target.value, "nonblur"),
                })
              }
              onBlur={(e) =>
                updateForm({ price: formatCurrency(e.target.value, "blur") })
              }
            />
            <span>$</span>
          </div>
        </div>
        <div className="input__outer">
          <label htmlFor="">Product Link</label>
          <div className="input input--link">
            <input
              type="text"
              placeholder="Product Link"
              value={form.link}
              onChange={(e) => updateForm({ link: e.target.value })}
            />
            <span>{linktrIcon}</span>
          </div>
        </div>
      </div>
      <div className="addProduct__form-footer">
        <button
          type="button"
          className="button delete"
          onClick={() =>
            updateForm({
              image: "",
              title: "",
              description: "",
              price: "",
              link: "",
            })
          }
        >
          Delete
        </button>
        <button
          type="button"
          className="button publish"
          onClick={() =>
            handleCreateProduct()
          }
          disabled={
            form.image === "" ||
            form.title === "" ||
            form.description === "" ||
            form.price === "" ||
            form.link === "" ||
            isLoading
          }
        >
          {isLoading ? "Publishing..." : "Publish"}
        </button>
      </div>
    </div>
  );
}
