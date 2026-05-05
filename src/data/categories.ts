export interface Category {
  slug: string;
  name: string;
  nameEn?: string;
  icon?: string;
}

export interface CategoryGroup {
  name: string;
  icon: string;
  categories: Category[];
}

export const categoryGroups: CategoryGroup[] = [
  {
    name: 'LEOS — Meters',
    icon: 'lucide:activity',
    categories: [
      { slug: 'ac-meter',           name: 'AC Meter' },
      { slug: 'dc-meter',           name: 'DC Meter' },
      { slug: 'process-meter',      name: 'Process Meter' },
      { slug: 'counter-rate',       name: 'Counter & Rate' },
      { slug: 'rate-totalizer',     name: 'Rate & Totalizer' },
      { slug: 'remote-display',     name: 'Remote Display' },
      { slug: 'portable-set',       name: 'Portable Set' },
      { slug: 'multi-temperature',  name: 'Multi-Temperature Monitoring' },
      { slug: 'weight-controller',  name: 'Weight Controller' },
    ],
  },
  {
    name: 'LEOS — Connectivity & IoT',
    icon: 'lucide:wifi',
    categories: [
      { slug: 'ethernet-io',       name: 'Ethernet I/O' },
      { slug: 'iot-mqtt',          name: 'IoT (MQTT)' },
      { slug: 'lora',              name: 'LoRa' },
      { slug: 'modbus-scanner',    name: 'Modbus Scanner' },
      { slug: 'notify-telegram',   name: 'Notify (Telegram)' },
    ],
  },
  {
    name: 'LEOS — Display & Time',
    icon: 'lucide:monitor',
    categories: [
      { slug: 'big-display',  name: 'Big Display' },
      { slug: 'ntp-clock',    name: 'NTP Clock' },
    ],
  },
  {
    name: 'LEOS — Infrastructure',
    icon: 'lucide:cpu',
    categories: [
      { slug: 'converter-repeater',  name: 'Convertor & Repeater' },
      { slug: 'plc-download-cable',  name: 'PLC Download Cable' },
      { slug: 'protection',          name: 'Protection' },
      { slug: 'sensor-transducer',   name: 'Sensor & Transducer' },
      { slug: 'source-measurement',  name: 'Source & Measurement' },
      { slug: 'transmitter',         name: 'Transmitter' },
    ],
  },
  {
    name: 'Haiwell',
    icon: 'lucide:settings-2',
    categories: [
      { slug: 'haiwell-plc',        name: 'PLC' },
      { slug: 'haiwell-hmi',        name: 'HMI SCADA' },
      { slug: 'haiwell-extension',  name: 'Extension Module' },
      { slug: 'haiwell-smart-link', name: 'Smart Link (TV Box)' },
    ],
  },
  {
    name: 'Accessories',
    icon: 'lucide:package',
    categories: [
      { slug: 'ct',        name: 'Current Transform (CT)' },
      { slug: 'test-lead', name: 'Test Lead Cable' },
    ],
  },
];

export const allCategories: Category[] = categoryGroups.flatMap((g) => g.categories);

export const getCategoryBySlug = (slug: string): Category | undefined =>
  allCategories.find((c) => c.slug === slug);
