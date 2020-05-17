import { RouteConfig } from 'react-router-config';

import App from '@/App';
import BillAndLegislativeSubjects from '@/relationship/bill-and-legislative-subjects/Bill-and-legislative-subjects';
import BillAndPolicyArea from '@/relationship/bill-and-policy-area/BillAndPolicyArea';
import Home from '@/relationship/Home';
import OrganizationAndBill from '@/relationship/organization-and-bill/Organization-and-bill';
import SponsorAndCosponsor from '@/relationship/sponsor-and-cosponsor/Sponsor-and-cosponsor';

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
      {
        path: '/billAndPolicyArea',
        component: BillAndPolicyArea,
      },
      {
        path: '/billAndLegislativeSubjects',
        component: BillAndLegislativeSubjects,
      },
    ],
  },
];

export default config;
