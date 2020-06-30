import React from 'react';

import CollectionItem from '../collection-item/collection.item.compenent';
import './collections-preview.styles.scss';

const CollectionsPreview = ({title, items}) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionsPreview;
