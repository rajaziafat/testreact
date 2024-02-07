import api from "../api";
import { Dispatch, SetStateAction, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const useAuth = ({setLogged}: Props) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter()

  const [isLoading, setLoading] = useState<boolean>(false)

  const register = async () => {
    try {
      setLoading(true);

      const response = await api.post('/users/sign-up', {
        username: form.username,
        email: form.email,
        password: form.password
      });
    
      if (response.data) {
        setLoading(false);
        router.replace("/addProduct")
      }

      return true;      
    } catch (error: any) {
      const err = error as AxiosError;
      setLoading(false);
      toast(err.message);
    }
  };

  const login = async () => {
    try {
      setLoading(true);

      const response = await api.post('/users/sign-in', {
        username: form.username,
        email: form.email,
        password: form.password
      });
    
      if (response.data.result) {
        setLoading(false);
        setLogged(true);
      } else {
        setLogged(false);
      }
      return true;      
    } catch (error: any) {
      const err = error as AxiosError;
      setLoading(false);
      toast(err.message);
    }
  }

  const logout = async () => {
    try {
      setLoading(true);

      const response = await api.post('/users/logout');
    
      if (response.data.userId) {
        toast(response.data.result);
        setLoading(false);
      }

      return true;      
    } catch (error: any) {
      const err = error as AxiosError;
      setLoading(false);
      toast(err.message);
    }
  }

  return {
    isLoading,
    register,
    login,
    logout,
    form, 
    setForm
  }
}

export default useAuth;