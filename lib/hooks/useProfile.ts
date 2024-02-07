import { useEffect, useState, useCallback } from "react";
import api, { BASE_URL } from "../api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const useProfile = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<any>(null);

  const [form, setForm] = useState<any>({
    avatar: "/images/avatar.jpg",
    username: "",
    email: "",
    description: "",
    productLink: "",
    password: "",
    imageFile: ""
  });

  const updateForm = (data: any) => {
    setForm((form: any) => ({ ...form, ...data }));
  };

  const getProfile = useCallback(async()=> {
    setLoading(true);
    const response = await api.get(`/users/details`);
    
    if (response.data.user)
    setForm({...form, ...{
      avatar: `${BASE_URL}${response.data.user.avatar}`,
      username: response.data.user.username,
      email: response.data.user.email,
      description: response.data.user.description,
      productLink: response.data.user.productLink,
    }})
    setLoading(false);
  }, [])

  useEffect(() => {
    getProfile();
  }, [getProfile]);


  const updateProfile = async () => {
    try {
      setLoading(true);

      if ( form.imageFile !== "" && form.imageFile !== undefined ) {
        let formData = new FormData();
        formData.append('image', form.imageFile);

        const response = await api.post('/images/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const newImageUrl = response.data.imageUrl;

        const data = {
          avatar: newImageUrl,
          username: form.username,
          email: form.email,
          description: form.description,
          productLink: form.productLink
        }

        const responseLast = await api.put(`/users/update-user`, data);
      
        if (responseLast.data) setLoading(false);
        toast("Profile details has been updated!");
  
        return true;
      } else {
        const response = await api.put(`/users/update-user`, {
          username: form.username,
          email: form.email,
          description: form.description,
          productLink: form.productLink
        });
      
        if (response.data) setLoading(false);
        toast("Profile details has been updated!");
  
        return true; 
      }
    } catch (error: any) {
      const err = error as AxiosError;
      toast(err.message);
    }
  }

  const { push } = useRouter();
  const changePassword = async (password: string) => {
    try {
      const response = await api.put(`/users/update-password`, {
        username: form.username,
        password
      });

      if(response.data) {
        Cookies.remove("FASHIONSOCIAL-AUTH");
        push('/');
        toast("Your password was changed successfully!");
      }

      return true;
    } catch (error) {
      const err = error as AxiosError;
      toast(err.message);
    }
  }

  return {
    form,
    updateForm,
    setForm,
    setImageFile,
    isLoading,
    updateProfile,
    changePassword
  }
}


export default useProfile;