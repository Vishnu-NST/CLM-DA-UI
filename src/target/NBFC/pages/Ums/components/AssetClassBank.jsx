import React from 'react';
import AssetClass from './AssetClass';

const AssetClassBank = () => {
	return (
		<>
			<div style={{ height: '100vh' }}>
				<div style={{ display: 'flex' }}>
					<AssetClass
						productText="Product -"
						subText="JLG"
						linkText="10 Pool"
						linkText1="View Pool List"
						onClickLink={() => console.log('Link clicked')}
					/>
					<AssetClass
						productText="Product -"
						subText="Agriculture Loan"
						linkText="10 Pool"
						linkText1="View Pool List"
						onClickLink={() => console.log('Link clicked')}
					/>
				</div>
			</div>
		</>
	);
};

export default AssetClassBank;
