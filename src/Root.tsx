import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage/HomePage';
import { ProductsPage } from './modules/PhonesPage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import { CartPage } from './modules/CartPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { PageInProgress } from './modules/PageInProgress';
import { FavoritesPage } from './modules/FavoritesPage';
import {
  getProductDetail,
  getProductAmount,
  getProductsWithSearchParams,
} from './api/service';
import { Categories, EndPoints, ProductsAmount } from './types/Enums';

const MOBILE_TITLE = 'Mobile phones';
const TABLETS_TITLE = 'Tablet';
const ACCESSORIES_TITLE = 'Accessories';

export const Root = () => {
  const [amounts, setAmounts] = useState<ProductsAmount>();

  useEffect(() => {
    getProductAmount(Categories.All).then(setAmounts);
  }, []);

  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path={Categories.Phones}>
              <Route
                index
                element={(
                  <ProductsPage
                    title={MOBILE_TITLE}
                    loadData={getProductsWithSearchParams}
                    productAmount={amounts?.phones}
                    endpoint={EndPoints.Phones}
                  />
                )}
              />
              <Route
                path=":itemId?"
                element={(
                  <ProductDetailsPage
                    loadData={getProductDetail}
                    endPoint={EndPoints.Phones}
                  />
                )}
              />
            </Route>
            <Route path={Categories.Tablets}>
              <Route
                index
                element={(
                  <ProductsPage
                    title={TABLETS_TITLE}
                    loadData={getProductsWithSearchParams}
                    productAmount={amounts?.tablets}
                    endpoint={EndPoints.Tablets}
                  />
                )}
              />
              <Route
                path=":itemId?"
                element={(
                  <ProductDetailsPage
                    loadData={getProductDetail}
                    endPoint={EndPoints.Tablets}
                  />
                )}
              />
            </Route>
            <Route path={Categories.Accessories}>
              <Route
                index
                element={(
                  <ProductsPage
                    title={ACCESSORIES_TITLE}
                    loadData={getProductsWithSearchParams}
                    productAmount={amounts?.accessories}
                    endpoint={EndPoints.Accessories}
                  />
                )}
              />
              <Route
                path=":itemId?"
                element={(
                  <ProductDetailsPage
                    loadData={getProductDetail}
                    endPoint={EndPoints.Accessories}
                  />
                )}
              />
            </Route>
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="pageInProgress" element={<PageInProgress />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
