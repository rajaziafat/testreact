import { useEffect, useState, useCallback } from "react";
import api from "../api";

const useUser = (id: string) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [sortQuery, setSortQuery] = useState<string>("less_popular");

  
  
  const [user, setUser] = useState<any>({
    avatar: "",
    username: "",
    description: "",
    productLink: "",
    products: []
  });

  const getUserById = useCallback(async()=> {
    setLoading(true);
    let viewCount = 0;
    const response = await api.get(`/users/${id}`);
    
    if (response.data.user) {
      const fetchedUser = response.data.user;
      if(fetchedUser.products.length){
        fetchedUser.products.map((item: any) => viewCount = viewCount + item.viewCount);
      }

      setUser((user: any) => ({
        ...user,
        ...{
          id: fetchedUser._id,
          avatar: fetchedUser.avatar,
          username: fetchedUser.username,
          description: fetchedUser.description,
          productLink: fetchedUser.productLink,
          likedPeople: fetchedUser.likedPeople.length ?? 0,
          likedProducts: fetchedUser.likedProducts.length ?? 0,
          followers: fetchedUser.followers.length ?? 0,
          viewCount,
          products: fetchedUser.products
        }
      }))
    }
    
    setLoading(false);
  }, [])

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  function sortArrayOfObjects(items: any, getter: any) {
    const copy = JSON.parse(JSON.stringify(items));
  //@ts-ignore
    const sortFn = fn => {
      copy.sort((a: any, b: any) => {
        a = fn(a)
        b = fn(b)
        return a === b ? 0 : a < b ? -1 : 1;
      });
    };
  
    getter.forEach((x: any) => {
      const fn = typeof x === 'function' ? x : (item: any) => item[x];
      sortFn(fn);
    });
  
    return copy;
  }

  useEffect(() => {

    const sorted = sortArrayOfObjects(user.products, ["viewCount"]);
    const reverseSorted = sorted.reverse();

    if (sortQuery === "less_popular"){
      setUser((user: any) => ({
        ...user,
        ...{
          products: sorted
        }
      }));
    } else {
      setUser((user: any) => ({
        ...user,
        ...{
          products: reverseSorted
        }
      }));
    }

  }, [sortQuery])

  return {
    user,
    isLoading,
    setSortQuery
  }
}


export default useUser;