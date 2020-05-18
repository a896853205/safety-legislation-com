import { RouteConfig } from 'react-router-config';

import App from '@/App';
import BillAndCountry from '@/relationship/bill-and-country/Bill-and-country';
import BillAndLegislativeSubjects from '@/relationship/bill-and-legislative-subjects/Bill-and-legislative-subjects';
import BillAndPolicyArea from '@/relationship/bill-and-policy-area/Bill-and-policy-area';
import BillAndPolicyOrganization from '@/relationship/bill-and-policy-organization/Bill-and-policy-organization';
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
      {
        path: '/billAndCountry',
        component: BillAndCountry,
      },
      {
        path: '/billAndPolicyOrganization',
        component: BillAndPolicyOrganization,
      },
    ],
  },
];

export default config;
