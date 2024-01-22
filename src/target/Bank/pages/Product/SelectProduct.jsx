import React from 'react';
import ProductCard from './components/ProductCard';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComp from '@/components/HeaderComponent';

const SelectProduct = () => {
	const navigate = useNavigate();
	const [data, setData] = useState(null);
	const userId = 123;
	const skipVal = 0;
	const limit = 100;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://52.66.247.118:30203/pool/get_bank_products/${userId}?skip=${skipVal}&limit=${limit}`,
				);
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);
	console.log(data);
	return (
		<>
			<HeaderComp title={'Select Product'} />
			<div style={{ height: '100vh' }}>
				<div style={{ display: 'flex' }}>
					{data &&
						data.map((ele, index) => (
							<ProductCard
								key={index}
								productText={
									<span>
										<span
											style={{
												fontWeight: 900,
												fontSize: '1.1rem',
											}}
										>
											Product-
										</span>
										<span
											style={{
												color: '#1B1B1B',
												fontSize: '1.1rem',
											}}
										>
											{ele.product_name}
										</span>
									</span>
								}
								linkText={
									<span style={{ fontSize: '0.75rem' }}>
										{`${ele.pool_count} Pools`}
									</span>
								}
								linkText1="View Pool List"
								onClickLink={() =>
									navigate('/bank/panel/product-list', {
										state: { productName: ele.product_name },
									})
								}
							/>
						))}
				</div>
			</div>
		</>
	);
};

export default SelectProduct;
