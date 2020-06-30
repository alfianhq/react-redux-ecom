import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collectionpage';
const ShopPage = ({match}) => {
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />

			{/* dynamic route base on category*/}
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
