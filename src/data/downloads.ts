export type DocType = 'datasheet' | 'manual' | 'firmware' | 'software' | 'wiring' | 'register-map' | 'quickstart';

export interface Download {
  id: string;
  model: string;
  productName: string;
  category: string;
  docType: DocType;
  label: string;
  filename: string;
  lang: 'TH' | 'EN' | 'TH/EN';
  version?: string;
  updatedAt: string; // ISO date string
  fileSizeKB?: number;
}

export const docTypeLabel: Record<DocType, string> = {
  datasheet: 'Datasheet',
  manual: 'คู่มือการใช้งาน',
  firmware: 'Firmware',
  software: 'Software',
  wiring: 'Wiring Diagram',
  'register-map': 'Modbus Register Map',
  quickstart: 'Quick Start Guide',
};

export const docTypeColor: Record<DocType, string> = {
  datasheet: 'bg-blue-100 text-blue-800',
  manual: 'bg-green-100 text-green-800',
  firmware: 'bg-amber-100 text-amber-800',
  software: 'bg-purple-100 text-purple-800',
  wiring: 'bg-orange-100 text-orange-800',
  'register-map': 'bg-gray-100 text-gray-700',
  quickstart: 'bg-cyan-100 text-cyan-800',
};

export const downloads: Download[] = [
  { id: 'pqm510-ds', model: 'PQM510', productName: 'Power Quality Meter PQM510', category: 'ac-meter', docType: 'datasheet', label: 'PQM510 Datasheet', filename: 'PQM510-Datasheet.pdf', lang: 'TH', version: 'v1.2', updatedAt: '2024-11-01' },
  { id: 'pqm510-man', model: 'PQM510', productName: 'Power Quality Meter PQM510', category: 'ac-meter', docType: 'manual', label: 'PQM510 คู่มือการใช้งาน', filename: 'PQM510-Manual-TH.pdf', lang: 'TH', version: 'v1.2', updatedAt: '2024-11-01' },
  { id: 'pqm510-reg', model: 'PQM510', productName: 'Power Quality Meter PQM510', category: 'ac-meter', docType: 'register-map', label: 'PQM510 Modbus Register Map', filename: 'PQM510-RegisterMap.pdf', lang: 'EN', version: 'v1.0', updatedAt: '2024-06-01' },
  { id: 'ipm96-ds', model: 'IPM-96', productName: 'IP Power Meter', category: 'ac-meter', docType: 'datasheet', label: 'IP Power Meter Datasheet', filename: 'IPPowerMeter-Datasheet.pdf', lang: 'TH', version: 'v2.0', updatedAt: '2024-12-01' },
  { id: 'ipm96-reg', model: 'IPM-96', productName: 'IP Power Meter', category: 'ac-meter', docType: 'register-map', label: 'IP Power Meter Modbus Register Map', filename: 'IPPowerMeter-RegisterMap.pdf', lang: 'EN', version: 'v2.0', updatedAt: '2024-12-01' },
  { id: 'pm96-ds', model: 'PM-96', productName: 'Process Meter', category: 'process-meter', docType: 'datasheet', label: 'Process Meter Datasheet', filename: 'ProcessMeter-Datasheet.pdf', lang: 'TH', version: 'v1.1', updatedAt: '2024-08-01' },
  { id: 'pm96-man', model: 'PM-96', productName: 'Process Meter', category: 'process-meter', docType: 'manual', label: 'Process Meter คู่มือการใช้งาน', filename: 'ProcessMeter-Manual-TH.pdf', lang: 'TH', version: 'v1.1', updatedAt: '2024-08-01' },
  { id: 'lora-ds', model: 'LoRa-GW-01', productName: 'LoRa RF Gateway', category: 'lora', docType: 'datasheet', label: 'LoRa Gateway Datasheet', filename: 'LoRa-GW-Datasheet.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-09-01' },
  { id: 'lora-man', model: 'LoRa-GW-01', productName: 'LoRa RF Gateway', category: 'lora', docType: 'manual', label: 'LoRa Gateway คู่มือการใช้งาน', filename: 'LoRa-GW-Manual-TH.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-09-01' },
  { id: 'tg-ds', model: 'TG-GW-01', productName: 'Modbus to Telegram Notify Gateway', category: 'notify-telegram', docType: 'datasheet', label: 'Telegram Gateway Datasheet', filename: 'TelegramGW-Datasheet.pdf', lang: 'TH', version: 'v1.3', updatedAt: '2025-01-01' },
  { id: 'tg-qs', model: 'TG-GW-01', productName: 'Modbus to Telegram Notify Gateway', category: 'notify-telegram', docType: 'quickstart', label: 'Telegram Gateway Quick Start', filename: 'TelegramGW-QuickStart.pdf', lang: 'TH', version: 'v1.3', updatedAt: '2025-01-01' },
  { id: 'iotio-ds', model: '23-66', productName: '23-66 IoT Mix I/O with MQTT', category: 'iot-mqtt', docType: 'datasheet', label: 'IoT Mix I/O Datasheet', filename: 'IoTMixIO-Datasheet.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-10-01' },
  { id: 'iotio-man', model: '23-66', productName: '23-66 IoT Mix I/O with MQTT', category: 'iot-mqtt', docType: 'manual', label: 'IoT Mix I/O คู่มือการใช้งาน', filename: 'IoTMixIO-Manual-TH.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-10-01' },
  { id: 'ethio-ds', model: 'ETH-IO-01', productName: 'Ethernet I/O Module', category: 'ethernet-io', docType: 'datasheet', label: 'Ethernet I/O Datasheet', filename: 'EthernetIO-Datasheet.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-07-01' },
  { id: 'bd-ds', model: 'BD-Custom', productName: 'Big Display Custom Made', category: 'big-display', docType: 'datasheet', label: 'Big Display Datasheet', filename: 'BigDisplay-Datasheet.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-05-01' },
  { id: 'bd-wiring', model: 'BD-Custom', productName: 'Big Display Custom Made', category: 'big-display', docType: 'wiring', label: 'Big Display Wiring Diagram', filename: 'BigDisplay-Wiring.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-05-01' },
  { id: 'ntp-ds', model: 'NTP-CK-01', productName: 'NTP Clock', category: 'ntp-clock', docType: 'datasheet', label: 'NTP Clock Datasheet', filename: 'NTPClock-Datasheet.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-06-01' },
  { id: 'ntp-man', model: 'NTP-CK-01', productName: 'NTP Clock', category: 'ntp-clock', docType: 'manual', label: 'NTP Clock คู่มือการใช้งาน', filename: 'NTPClock-Manual-TH.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-06-01' },
  { id: 'ipdisplay-ds', model: 'IP-MD-01', productName: 'IP Message Display with MQTT', category: 'big-display', docType: 'datasheet', label: 'IP Message Display Datasheet', filename: 'IPMessageDisplay-Datasheet.pdf', lang: 'TH', version: 'v1.0', updatedAt: '2024-10-01' },
];

export const getDownloadsByModel = (model: string): Download[] =>
  downloads.filter((d) => d.model === model);

export const getDownloadsByCategory = (category: string): Download[] =>
  downloads.filter((d) => d.category === category);

export const getDownloadsByType = (type: DocType): Download[] =>
  downloads.filter((d) => d.docType === type);
