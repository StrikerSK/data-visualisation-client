export interface MenuItem {
  name: string;
  link: string;
}

export const rechartsItems: MenuItem[] = [
  { name: 'Stĺpcový graf', link: '/recharts/bar' },
  { name: 'Koláčový graf', link: '/recharts/pie' },
  { name: 'Línový graf', link: '/recharts/line' },
  { name: 'Plošný graf', link: '/recharts/area' },
  { name: 'Dashboard', link: '/recharts' },
];

export const nivoItems: MenuItem[] = [
  { name: 'Stĺpcový graf', link: '/nivo/bar' },
  { name: 'Koláčový graf', link: '/nivo/pie' },
  { name: 'Línový graf', link: '/nivo/line' },
  { name: 'Bublinový graf', link: '/nivo/bubble' },
  { name: 'Oblátkový graf', link: '/nivo/waffle' },
  { name: 'Dashboard', link: '/nivo' },
];

export const apexItems: MenuItem[] = [
  { name: 'Stĺpcový graf', link: '/apex/bar' },
  { name: 'Koláčový graf', link: '/apex/pie' },
  { name: 'Línový graf', link: '/apex/line' },
  { name: 'Radarový graf', link: '/apex/radar' },
  { name: 'Plošný graf', link: '/apex/area' },
  { name: 'Radiálny graf', link: '/apex/radial' },
  { name: 'Heatmap', link: '/apex/heatmap' },
  { name: 'Dashboard', link: '/apex' },
];
