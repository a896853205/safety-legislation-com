import * as DominConfigs from './domin-constants';

export const QUERY_PERSON_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/personList`;
export const QUERY_ORGANIZATION_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/organizationList`;

export const QUERY_SPONSOR_AND_COSPONSOR = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/sponsorAndCosponsor`;
export const QUERY_SC_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/SCStatistics`;

export const QUERY_OB_COMMITTEE = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBCommittee`;
export const QUERY_OB_CONSTRAINT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBConstraint`;
export const QUERY_OB_RELATED_OBJECT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBRelatedObject`;
export const QUERY_OB_EXECUTOR = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBExecutor`;
export const QUERY_OB_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBStatistics`;
export const QUERY_BILL_AND_ORGANIZATION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/billAndOrganization`;
