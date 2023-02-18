import { axiosInstance as axios } from '../configs/axiosConfig';
import { API_KEY } from '../configs/constant';
export const searchGiphy = async(query) => {
  const key = query.queryKey[0]
  try {
    const res = await axios.get(`/search?api_key=${API_KEY}&q=${key}&limit=9&offset=0&rating=g&lang=en`);
    return res;
  }catch(e){
    console.log(e)
  }
}
