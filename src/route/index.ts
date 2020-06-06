import { RouteConfig } from 'react-router-config';

import App from '@/App';
import BillAndCountry from '@/relationship/bill-and-country';
import BillAndLegislativeSubjects from '@/relationship/bill-and-legislative-subjects';
import BillAndPolicyArea from '@/relationship/bill-and-policy-area';
import BillAndPolicyOrganization from '@/relationship/bill-and-policy-organization';
import Dictionary from '@/dictionary';
import Home from '@/relationship/Home';
import OrganizationAndBill from '@/relationship/organization-and-bill';
import SponsorAndCosponsor from '@/relationship/sponsor-and-cosponsor';

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
      {
        path: '/billAndCountry',
        component: BillAndCountry,
      },
      {
        path: '/billAndPolicyOrganization',
        component: BillAndPolicyOrganization,
      },
      {
        path: '/dictionary',
        component: Dictionary,
      },
    ],
  },
];

export default config;
