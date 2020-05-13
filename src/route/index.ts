import { RouteConfig } from 'react-router-config';

import App from '@/App';
import OrganizationAndBill from '@/relationship/organization-and-bill/Organization-and-bill';
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
      {
        path: '/organizationAndBill',
        component: OrganizationAndBill,
      },
    ],
  },
];

export default config;
