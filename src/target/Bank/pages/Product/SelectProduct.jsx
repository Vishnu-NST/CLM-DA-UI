import React from 'react';
import ProductCard from './components/ProductCard';
import { useNavigate } from 'react-router-dom';
import HeaderComp from '@/components/HeaderComponent';

const SelectProduct = () => {
	const navigate = useNavigate();

	return (
		<>
			<HeaderComp title={'Select Product'} />
			<div style={{ height: '100vh' }}>
				<div style={{ display: 'flex' }}>
					<ProductCard
						productText="Product -"
						subText="JLG"
						linkText="10 Pool"
						linkText1="View Pool List"
						onClickLink={() => navigate('/bank/panel/product-list')}
					/>
					<ProductCard
						productText="Product -"
						subText="Agriculture Loan"
						linkText="10 Pool"
						linkText1="View Pool List"
						onClickLink={() => navigate('/bank/panel/product-list')}
					/>
				</div>
			</div>
		</>
	);
};

export default SelectProduct;
