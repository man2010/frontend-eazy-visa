import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import GermanyPage from './pages/GermanyPage';
import AboutPage from './pages/AboutPage';
import CGUPage from './pages/CGUPage';
import CareersPage from './pages/CareersPage';
import PartnershipPage from './pages/PartnershipPage';
import InvestmentPage from './pages/InvestmentPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'billets', Component: FlightsPage },
      { path: 'hotels', Component: HotelsPage },
      { path: 'voyager-en-allemagne', Component: GermanyPage },
      { path: 'a-propos', Component: AboutPage },
      { path: 'cgu', Component: CGUPage },
      { path: 'carrieres', Component: CareersPage },
      { path: 'partenariat', Component: PartnershipPage },
      { path: 'investissement', Component: InvestmentPage },
    ],
  },
]);
