export interface ProductSpec {
  label: string;
  value: string;
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
  },
  {
    id: 'ip-power-meter',
    name: 'IP Power Meter',
    slug: 'ip-power-meter',
    category: 'ac-meter',
    subcategory: 'ip-power',
    shortDescription: 'วัดพลังงานไฟฟ้า 3 เฟส + ส่งข้อมูลผ่าน Ethernet Modbus TCP/IP',
    description:
      'IP Power Meter วัดค่าพลังงานไฟฟ้า 3 เฟสแบบครบถ้วน ทั้ง V, A, W, VAR, VA, PF, Hz และ kWh พร้อมส่งข้อมูลออก Modbus TCP/IP ผ่าน Ethernet ทำให้เชื่อมต่อเข้าระบบ SCADA หรือ BMS ได้โดยตรงโดยไม่ต้องใช้ Converter',
    image: 'ip-power-meter.svg',
    tags: ['Power Meter', 'Ethernet', 'Modbus TCP', '3-Phase', 'Energy'],
    features: [
      'วัด V, A, W, VAR, VA, PF, Hz, kWh ครบถ้วน',
      'ส่งข้อมูลผ่าน Ethernet Modbus TCP/IP',
      'หน้าจอ LCD แสดงค่าหลายพารามิเตอร์',
      'ไม่ต้องใช้ RS-485 to Ethernet Converter',
      'ติดตั้งในแผง Panel Mount 96×96 มม.',
    ],
    specs: [
      { label: 'ประเภท',           value: '3 เฟส 4 สาย' },
      { label: 'การวัด',           value: 'V, A, W, VAR, VA, PF, Hz, kWh, kVARh' },
      { label: 'ความแม่นยำ',       value: 'Class 0.5S' },
      { label: 'การสื่อสาร',       value: 'Modbus TCP/IP (Ethernet) + Modbus RTU (RS-485)' },
      { label: 'ขนาด',             value: 'Panel Mount 96×96 มม.' },
      { label: 'IP Rating',        value: 'IP54 (ด้านหน้า)' },
    ],
    relatedProducts: ['pqm510', 'process-meter'],
    featured: false,
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
    relatedProducts: ['iot-mix-io', 'lora-rf-gateway'],
    featured: false,
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
    relatedProducts: ['ip-power-meter', 'pqm510'],
    featured: false,
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => p.featured);

export const getProductsByCategory = (category: string): Product[] =>
  products.filter((p) => p.category === category || p.subcategory === category);
