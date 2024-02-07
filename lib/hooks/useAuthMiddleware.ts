import { cookies } from 'next/headers';
import api from '../api';

const useAuthMiddleware = () => {

  const isLoggedIn = async () => {
    const authCookie = cookies().get('FASHIONSOCIAL-AUTH');
    
    if (!authCookie) return false;

    try {
      const response = await api.get(`/users/token/${authCookie.value}`);
      
      if (!response.data.userId) return false;

      return response.data.userId;
    } catch (error) {
      return false;
    }
  }

  return {
    isLoggedIn
  }
}

export default useAuthMiddleware