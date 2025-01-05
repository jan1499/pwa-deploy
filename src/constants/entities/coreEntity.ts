export const CORE_ENTITY = {
  AUTH: {
    signup_form: 'signup-form'
  },

  FLEX_FIELD: {
    name: "Flex Fields",
    store_form: 'flex-fields-store-form',
    update_form: 'flex-fields-update-form'
  },

  USER: {
    uid: 'user',
    KEY: 'USER',
    name: "users",
    path: '/a/${accountIndex}/core/user-managements/users',
    store_form: "user-store-form",
    update_form: "user-update-form",
    is_filterable: true
  },

  ORGANIZATION_HIERARCHY: {
    uid: 'org-hie',
    KEY: 'ORGANIZATION_HIERARCHY',
    name: "organization_hierarchy",
    path: '/a/${accountIndex}/core/organizations/organization-hierarchies',
    profile_path: '/a/${accountIndex}/core/organizations/profile',
    store_form: "organization-hierarchy-store-form",
    update_form: "organization-hierarchy-update-form",
    is_filterable: true
  },

  CHECKLIST: {
    uid: 'chel',
    KEY: 'CHECKLIST',
    name: "checklists",
    path: '/a/${accountIndex}/core/others/checklists',
    store_form: "checklist-store-form",
    update_form: "checklist-update-form",
    is_filterable: true
  },

  REASON: {
    uid: 'rea',
    KEY: 'REASON',
    name: "reasons",
    path: '/a/${accountIndex}/core/others/reasons',
    store_form: "reason-store-form",
    update_form: "reason-update-form",
    is_filterable: true
  },

  DOCUMENT_TYPE: {
    uid: 'doc-typ',
    KEY: 'DOCUMENT_TYPE',
    name: "document_types",
    path: '/a/${accountIndex}/core/others/document-types',
    store_form: "document-type-store-form",
    update_form: "document-type-update-form",
    is_filterable: true
  },

  CHECKLIST_TASK: {
    uid: 'che-tas',
    KEY: 'CHECKLIST_TASK',
    name: "checklist_tasks",
    path: '/a/${accountIndex}/core/others/checklists/${id}',
    store_form: "checklist-task-store-form",
    update_form: "checklist-task-update-form",
    is_filterable: true
  },

  ORGANIZATION_LEVEL: {
    uid: 'org-lvl',
    KEY: 'ORGANIZATION_LEVEL',
    name: "organization_levels",
    path: '/a/${accountIndex}/core/organizations/organization-levels',
    store_form: "organization_level-store-form",
    update_form: "organization_level-update-form",
    is_filterable: true

  },
  ROLE: {
    uid: 'role',
    KEY: 'ROLE',
    name: "roles",
    path: '/a/${accountIndex}/core/user-managements/roles',
    store_form: "role-store-form",
    update_form: "role-update-form",
    is_filterable: true
  },
  ACTION_APPROVAL_RULE: {
    uid: 'acaprule',
    KEY: 'ACTION_APPROVAL_RULE',
    name: "action_approval_rule",
    path: '/a/${accountIndex}/core/approvals/action-approval-rules',
    store_form: "action-approval-rule-store-form",
    update_form: "action-approval-rule-update-form",
    is_filterable: true
  },
  APPROVAL_RULE: {
    uid: 'aprule',
    KEY: 'APPROVAL_RULE',
    name: "approval_rule",
    path: '/a/${accountIndex}/core/approvals/approval-rules',
    store_form: "approval-rule-store-form",
    update_form: "approval-rule-update-form",
    is_filterable: true
  },
  TAG: {
    uid: 'tag',
    KEY: 'TAG',
    name: "tags",
    path: '/a/${accountIndex}/core/others/tags',
    store_form: "tag-store-form",
    update_form: "tag-update-form",
    is_filterable: true
  },
}
