import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import { CartPage } from './modules/CartPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { TabletsPage } from './modules/TabletsPage';
import { PageInProgress } from './modules/PageInProgress';
import { AccessoriesPage } from './modules/AccessoriesPage';
import { FavoritesPage } from './modules/FavoritesPage';
import { getProductDetail } from './api/service';

export const Root = () => (
  <Router>
    <Routes>
      <Route>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phones">
            <Route index element={<PhonesPage />} />
            <Route
              path=":itemId?"
              element={<ProductDetailsPage loadData={getProductDetail} />}
            />
          </Route>
          <Route path="tablets" element={<TabletsPage />} />
          <Route path="accessories" element={<AccessoriesPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="pageInProgress" element={<PageInProgress />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
