export type NavItem = { id: string; label: string };

export type ServiceItem = {
  icon: any;
  title: string;
  items: string[];
};

export type ProjectItem = {
  img: string;
  title: string;
  client: string;
  tag: string;
  code: string;
};

export type ContactItem = {
  icon: any;
  label: string;
  value: string;
  href?: string;
};

// Props
export type HeaderProps = {
  nav: NavItem[];
  menuOpen: boolean;
  onNavigate: (id: string) => void;
  onToggleMenu: () => void;
};

export type HeroProps = { onNavigate: (id: string) => void };

export type ServicesProps = {
  services: ServiceItem[];
  activeTab: number;
  setActiveTab: (i: number) => void;
};

export type ProjectsProps = { projects: ProjectItem[] };

export type ContactProps = { contacts: ContactItem[] };

