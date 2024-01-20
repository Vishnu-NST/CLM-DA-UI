// import APIClient from '@/services/apiClient';
import PMSClient from '@/services/pmsClient';
import { useQuery } from '@tanstack/react-query';

const pmsClient = new PMSClient('/products/get_products');

const useGetProducts = () => {
	return useQuery({
		queryKey: ['get_products'],
		queryFn: () => pmsClient.getProductList(),
		// retry: 3,
		// staleTime: 1000 * 60 * 60 * 24,
		// refetchOnWindowFocus: false,
	});
};

export default useGetProducts;
