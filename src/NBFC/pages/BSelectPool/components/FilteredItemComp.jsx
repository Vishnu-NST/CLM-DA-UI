import CloseIcon from '../../../assets/svg/CloseIcon';

const FilteredItemComp = ({ data }) => {
	return (
		<div className="filtered-tag">
			<div>{data}</div>
			&nbsp; &nbsp;
			<CloseIcon />
		</div>
	);
};

export default FilteredItemComp;
