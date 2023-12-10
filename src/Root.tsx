import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { PhoneDetailsPage } from './modules/PhoneDetailsPage';
import { FavoritesPage } from './modules/FavoritesPage';
import { CartPage } from './modules/CartPage';
import { NotFoundPage } from './modules/NotFoundPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phones">
            <Route index element={<PhonesPage />} />
            <Route path=":phoneId?" element={<PhoneDetailsPage />} />
          </Route>
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
