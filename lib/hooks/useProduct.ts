import api from "../api";
import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const INITIAL_VALUES = {
  image: "",
  title: "",
  description: "",
  price: "",
  link: "",
  imageFile: ""
}

const useProduct = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [form, setForm] = useState<any>(INITIAL_VALUES);

  const create = async () => {
    try {
      setLoading(true);
      
      let formData = new FormData();
      formData.append('image', form.imageFile);

      const response = await api.post('/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const imageUrl = response.data.imageUrl;

      const createProductResponse = await api.post('/products/create', {
        imageUrl,
        title: form.title,
        description: form.description,
        url: form.link,
        price: form.price
      });

      if (response.data.imageUrl && createProductResponse.data.productId) {
        toast("Product successfully created!");
        setForm(INITIAL_VALUES);
        setLoading(false);
      } else {
        toast("Something went please try again!");
        setLoading(false);
      }
      return true;      
    } catch (error: any) {
      const err = error as AxiosError;
      toast(err.message);
    }
  };

  const likeProduct = async (productId: string) => {
    try {
      const authCookie = Cookies.get('FASHIONSOCIAL-AUTH');

      if (authCookie) {
        const response = await api.post(`/users/like-product/${productId}`);

        if (response.data) toast(response.data.result);
      } else {
        toast("Please, login to follow or like!");
      }
      
    } catch (error) {
      const err = error as AxiosError
      toast(err.message)
    }
  }

  const likePeople = async (peopleId: string) => {
    try {
      const authCookie = Cookies.get('FASHIONSOCIAL-AUTH');

      if (authCookie) {
      const response = await api.post(`/users/like-people/${peopleId}`);

      if (response.data) toast(response.data.result);
      } else {
        toast("Please, login to follow or like!");
      }
      
    } catch (error) {
      const err = error as AxiosError
      toast(err.message)
    }
  }

  const follow = async (id: string) => {
    try {
      const authCookie = Cookies.get('FASHIONSOCIAL-AUTH');

      if (authCookie) {
        const response = await api.post(`/users/follow/${id}`);

        if (response.data) toast(response.data.result);
      } else {
        toast("Please, login to follow or like!");
      }      
    } catch (error) {
      const err = error as AxiosError
      toast(err.message)
    }
  }

  return {
    form,
    setForm,
    isLoading,
    create,
    likeProduct,
    likePeople,
    follow
  }
}

export default useProduct;