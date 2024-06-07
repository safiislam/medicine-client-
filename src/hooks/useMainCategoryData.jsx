import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMainCategoryData = (token) => {

    const { data: mcategory = [], isPending: loading, refetch } = useQuery({
        queryKey: ['maincategory'],
        queryFn: async () => {
            if (token) {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/maincategory`,
                    // {
                    //     headers: { Authorization: token }
                    // }
                );
                return res.data;
            }


        }
    })
    return [mcategory, loading, refetch]
};

export default useMainCategoryData;