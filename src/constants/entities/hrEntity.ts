export const HR_ENTITY = {
  EMPLOYEE_TYPE: {
    uid: 'empt',
    KEY: 'EMPLOYEE_TYPE',
    name: "employee_types",
    path: '/a/${accountIndex}/hr/hr-operations/configs/employee-types',
    store_form: "employee-types-store-form",
    update_form: "employee-types-update-form",
    is_filterable: true
  },
  EMPLOYEE: {
    uid: 'emp',
    KEY: 'EMPLOYEE',
    name: "employees",
    path: '/a/${accountIndex}/hr/hr-operations/employees',
    store_form: "employee-store-form",
    update_form: "employee-update-form",
    is_filterable: true
  },
  QUALIFICATION: {
    uid: 'qua',
    KEY: 'QUALIFICATION',
    name: "qualifications",
    path: '/a/${accountIndex}/hr/hr-operations/configs/qualifications',
    store_form: "qualification-store-form",
    update_form: "qualification-update-form",
    is_filterable: true
  },
  SKILL: {
    uid: 'skl',
    KEY: 'SKILL',
    name: "skills",
    path: '/a/${accountIndex}/hr/hr-operations/configs/skills',
    store_form: "skills-store-form",
    update_form: "skills-update-form",
    is_filterable: true
  },
  POSITION: {
    uid: 'posn',
    KEY: 'POSITION',
    name: "positions",
    path: '/a/${accountIndex}/hr/hr-operations/configs/positions',
    store_form: "positions-store-form",
    update_form: "positions-update-form",
    is_filterable: true
  },
  MEDICAL_PARAMETER: {
    uid: 'med-par',
    KEY: 'MEDICAL_PARAMETER',
    name: "medical_parameters",
    path: '/a/${accountIndex}/hr/hr-operations/configs/medical-parameters',
    store_form: "medical-parameters-store-form",
    update_form: "medical-parameters-update-form",
    is_filterable: true
  },
  BIO_CODE: {
    uid: 'b-code',
    KEY: 'BIO_CODE',
    name: "bio_codes",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/bio-codes',
    store_form: "bio-codes-store-form",
    update_form: "bio-codes-update-form",
    is_filterable: false
  },
  PERSONAL_INFO: {
    uid: 'p-info',
    KEY: 'PERSONAL_INFO',
    name: "personal_info",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/personal_info',
    store_form: "personal-info-store-form",
    update_form: "personal-info-update-form",
    is_filterable: false
  },
  EMPLOYEE_SKILL: {
    uid: 'emp-skl',
    KEY: 'SKILL',
    name: "skills",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/skill',
    store_form: "skill-store-form",
    update_form: "skill-update-form",
    is_filterable: false
  },
  EMERGENCY_CONTACT: {
    uid: 'emer-cont',
    KEY: 'EMERGENCY_CONTACT',
    name: "emergency_contanct",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/emergency_contacts',
    store_form: "emergency-contact-store-form",
    update_form: "emergency-contact-update-form",
    is_filterable: false
  },
  EMPLOYEE_QUALIFICATION: {
    uid: 'emp-qua',
    KEY: 'EMPLOYEE_QUALIFICATION',
    name: "qualifications",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/qualifications',
    store_form: "employee-qualification-store-form",
    update_form: "employee-qualification-update-form",
    is_filterable: false
  },
  MEDICAL_HISTORY: {
    uid: 'med-his',
    KEY: 'MEDICAL_HISTORY',
    name: "medical_history",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/medical-history',
    store_form: "medical-history-store-form",
    update_form: "medical-history-update-form",
    is_filterable: false
  },
  EMPLOYEE_POSITION: {
    uid: 'emp-posn',
    KEY: 'EMPLOYEE_POSITION',
    name: "position_history",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/employee-position',
    store_form: "employee-position-store-form",
    update_form: "employee-position-update-form",
    is_filterable: false
  },
  TEAM: {
    uid: 'team',
    KEY: 'TEAM',
    name: "teams",
    path: '/a/${accountIndex}/hr/hr-operations/teams',
    store_form: "team-store-form",
    update_form: "team-update-form",
    is_filterable: true
  },
  TEAM_MEMBER: {
    uid: 'team-mem',
    KEY: 'TEAM_MEMBER',
    name: "team_members",
    path: '/a/${accountIndex}/hr/hr-operations/teams',
    store_form: "team_member-store-form",
    update_form: "team_member-update-form",
    is_filterable: true
  },
  EMPLOYEE_ADDRESS: {
    uid: 'emp-addr',
    KEY: 'EMPLOYEE_ADDRESS',
    name: "addresses",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/address',
    store_form: "employee-address-store-form",
    update_form: "employee-address-update-form",
    is_filterable: false
  },
  EMPLOYEE_EXPERIENCE: {
    uid: 'emp-exp',
    KEY: 'EMPLOYEE_EXPERIENCE',
    name: "experiences",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/experience',
    store_form: "employee-experience-store-form",
    update_form: "employee-experience-update-form",
    is_filterable: false
  },
  HIRE_REQUEST: {
    uid: 'hire-req',
    KEY: 'HIRE_REQUEST',
    name: "hire_requests",
    path: '/a/${accountIndex}/hr/hr-operations/hire-requests',
    store_form: "hire-request-store-form",
    update_form: "hire-request-update-form",
    is_filterable: true
  },
  EMPLOYEE_DEPENDANT: {
    uid: 'emp-depen',
    KEY: 'EMPLOYEE_DEPENDANT',
    name: "dependants",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/dependants',
    store_form: "employee-dependant-store-form",
    update_form: "employee-dependant-update-form",
    is_filterable: false
  },
  EMPLOYEE_ACCESS: {
    uid: 'emp-acc',
    KEY: 'EMPLOYEE_ACCESS',
    name: "access",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/access',
    store_form: "employee-access-store-form",
    update_form: "employee-access-update-form",
    is_filterable: false
  },
  EMPLOYEE_ASSET: {
    uid: 'emp-ass',
    KEY: 'EMPLOYEE_ASSET',
    name: "assets",
    path: '/a/${accountIndex}/hr/hr-operations/Employees/asset',
    store_form: "employee-asset-store-form",
    update_form: "employee-asset-update-form",
    is_filterable: false
  },
  ACCESS_PORTAL: {
    uid: 'acc-port',
    KEY: 'ACCESS_PORTAL',
    name: "access_portals",
    path: '/a/${accountIndex}/hr/others/configs/access-portals',
    store_form: "access-portals-store-form",
    update_form: "access-portals-update-form",
    is_filterable: true
  },
  ASSET_TYPE: {
    uid: 'ass-type',
    KEY: 'ASSET_TYPE',
    name: "asset_type",
    path: '/a/${accountIndex}/hr/others/configs/asset-type',
    store_form: "asset-type-store-form",
    update_form: "asset-type-update-form",
    is_filterable: true
  },
  ASSET_ITEM: {
    uid: 'ass-item',
    KEY: 'ASSET_ITEM',
    name: "asset_items",
    path: '/a/${accountIndex}/hr/others/configs/asset-items',
    store_form: "asset-items-store-form",
    update_form: "asset-items-update-form",
    is_filterable: true
  },
  ACCESS_PORTAL_GRANTED_ACCESS: {
    uid: 'acc-por-gran-acc',
    KEY: 'ACCESS_PORTAL_GRANTED_ACCESS',
    name: "granted_access",
    path: '/a/${accountIndex}/hr/others/configs/access-portals/granted-access',
    store_form: "access-portal-granted-access-store-form",
    update_form: "access-portal-granted-access-update-form",
    is_filterable: true
  },
  ACCESS_REQUEST: {
    uid: 'acc-req',
    KEY: 'ACCESS_REQUEST',
    name: "access_request",
    path: '/a/${accountIndex}/hr/others/access-controls/access-requests',
    store_form: "access-request-store-form",
    update_form: "access-request-update-form",
    is_filterable: true
  },
  GRANTED_ACCESS: {
    uid: 'gra-acc',
    KEY: 'GRANTED_ACCESS',
    name: "granted_access",
    path: '/a/${accountIndex}/hr/others/access-controls/granted-accesses',
    store_form: "granted-access-store-form",
    update_form: "granted-access-update-form",
    is_filterable: true
  },
  EVENTS: {
    uid: 'event',
    KEY: 'EVENTS',
    name: "events",
    path: '/a/${accountIndex}/hr/others/events',
    store_form: "event-store-form",
    update_form: "event-update-form",
    is_filterable: true
  },
  ASSET_HANDOVER: {
    uid: 'gra-acc',
    KEY: 'ASSET_HANDOVER',
    name: "asset_handover",
    path: '/a/${accountIndex}/hr/others/access-controls/asset-handovers',
    store_form: "asset-handover-store-form",
    update_form: "asset-handover-update-form",
    is_filterable: true
  },
  EVENTS_INVITEES: {
    uid: 'event-invitees',
    KEY: 'EVENTS_INVITEES',
    name: "events_invitees",
    path: '/a/${accountIndex}/hr/others/events/28',
    store_form: "event-invitees-store-form",
    update_form: "event-invitees-update-form",
    is_filterable: true
  },
  EVENTS_ATTENDEES: {
    uid: 'event-attendees',
    KEY: 'EVENTS_ATTENDEES',
    name: "events_attendees",
    path: '/a/${accountIndex}/hr/others/events',
    store_form: "event-attendees-store-form",
    update_form: "event-attendees-update-form",
    is_filterable: true
  },
}