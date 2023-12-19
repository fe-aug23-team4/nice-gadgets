import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { ProductsPage } from './modules/PhonesPage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import { CartPage } from './modules/CartPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { PageInProgress } from './modules/PageInProgress';
import { FavoritesPage } from './modules/FavoritesPage';
import {
  getProductDetail,
  getProductsWithSearchParams as loadPhones,
  getProductAmount as loadPhonesAmount,
} from './api/service';
import { EndPoints } from './types/Enums';

const MOBILE_TITLE = 'Mobile phones';
// const TABLETS_TITLE = 'Tablet';
// const ACCESSOTIES_TITLE = 'Accessories';

export const Root = () => (
  <Router>
    <Routes>
      <Route>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phones">
            <Route
              index
              element={(
                <ProductsPage
                  title={MOBILE_TITLE}
                  loadData={loadPhones}
                  loadAmount={loadPhonesAmount}
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
          {/* <Route
                path="tablets"
                element={
                  <ProductsPage
                    title={TABLETS_TITLE}
                    loadData={loadPhones}
                    loadAmount={loadPhonesAmount}
                  />}
              /> */}
          {/* <Route
                path="accessories"
                element={
                  <ProductsPage
                    title={ACCESSOTIES_TITLE}
                    loadData={loadPhones}
                    loadAmount={loadPhonesAmount}
                  />}
              /> */}
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="pageInProgress" element={<PageInProgress />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
