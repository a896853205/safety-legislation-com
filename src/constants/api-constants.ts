import * as DominConfigs from './domin-constants';

export const QUERY_PERSON_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/personList`;
export const QUERY_ORGANIZATION_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/organizationList`;
export const QUERY_POLICY_AREA_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/policyAreaList`;
export const QUERY_LEGISLATIVE_SUBJECTS_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/legislativeSubjectsList`;
export const QUERY_COUNTRY_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/countryList`;
export const QUERY_POLICY_ORGANIZATION_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/policyOrganizationList`;

export const QUERY_SPONSOR_AND_COSPONSOR = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/sponsorAndCosponsor`;
export const QUERY_SC_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/SCStatistics`;

export const QUERY_OB_COMMITTEE = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBCommittee`;
export const QUERY_OB_CONSTRAINT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBConstraint`;
export const QUERY_OB_RELATED_OBJECT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBRelatedObject`;
export const QUERY_OB_EXECUTOR = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBExecutor`;
export const QUERY_OB_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/OBStatistics`;
export const QUERY_BILL_AND_ORGANIZATION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/billAndOrganization`;
export const QUERY_BO_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/BOStatistics`;

export const QUERY_BILL_AND_POLICY_AREA = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/billAndPolicyArea`;
export const QUERY_PB_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/PBStatistics`;
export const QUERY_POLICY_AREA_AND_BILL = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/policyAreaAndBill`;

export const QUERY_BL_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/BLStatistics`;
export const QUERY_LB_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/LBStatistics`;
export const QUERY_BILL_AND_LEGISLATIVE_SUBJECTS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/billAndLegislativeSubjects`;
export const QUERY_LEGISLATIVE_SUBJECTS_AND_BILL = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/legislativeSubjectsAndBill`;

// <法案实例，覆盖地理区域>
export const QUERY_BILL_AND_COUNTRY = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/billAndCountry`;
export const QUERY_CB_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/CBStatistics`;
export const QUERY_COUNTRY_AND_BILL = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/countryAndBill`;

export const QUERY_BPO_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/BPOStatistics`;
export const QUERY_BILL_AND_LEGISLATIVE_ORGANIZATION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/billAndLegislativeOrganization`;
export const QUERY_POB_STATISTICS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/POBStatistics`;
export const QUERY_POLICY_ORGANIZATION_AND_BILL = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_RELATIONSHIP}/policyOrganizationAndBill`;
