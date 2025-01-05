interface SubMenu {
  name: string;
  icon: string;
  href: string;
}

interface Menu {
  name: string;
  icon: string;
  href: string;
  subMenu?: SubMenu[];
}

export const Menu: Menu[] = [
  {
    name: 'Board',
    icon: 'board',
    href: `/taskflow/projects/{id}/board`,
  },
  {
    name: 'Backlog',
    icon: 'backlog',
    href: `/taskflow/projects/{id}/backlogs`,
  },
  {
    name: 'Active Sprints',
    icon: 'sprint',
    href: `/taskflow/projects/{id}/active-sprints`,
  },
  {
    name: 'Issues',
    icon: 'issue',
    href: `/taskflow/projects/{id}/issues`,
  },
  {
    name: 'Reports',
    icon: 'report',
    href: `/taskflow/projects/{id}/reports`,
  },
  {
    name: 'Settings',
    icon: 'settings',
    href: `/taskflow/projects/{id}/settings`,
  },
];

export const jiraAdminMenu: Menu[] = [
  {
    name: 'Dashboards',
    icon: 'dashboard',
    href: '/admin/dashboards',
  },
  {
    name: 'Users',
    icon: 'user',
    href: '/admin/users',
  },
  {
    name: 'Projects',
    icon: 'project',
    href: '/admin/projects',
  },
  {
    name: 'Settings',
    icon: 'settings',
    href: '/admin/settings',
  },
];
