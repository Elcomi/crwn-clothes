import React from "react";
import "./shop.component.styles.scss";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";

import CollectionOverview from "../../component/collection-overview/collection-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
