import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';

import CollectionsPreview from '../collection-preview/collections-preview.component';

import './collection-overview.styles.scss';

const collectionsOverview = ({collections}) => (
	<div className='collection-overview'>
		{collections.map(({id, ...otherCollectionsProps}) => (
			<CollectionsPreview key={id} {...otherCollectionsProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(collectionsOverview);
