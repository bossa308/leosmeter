export interface SubCategory {
  slug: string;
  name: string;
}

export interface Category {
  slug: string;
  name: string;
  nameEn?: string;
  icon?: string;
  /**
   * Optional third-level grouping shown in the mega menu's right column.
   * Slugs match the `subcategory` field on Product entries so filtering on
   * /products?subcategory=<slug> works without extra wiring.
   */
  subcategories?: SubCategory[];
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
      {
        slug: 'ac-meter',
        name: 'AC Meter',
        subcategories: [
          { slug: 'ip-power',         name: 'IP Power Meter' },
          { slug: 'ac-1phase',        name: 'AC 1-Phase' },
          { slug: 'ac3-phase',        name: 'AC 3-Phase' },
          { slug: 'ac-multi-channel', name: 'AC Multi Channel' },
        ],
      },
      {
        slug: 'dc-meter',
        name: 'DC Meter',
        subcategories: [
          { slug: 'dc-voltage',  name: 'DC Voltage Meter' },
          { slug: 'dc-current',  name: 'DC Current Meter' },
          { slug: 'dc-power',    name: 'DC Power Meter' },
          { slug: 'amp-hour',    name: 'Amp-Hour Meter' },
        ],
      },
      {
        slug: 'process-meter',
        name: 'Process Meter',
        subcategories: [
          { slug: 'process-4-20',    name: '4-20mA / 0-10V' },
          { slug: 'universal-input', name: 'Universal Input (RTD/TC)' },
        ],
      },
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
      {
        slug: 'ethernet-io',
        name: 'Ethernet I/O',
        subcategories: [
          { slug: 'digital-io', name: 'Digital I/O' },
          { slug: 'analog-io',  name: 'Analog I/O' },
          { slug: 'mix-io',     name: 'Mix I/O' },
        ],
      },
      { slug: 'iot-mqtt', name: 'IoT (MQTT)' },
      {
        slug: 'lora',
        name: 'LoRa',
        subcategories: [
          { slug: 'lora-rf-modem',   name: 'LoRa RF Modem' },
          { slug: 'lora-rf-gateway', name: 'LoRa RF Gateway' },
          { slug: 'lora-slave-io',   name: 'LoRa RF Slave I/O' },
        ],
      },
      { slug: 'modbus-scanner',    name: 'Modbus Scanner' },
      { slug: 'notify-telegram',   name: 'Notify (Telegram)' },
    ],
  },
  {
    name: 'LEOS — Display & Time',
    icon: 'lucide:monitor',
    categories: [
      {
        slug: 'big-display',
        name: 'Big Display',
        subcategories: [
          { slug: 'jumbo-display',   name: 'Jumbo Display' },
          { slug: 'temp-humidity',   name: 'Temperature & Humidity' },
        ],
      },
      { slug: 'ntp-clock', name: 'NTP Clock' },
    ],
  },
  {
    name: 'LEOS — Infrastructure',
    icon: 'lucide:cpu',
    categories: [
      {
        slug: 'converter-repeater',
        name: 'Convertor & Repeater',
        subcategories: [
          { slug: 'protocol-converter', name: 'Protocol Converter' },
          { slug: 'repeater',           name: 'Repeater' },
        ],
      },
      {
        slug: 'plc-download-cable',
        name: 'PLC Download Cable',
        subcategories: [
          { slug: 'mitsubishi-plc',  name: 'Mitsubishi PLC' },
          { slug: 'omron-plc',       name: 'OMRON PLC' },
          { slug: 'other-plc',       name: 'Other PLC' },
          { slug: 'usb-rs',          name: 'USB to RS232/422/485' },
        ],
      },
      {
        slug: 'protection',
        name: 'Protection',
        subcategories: [
          { slug: 'protection-relay',  name: 'Protection Relays' },
          { slug: 'surge-protection',  name: 'Surge Protection' },
        ],
      },
      {
        slug: 'sensor-transducer',
        name: 'Sensor & Transducer',
        subcategories: [
          { slug: '2wire-sensor',      name: '2-Wire Sensor' },
          { slug: 'pt100-sensor',      name: 'PT100 Sensor' },
          { slug: 'thermocouple-sensor', name: 'Thermocouple Sensor' },
        ],
      },
      { slug: 'source-measurement',  name: 'Source & Measurement' },
      {
        slug: 'transmitter',
        name: 'Transmitter',
        subcategories: [
          { slug: 'ip-transmitter',    name: 'IP Transmitter' },
          { slug: 'other-transmitter', name: 'Other Transmitter' },
        ],
      },
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

export const getSubCategoryName = (categorySlug: string, subSlug: string): string | undefined =>
  getCategoryBySlug(categorySlug)?.subcategories?.find((s) => s.slug === subSlug)?.name;
