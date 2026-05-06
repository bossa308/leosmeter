export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDownload {
  label: string;     // e.g. "Datasheet", "Manual", "Firmware"
  type: 'datasheet' | 'manual' | 'firmware' | 'software' | 'wiring' | 'register-map' | 'quickstart';
  filename: string;  // e.g. "PQM510-Manual-TH.pdf"
  lang?: string;     // 'TH' | 'EN'
  version?: string;
}

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  specs: ProductSpec[];
  relatedProducts?: string[];
  featured?: boolean;
  model?: string;
  protocols?: string[];
  inputTypes?: string[];
  applications?: string[];
  downloads?: ProductDownload[];
  faqs?: ProductFAQ[];
  /**
   * Concrete SKU / variant codes that belong to this product family.
   * Renders as a "Models" table on the detail page so buyers can confirm the
   * exact part number when requesting a quote.
   */
  variants?: string[];
}

export const products: Product[] = [
  {
    id: 'lora-rf-gateway',
    name: 'LoRa RF Gateway',
    slug: 'lora-rf-gateway',
    category: 'lora',
    subcategory: 'lora-rf-gateway',
    shortDescription: 'รับ-ส่งข้อมูลระยะไกลผ่านคลื่น LoRa ออก Modbus TCP/IP หรือ MQTT',
    description:
      'LoRa RF Gateway รับข้อมูลจาก LoRa Slave I/O Module แล้วส่งต่อออก Ethernet ผ่าน Modbus TCP/IP หรือ MQTT เหมาะสำหรับโรงงานที่ต้องการเก็บข้อมูลแบบไร้สายจากอุปกรณ์หลายจุดในพื้นที่กว้าง ไม่ต้องเดินสายสัญญาณ RS-485 ยาว',
    image: 'lora-rf-gateway.svg',
    tags: ['LoRa', 'Wireless', 'Gateway', 'MQTT', 'Modbus'],
    features: [
      'รับ-ส่งข้อมูลระยะไกลถึง 2 กม. (Line of Sight)',
      'รองรับ Modbus TCP/IP และ MQTT Protocol',
      'ทำงานร่วมกับ LoRa Slave I/O และ LoRa RF Modem',
      'แสดงสถานะด้วย LED indicator',
      'ไฟเลี้ยง 12–24V DC',
    ],
    specs: [
      { label: 'Protocol',         value: 'LoRa / Modbus TCP/IP / MQTT' },
      { label: 'ระยะรับส่ง',        value: 'สูงสุด 2 กม. (LOS)' },
      { label: 'ความถี่ RF',         value: '433 MHz (option: 868 / 915 MHz)' },
      { label: 'Interface',         value: 'Ethernet 10/100 Mbps' },
      { label: 'แรงดันไฟเลี้ยง',    value: '12–24V DC' },
      { label: 'ช่วงอุณหภูมิ',      value: '-20°C ถึง 70°C' },
    ],
    relatedProducts: ['iot-mix-io', 'modbus-scanner'],
    featured: true,
    model: 'LoRa-GW-01',
    protocols: ['LoRa', 'Modbus TCP', 'MQTT', 'RS485'],
    applications: ['LoRa Wireless Monitoring', 'Modbus Data Logger', 'Remote Alarm Notification'],
    variants: ['LoRa-GW01', 'LoRa-GW02'],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'LoRa-GW-Datasheet.pdf', lang: 'TH' },
      { label: 'คู่มือการใช้งาน', type: 'manual', filename: 'LoRa-GW-Manual-TH.pdf', lang: 'TH' },
    ],
    faqs: [
      { q: 'ส่งข้อมูลได้ไกลแค่ไหน?', a: 'ในพื้นที่โล่ง (Line of Sight) ส่งได้สูงสุด 2 กิโลเมตร ในโรงงานทั่วไปประมาณ 200–500 เมตร' },
      { q: 'รองรับกี่ Node?', a: 'รองรับ LoRa Slave ได้สูงสุด 32 Node ต่อ 1 Gateway' },
      { q: '100mW กับ 500mW ต่างกันยังไง?', a: 'LoRa-GW02 (500mW) ส่งได้ไกลกว่าและทะลุผ่านสิ่งกีดขวางได้ดีกว่า LoRa-GW01 (100mW) แต่ใช้ไฟมากกว่าเล็กน้อย' },
    ],
  },
  {
    id: 'pqm510',
    name: 'Power Quality Meter PQM510',
    slug: 'pqm510',
    category: 'ac-meter',
    subcategory: 'ac3-phase',
    shortDescription: 'วิเคราะห์คุณภาพไฟฟ้า 3 เฟส THD, Harmonics, PF, Flicker พร้อม LAN',
    description:
      'Power Quality Meter PQM510 วิเคราะห์คุณภาพไฟฟ้า (Power Quality) ได้ครบถ้วน ทั้ง THD, Individual Harmonics สูงสุด Order 63, Power Factor, Flicker, Voltage Sag/Swell รองรับ Modbus TCP/IP ผ่าน LAN เหมาะสำหรับโรงงานที่ต้องการตรวจสอบคุณภาพไฟฟ้าตาม EN50160',
    image: 'pqm510.svg',
    tags: ['Power Quality', 'THD', 'Harmonics', 'LAN', 'Modbus TCP'],
    features: [
      'วัด THD และ Individual Harmonics ถึง Order 63',
      'วัด Voltage Sag, Swell, Interruption',
      'รองรับ Modbus TCP/IP ผ่าน Ethernet',
      'หน้าจอ TFT สี แสดงผล Waveform และ Phasor',
      'บันทึกข้อมูลเหตุการณ์ Power Disturbance',
    ],
    specs: [
      { label: 'ประเภท',           value: '3 เฟส 4 สาย' },
      { label: 'การวัด',           value: 'V, A, W, VAR, VA, PF, Hz, kWh, THD, Harmonics' },
      { label: 'ความแม่นยำ',       value: 'Class 0.2S' },
      { label: 'การสื่อสาร',       value: 'Ethernet Modbus TCP/IP + RS-485 Modbus RTU' },
      { label: 'หน้าจอ',          value: 'TFT Color 3.5"' },
      { label: 'IP Rating',        value: 'IP65 (ด้านหน้า)' },
    ],
    relatedProducts: ['ip-power-meter', 'process-meter'],
    featured: true,
    model: 'PQM510',
    protocols: ['Modbus TCP', 'Modbus RTU', 'RS485', 'Ethernet'],
    inputTypes: ['AC 3-Phase', 'AC 1-Phase'],
    applications: ['Energy Monitoring', 'Power Quality Analysis', 'Factory Dashboard'],
    variants: [
      'PQM510A50-1001-1', 'PQM510A50-1011-1', 'PQM510A50-1101-1', 'PQM510A50-1111-1',
      'PQM510mA-1001-1',  'PQM510mA-1101-1',  'PQM510mA-1111-1',
      'PQM510mV-1001-1',  'PQM510mV-1101-1',  'PQM510mV-1111-1',
      'PQM510R08-1001-1', 'PQM510R08-1101-1', 'PQM510R08-1111-1',
      'PQM510R15-1001-1', 'PQM510R15-1101-1', 'PQM510R15-1111-1',
      'PQM510R35-1001-1', 'PQM510R35-1101-1', 'PQM510R35-1111-1',
      'PQM510-SET1', 'PQM510-SET2', 'PQM510-SET3',
      'PQM510R08-SET1', 'PQM510R15-SET2', 'PQM510R35-SET2',
    ],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'PQM510-Datasheet.pdf', lang: 'TH' },
      { label: 'คู่มือการใช้งาน', type: 'manual', filename: 'PQM510-Manual-TH.pdf', lang: 'TH' },
      { label: 'Modbus Register Map', type: 'register-map', filename: 'PQM510-RegisterMap.pdf', lang: 'EN' },
    ],
    faqs: [
      { q: 'วัด THD ได้ถึง Order เท่าไร?', a: 'วัด Individual Harmonics ได้ถึง Order 63 ตาม IEC61000-4-7' },
      { q: 'เชื่อมต่อ SCADA ได้มั้ย?', a: 'ได้ผ่าน Modbus TCP/IP ผ่าน Ethernet หรือ Modbus RTU ผ่าน RS-485' },
    ],
  },
  {
    id: 'telegram-gateway',
    name: 'Modbus to Telegram Notify Gateway',
    slug: 'telegram-gateway',
    category: 'notify-telegram',
    shortDescription: 'ส่งแจ้งเตือนอัตโนมัติผ่าน Telegram เมื่อค่าเกินกำหนด',
    description:
      'Gateway อ่านค่าจากอุปกรณ์ Modbus RTU/TCP แล้วส่งข้อความแจ้งเตือนผ่าน Telegram Bot อัตโนมัติเมื่อค่าเกิน/ต่ำกว่า Setpoint ที่กำหนด ตั้งค่าง่ายผ่านเว็บเบราว์เซอร์ ไม่ต้องเขียนโปรแกรม',
    image: 'telegram-gateway.svg',
    tags: ['Telegram', 'Alarm', 'Notify', 'Modbus', 'IoT'],
    features: [
      'ส่งแจ้งเตือน Telegram เมื่อค่าเกิน Setpoint',
      'อ่านค่าจาก Modbus RTU และ Modbus TCP/IP',
      'ตั้งค่าผ่าน Web Browser ง่ายๆ',
      'รองรับ Group Chat และ Channel ใน Telegram',
      'แนบรูปภาพหรือกราฟพร้อมข้อความแจ้งเตือนได้',
    ],
    specs: [
      { label: 'Input Protocol',   value: 'Modbus RTU (RS-485) / Modbus TCP/IP' },
      { label: 'Output',           value: 'Telegram Bot API' },
      { label: 'Interface',        value: 'Ethernet + RS-485' },
      { label: 'การตั้งค่า',       value: 'Web Browser (ไม่ต้องติดตั้งซอฟต์แวร์)' },
      { label: 'แรงดันไฟเลี้ยง',  value: '12–24V DC' },
    ],
    relatedProducts: ['iot-mix-io', 'lora-rf-gateway'],
    featured: true,
    model: 'TG-GW-01',
    protocols: ['Modbus RTU', 'Modbus TCP', 'RS485', 'Ethernet', 'Telegram Bot API'],
    applications: ['Remote Alarm Notification', 'Factory Dashboard', 'Modbus Data Logger'],
    variants: ['Modbus-Telegram', 'Modbus-Telegram-2'],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'TelegramGW-Datasheet.pdf', lang: 'TH' },
      { label: 'Quick Start Guide', type: 'quickstart', filename: 'TelegramGW-QuickStart.pdf', lang: 'TH' },
    ],
  },
  {
    id: 'big-display-custom',
    name: 'Big Display Custom Made',
    slug: 'big-display-custom',
    category: 'big-display',
    subcategory: 'jumbo-display',
    shortDescription: 'จอ LED ขนาดใหญ่สั่งทำพิเศษตามความต้องการ หลายขนาด หลายสี',
    description:
      'Big Display Custom Made จอแสดงผล LED ขนาดใหญ่ผลิตตามความต้องการลูกค้า กำหนดขนาดตัวเลข จำนวนหลัก สี และขนาดตู้ได้อิสระ รองรับ RS-485 Modbus RTU และ 4-20mA ใช้งานในโรงงาน สายการผลิต และห้องควบคุม Made in Thailand',
    image: 'big-display-custom.svg',
    tags: ['Big Display', 'Custom', 'LED', 'Made in Thailand', 'Jumbo'],
    features: [
      'สั่งทำขนาดและสีตามความต้องการ',
      'ตัวเลข LED ขนาด 2.3" ถึง 10" หรือใหญ่กว่า',
      'รองรับ RS-485 Modbus RTU และ 4-20mA input',
      'ออกแบบตู้ให้เหมาะกับสภาพแวดล้อมการติดตั้ง',
      'ผลิตในประเทศไทย บริการหลังการขายดี',
    ],
    specs: [
      { label: 'ขนาด LED',         value: 'กำหนดได้ (2.3" – 10"+)' },
      { label: 'จำนวนหลัก',        value: 'กำหนดได้ (4–8 หลัก)' },
      { label: 'สี',               value: 'แดง / เขียว / เหลือง (กำหนดได้)' },
      { label: 'Input',            value: 'RS-485 Modbus RTU / 4-20mA / 0-10V' },
      { label: 'แรงดันไฟเลี้ยง',  value: '85–265V AC หรือ 12-24V DC' },
      { label: 'ผลิตโดย',          value: 'LEOS / SME INTER — Made in Thailand' },
    ],
    relatedProducts: ['ntp-clock', 'ip-message-display'],
    featured: true,
    model: 'BD-Custom',
    protocols: ['Modbus RTU', 'RS485'],
    inputTypes: ['RS485', '4-20mA', '0-10V'],
    applications: ['Production Counter', 'Factory Dashboard', 'Large Display'],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'BigDisplay-Datasheet.pdf', lang: 'TH' },
      { label: 'Wiring Diagram', type: 'wiring', filename: 'BigDisplay-Wiring.pdf', lang: 'TH' },
    ],
  },
  {
    id: 'iot-mix-io',
    name: '23-66 IoT Mix I/O with MQTT',
    slug: 'iot-mix-io',
    category: 'iot-mqtt',
    shortDescription: 'Remote I/O แบบ Mix ส่งข้อมูลผ่าน MQTT เชื่อมต่อ IoT Cloud ได้ทันที',
    description:
      'IoT Mix I/O Module รุ่น 23-66 มี Digital I/O และ Analog I/O ในตัวเครื่องเดียว ส่งข้อมูลผ่าน MQTT Protocol เชื่อมต่อกับ Cloud Platform เช่น Node-RED, ThingsBoard หรือระบบ SCADA ใดก็ได้ที่รองรับ MQTT',
    image: 'iot-mix-io.svg',
    tags: ['IoT', 'MQTT', 'Mix I/O', 'Remote I/O', 'Cloud'],
    features: [
      'Digital Input/Output และ Analog Input/Output ในตัวเครื่องเดียว',
      'ส่งข้อมูลผ่าน MQTT Protocol',
      'รองรับ TLS/SSL สำหรับการเชื่อมต่อที่ปลอดภัย',
      'ตั้งค่าผ่าน Web Browser',
      'รองรับ Modbus TCP/IP ด้วย',
    ],
    specs: [
      { label: 'Digital Input',    value: '8 จุด, 24V DC' },
      { label: 'Digital Output',   value: '8 จุด, Relay' },
      { label: 'Analog Input',     value: '4 จุด, 4-20mA / 0-10V' },
      { label: 'Protocol',         value: 'MQTT / Modbus TCP/IP' },
      { label: 'Interface',        value: 'Ethernet 10/100 Mbps' },
      { label: 'แรงดันไฟเลี้ยง',  value: '12–24V DC' },
    ],
    relatedProducts: ['lora-rf-gateway', 'telegram-gateway'],
    featured: true,
    model: '23-66',
    protocols: ['MQTT', 'Modbus TCP', 'Ethernet'],
    inputTypes: ['Digital 24V DC', 'Analog 4-20mA', '0-10V'],
    applications: ['IoT Cloud', 'Remote I/O', 'Modbus Data Logger'],
    variants: ['2366-IoT-MIX-IO'],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'IoTMixIO-Datasheet.pdf', lang: 'TH' },
      { label: 'คู่มือการใช้งาน', type: 'manual', filename: 'IoTMixIO-Manual-TH.pdf', lang: 'TH' },
    ],
  },
  {
    id: 'ip-message-display',
    name: 'IP Message Display with MQTT',
    slug: 'ip-message-display',
    category: 'big-display',
    shortDescription: 'จอแสดงข้อความรับข้อมูลผ่าน MQTT แสดงข้อความ ตัวเลข และสัญญาณเตือน',
    description:
      'IP Message Display รับข้อมูลผ่าน MQTT หรือ Modbus TCP/IP แล้วแสดงผลเป็นตัวเลข ข้อความ หรือสัญญาณเตือนบนจอ LED ขนาดใหญ่ เหมาะสำหรับสายการผลิตที่ต้องการแสดงสถานะเครื่องจักร ค่าการผลิต หรือข้อความประกาศแบบ Real-time',
    image: 'ip-message-display.svg',
    tags: ['IP Display', 'MQTT', 'Message', 'Andon', 'Production'],
    features: [
      'รับข้อมูลผ่าน MQTT และ Modbus TCP/IP',
      'แสดงตัวเลข ข้อความ และสัญญาณเตือนได้',
      'ออกแบบได้หลายขนาด',
      'เหมาะงาน Andon และ Production Board',
      'ตั้งค่าผ่าน Web Browser',
    ],
    specs: [
      { label: 'Input Protocol',   value: 'MQTT / Modbus TCP/IP' },
      { label: 'หน้าจอ',          value: 'LED Matrix หรือ 7-Segment' },
      { label: 'Interface',        value: 'Ethernet 10/100 Mbps' },
      { label: 'แรงดันไฟเลี้ยง',  value: '85–265V AC' },
    ],
    relatedProducts: ['big-display-custom', 'iot-mix-io'],
    featured: false,
    model: 'IP-MD-01',
    protocols: ['MQTT', 'Modbus TCP', 'Ethernet'],
    applications: ['Production Counter', 'Factory Dashboard', 'Andon System'],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'IPMessageDisplay-Datasheet.pdf', lang: 'TH' },
    ],
  },
  {
    id: 'ntp-clock',
    name: 'NTP Clock',
    slug: 'ntp-clock',
    category: 'ntp-clock',
    shortDescription: 'นาฬิกาซิงค์เวลาแม่นยำผ่าน NTP Network สำหรับโรงงานอุตสาหกรรม',
    description:
      'NTP Clock ซิงค์เวลาอัตโนมัติผ่านเครือข่าย Ethernet ด้วยโปรโตคอล NTP/SNTP แสดงผล LED ขนาดใหญ่ มองเห็นชัดทั่วทั้งห้องควบคุมหรือสายการผลิต รองรับ Battery Backup เพื่อให้เวลาถูกต้องแม้ขณะไฟดับ ผลิตโดย LEOS Made in Thailand',
    image: 'ntp-clock-leos.svg',
    tags: ['NTP', 'Clock', 'Time Sync', 'LED', 'Made in Thailand'],
    features: [
      'ซิงค์เวลาผ่าน NTP Server อัตโนมัติ',
      'แสดงผล HH:MM:SS และวันที่บน LED ขนาดใหญ่',
      'Battery Backup ทำงานต่อได้แม้ไฟดับ',
      'เอาต์พุต RS-485 กระจายสัญญาณเวลาให้อุปกรณ์อื่น',
      'ผลิตตามขนาดที่ต้องการ — Made in Thailand',
    ],
    specs: [
      { label: 'Sync Protocol',    value: 'NTP / SNTP (IEEE 1588 optional)' },
      { label: 'ความแม่นยำ',       value: '±1 ms (เมื่อซิงค์แล้ว)' },
      { label: 'ขนาด LED',         value: 'กำหนดได้ (4" – 8")' },
      { label: 'Interface',        value: 'Ethernet + RS-485 Output' },
      { label: 'Battery Backup',   value: '72 ชั่วโมง' },
      { label: 'ผลิตโดย',          value: 'LEOS / SME INTER — Made in Thailand' },
    ],
    relatedProducts: ['big-display-custom', 'ethernet-io'],
    featured: true,
    model: 'NTP-CK-01',
    protocols: ['NTP', 'SNTP', 'RS485', 'Ethernet'],
    applications: ['NTP Clock System', 'Factory Dashboard'],
    variants: [
      'NTP-1810', 'NTP-1810-PoE',
      'NTP-1810-TEW-1', 'NTP-1810-TEW-2',
      'NTP-12061-TEW-R',
      'NTP-2341',
      'NTP-TEW-P3', 'NTP-TEW-P3-Poe',
      'NTP-TEW-P4', 'NTP-TEW-P4-Poe',
    ],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'NTPClock-Datasheet.pdf', lang: 'TH' },
      { label: 'คู่มือการใช้งาน', type: 'manual', filename: 'NTPClock-Manual-TH.pdf', lang: 'TH' },
    ],
  },
  {
    id: 'ip-power-meter',
    name: 'IPM310 IP Power Meter',
    slug: 'ip-power-meter',
    category: 'ac-meter',
    subcategory: 'ip-power',
    shortDescription: 'วัดพลังงานไฟฟ้า 3 เฟส + ส่งข้อมูลผ่าน Ethernet Modbus TCP/IP',
    description:
      'IPM310 IP Power Meter วัดค่าพลังงานไฟฟ้า 3 เฟสแบบครบถ้วน ทั้ง V, A, W, VAR, VA, PF, Hz และ kWh พร้อมส่งข้อมูลออก Modbus TCP/IP ผ่าน Ethernet ทำให้เชื่อมต่อเข้าระบบ SCADA หรือ BMS ได้โดยตรงโดยไม่ต้องใช้ Converter เลือก CT ได้หลายแบบ — Solid-Core, Split-Core (R08/R15/R35/R40/R60) หรือ Rogowski',
    image: 'ip-power-meter.svg',
    tags: ['Power Meter', 'Ethernet', 'Modbus TCP', '3-Phase', 'Energy', 'IPM310'],
    features: [
      'วัด V, A, W, VAR, VA, PF, Hz, kWh ครบถ้วน',
      'ส่งข้อมูลผ่าน Ethernet Modbus TCP/IP',
      'หน้าจอ LCD แสดงค่าหลายพารามิเตอร์',
      'ไม่ต้องใช้ RS-485 to Ethernet Converter',
      'รองรับ CT แบบ Solid-Core, Split-Core, Rogowski',
    ],
    specs: [
      { label: 'ประเภท',           value: '3 เฟส 4 สาย' },
      { label: 'การวัด',           value: 'V, A, W, VAR, VA, PF, Hz, kWh, kVARh' },
      { label: 'ความแม่นยำ',       value: 'Class 0.5S' },
      { label: 'การสื่อสาร',       value: 'Modbus TCP/IP (Ethernet) + Modbus RTU (RS-485)' },
      { label: 'ขนาด',             value: 'Panel Mount 96×96 มม.' },
      { label: 'IP Rating',        value: 'IP54 (ด้านหน้า)' },
    ],
    relatedProducts: ['pqm510', 'ipm320-iot-power-meter', 'process-meter'],
    featured: true,
    model: 'IPM310',
    protocols: ['Modbus TCP', 'Modbus RTU', 'RS485', 'Ethernet'],
    inputTypes: ['AC 3-Phase'],
    applications: ['Energy Monitoring', 'Factory Dashboard'],
    variants: [
      'IPM310A50-1001-1', 'IPM310A50-1001-1BK', 'IPM310A50-1011-1', 'IPM310A50-1101-1', 'IPM310A50-1101-2', 'IPM310A50-1111-1',
      'IPM310mA-1001-1',  'IPM310mA-1101-1',   'IPM310mA-1111-1',
      'IPM310mV-1001-1',  'IPM310mV-1001-2',   'IPM310mV-1011-1', 'IPM310mV-1101-1', 'IPM310mV-1111-1',
      'IPM310R08-1001-1', 'IPM310R08-1101-1',  'IPM310R08-1111-1',
      'IPM310R15-1001-1', 'IPM310R15-1011-1',  'IPM310R15-1101-1', 'IPM310R15-1111-1',
      'IPM310R35-1001-1', 'IPM310R35-1101-1',  'IPM310R35-1111-1',
      'IPM310R40-1001-1', 'IPM310R60-1111-1',
    ],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'IPPowerMeter-Datasheet.pdf', lang: 'TH' },
      { label: 'Modbus Register Map', type: 'register-map', filename: 'IPPowerMeter-RegisterMap.pdf', lang: 'EN' },
    ],
    faqs: [
      { q: 'เชื่อมต่อ SCADA ได้ไหม?', a: 'ได้ผ่าน Modbus TCP/IP โดยตรง ไม่ต้องใช้ Converter' },
      { q: 'ต่อกับ PLC ได้มั้ย?', a: 'ได้ทั้ง Modbus RTU (RS-485) และ Modbus TCP/IP (Ethernet)' },
      { q: 'CT แบบไหนใช้ได้?', a: 'รองรับ CT มาตรฐาน xx/5A (A50), xx/mA, xx/333mV, Split-Core 80/150/350/400/600A (R08-R60) และ Rogowski' },
    ],
  },
  {
    id: 'ethernet-io',
    name: 'Ethernet I/O Module',
    slug: 'ethernet-io',
    category: 'ethernet-io',
    shortDescription: 'Remote I/O ผ่าน Ethernet Modbus TCP/IP ควบคุม DI/DO/AI จากระยะไกล',
    description:
      'Ethernet I/O Module ทำหน้าที่เป็น Remote I/O ส่งสถานะ Digital Input/Output และค่า Analog Input ผ่าน Ethernet Modbus TCP/IP เหมาะสำหรับระบบ SCADA ที่ต้องการ I/O จากหลายจุดในโรงงานโดยไม่ต้องเดินสาย Fieldbus',
    image: 'ethernet-io.svg',
    tags: ['Ethernet I/O', 'Remote I/O', 'Modbus TCP', 'Digital', 'Analog'],
    features: [
      'Digital Input/Output และ Analog Input ผ่าน Ethernet',
      'รองรับ Modbus TCP/IP',
      'ตั้งค่าผ่าน Web Browser',
      'ทำงานเป็น Standalone หรือร่วมกับ PLC/SCADA',
      'ช่วยลดค่าใช้จ่ายในการเดินสาย Fieldbus ระยะไกล',
    ],
    specs: [
      { label: 'Digital Input',    value: '8–16 จุด (ตามรุ่น)' },
      { label: 'Digital Output',   value: '8–16 จุด, Relay หรือ Transistor' },
      { label: 'Analog Input',     value: '4–8 จุด, 4-20mA / 0-10V' },
      { label: 'Protocol',         value: 'Modbus TCP/IP' },
      { label: 'Interface',        value: 'Ethernet 10/100 Mbps' },
      { label: 'แรงดันไฟเลี้ยง',  value: '12–24V DC' },
    ],
    relatedProducts: ['ethernet-io-analog', 'ethernet-io-temperature', 'iot-mix-io'],
    featured: false,
    model: 'EIO-DI/DQ Series',
    protocols: ['Modbus TCP', 'Ethernet'],
    inputTypes: ['Digital 24V DC'],
    applications: ['Remote I/O', 'Factory Dashboard', 'Modbus Data Logger'],
    variants: [
      'EIO-16DI', 'EIO-16DI-2',
      'EIO-32DI', 'EIO-32DI-2',
      'EIO-16DQ', 'EIO-16DQ-2',
      'EIO-32DQ', 'EIO-32DQ-2', 'EIO-64DQ',
      'EIO-16DI-16DQ', 'EIO-16DI-16DQ-2',
      'EIO-8DI-8DQ', 'EIO-8DI-8DQ-2',
    ],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'EthernetIO-Datasheet.pdf', lang: 'TH' },
    ],
  },
  {
    id: 'process-meter',
    name: 'Process Meter',
    slug: 'process-meter',
    category: 'process-meter',
    shortDescription: 'วัดและแสดงค่า Process Signal 4-20mA / 0-10V / Thermocouple / PT100',
    description:
      'Process Meter Panel Mount วัดและแสดงค่า Process Signal หลากหลายรูปแบบ ทั้ง 4-20mA, 0-10V, Thermocouple และ PT100 พร้อม Relay Output สำหรับ Alarm ตั้งค่า Setpoint ได้ รองรับ RS-485 Modbus RTU สำหรับการส่งข้อมูลเข้าระบบ SCADA',
    image: 'process-meter.svg',
    tags: ['Process Meter', '4-20mA', 'Temperature', 'Modbus', 'Alarm'],
    features: [
      'รับ Input หลายรูปแบบ: 4-20mA, 0-10V, TC, RTD',
      'Relay Output 2 จุดสำหรับ Hi/Lo Alarm',
      'ตั้งค่า Setpoint และ Scaling ได้',
      'RS-485 Modbus RTU',
      'Panel Mount 48×96 หรือ 96×96 มม.',
    ],
    specs: [
      { label: 'Input',            value: '4-20mA / 0-10V / Thermocouple / PT100 (ตามรุ่น)' },
      { label: 'Output',           value: '2 Relay (SPDT), Modbus RTU RS-485' },
      { label: 'ความแม่นยำ',       value: '±0.2% FS' },
      { label: 'หน้าจอ',          value: 'LED 4 หลัก' },
      { label: 'ขนาด',             value: 'Panel Mount 48×96 หรือ 96×96 มม.' },
      { label: 'แรงดันไฟเลี้ยง',  value: '85–265V AC/DC' },
    ],
    relatedProducts: ['temperature-meter', 'universal-process-meter', 'process-meter-6-digit'],
    featured: false,
    model: 'DP2-B11',
    protocols: ['Modbus RTU', 'RS485'],
    inputTypes: ['4-20mA', '0-10V', 'Thermocouple', 'PT100'],
    applications: ['Temperature Monitoring', 'Tank Level Monitoring', 'Factory Dashboard'],
    variants: [
      'DP2-B11-1100-1', 'DP2-B11-1100-1A', 'DP2-B11-1100-2',
      'DP2-B11-1101-1', 'DP2-B11-1101-2',
      'DP2-B11-1110-1', 'DP2-B11-1110-2',
      'DP2-B11-1111-1', 'DP2-B11-1111-2',
      'DP1-B12-1100-1', 'DP1-B12-1110-1',
    ],
    downloads: [
      { label: 'Datasheet', type: 'datasheet', filename: 'ProcessMeter-Datasheet.pdf', lang: 'TH' },
      { label: 'คู่มือการใช้งาน', type: 'manual', filename: 'ProcessMeter-Manual-TH.pdf', lang: 'TH' },
    ],
  },

  // ==========================================================================
  // ============== AC POWER & ENERGY METERS ==================================
  // ==========================================================================

  {
    id: 'ipm320-iot-power-meter',
    name: 'IPM320 IoT Power Meter',
    slug: 'ipm320-iot-power-meter',
    category: 'iot-mqtt',
    shortDescription: 'Power Meter 3 เฟส ส่งข้อมูลผ่าน MQTT เชื่อมต่อ Cloud โดยตรง',
    description:
      'IPM320 พัฒนาต่อจาก IPM310 — เพิ่ม MQTT Protocol ในตัว ส่งข้อมูลพลังงาน 3 เฟสเข้า Cloud Platform (FW.True / Node-RED / ThingsBoard) ได้โดยตรงผ่าน Ethernet ไม่ต้องใช้ IoT Gateway แยก',
    image: 'ip-power-meter.svg',
    tags: ['Power Meter', 'IoT', 'MQTT', '3-Phase', 'IPM320'],
    features: [
      'วัด 3 เฟสครบถ้วน + ส่ง MQTT ในตัว',
      'รองรับ FW.True Cloud Platform',
      'Modbus TCP/IP + Modbus RTU + MQTT',
      'ตั้งค่าผ่าน Web Browser',
    ],
    specs: [
      { label: 'การวัด',         value: 'V, A, W, VAR, VA, PF, Hz, kWh' },
      { label: 'การสื่อสาร',    value: 'MQTT + Modbus TCP/IP + Modbus RTU' },
      { label: 'Interface',     value: 'Ethernet 10/100 + RS-485' },
    ],
    relatedProducts: ['ip-power-meter', 'pqm510', 'iot-mix-io'],
    model: 'IPM320',
    protocols: ['MQTT', 'Modbus TCP', 'Modbus RTU', 'RS485', 'Ethernet'],
    applications: ['IoT Cloud', 'Energy Monitoring', 'Factory Dashboard'],
    variants: ['IPM320', 'IPM320mV-1001-1', 'IPM320mV-1001-2'],
  },

  {
    id: 'multi-channel-kwh-meter',
    name: 'IP Multi-Channel kWh Meter',
    slug: 'multi-channel-kwh-meter',
    category: 'ac-meter',
    subcategory: 'ac-multi-channel',
    shortDescription: 'kWh Meter หลายวงจรในตัวเดียว 6/12/18 channel ผ่าน Ethernet Modbus TCP/IP',
    description:
      'IPkwh Multi-Channel kWh Meter วัดพลังงานหลายวงจรพร้อมกันในเครื่องเดียว เลือกได้ 6, 12 หรือ 18 channel เหมาะสำหรับโรงงานหรืออาคารที่ต้องการแยกบิลตามแผนกหรือตามเครื่องจักร ลดต้นทุนเทียบกับติดมิเตอร์แยก',
    image: 'ip-power-meter.svg',
    tags: ['kWh Meter', 'Multi-Channel', 'Sub-Metering', 'Modbus TCP'],
    features: [
      'วัดได้ 6, 12 หรือ 18 channel ในเครื่องเดียว',
      'ส่งข้อมูลทุก channel ผ่าน Modbus TCP/IP',
      'รองรับ CT แบบ mA และ mV',
      'ติดตั้งบน DIN Rail',
    ],
    specs: [
      { label: 'จำนวน Channel',  value: '6 / 12 / 18 (ตามรุ่น)' },
      { label: 'การวัด',         value: 'V, A, W, kWh ต่อ channel' },
      { label: 'CT Input',      value: 'mA หรือ mV' },
      { label: 'การสื่อสาร',    value: 'Ethernet Modbus TCP/IP' },
    ],
    relatedProducts: ['ip-power-meter', 'pqm510'],
    model: 'IPkwh',
    protocols: ['Modbus TCP', 'Ethernet'],
    applications: ['Sub-Metering', 'Energy Monitoring', 'Factory Dashboard'],
    variants: [
      'IPkwh23643', 'IPkwh23644',
      'IPkwh23653', 'IPkwh23654',
      'IPkwh23663', 'IPkwh23664',
    ],
  },

  {
    id: 'em-energy-meter-1ph',
    name: 'EM AC 1-Phase Energy Meter',
    slug: 'em-energy-meter-1ph',
    category: 'ac-meter',
    subcategory: 'ac-1phase',
    shortDescription: 'มิเตอร์พลังงาน 1 เฟสติด DIN Rail พร้อม RS-485 Modbus RTU',
    description:
      'EM Series — Energy Meter AC 1 เฟส ติดตั้งบน DIN Rail วัด V, A, W, kWh พร้อมเอาต์พุต RS-485 Modbus RTU เลือก CT input ได้ 3 แบบ — Direct (xx/5A), mA, หรือ 333mV',
    image: 'pqm510.svg',
    tags: ['Energy Meter', 'kWh', '1-Phase', 'DIN Rail', 'Modbus RTU'],
    features: [
      'วัด V, A, W, kWh, PF, Hz',
      'CT input 5A / mA / 333mV',
      'ติดตั้งบน DIN Rail',
      'RS-485 Modbus RTU',
    ],
    specs: [
      { label: 'ประเภท',         value: '1 เฟส 2 สาย' },
      { label: 'CT Input',      value: 'xx/5A (EM120) / mA (EM130) / 333mV (EM140)' },
      { label: 'การสื่อสาร',    value: 'RS-485 Modbus RTU' },
    ],
    relatedProducts: ['ip-power-meter', 'multi-channel-kwh-meter'],
    model: 'EM120 / EM130 / EM140',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Energy Monitoring', 'Sub-Metering'],
    variants: ['EM120', 'EM130', 'EM140'],
  },

  {
    id: 'mobile-power-meter',
    name: 'Mobile Power Meter (MPM Set)',
    slug: 'mobile-power-meter',
    category: 'portable-set',
    shortDescription: 'ชุด Power Quality Meter พกพา + Clamp-on CT / Rogowski สำหรับ Audit',
    description:
      'Mobile Power Meter Set ชุด PQM510 พร้อม Clamp-on CT หรือ Rogowski Coil สำหรับงาน Energy Audit และตรวจวัดคุณภาพไฟฟ้าชั่วคราว ติดตั้งและถอดง่าย ไม่ต้องตัดไฟ — มีรุ่น 4G ในตัวสำหรับส่งข้อมูล Cloud โดยอัตโนมัติ',
    image: 'pqm510.svg',
    tags: ['Mobile', 'Portable', 'Energy Audit', 'PQM', 'Clamp-on CT', 'Rogowski', '4G'],
    features: [
      'ชุดพกพา PQM510 + Flex CT / Clamp-on CT',
      'ติดตั้งโดยไม่ต้องตัดไฟ',
      'รุ่น 7G มี 4G ในตัวส่งข้อมูล Cloud',
      'เลือก CT ได้ 200A / 600A / 1500A / 3000A',
    ],
    specs: [
      { label: 'CT Options',    value: 'Clamp 200A/600A, Rogowski 1500A/3000A' },
      { label: 'การสื่อสาร',    value: 'Ethernet + 4G (รุ่น 7G)' },
      { label: 'Use Case',      value: 'Energy Audit / Temporary Monitoring' },
    ],
    relatedProducts: ['pqm510', 'ip-power-meter'],
    model: 'MPM-SET',
    protocols: ['Modbus TCP', 'Ethernet', '4G'],
    applications: ['Energy Audit', 'Temporary Monitoring', 'Factory Dashboard'],
    variants: [
      'MPM-SET1', 'MPM-SET1.7G',
      'MPM-SET2', 'MPM-SET2.7G',
      'MPM-SET3', 'MPM-SET3.7G',
      'MPM-SET4', 'MPM-SET4.7G',
      'MPM-SET5.7G',
      'MPM-SET71', 'MPM-SET72', 'MPM-SET73', 'MPM-SET76',
    ],
  },

  {
    id: 'mpm-chiller-set',
    name: 'Mobile Power Meter — Chiller Audit Set',
    slug: 'mpm-chiller-set',
    category: 'portable-set',
    shortDescription: 'ชุดวัดประสิทธิภาพ Chiller ครบชุดพร้อม CT 600A / 1500A / 3000A 4G',
    description:
      'ชุดเฉพาะสำหรับวัดประสิทธิภาพ Chiller — รวม PQM510, CT, และอุปกรณ์ครบชุดในกระเป๋าพกพา ส่งข้อมูลผ่าน 4G เพื่อ Audit ประสิทธิภาพระบบ Chiller ในโรงงานอุตสาหกรรม',
    image: 'pqm510.svg',
    tags: ['Chiller', 'Energy Audit', 'kW/RT', '4G', 'Portable'],
    features: [
      'ชุดวัดประสิทธิภาพ Chiller ครบชุด',
      'CT 600A / 1500A / 3000A',
      '4G ในตัวส่งข้อมูลอัตโนมัติ',
      'เหมาะกับงาน Energy Service Company (ESCO)',
    ],
    specs: [
      { label: 'CT Options',    value: 'Clamp 600A / Rogowski 1500A / 3000A' },
      { label: 'การสื่อสาร',    value: '4G + Ethernet' },
    ],
    relatedProducts: ['mobile-power-meter', 'pqm510'],
    model: 'MPM-Chiller',
    protocols: ['4G', 'Modbus TCP'],
    applications: ['Chiller Audit', 'Energy Audit'],
    variants: ['MPM-Chiller Set', 'MPM-Chiller Set1', 'MPM-Chiller Set2'],
  },

  {
    id: 'digital-power-transducer',
    name: 'Digital Power Transducer (MPW-400)',
    slug: 'digital-power-transducer',
    category: 'transmitter',
    shortDescription: 'แปลงค่าพลังงานไฟฟ้า 3 เฟสเป็นสัญญาณ 4-20mA',
    description:
      'MPW-400 Digital Power Transducer แปลงค่าพลังงานไฟฟ้า (V, A, W, VAR, PF) 3 เฟสเป็นสัญญาณ Analog 4-20mA หรือ 0-10V สำหรับส่งให้ PLC หรือ DCS ที่ไม่มีพอร์ต Modbus',
    image: 'process-meter.svg',
    tags: ['Transducer', 'Power', '4-20mA', 'AC 3-Phase'],
    features: [
      'แปลง V/A/W/VAR/PF เป็น 4-20mA หรือ 0-10V',
      'รองรับ AC 3 เฟส',
      'มี RS-485 Modbus RTU เพิ่มเติม',
    ],
    specs: [
      { label: 'Input',          value: 'AC 3 Phase' },
      { label: 'Output',         value: '4-20mA หรือ 0-10V (เลือกได้)' },
      { label: 'การสื่อสาร',    value: 'RS-485 Modbus RTU (option)' },
    ],
    relatedProducts: ['ip-power-meter', 'transmitter-utac'],
    model: 'MPW-400',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Power Transducer', 'PLC Interface'],
    variants: ['MPW-400'],
  },

  // ==========================================================================
  // ============== DC METERS =================================================
  // ==========================================================================

  {
    id: 'dc-voltage-meter',
    name: 'DC Voltage Meter (DC2-B11)',
    slug: 'dc-voltage-meter',
    category: 'dc-meter',
    shortDescription: 'มิเตอร์วัดแรงดัน DC แบบ Panel Mount พร้อม RS-485 และ 4-20mA',
    description:
      'DC2-B11 Series — DC Voltage Meter Panel Mount แสดงค่าแรงดัน DC บนหน้าจอ LED 4 หลัก เลือก option ได้: RS-485 Modbus RTU, Analog Output 6-in-1, แรงดันไฟเลี้ยง 220Vac หรือ 24Vdc',
    image: 'process-meter.svg',
    tags: ['DC Meter', 'Voltage', 'Modbus', '4-20mA'],
    features: [
      'วัด DC Voltage ตาม range ที่กำหนด',
      'หน้าจอ LED 4 หลัก',
      'Option RS-485 / Analog Out',
      'Panel Mount 48×96 มม.',
    ],
    specs: [
      { label: 'Input',         value: 'DC Voltage (range ตามสั่ง)' },
      { label: 'Display',       value: 'LED 4 หลัก' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
      { label: 'Power',         value: '220Vac (สุดท้าย -1) หรือ 24Vdc (-2)' },
    ],
    relatedProducts: ['dc-amp-meter', 'dc-power-meter', 'amp-hour-meter'],
    model: 'DC2-B11',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Solar Monitoring', 'DC Battery System', 'EV Charger'],
    variants: [
      'DC2-B11-1100-1', 'DC2-B11-1100-2',
      'DC2-B11-1101-1', 'DC2-B11-1101-2',
      'DC2-B11-1110-1', 'DC2-B11-1110-2',
      'DC2-B11-1111-1', 'DC2-B11-1111-2', 'DC2-B11-1111-3',
    ],
  },

  {
    id: 'dc-amp-meter',
    name: 'DC Amp Meter (DC2-B21)',
    slug: 'dc-amp-meter',
    category: 'dc-meter',
    shortDescription: 'มิเตอร์วัดกระแส DC ใช้กับ CT 0-5A พร้อม option RS-485 / 4-20mA',
    description:
      'DC2-B21 Series — DC Amp Meter ใช้คู่กับ DC Current Sensor 0-5A (ภายใน) แสดงผลบน LED 4 หลัก รองรับ Scaling, RS-485 Modbus RTU, และ Analog Output 6-in-1',
    image: 'process-meter.svg',
    tags: ['DC Meter', 'Current', 'Amp', 'Modbus'],
    features: [
      'วัดกระแส DC 0-5A (Internal Shunt)',
      'หน้าจอ LED 4 หลัก',
      'Option RS-485 / Analog Out',
    ],
    specs: [
      { label: 'Input',         value: 'DC Current 0-5A (Internal Shunt)' },
      { label: 'Display',       value: 'LED 4 หลัก' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['dc-voltage-meter', 'dc-amp-meter-external-shunt', 'dc-power-meter'],
    model: 'DC2-B21',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Solar Monitoring', 'DC Battery System'],
    variants: [
      'DC2-B21-1100-1', 'DC2-B21-1100-2',
      'DC2-B21-1101-1', 'DC2-B21-1101-2',
      'DC2-B21-1110-1', 'DC2-B21-1110-2',
      'DC2-B21-1111-1',
    ],
  },

  {
    id: 'dc-amp-meter-external-shunt',
    name: 'DC Amp Meter — External Shunt (DC2-B22)',
    slug: 'dc-amp-meter-external-shunt',
    category: 'dc-meter',
    shortDescription: 'มิเตอร์วัดกระแส DC ใช้กับ Shunt 200mV ภายนอก รองรับ Scaling',
    description:
      'DC2-B22 Series — DC Amp Meter ใช้คู่กับ Shunt 200mV ภายนอก (External R-Shunt) เหมาะกับงานวัดกระแส DC สูง ๆ ตั้งแต่ 50A ขึ้นไป มี Scaling ในตัว',
    image: 'process-meter.svg',
    tags: ['DC Meter', 'Current', 'Shunt', 'Modbus'],
    features: [
      'วัดกระแส DC ผ่าน Shunt 200mV ภายนอก',
      'รองรับ Scaling ค่ากระแสจริง',
      'Option RS-485 / Analog Out',
    ],
    specs: [
      { label: 'Input',         value: '0-200mV (cross R-Shunt)' },
      { label: 'Range',         value: '50A ขึ้นไป (ตามขนาด Shunt)' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['dc-amp-meter', 'dc-power-meter', 'amp-hour-meter'],
    model: 'DC2-B22',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Solar Monitoring', 'DC Battery System', 'Battery Charging Station'],
    variants: [
      'DC2-B22-1100-1', 'DC2-B22-1100-2',
      'DC2-B22-1101-1', 'DC2-B22-1101-2',
      'DC2-B22-1110-1', 'DC2-B22-1110-2',
      'DC2-B22-1111-1', 'DC2-B22-1111-2',
    ],
  },

  {
    id: 'dc-power-meter',
    name: 'DC Power Meter (DC2-B41)',
    slug: 'dc-power-meter',
    category: 'dc-meter',
    shortDescription: 'มิเตอร์วัดพลังงาน DC ครบ Volt + Amp + kW + kWh พร้อม RS-485',
    description:
      'DC2-B41 Series — DC Power Meter วัด V, A, kW, kWh DC ในเครื่องเดียว เหมาะสำหรับ Solar System, Battery Storage และ EV Charging Station มี Scaling ในตัวพร้อม Option RS-485 และ 4-20mA',
    image: 'process-meter.svg',
    tags: ['DC Power', 'kWh', 'Solar', 'Battery', 'Modbus'],
    features: [
      'วัด V, A, kW, kWh DC ครบ',
      'รองรับ Scaling ค่ากระแสจริง',
      'Option RS-485 / Analog Out',
    ],
    specs: [
      { label: 'การวัด',        value: 'V, A, kW, kWh DC' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['dc-voltage-meter', 'dc-amp-meter', 'amp-hour-meter'],
    model: 'DC2-B41',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Solar Monitoring', 'EV Charger', 'Battery Storage'],
    variants: [
      'DC2-B41-1101-1', 'DC2-B41-1101-2', 'DC2-B41-1101-3',
      'DC2-B41-1111-1', 'DC2-B41-1111-2',
    ],
  },

  {
    id: 'amp-hour-meter',
    name: 'Amp-Hour Meter (DC2-B42)',
    slug: 'amp-hour-meter',
    category: 'dc-meter',
    shortDescription: 'มิเตอร์นับ Amp-Hour สำหรับ Battery Charging / Plating Process',
    description:
      'DC2-B42 Series — Amp-Hour Meter นับปริมาณ Amp-Hour ที่ผ่าน เหมาะสำหรับงาน Battery Charging, Electroplating, Anodizing ที่ต้องควบคุมปริมาณกระแสรวม',
    image: 'process-meter.svg',
    tags: ['Ampere-Hour', 'Plating', 'Battery', 'Modbus'],
    features: [
      'นับ Ampere-Hour สะสม',
      'Reset ได้เมื่อต้องการ',
      'Option RS-485 / Analog Out',
    ],
    specs: [
      { label: 'การวัด',        value: 'Ampere-Hour (Ah)' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
      { label: 'Power',         value: '220Vac หรือ 24Vdc (ตามรุ่น)' },
    ],
    relatedProducts: ['dc-power-meter', 'dc-amp-meter'],
    model: 'DC2-B42',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Electroplating', 'Battery Charging Station', 'Anodizing'],
    variants: [
      'DC2-B42-1100-1', 'DC2-B42-1101-1',
      'DC2-B42-1110-1', 'DC2-B42-1111-1', 'DC2-B42-1111-2',
    ],
  },

  // ==========================================================================
  // ============== PROCESS & TEMPERATURE METERS ==============================
  // ==========================================================================

  {
    id: 'process-meter-6-digit',
    name: 'Digital Process Meter — 6 Digit (DP2-B12)',
    slug: 'process-meter-6-digit',
    category: 'process-meter',
    subcategory: 'process-4-20',
    shortDescription: 'Process Meter หน้าจอ 6 หลัก 0.56" สำหรับค่าใหญ่ ๆ ที่ต้องการความละเอียด',
    description:
      'DP2-B12 Series — Process Meter หน้าจอ LED 6 หลัก 0.56" 1 แถว เหมาะกับการแสดงค่าที่มีจำนวนหลักเยอะ เช่น น้ำหนัก, Flow Rate, Volume รองรับ Input หลากหลายและ Option RS-485 / 4-20mA',
    image: 'process-meter.svg',
    tags: ['Process Meter', '6 Digit', 'Flow', 'Volume', 'Modbus'],
    features: [
      'หน้าจอ LED 6 หลัก 0.56"',
      'Input 4-20mA / 0-10V / Custom',
      'Option RS-485 / 4-20mA Output',
    ],
    specs: [
      { label: 'Display',       value: 'LED 6 หลัก 0.56"' },
      { label: 'Input',         value: '4-20mA / 0-10V (custom-config)' },
      { label: 'Options',       value: 'RS-485 / 4-20mA Output' },
    ],
    relatedProducts: ['process-meter', 'universal-process-meter', 'rate-totalizer-relay'],
    model: 'DP2-B12',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Tank Level Monitoring', 'Flow Display', 'Production Counter'],
    variants: [
      'DP2-B12-1100-1', 'DP2-B12-1100-2',
      'DP2-B12-1101-1', 'DP2-B12-1101-2',
      'DP2-B12-1110-1', 'DP2-B12-1110-2',
      'DP2-B12-1111-1',
    ],
  },

  {
    id: 'universal-process-meter',
    name: 'Universal Process Meter (DPU)',
    slug: 'universal-process-meter',
    category: 'process-meter',
    subcategory: 'universal-input',
    shortDescription: 'Process Meter Universal Input รับสัญญาณได้ทุกแบบในตัวเดียว',
    description:
      'DPU Series — Universal Process Meter รับ Input ได้ทุกประเภท: 4-20mA, 0-10V, Thermocouple, RTD, Pulse, Frequency เพียงตัวเดียว รองรับ Scaling, Multi-Range, RS-485 Modbus RTU เหมาะสำหรับงานที่ Input หลากหลาย',
    image: 'process-meter.svg',
    tags: ['Universal', 'Process Meter', 'Multi-Input', 'Modbus'],
    features: [
      'รับ Input หลายประเภทในตัวเดียว',
      'Configurable Scaling',
      'Option RS-485 / 4-20mA Output',
    ],
    specs: [
      { label: 'Input',         value: '4-20mA / 0-10V / TC / RTD / Pulse' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['process-meter', 'process-meter-6-digit', 'temperature-meter'],
    model: 'DPU',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Process Display', 'Temperature Monitoring', 'Flow Display'],
    variants: [
      'DPU-1100-1', 'DPU-1100-2',
      'DPU-1101-1', 'DPU-1101-2',
      'DPU-1110-1', 'DPU-1111-1',
    ],
  },

  {
    id: 'temperature-meter',
    name: 'Temperature Meter — RTD / Thermocouple (DP2-B41)',
    slug: 'temperature-meter',
    category: 'process-meter',
    subcategory: 'universal-input',
    shortDescription: 'มิเตอร์วัดอุณหภูมิ RTD (PT100) / Thermocouple พร้อม Relay & RS-485',
    description:
      'DP2-B41 Series — Temperature Meter รับ RTD (PT100) หรือ Thermocouple Type K/J/T/R/S/B พร้อม Relay 2 จุดสำหรับ Hi/Lo Alarm และ Option RS-485 / 4-20mA Output',
    image: 'process-meter.svg',
    tags: ['Temperature', 'RTD', 'PT100', 'Thermocouple', 'Modbus'],
    features: [
      'Input RTD (PT100) / Thermocouple Type K, J, T, R, S, B',
      'Relay 2 จุด Hi/Lo Alarm',
      'Option RS-485 / 4-20mA Output',
    ],
    specs: [
      { label: 'Input',         value: 'RTD PT100 / Thermocouple K/J/T/R/S/B' },
      { label: 'Range',         value: '-200°C ถึง 1700°C (ตาม Sensor)' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['process-meter', 'dual-temperature-meter', 'temperature-meter-4ch'],
    model: 'DP2-B41',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Temperature Monitoring', 'Furnace Control', 'Cold Storage Monitoring'],
    variants: [
      'DP2-B41-1100-1', 'DP2-B41-1100-1.2', 'DP2-B41-1100-2',
      'DP2-B41-1101-1', 'DP2-B41-1101-1.2', 'DP2-B41-1101-2',
      'DP2-B41-1110-1', 'DP2-B41-1110-1.2', 'DP2-B41-1110-2',
      'DP2-B41-1111-1', 'DP2-B41-1111-2',
    ],
  },

  {
    id: 'dual-temperature-meter',
    name: 'Dual Temperature Meter (DP2-B42)',
    slug: 'dual-temperature-meter',
    category: 'process-meter',
    subcategory: 'universal-input',
    shortDescription: 'มิเตอร์วัดอุณหภูมิ 2 จุดในเครื่องเดียว แสดงพร้อมกันบนจอเดียว',
    description:
      'DP2-B42 — Dual Temperature Meter วัดอุณหภูมิ 2 จุดพร้อมกัน แสดงผลบนหน้าจอเดียวกัน เหมาะสำหรับเปรียบเทียบ Inlet/Outlet หรือควบคุม Differential Temperature',
    image: 'process-meter.svg',
    tags: ['Dual Temperature', 'PT100', 'Thermocouple', 'Inlet Outlet'],
    features: [
      'วัด 2 channel พร้อมกัน',
      'Display 2 ค่าในจอเดียว',
      'Option RS-485 / Analog Out',
    ],
    specs: [
      { label: 'Channel',       value: '2 จุด' },
      { label: 'Input',         value: 'RTD / Thermocouple' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['temperature-meter', 'diff-temperature-meter', 'temperature-meter-4ch'],
    model: 'DP2-B42',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Heat Exchanger Monitoring', 'Inlet/Outlet Monitoring'],
    variants: [
      'DP2-B42-1100-1', 'DP2-B42-1101-1',
      'DP2-B42-1110-1', 'DP2-B42-1111-1',
    ],
  },

  {
    id: 'diff-temperature-meter',
    name: 'Differential Temperature Meter (DP2-B43)',
    slug: 'diff-temperature-meter',
    category: 'process-meter',
    subcategory: 'universal-input',
    shortDescription: 'แสดงผลต่างอุณหภูมิ (ΔT) ระหว่าง 2 จุด พร้อม RS-485',
    description:
      'DP2-B43 — Differential Temperature Meter คำนวณและแสดงผลต่างอุณหภูมิ (ΔT = T1 − T2) ระหว่าง 2 จุดวัดโดยอัตโนมัติ มี RS-485 Modbus RTU ในตัว',
    image: 'process-meter.svg',
    tags: ['Differential Temperature', 'Delta T', 'Modbus'],
    features: [
      'คำนวณ ΔT อัตโนมัติ',
      'แสดง T1, T2, ΔT พร้อมกัน',
      'RS-485 Modbus RTU',
    ],
    specs: [
      { label: 'การคำนวณ',     value: 'ΔT = T1 − T2' },
      { label: 'การสื่อสาร',   value: 'RS-485 Modbus RTU' },
    ],
    relatedProducts: ['dual-temperature-meter', 'temperature-meter'],
    model: 'DP2-B43',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Heat Exchanger Efficiency', 'Cooling Tower Monitoring'],
    variants: ['DP2-B43-1101-1'],
  },

  {
    id: 'temperature-meter-4ch',
    name: 'Temperature Meter — 4 Channel (DP2-B42-4)',
    slug: 'temperature-meter-4ch',
    category: 'multi-temperature',
    shortDescription: 'มิเตอร์วัดอุณหภูมิ 4 จุดในเครื่องเดียว RTD / Thermocouple',
    description:
      'DP2-B42-4 — มิเตอร์วัดอุณหภูมิ 4 channel ในเครื่องเดียว รับได้ทั้ง RTD และ Thermocouple ส่งข้อมูลผ่าน RS-485 Modbus RTU เหมาะสำหรับมอนิเตอร์อุณหภูมิหลายจุดในระบบเดียว',
    image: 'process-meter.svg',
    tags: ['Temperature', '4 Channel', 'Multi-Input', 'PT100'],
    features: [
      '4 จุดวัดพร้อมกัน',
      'รองรับทั้ง RTD และ TC',
      'RS-485 Modbus RTU',
    ],
    specs: [
      { label: 'Channel',       value: '4 จุด' },
      { label: 'Input',         value: 'RTD / Thermocouple (เลือก mix ได้)' },
    ],
    relatedProducts: ['multi-temperature-monitor', 'temperature-meter'],
    model: 'DP2-B42-4',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Multi-Point Temperature Monitoring', 'Cold Storage Monitoring'],
    variants: ['DP2-B42-4'],
  },

  // ==========================================================================
  // ============== COUNTER / RATE / TOTALIZER ================================
  // ==========================================================================

  {
    id: 'digital-counter',
    name: 'Digital Counter (CT2-B21)',
    slug: 'digital-counter',
    category: 'counter-rate',
    shortDescription: 'Digital Counter 6 หลัก 10 kHz พร้อม option RS-485 / Analog Out',
    description:
      'CT2-B21 Series — Digital Counter 6 หลัก รองรับความถี่สูงสุด 10 kHz เหมาะสำหรับงานนับชิ้นงาน, นับ Pulse จาก Encoder, นับรอบเครื่องจักร มี Reset Input และ Option RS-485 / 4-20mA',
    image: 'process-meter.svg',
    tags: ['Counter', 'Pulse', 'Encoder', '10kHz'],
    features: [
      'หน้าจอ 6 หลัก',
      'ความถี่สูงสุด 10 kHz',
      'Reset Input + Setpoint Output',
      'Option RS-485 / 4-20mA',
    ],
    specs: [
      { label: 'Display',       value: 'LED 6 หลัก' },
      { label: 'Max Frequency', value: '10 kHz' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['counter-rate-meter', 'pulse-rate-totalizer'],
    model: 'CT2-B21',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Production Counter', 'Encoder Counting', 'Batch Counter'],
    variants: [
      'CT2-B21-1100-1', 'CT2-B21-1100-2',
      'CT2-B21-1101-1', 'CT2-B21-1101-2',
      'CT2-B21-1110-1', 'CT2-B21-1110-2',
      'CT2-B21-1111-1', 'CT2-B21-1111-2',
    ],
  },

  {
    id: 'counter-rate-meter',
    name: 'Counter & Rate Meter (RC1-C11)',
    slug: 'counter-rate-meter',
    category: 'counter-rate',
    shortDescription: 'นับชิ้นงานพร้อมแสดงอัตราการผลิต (ชิ้น/นาที) ในเครื่องเดียว',
    description:
      'RC1-C11 — Counter & Rate Meter แสดงทั้งจำนวนสะสมและอัตราการผลิต (Rate) บนจอเดียวกัน เหมาะกับสายการผลิตที่ต้องดู Production Rate Real-time มี Option RS-485 / 4-20mA',
    image: 'process-meter.svg',
    tags: ['Counter', 'Rate', 'Production'],
    features: [
      'แสดง Count + Rate พร้อมกัน',
      'หน่วย Rate กำหนดได้ (ชิ้น/นาที, /ชม.)',
      'Option RS-485 / 4-20mA',
    ],
    specs: [
      { label: 'Display',       value: 'LED 6 หลัก' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['digital-counter', 'pulse-rate-totalizer'],
    model: 'RC1-C11',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Production Counter', 'Rate Display'],
    variants: [
      'RC1-C11', 'RC1-C11-0001-1',
      'RC1-C11-1110-1', 'RC1-C11-1111-1',
    ],
  },

  {
    id: 'analog-rate-totalizer',
    name: 'Analog Rate & Totalizer (RC2-B12)',
    slug: 'analog-rate-totalizer',
    category: 'rate-totalizer',
    shortDescription: 'รับสัญญาณ 4-20mA แล้วคำนวณ Rate และ Totalizer สำหรับ Flow / Volume',
    description:
      'RC2-B12 Series — Analog Rate & Totalizer รับสัญญาณ Analog 4-20mA / 0-10V แล้วคำนวณอัตราการไหล (Rate) และปริมาณรวม (Totalizer) เหมาะสำหรับ Flow Meter Analog ที่ไม่มี Display ในตัว',
    image: 'process-meter.svg',
    tags: ['Flow', 'Totalizer', '4-20mA', 'Volume'],
    features: [
      'Input 4-20mA / 0-10V',
      'แสดง Rate + Total พร้อมกัน',
      'Option RS-485 / 4-20mA Output',
    ],
    specs: [
      { label: 'Input',         value: '4-20mA / 0-10V' },
      { label: 'Display',       value: 'Rate + Total พร้อมกัน' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['pulse-rate-totalizer', 'rate-totalizer-relay'],
    model: 'RC2-B12',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Flow Display', 'Volume Totalizer'],
    variants: [
      'RC2-B12-1100-1', 'RC2-B12-1100-2',
      'RC2-B12-1101-1', 'RC2-B12-1101-2',
      'RC2-B12-1110-1',
      'RC2-B12-1111-1', 'RC2-B12-1111-2',
    ],
  },

  {
    id: 'pulse-rate-totalizer',
    name: 'Pulse Rate & Totalizer (RC3-B12)',
    slug: 'pulse-rate-totalizer',
    category: 'rate-totalizer',
    shortDescription: 'นับ Pulse จาก Flow Meter หรือ Encoder คำนวณ Rate + Total',
    description:
      'RC3-B12 Series — Pulse Rate & Totalizer รับ Input Pulse แล้วคำนวณ Rate และ Total เหมาะสำหรับ Flow Meter แบบ Pulse Output, Encoder, หรือ Tachometer',
    image: 'process-meter.svg',
    tags: ['Pulse', 'Flow', 'Totalizer', 'Encoder'],
    features: [
      'Input Pulse (Open Collector / NPN / PNP)',
      'Scaling K-Factor ตั้งค่าได้',
      'Option RS-485 / 4-20mA Output',
    ],
    specs: [
      { label: 'Input',         value: 'Pulse (NPN/PNP/OC)' },
      { label: 'Display',       value: 'Rate + Total พร้อมกัน' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['analog-rate-totalizer', 'digital-counter'],
    model: 'RC3-B12',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Flow Display', 'Volume Totalizer', 'Encoder Counting'],
    variants: [
      'RC3-B12-1100-1', 'RC3-B12-1100-2',
      'RC3-B12-1101-1', 'RC3-B12-1101-2',
      'RC3-B12-1110-1', 'RC3-B12-1110-2',
      'RC3-B12-1111-1',
    ],
  },

  {
    id: 'rate-totalizer-relay',
    name: 'Rate & Totalizer + 2 Relay (DP1-C11)',
    slug: 'rate-totalizer-relay',
    category: 'rate-totalizer',
    shortDescription: 'Rate & Totalizer พร้อม 2 Relay Output สำหรับ Batch Control',
    description:
      'DP1-C11 — Rate & Totalizer แบบมี 2 Relay Output สำหรับ Batch Control หรือ Pre-set ใช้ในงานบรรจุ, การชั่งตวง, หรือการเติมของเหลวที่ต้องการตัดเมื่อถึงปริมาณที่กำหนด',
    image: 'process-meter.svg',
    tags: ['Batch Control', 'Preset', 'Relay', 'Totalizer'],
    features: [
      '2 Relay Output สำหรับ Pre-set / Batch',
      'Option RS-485 / 4-20mA',
    ],
    specs: [
      { label: 'Output',        value: '2 Relay (SPDT)' },
      { label: 'Options',       value: 'RS-485, 4-20mA Output' },
    ],
    relatedProducts: ['analog-rate-totalizer', 'pulse-rate-totalizer'],
    model: 'DP1-C11',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Batch Control', 'Pre-set Counter'],
    variants: ['DP1-C11-1101-1', 'DP1-C11-1111-1'],
  },

  // ==========================================================================
  // ============== WEIGHT CONTROLLER =========================================
  // ==========================================================================

  {
    id: 'weight-controller',
    name: 'Weight Controller (WC2)',
    slug: 'weight-controller',
    category: 'weight-controller',
    shortDescription: 'Weight Controller รองรับ Load Cell + 2-4 Output Relay/Transistor',
    description:
      'WC2 Series — Weight Controller รับสัญญาณจาก Load Cell ตรง คำนวณ Tare, Net Weight, Setpoint อัตโนมัติ มีรุ่นย่อยตามจำนวน Relay (B11/B12 = 2 Relay, B24 = 4 Transistor) Option RS-485 และ Analog Output',
    image: 'process-meter.svg',
    tags: ['Weight', 'Load Cell', 'Tare', 'Modbus'],
    features: [
      'รับสัญญาณ Load Cell ตรง',
      'Tare / Net / Gross weight',
      '2 Relay (B11/B12) หรือ 4 Transistor (B24)',
      'Option RS-485 / 4-20mA Output',
    ],
    specs: [
      { label: 'Input',         value: 'Load Cell mV/V' },
      { label: 'Output',        value: '2 Relay หรือ 4 Transistor' },
      { label: 'Options',       value: 'RS-485, 4-20mA' },
    ],
    relatedProducts: ['process-meter', 'rate-totalizer-relay'],
    featured: false,
    model: 'WC2',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Weighing System', 'Batching System', 'Bagging Machine'],
    variants: [
      'WC2-B11-1101-1', 'WC2-B11-1110-1', 'WC2-B11-1110-2', 'WC2-B11-1111-1', 'WC2-B11-2',
      'WC2-B12-1100-1', 'WC2-B12-1100-2', 'WC2-B12-1101-1', 'WC2-B12-1101-2',
      'WC2-B12-1110-1', 'WC2-B12-1110-2', 'WC2-B12-1111-1', 'WC2-B12-1111-2',
      'WC2-B24', 'WC2-B24-1101-1', 'WC2-B24-1110-1', 'WC2-B24-1111-1',
    ],
  },

  // ==========================================================================
  // ============== MULTI-TEMPERATURE MONITORING ==============================
  // ==========================================================================

  {
    id: 'multi-temperature-module',
    name: 'Multi Temperature Module — 1 Channel (MTM-101)',
    slug: 'multi-temperature-module',
    category: 'multi-temperature',
    shortDescription: 'Module วัดอุณหภูมิ 1 channel พร้อม RS-485 Modbus RTU ขยายระบบได้',
    description:
      'MTM-101 — Multi Temperature Module 1 channel ทำงานเป็น Slave บน RS-485 Modbus RTU ใช้สำหรับขยายจุดวัดอุณหภูมิในระบบ Modbus เพิ่มเติมจาก MTM Series ได้ตามต้องการ',
    image: 'process-meter.svg',
    tags: ['Multi-Temperature', 'Module', 'Slave', 'RS-485'],
    features: [
      '1 channel ต่อ Module',
      'ทำงานเป็น Modbus RTU Slave',
      'ขยายจุดวัดได้ตามต้องการ',
    ],
    specs: [
      { label: 'Channel',       value: '1 จุด' },
      { label: 'การสื่อสาร',   value: 'RS-485 Modbus RTU' },
    ],
    relatedProducts: ['multi-temperature-monitor', 'temperature-meter'],
    model: 'MTM-101',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Multi-Point Temperature Monitoring', 'Cold Storage Monitoring'],
    variants: ['MTM-101'],
  },

  {
    id: 'multi-temperature-monitor',
    name: 'Multi Temperature Monitor (MTM5xx / MTM6xx)',
    slug: 'multi-temperature-monitor',
    category: 'multi-temperature',
    shortDescription: 'มอนิเตอร์อุณหภูมิ 5-6 จุด แสดงพร้อมกัน รองรับ 16 หรือ 30 sensor',
    description:
      'MTM500/600 Series — Multi Temperature Monitor มอนิเตอร์อุณหภูมิ 5-6 จุดพร้อมกันบนจอเดียว เลือกได้ระหว่างรุ่น 16 หรือ 30 sensor เหมาะสำหรับห้องเย็น, ห้อง Server, Trafo Monitoring',
    image: 'process-meter.svg',
    tags: ['Multi-Temperature', 'Cold Storage', 'Server Room', 'Transformer'],
    features: [
      '5-6 จุดในจอเดียว',
      'เลือกได้ 16 หรือ 30 sensor',
      'แรงดันไฟเลี้ยง 220Vac หรือ 24Vdc',
    ],
    specs: [
      { label: 'Channel',       value: '5 หรือ 6 จุด (ขยายได้ถึง 30)' },
      { label: 'Power',         value: '220Vac (สุดท้าย -0/-10/-30) หรือ 24Vdc (-1/-11/-31)' },
    ],
    relatedProducts: ['multi-temperature-module', 'temperature-meter-4ch'],
    featured: true,
    model: 'MTM500 / 600',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Cold Storage Monitoring', 'Server Room Monitoring', 'Transformer Monitoring'],
    variants: [
      'MTM500', 'MTM501', 'MTM510', 'MTM511', 'MTM530',
      'MTM600', 'MTM601', 'MTM610', 'MTM611',
    ],
  },

  // ==========================================================================
  // ============== REMOTE & BIG DISPLAYS =====================================
  // ==========================================================================

  {
    id: 'remote-display-4-digit',
    name: 'Remote Display — 4 Digit (RD41-9648)',
    slug: 'remote-display-4-digit',
    category: 'remote-display',
    shortDescription: 'Remote Display 4 หลัก รับ Modbus RTU แสดงค่าจากระบบ SCADA',
    description:
      'RD41-9648 — Remote Display 4 หลัก ขนาด 96×48 มม. รับข้อมูลผ่าน RS-485 Modbus RTU แสดงค่าตัวเลขจาก PLC, Power Meter, Process Meter อื่น ๆ ใช้เป็นจอแสดงผลในห้องควบคุมหรือบนเครื่องจักรที่ต้องการให้พนักงานเห็นค่าจากระยะไกล',
    image: 'process-meter.svg',
    tags: ['Remote Display', 'Modbus RTU', 'Repeater Display'],
    features: [
      'หน้าจอ LED 4 หลัก',
      'Built-in RS-485 Modbus RTU',
      'Panel Mount 96×48 มม.',
    ],
    specs: [
      { label: 'Display',       value: 'LED 4 หลัก' },
      { label: 'Size',          value: '96×48 มม.' },
      { label: 'การสื่อสาร',   value: 'RS-485 Modbus RTU' },
    ],
    relatedProducts: ['remote-display-6-digit', 'big-display-custom', 'lora-big-display'],
    model: 'RD41-9648',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Repeater Display', 'Control Room Display'],
    variants: ['RD41-9648', 'RD41-9648-2'],
  },

  {
    id: 'remote-display-6-digit',
    name: 'Remote Display — 6 Digit (RD61-9648)',
    slug: 'remote-display-6-digit',
    category: 'remote-display',
    shortDescription: 'Remote Display 6 หลัก รับ Modbus RTU สำหรับค่าใหญ่ ๆ',
    description:
      'RD61-9648 — Remote Display 6 หลัก สำหรับค่าที่มีจำนวนหลักเยอะ เช่น kWh, Production Count, Volume รับ RS-485 Modbus RTU โดยตรง',
    image: 'process-meter.svg',
    tags: ['Remote Display', '6 Digit', 'Modbus RTU'],
    features: [
      'หน้าจอ LED 6 หลัก',
      'RS-485 Modbus RTU',
    ],
    specs: [
      { label: 'Display',       value: 'LED 6 หลัก' },
      { label: 'การสื่อสาร',   value: 'RS-485 Modbus RTU' },
    ],
    relatedProducts: ['remote-display-4-digit', 'big-display-custom'],
    model: 'RD61-9648',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Repeater Display', 'Production Counter'],
    variants: ['RD61-9648'],
  },

  {
    id: 'lora-big-display',
    name: 'LoRa Big Display (B7DP / B7RM)',
    slug: 'lora-big-display',
    category: 'big-display',
    subcategory: 'jumbo-display',
    shortDescription: 'จอ LED 4" 4 หลัก ไร้สายผ่าน LoRa ทำงานคู่กับ LoRa Slave I/O',
    description:
      'LoRa-B7 Series — Big Display LED 4" 4 หลัก รับข้อมูลผ่าน LoRa Wireless ทำงานคู่กับ LoRa Slave I/O (เช่น LSIO-2AQ) ใช้แสดงค่าระยะไกลในที่เดินสายไม่ได้ — โกดัง, สนาม, ลานเก็บของ',
    image: 'big-display-custom.svg',
    tags: ['LoRa', 'Big Display', '4 inch', 'Wireless', 'Remote'],
    features: [
      'หน้าจอ LED 4" 4 หลัก',
      'รับข้อมูลผ่าน LoRa Wireless',
      'ทำงานคู่กับ LoRa Slave I/O',
    ],
    specs: [
      { label: 'Display',       value: 'LED 4" 4 หลัก' },
      { label: 'Comm.',         value: 'LoRa Wireless' },
    ],
    relatedProducts: ['big-display-custom', 'lora-rf-gateway', 'remote-display-4-digit'],
    model: 'LoRa-B7',
    protocols: ['LoRa'],
    applications: ['Remote Display', 'Wireless Display', 'Tank Level Monitoring'],
    variants: ['LoRa-B7DP-4041-1', 'LoRa-B7RM-4041-1'],
  },

  // ==========================================================================
  // ============== ETHERNET I/O (Analog & Temp) ==============================
  // ==========================================================================

  {
    id: 'ethernet-io-analog',
    name: 'Ethernet I/O — Analog Input/Output',
    slug: 'ethernet-io-analog',
    category: 'ethernet-io',
    subcategory: 'analog-io',
    shortDescription: 'Modbus TCP/IP รับสัญญาณ Analog 4-20mA / 0-10V หลาย channel',
    description:
      'EIO-AI/AQ Series — Ethernet I/O สำหรับสัญญาณ Analog ทั้ง 4 และ 14 channel รับ 4-20mA หรือ 0-10V ส่งข้อมูลผ่าน Modbus TCP/IP — ใช้ขยาย Analog I/O ของ PLC หรือ SCADA โดยไม่ต้องเดินสายยาว',
    image: 'ethernet-io.svg',
    tags: ['Ethernet I/O', 'Analog', '4-20mA', 'Modbus TCP'],
    features: [
      'Analog Input 4 หรือ 14 channel',
      'Analog Output 4 channel (4-20mA)',
      'Modbus TCP/IP',
    ],
    specs: [
      { label: 'AI Channels',   value: '4 หรือ 14 ch' },
      { label: 'AI Range',      value: '4-20mA หรือ 0-10V' },
      { label: 'AO Channels',   value: '4 ch (4-20mA)' },
      { label: 'การสื่อสาร',   value: 'Ethernet Modbus TCP/IP' },
    ],
    relatedProducts: ['ethernet-io', 'ethernet-io-temperature', 'iot-mix-io'],
    model: 'EIO-AI / EIO-AQ',
    protocols: ['Modbus TCP', 'Ethernet'],
    inputTypes: ['Analog 4-20mA', '0-10V'],
    applications: ['Remote I/O', 'Tank Level Monitoring', 'Process Monitoring'],
    variants: [
      'EIO-4AI', 'EIO-4AI-3',
      'EIO-14AI', 'EIO-14AI-2',
      'EIO-4AQ',
    ],
  },

  {
    id: 'ethernet-io-temperature',
    name: 'Ethernet I/O — Temperature (NTC / RTD / TC)',
    slug: 'ethernet-io-temperature',
    category: 'ethernet-io',
    subcategory: 'analog-io',
    shortDescription: 'Modbus TCP/IP รับ NTC, PT100, Thermocouple 8-14 ch พร้อม LCD Display',
    description:
      'EIO-NTC / EIO-TE Series — Ethernet I/O สำหรับ Temperature Sensor รองรับ NTC, RTD (PT100), Thermocouple ตั้งแต่ 8 ถึง 14 channel มีรุ่น LCD Display ในตัว ส่งข้อมูลผ่าน Modbus TCP/IP',
    image: 'ethernet-io.svg',
    tags: ['Ethernet I/O', 'Temperature', 'NTC', 'PT100', 'Thermocouple'],
    features: [
      '8 ถึง 14 channel ในเครื่องเดียว',
      'รองรับ NTC, PT100, Thermocouple',
      'รุ่นมี LCD Display ในตัว',
      'Modbus TCP/IP',
    ],
    specs: [
      { label: 'Channels',      value: '8 หรือ 14 ch' },
      { label: 'Sensor',        value: 'NTC / PT100 / Thermocouple' },
      { label: 'การสื่อสาร',   value: 'Ethernet Modbus TCP/IP' },
    ],
    relatedProducts: ['ethernet-io-analog', 'multi-temperature-monitor', 'iot-mix-io'],
    model: 'EIO-NTC / EIO-TE',
    protocols: ['Modbus TCP', 'Ethernet'],
    inputTypes: ['NTC', 'PT100', 'Thermocouple'],
    applications: ['Multi-Point Temperature Monitoring', 'Cold Storage Monitoring'],
    variants: [
      'EIO-8NTC', 'EIO-8NTC-2',
      'EIO-14NTC_PTC', 'EIO-14NTC_PTC-2',
      'EIO-8TE', 'EIO-8TE-2',
    ],
  },

  // ==========================================================================
  // ============== IoT MQTT ==================================================
  // ==========================================================================

  {
    id: 'iot-analog-input',
    name: 'IoT Analog Input — 8 ch with MQTT',
    slug: 'iot-analog-input',
    category: 'iot-mqtt',
    shortDescription: 'รับ Analog 4-20mA หรือ TC/RTD 8 ch ส่งผ่าน MQTT เข้า Cloud โดยตรง',
    description:
      'EIO-IoT Series — Ethernet I/O ที่ส่งข้อมูลผ่าน MQTT Protocol โดยตรง รับสัญญาณ Analog 4-20mA หรือ Thermocouple/RTD 8 channel เชื่อมต่อ Cloud Platform ได้ทันทีโดยไม่ต้องใช้ Gateway',
    image: 'iot-mix-io.svg',
    tags: ['IoT', 'MQTT', 'Analog', 'Cloud', '8 Channel'],
    features: [
      '8 channel ในเครื่องเดียว',
      'ส่ง MQTT Protocol โดยตรง',
      'รุ่น 4-20mA และ Thermocouple/RTD',
      'รองรับ Modbus TCP/IP เพิ่มเติม',
    ],
    specs: [
      { label: 'Channels',      value: '8 ch' },
      { label: 'Input',         value: '4-20mA หรือ TC/RTD (ตามรุ่น)' },
      { label: 'Protocol',      value: 'MQTT + Modbus TCP/IP' },
    ],
    relatedProducts: ['iot-mix-io', 'ipm320-iot-power-meter', 'ethernet-io-temperature'],
    model: 'EIO-IoT',
    protocols: ['MQTT', 'Modbus TCP', 'Ethernet'],
    applications: ['IoT Cloud', 'Multi-Point Temperature Monitoring', 'Tank Level Monitoring'],
    variants: ['EIO-8AI-IoT', 'EIO-8AI-IoT-2', 'EIO-8TE-IoT', 'EIO-8TE-IoT-2'],
  },

  // ==========================================================================
  // ============== LoRa WIRELESS =============================================
  // ==========================================================================

  {
    id: 'lora-rf-modem',
    name: 'LoRa RF Modem',
    slug: 'lora-rf-modem',
    category: 'lora',
    subcategory: 'lora-rf-modem',
    shortDescription: 'LoRa Modem ส่ง RS-232 / RS-485 / RS-422 ผ่านคลื่น LoRa ระยะไกล',
    description:
      'LoRa-Modem — Modem RF ทำงานเหมือน Cable RS-232/485/422 ไร้สาย — เสียบสายแล้วใช้ได้เลยโดยไม่ต้องตั้งค่าเพิ่ม เหมาะสำหรับเชื่อม PLC, RTU, หรือ Power Meter ที่อยู่คนละตึก/คนละไซต์',
    image: 'lora-rf-gateway.svg',
    tags: ['LoRa', 'Modem', 'RS232', 'RS485', 'Wireless'],
    features: [
      'แทน Serial Cable RS-232/485/422 แบบไร้สาย',
      'มีรุ่น 100mW และ 500mW',
      'ความถี่ 920-925 MHz',
    ],
    specs: [
      { label: 'Interface',     value: 'RS-232 / RS-485 / RS-422' },
      { label: 'Frequency',     value: '920–925 MHz' },
      { label: 'Power',         value: '100mW (LoRa-Modem) หรือ 500mW (LoRa-Modem-2)' },
    ],
    relatedProducts: ['lora-rf-gateway', 'lora-slave-io'],
    model: 'LoRa-Modem',
    protocols: ['LoRa', 'RS232', 'RS485', 'RS422'],
    applications: ['LoRa Wireless Monitoring', 'Remote PLC Communication'],
    variants: ['LoRa-Modem', 'LoRa-Modem-2'],
  },

  {
    id: 'lora-slave-io',
    name: 'LoRa Slave I/O Series (LSIO)',
    slug: 'lora-slave-io',
    category: 'lora',
    subcategory: 'lora-slave-io',
    shortDescription: 'I/O Module ไร้สายผ่าน LoRa — Analog / Digital / Temperature / CT',
    description:
      'LSIO Series + LoRa-Series — Slave I/O Module ที่ส่งข้อมูลกลับ LoRa Gateway ผ่านคลื่น LoRa มีหลากหลายแบบ: Analog Input/Output, Digital Input/Output, Temperature, AC Current, Temperature & Humidity เหมาะสำหรับเก็บข้อมูลในพื้นที่กว้างที่เดินสายไม่ได้',
    image: 'lora-rf-gateway.svg',
    tags: ['LoRa', 'Slave I/O', 'Wireless', 'Modular'],
    features: [
      'หลากหลายชนิด I/O (AI, AQ, DI, DQ, TE, CT, TH)',
      'ทำงานคู่กับ LoRa RF Gateway',
      'OLED แสดงสถานะในตัว',
    ],
    specs: [
      { label: 'I/O Types',     value: 'AI, AQ, DI, DQ, TE (PT100/TC), CT, TH' },
      { label: 'Frequency',     value: '920–925 MHz' },
      { label: 'Power',         value: '12-24V DC' },
    ],
    relatedProducts: ['lora-rf-gateway', 'lora-rf-modem', 'lora-rf-sensor'],
    featured: false,
    model: 'LSIO Series',
    protocols: ['LoRa', 'Modbus RTU'],
    applications: ['LoRa Wireless Monitoring', 'Remote I/O', 'Tank Level Monitoring'],
    variants: [
      'LSIO-2AI', 'LSIO-2AI-2',
      'LSIO-2AQ', 'LSIO-2AQ-2',
      'LSIO-2CT',
      'LSIO-2DI2DQ', 'LSIO-2DI2DQ-2',
      'LSIO-2TE', 'LSIO-2TE-2',
      'LSIO-4DI', 'LSIO-4DQ',
      'LSIO-TH',
      'LoRa-2TH',
      'Lora-8DI', 'Lora-8DI-2', 'Lora-8DQ',
    ],
  },

  {
    id: 'lora-rf-sensor',
    name: 'LoRa RF Sensor — Temperature / Humidity',
    slug: 'lora-rf-sensor',
    category: 'lora',
    shortDescription: 'Sensor ไร้สาย LoRa วัด Temp + Humidity ในห้อง — มี RS-485 ในตัว',
    description:
      'lora-sen Series — เซ็นเซอร์อุณหภูมิและความชื้นแบบไร้สายผ่าน LoRa พร้อม RS-485 Modbus RTU ในตัว ติดตั้งบนผนังห้อง ส่งค่าเข้า LoRa Gateway แบบไร้สาย',
    image: 'lora-rf-gateway.svg',
    tags: ['LoRa', 'Sensor', 'Temperature', 'Humidity'],
    features: [
      'วัด Room Temperature (TE) หรือ Temp + Humidity (TH)',
      'ไร้สายผ่าน LoRa',
      'มี RS-485 ในตัว',
    ],
    specs: [
      { label: 'Sensor',        value: 'Temperature (TE) หรือ Temp + Humidity (TH)' },
      { label: 'Comm.',         value: 'LoRa + RS-485' },
    ],
    relatedProducts: ['lora-slave-io', 'rs485-modbus-sensor'],
    model: 'lora-sen',
    protocols: ['LoRa', 'Modbus RTU', 'RS485'],
    applications: ['Cold Storage Monitoring', 'Server Room Monitoring', 'Room Temp Monitoring'],
    variants: ['lora-sen-TE', 'lora-sen-TH'],
  },

  {
    id: 'rs485-modbus-sensor',
    name: 'RS-485 Modbus Sensor — Temperature / Humidity',
    slug: 'rs485-modbus-sensor',
    category: 'sensor-transducer',
    shortDescription: 'Sensor วัด Room Temp / Humidity ส่งผ่าน RS-485 Modbus RTU',
    description:
      '485-sen Series — เซ็นเซอร์อุณหภูมิและความชื้นแบบติดผนัง พร้อม RS-485 Modbus RTU ในตัว ตั้งค่า Slave Address และ Baud Rate ได้ ใช้ในห้องเย็น, ห้อง Server, ห้องผลิตยา',
    image: 'process-meter.svg',
    tags: ['Sensor', 'RS-485', 'Temperature', 'Humidity'],
    features: [
      'วัด Room Temp (RT) หรือ Temp + Humidity (TH)',
      'RS-485 Modbus RTU',
      'ติดผนังเป็นแผ่นบาง',
    ],
    specs: [
      { label: 'Sensor',        value: 'Room Temp (RT) / Temp + Humidity (TH)' },
      { label: 'Comm.',         value: 'RS-485 Modbus RTU' },
    ],
    relatedProducts: ['lora-rf-sensor', 'multi-temperature-monitor'],
    model: '485-sen',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Cold Storage Monitoring', 'Server Room Monitoring', 'Room Temp Monitoring'],
    variants: ['485-sen-RT', '485-sen-TH'],
  },

  // ==========================================================================
  // ============== MODBUS SCANNER & DATA LOGGER ==============================
  // ==========================================================================

  {
    id: 'modbus-rtu-scanner',
    name: 'Modbus RTU Scanner',
    slug: 'modbus-rtu-scanner',
    category: 'modbus-scanner',
    shortDescription: 'อุปกรณ์ดู / ทดสอบ Register ของ Modbus RTU บน RS-485',
    description:
      'MODBUS-RTU — Modbus RTU Scanner สำหรับช่างหรือวิศวกรที่ต้องการสำรวจ / ทดสอบ Register ของอุปกรณ์ Modbus RTU บน RS-485 ก่อนต่อเข้าระบบจริง',
    image: 'iot-mix-io.svg',
    tags: ['Modbus RTU', 'Scanner', 'RS-485', 'Tool'],
    features: [
      'อ่าน / เขียน Modbus Register',
      'ทดสอบการเชื่อมต่อ RS-485',
      'พกพาง่าย',
    ],
    specs: [
      { label: 'Comm.',         value: 'RS-485 Modbus RTU' },
    ],
    relatedProducts: ['modbus-tcp-scanner', 'canbus-scanner', 'modbus-data-logger'],
    model: 'MODBUS-RTU',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Modbus Testing', 'System Commissioning'],
    variants: ['MODBUS-RTU'],
  },

  {
    id: 'modbus-tcp-scanner',
    name: 'Modbus TCP Scanner',
    slug: 'modbus-tcp-scanner',
    category: 'modbus-scanner',
    shortDescription: 'ดู / ทดสอบ Register ของ Modbus TCP/IP ผ่าน Ethernet',
    description:
      'MTP-SN-1 / MODBUS-TCP — Modbus TCP/IP Scanner สำหรับสำรวจ / ทดสอบ Register ของอุปกรณ์ Modbus บน Ethernet',
    image: 'iot-mix-io.svg',
    tags: ['Modbus TCP', 'Scanner', 'Ethernet', 'Tool'],
    features: [
      'อ่าน / เขียน Modbus TCP/IP Register',
      'แสดง Latency การเชื่อมต่อ',
    ],
    specs: [
      { label: 'Comm.',         value: 'Ethernet Modbus TCP/IP' },
    ],
    relatedProducts: ['modbus-rtu-scanner', 'canbus-scanner', 'modbus-data-logger'],
    model: 'MTP-SN-1',
    protocols: ['Modbus TCP', 'Ethernet'],
    applications: ['Modbus Testing', 'System Commissioning'],
    variants: ['MTP-SN-1', 'MODBUS-TCP'],
  },

  {
    id: 'canbus-scanner',
    name: 'CANbus Scanner — to Modbus RTU/TCP',
    slug: 'canbus-scanner',
    category: 'modbus-scanner',
    shortDescription: 'อ่านข้อมูลจาก CANbus แล้วแปลงเป็น Modbus RTU หรือ TCP',
    description:
      'CANBUS — CANbus Scanner / Gateway อ่านข้อมูลจาก CANbus (รถยนต์, เครื่องจักร) แล้วแปลงเป็น Modbus RTU/TCP สำหรับการเก็บข้อมูลในระบบ SCADA หรือ PLC',
    image: 'iot-mix-io.svg',
    tags: ['CANbus', 'Modbus', 'Gateway', 'Scanner'],
    features: [
      'อ่าน CANbus → แปลงเป็น Modbus',
      'รองรับ Modbus RTU และ TCP',
    ],
    specs: [
      { label: 'Input',         value: 'CANbus' },
      { label: 'Output',        value: 'Modbus RTU / TCP' },
    ],
    relatedProducts: ['protocol-converter', 'modbus-rtu-scanner'],
    model: 'CANBUS',
    protocols: ['CANbus', 'Modbus RTU', 'Modbus TCP'],
    applications: ['CANbus Bridge', 'Vehicle Monitoring'],
    variants: ['CANBUS'],
  },

  {
    id: 'modbus-data-logger',
    name: 'Modbus Data Logger (DL-NET-1)',
    slug: 'modbus-data-logger',
    category: 'modbus-scanner',
    shortDescription: 'บันทึกข้อมูล Modbus RTU/TCP ลง memory พร้อมส่งออก Cloud',
    description:
      'DL-NET-1 — Modbus Data Logger บันทึกข้อมูลจากอุปกรณ์ Modbus RTU/TCP ลงในตัว ส่งออกเป็น CSV หรือส่งขึ้น Cloud อัตโนมัติ เหมาะสำหรับการเก็บข้อมูลพลังงาน, อุณหภูมิ, การผลิตในระยะยาว',
    image: 'iot-mix-io.svg',
    tags: ['Data Logger', 'Modbus', 'CSV', 'Cloud'],
    features: [
      'บันทึก Modbus RTU + TCP',
      'Export CSV',
      'รองรับ FTP / Cloud Upload',
    ],
    specs: [
      { label: 'Comm.',         value: 'RS-485 + Ethernet' },
      { label: 'Storage',       value: 'Internal flash + Cloud' },
    ],
    relatedProducts: ['modbus-rtu-scanner', 'modbus-tcp-scanner', 'iot-mix-io'],
    model: 'DL-NET-1',
    protocols: ['Modbus RTU', 'Modbus TCP', 'Ethernet', 'RS485'],
    applications: ['Modbus Data Logger', 'Energy Monitoring'],
    variants: ['DL-NET-1'],
  },

  // ==========================================================================
  // ============== PROTOCOL CONVERTER & REPEATER =============================
  // ==========================================================================

  {
    id: 'protocol-converter',
    name: 'Protocol Converter (MPL-J Series)',
    slug: 'protocol-converter',
    category: 'converter-repeater',
    shortDescription: 'แปลง Modbus RTU/TCP, Mitsubishi FX, OMRON Host Link ในเครื่องเดียว',
    description:
      'MPL-J Series — Protocol Converter หลากหลายแบบ: Modbus TCP ↔ Modbus RTU, Mitsubishi FX ↔ Modbus TCP, OMRON Host Link ↔ Modbus เลือกได้ตามรุ่น',
    image: 'iot-mix-io.svg',
    tags: ['Protocol Converter', 'Modbus', 'Mitsubishi', 'OMRON', 'Gateway'],
    features: [
      'แปลง Protocol PLC ↔ Modbus',
      'รองรับ Mitsubishi FX, OMRON Host Link',
      'Modbus TCP ↔ RTU bridge',
    ],
    specs: [
      { label: 'Variants',      value: 'TCP/RTU, FX/TCP, Host Link, RTU↔TCP' },
    ],
    relatedProducts: ['rs485-hub-repeater', 'canbus-scanner', 'usb-rs-converter'],
    model: 'MPL-J',
    protocols: ['Modbus RTU', 'Modbus TCP', 'Mitsubishi FX', 'OMRON Host Link'],
    applications: ['Protocol Conversion', 'PLC Integration'],
    variants: ['MPL-J01', 'MPL-J02', 'MPL-J03', 'MPL-J04', 'MPL-J04x2'],
  },

  {
    id: 'rs485-hub-repeater',
    name: 'RS-485 Hub & Repeater (HUB485)',
    slug: 'rs485-hub-repeater',
    category: 'converter-repeater',
    shortDescription: 'แยก RS-485 หลาย Branch พร้อม Repeater + Isolation',
    description:
      'HUB485x2 — RS-485 Hub แบบ 2 channel พร้อม Repeater และ Isolation ใช้แยกสาย RS-485 หลายเส้นออกจาก Master ตัวเดียว ป้องกันสัญญาณตกในระยะไกล',
    image: 'iot-mix-io.svg',
    tags: ['RS-485', 'Hub', 'Repeater', 'Isolation'],
    features: [
      '2 channel Hub',
      'Built-in Repeater',
      'Isolation 2.5kV',
    ],
    specs: [
      { label: 'Channel',       value: '2 ch' },
      { label: 'Isolation',     value: '2.5 kV' },
    ],
    relatedProducts: ['protocol-converter', 'usb-rs-converter'],
    model: 'HUB485x2',
    protocols: ['RS485'],
    applications: ['RS-485 Network', 'Long-Distance RS485'],
    variants: ['HUB485x2'],
  },

  // ==========================================================================
  // ============== PLC DOWNLOAD CABLES =======================================
  // ==========================================================================

  {
    id: 'usb-rs-converter',
    name: 'USB to RS-232 / RS-485 / RS-422 Converter',
    slug: 'usb-rs-converter',
    category: 'plc-download-cable',
    subcategory: 'usb-rs',
    shortDescription: 'USB-to-Serial Converter รองรับ RS-232 / 485 / 422 พร้อม Isolate',
    description:
      'USB Converter Series — แปลง USB เป็น RS-232, RS-485 หรือ RS-422 มีรุ่น 3-in-1 พร้อม Isolation 2.5kV เหมาะกับช่างที่ต้องเข้าถึงอุปกรณ์ Industrial หลายชนิด',
    image: 'process-meter.svg',
    tags: ['USB', 'Converter', 'RS-232', 'RS-485', 'RS-422'],
    features: [
      'USB → RS-232 / RS-485 / RS-422',
      'Isolation รุ่น 3-in-1',
      'Plug & Play (FTDI Driver)',
    ],
    specs: [
      { label: 'Interface',     value: 'USB → RS-232 / 485 / 422' },
      { label: 'Isolation',     value: '2.5 kV (รุ่น 3-in-1)' },
    ],
    relatedProducts: ['plc-cable-mitsubishi', 'plc-cable-omron', 'rs485-hub-repeater'],
    model: 'USB-Series',
    protocols: ['RS232', 'RS485', 'RS422'],
    applications: ['PLC Programming', 'Modbus Testing'],
    variants: [
      'USB-232-485-422', 'USB-485',
      'USB-A2B-3', 'USB-A2B-5', 'USB-A2MINIB-3',
    ],
  },

  {
    id: 'plc-cable-mitsubishi',
    name: 'PLC Download Cable — Mitsubishi',
    slug: 'plc-cable-mitsubishi',
    category: 'plc-download-cable',
    subcategory: 'mitsubishi-plc',
    shortDescription: 'สาย Download / Programming Cable สำหรับ PLC Mitsubishi A และ FX',
    description:
      'USB-MITSU & USB-SC05N Series — Download Cable สำหรับ PLC Mitsubishi A series และ FX series หลายรูปแบบ ทั้ง 2-in-1, 3-in-1, 5-in-1 (Isolate) เลือกตามรุ่น PLC ที่ใช้',
    image: 'process-meter.svg',
    tags: ['Mitsubishi', 'PLC', 'Download Cable', 'FX', 'Isolate'],
    features: [
      'รองรับ Mitsubishi A และ FX series',
      'มีรุ่น Isolate ป้องกัน PC',
      'Plug & Play',
    ],
    specs: [
      { label: 'Compat.',       value: 'Mitsubishi A series, FX series' },
      { label: 'Variants',      value: '2-in-1 / 3-in-1 / 5-in-1 Isolate' },
    ],
    relatedProducts: ['usb-rs-converter', 'plc-cable-omron', 'plc-cable-schneider'],
    model: 'USB-MITSU',
    protocols: ['RS232', 'RS422'],
    applications: ['PLC Programming'],
    variants: [
      'USB-MITSU-01', 'USB-MITSU-015',
      'USB-MITSU-02', 'USB-MITSU-025', 'USB-MITSU-02X',
      'USB-MITSU-05', 'USB-MITSU-055',
      'USB-SC05N-15', 'USB-SC05N-3', 'USB-SC05N-5',
    ],
  },

  {
    id: 'plc-cable-omron',
    name: 'PLC Download Cable — OMRON',
    slug: 'plc-cable-omron',
    category: 'plc-download-cable',
    subcategory: 'omron-plc',
    shortDescription: 'สาย Programming Cable สำหรับ PLC OMRON พร้อม Isolation',
    description:
      'USB-OMRON-05 — Programming Cable แบบ 5-in-1 Isolate สำหรับ PLC OMRON หลากรุ่น',
    image: 'process-meter.svg',
    tags: ['OMRON', 'PLC', 'Download Cable', 'Isolate'],
    features: [
      'รองรับ OMRON PLC หลายรุ่น',
      '5-in-1 Isolate',
    ],
    specs: [
      { label: 'Compat.',       value: 'OMRON PLC' },
    ],
    relatedProducts: ['plc-cable-mitsubishi', 'plc-cable-schneider', 'usb-rs-converter'],
    model: 'USB-OMRON-05',
    protocols: ['RS232'],
    applications: ['PLC Programming'],
    variants: ['USB-OMRON-05'],
  },

  {
    id: 'plc-cable-schneider',
    name: 'PLC Download Cable — Schneider (Twido / TSX)',
    slug: 'plc-cable-schneider',
    category: 'plc-download-cable',
    subcategory: 'other-plc',
    shortDescription: 'สาย Programming Cable สำหรับ Schneider Twido และ TSX',
    description:
      'USB-SCH-01 — Download Cable สำหรับ PLC Schneider Twido / TSX series',
    image: 'process-meter.svg',
    tags: ['Schneider', 'PLC', 'Download Cable', 'Twido', 'TSX'],
    features: [
      'รองรับ Schneider Twido, TSX',
    ],
    specs: [
      { label: 'Compat.',       value: 'Schneider Twido, TSX' },
    ],
    relatedProducts: ['plc-cable-mitsubishi', 'plc-cable-omron', 'usb-rs-converter'],
    model: 'USB-SCH-01',
    protocols: ['RS232'],
    applications: ['PLC Programming'],
    variants: ['USB-SCH-01'],
  },

  // ==========================================================================
  // ============== PROTECTION RELAYS =========================================
  // ==========================================================================

  {
    id: 'motor-protection-relay',
    name: 'Motor Protection Relay (MPR Series)',
    slug: 'motor-protection-relay',
    category: 'protection',
    subcategory: 'protection-relay',
    shortDescription: 'รีเลย์ป้องกันมอเตอร์ — Over Current / Phase Loss / Imbalance',
    description:
      'MPR Series — Motor Protection Relay ป้องกันมอเตอร์จาก Over Current, Phase Loss, Phase Imbalance, Locked Rotor มี RS-485 Modbus RTU เลือก CT ได้ 3 แบบ — 5A, 333mV, mA',
    image: 'process-meter.svg',
    tags: ['Motor Protection', 'Relay', 'Phase Loss', 'Modbus'],
    features: [
      'ป้องกัน OC / Phase Loss / Imbalance',
      'RS-485 Modbus RTU',
      'CT 5A / 333mV / mA',
    ],
    specs: [
      { label: 'Protection',    value: 'OC, Phase Loss, Imbalance, Locked Rotor' },
      { label: 'CT',            value: '5A (MPR-101) / 333mV (MPR-201) / mA (MPR-301)' },
    ],
    relatedProducts: ['earth-leakage-relay', 'ip-power-meter'],
    model: 'MPR Series',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Motor Protection', 'Pump Control'],
    variants: ['MPR-101-1', 'MPR-201-1', 'MPR-301-1'],
  },

  {
    id: 'earth-leakage-relay',
    name: 'Earth Leakage / Ground Fault Relay (PRI Series)',
    slug: 'earth-leakage-relay',
    category: 'protection',
    subcategory: 'protection-relay',
    shortDescription: 'รีเลย์ป้องกันไฟรั่ว / กระแสรั่วลงดิน — ELR / GFR',
    description:
      'PRI Series — Ground Fault Relay (PRI-120) และ Earth Leakage Relay (PRI-130/140) ป้องกันกระแสไหลลงดิน ตัดวงจรเมื่อตรวจพบกระแสรั่วเกินค่าที่กำหนด ใช้ในตู้ MDB หรือ Sub-DB',
    image: 'process-meter.svg',
    tags: ['Earth Leakage', 'Ground Fault', 'Protection'],
    features: [
      'PRI-120 = Ground Fault Relay',
      'PRI-130/140 = Earth Leakage Relay',
      'ใช้กับ ZCT แบบ 5A หรือ external CT',
    ],
    specs: [
      { label: 'Type',          value: 'GFR (PRI-120) / ELR (PRI-130/140)' },
    ],
    relatedProducts: ['motor-protection-relay'],
    model: 'PRI Series',
    protocols: [],
    applications: ['Earth Leakage Protection', 'Ground Fault Protection'],
    variants: ['PRI-120', 'PRI-130', 'PRI-140'],
  },

  // ==========================================================================
  // ============== TRANSMITTERS ==============================================
  // ==========================================================================

  {
    id: 'ip-universal-transmitter',
    name: 'IP Universal Transmitter (IPTX Series)',
    slug: 'ip-universal-transmitter',
    category: 'transmitter',
    subcategory: 'ip-transmitter',
    shortDescription: 'Transmitter Universal ส่ง Analog Output 4-20mA / 0-10V ผ่าน Ethernet',
    description:
      'IPTX Series — IP Universal Transmitter รับ Input หลายชนิด (AC Current, Analog, NTC, Thermocouple) และให้ Analog Output 4-20mA / 0-10V พร้อมส่งข้อมูลผ่าน Ethernet ในตัว',
    image: 'process-meter.svg',
    tags: ['Transmitter', 'IP', 'Universal', '4-20mA', 'Ethernet'],
    features: [
      'Input หลากหลาย (AC, Analog, NTC, TC)',
      'Output 4-20mA / 0-10V',
      'Ethernet Modbus TCP/IP',
    ],
    specs: [
      { label: 'Variants',      value: 'AC Current, Universal, NTC, Thermocouple' },
    ],
    relatedProducts: ['transmitter-utac', 'transmitter-utt', 'digital-power-transducer'],
    model: 'IPTX',
    protocols: ['Modbus TCP', 'Ethernet'],
    inputTypes: ['AC Current', 'Analog 4-20mA', 'NTC', 'Thermocouple'],
    applications: ['Process Transducer', 'PLC Interface'],
    variants: [
      'IPTX-1AC1UQ',
      'IPTX-1UI-1UQ', 'IPTX-1UI-2UQ',
      'IPTX-2AI-2UQ', 'IPTX-2AI2AV-2AQ',
      'IPTX-2NTC*-2UQ', 'IPTX-2NTC-2UQ',
      'IPTX-2TE-2UQ',
    ],
  },

  {
    id: 'transmitter-utac',
    name: 'Universal AC Transmitter (UTAC)',
    slug: 'transmitter-utac',
    category: 'transmitter',
    subcategory: 'other-transmitter',
    shortDescription: 'แปลง AC Line (V, A, W, PF) เป็น Analog Output 4-20mA',
    description:
      'UTAC — Universal Transmitter AC Line แปลงค่าทางไฟฟ้าจากสาย AC (V, A, W, PF) เป็น Analog Output 4-20mA สำหรับ PLC ที่ไม่มีพอร์ต Modbus',
    image: 'process-meter.svg',
    tags: ['Transmitter', 'AC', '4-20mA'],
    features: [
      'Input AC Line',
      'Output 4-20mA',
    ],
    specs: [
      { label: 'Input',         value: 'AC Line (V, A, W, PF)' },
      { label: 'Output',        value: '4-20mA' },
    ],
    relatedProducts: ['ip-universal-transmitter', 'digital-power-transducer'],
    model: 'UTAC',
    protocols: [],
    applications: ['PLC Interface', 'Process Transducer'],
    variants: ['UTAC'],
  },

  {
    id: 'transmitter-utt',
    name: 'Universal Temperature Transmitter (UTT)',
    slug: 'transmitter-utt',
    category: 'transmitter',
    subcategory: 'other-transmitter',
    shortDescription: 'แปลง RTD / Thermocouple เป็น Analog Output 4-20mA',
    description:
      'UTT — Universal Temperature Transmitter รับ RTD (PT100) หรือ Thermocouple แล้วแปลงเป็น 4-20mA ให้ PLC เหมาะกับงานที่ต้องการให้ PLC อ่านอุณหภูมิแต่ไม่มีโมดูล TC/RTD',
    image: 'process-meter.svg',
    tags: ['Transmitter', 'Temperature', 'PT100', 'Thermocouple', '4-20mA'],
    features: [
      'Input PT100 / Thermocouple',
      'Output 4-20mA',
    ],
    specs: [
      { label: 'Input',         value: 'PT100 / Thermocouple' },
      { label: 'Output',        value: '4-20mA' },
    ],
    relatedProducts: ['ip-universal-transmitter', 'temperature-meter'],
    model: 'UTT',
    protocols: [],
    applications: ['Temperature Monitoring', 'PLC Interface'],
    variants: ['UTT'],
  },

  // ==========================================================================
  // ============== SENSORS & SOURCE / MEASUREMENT ============================
  // ==========================================================================

  {
    id: 'remote-2wire-sensor',
    name: 'Remote 2-Wire Sensor Module (RM1)',
    slug: 'remote-2wire-sensor',
    category: 'sensor-transducer',
    subcategory: '2wire-sensor',
    shortDescription: 'Module รับ PT100 / Thermocouple / 4-20mA / 0-10V 4 ch',
    description:
      'RM1 Series — Remote Module รับ Sensor 2-wire ทั้ง PT100, PT1000, Thermocouple (RM1-B11) หรือ 4-20mA / 0-10V (RM1-B12) แต่ละรุ่น 4 channel ส่งผ่าน RS-485',
    image: 'process-meter.svg',
    tags: ['Remote Module', 'Sensor', 'PT100', 'Thermocouple', '4-20mA'],
    features: [
      '4 channel ต่อ Module',
      'B11 = PT100/PT1000/TC',
      'B12 = 4-20mA / 0-10V',
    ],
    specs: [
      { label: 'Channels',      value: '4 ch' },
      { label: 'Comm.',         value: 'RS-485 Modbus RTU' },
    ],
    relatedProducts: ['multi-temperature-monitor', 'rs485-modbus-sensor'],
    model: 'RM1',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Multi-Point Temperature Monitoring', 'Remote I/O'],
    variants: [
      'RM1-B11', 'RM1-B11-2',
      'RM1-B12', 'RM1-B12-1111-1', 'RM1-B12-2',
    ],
  },

  {
    id: 'calibrator-source',
    name: 'Calibrator — Current / Voltage Source',
    slug: 'calibrator-source',
    category: 'source-measurement',
    shortDescription: 'แหล่งจ่ายสัญญาณ Current / Voltage สำหรับ Calibrate มิเตอร์',
    description:
      'CAL-VA-1 — Calibrator แหล่งจ่ายสัญญาณ Current / Voltage Source สำหรับใช้ Calibrate มิเตอร์, Transmitter, หรือทดสอบ Loop ใช้คู่กับ Multimeter เพื่อยืนยันความแม่นยำของมิเตอร์ในไลน์',
    image: 'process-meter.svg',
    tags: ['Calibrator', 'Source', 'Current', 'Voltage', 'Loop'],
    features: [
      'จ่าย Current 0-22mA และ Voltage 0-10V',
      'ใช้สำหรับ Calibrate / Loop Test',
      'มี Battery 15 ชม. (รุ่น 1)',
    ],
    specs: [
      { label: 'Source',        value: 'Current 0-22mA, Voltage 0-10V' },
      { label: 'Battery',       value: '15 ชั่วโมง' },
    ],
    relatedProducts: ['ip-universal-transmitter', 'transmitter-utt'],
    model: 'CAL-VA-1',
    protocols: [],
    applications: ['Calibration', 'Loop Testing'],
    variants: ['CAL-VA-1'],
  },

  // ==========================================================================
  // ============== INDUSTRY-SPECIFIC =========================================
  // ==========================================================================

  {
    id: 'industry-module-scg',
    name: 'Industry Module — SCG OPI Scanner',
    slug: 'industry-module-scg',
    category: 'modbus-scanner',
    shortDescription: 'Module เฉพาะงาน SCG — Scan OPI / Bulk Temperature',
    description:
      'mod-sA / mod-scanT Series — Module เฉพาะที่ทำขึ้นสำหรับงานในกลุ่ม SCG รองรับ Cable Class A: Scan OPI / OPI530 และ Scan Bulk Temperature ติดต่อทีมขายเพื่อสอบถามรายละเอียด',
    image: 'iot-mix-io.svg',
    tags: ['SCG', 'Industry', 'Custom', 'Scanner'],
    features: [
      'งาน Custom สำหรับลูกค้ากลุ่ม SCG',
      'Scan OPI / OPI530 / Bulk Temperature',
    ],
    specs: [
      { label: 'Use Case',      value: 'Industry-Specific (SCG)' },
    ],
    relatedProducts: ['modbus-rtu-scanner', 'modbus-data-logger'],
    model: 'mod-sA / mod-scanT',
    protocols: ['Modbus RTU', 'RS485'],
    applications: ['Custom Industry Integration'],
    variants: ['mod-sA-scanOPI', 'mod-sA-scanOPI530', 'mod-scanT-bulk515'],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => p.featured);

export const getProductsByCategory = (category: string): Product[] =>
  products.filter((p) => p.category === category || p.subcategory === category);

export const getAllProtocols = (): string[] =>
  [...new Set(products.flatMap((p) => p.protocols ?? []))].sort();

export const getAllApplications = (): string[] =>
  [...new Set(products.flatMap((p) => p.applications ?? []))].sort();

export const getAllTags = (): string[] =>
  [...new Set(products.flatMap((p) => p.tags ?? []))].sort();

// Brand is derived from category prefix: 'haiwell-*' -> Haiwell, otherwise LEOS.
export type Brand = 'LEOS' | 'Haiwell';
export const getProductBrand = (p: Product): Brand =>
  p.category.startsWith('haiwell') ? 'Haiwell' : 'LEOS';
