import { RouteConfig } from 'react-router-config';

import App from '@/App';
import SponsorAndCosponsor from '@/relationship/sponsor-and-cosponsor/Sponsor-and-cosponsor';
import Home from '@/relationship/Home';

const config: RouteConfig[] = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/sponsorAndCosponsor',
        component: SponsorAndCosponsor,
      },
    ],
  },
];

export default config;
