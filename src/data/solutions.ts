export interface Solution {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  icon: string;
  relatedCategories: string[];
  problem?: string;
  howItWorks?: string;
  benefits?: string[];
  compatibleProducts?: string[];
}

export const solutions: Solution[] = [
  {
    id: 'factory-monitoring',
    title: 'Factory Monitoring',
    titleTh: 'ระบบตรวจสอบโรงงาน',
    description: 'ติดตามค่าพลังงาน อุณหภูมิ และสถานะเครื่องจักรทั่วโรงงานแบบ Real-time ผ่าน SCADA',
    icon: 'lucide:factory',
    relatedCategories: ['ac-meter', 'ethernet-io', 'big-display'],
    problem: 'โรงงานไม่รู้ว่าเครื่องจักรแต่ละตัวใช้พลังงานเท่าไร ไม่มีข้อมูลเพื่อวิเคราะห์ประสิทธิภาพการผลิต',
    howItWorks: 'ติดตั้งมิเตอร์วัดพลังงานและ Sensor ที่เครื่องจักรแต่ละตัว ส่งข้อมูลผ่าน Modbus RTU/TCP หรือ MQTT ขึ้น SCADA/Dashboard แบบ Real-time',
    benefits: ['มองเห็นค่าพลังงานทุกจุดแบบ Real-time', 'ลดการสูญเสียพลังงาน', 'วิเคราะห์ประสิทธิภาพเครื่องจักร', 'รองรับการ Export รายงาน'],
    compatibleProducts: ['ip-power-meter', 'pqm510', 'ethernet-io', 'big-display-custom'],
  },
  {
    id: 'power-quality',
    title: 'Power Quality Monitoring',
    titleTh: 'ตรวจสอบคุณภาพไฟฟ้า',
    description: 'วิเคราะห์ THD, Harmonics, Power Factor และเหตุการณ์ไฟกระชากในระบบไฟฟ้า',
    icon: 'lucide:zap',
    relatedCategories: ['ac-meter'],
    problem: 'ระบบไฟฟ้ามีปัญหา Harmonics ทำให้มอเตอร์ร้อน อายุการใช้งานสั้น และ PF ต่ำจนถูกปรับค่า KVA',
    howItWorks: 'ติดตั้ง Power Quality Meter วิเคราะห์ THD, Harmonics, PF และ Voltage Event บันทึกข้อมูลและส่งผ่าน Modbus TCP เข้าระบบ',
    benefits: ['วิเคราะห์ต้นเหตุปัญหาไฟฟ้าได้แม่นยำ', 'ลดค่า KVA Penalty', 'ยืดอายุเครื่องจักรและมอเตอร์', 'รองรับมาตรฐาน EN50160'],
    compatibleProducts: ['pqm510', 'ip-power-meter'],
  },
  {
    id: 'modbus-collection',
    title: 'Modbus Data Collection',
    titleTh: 'เก็บข้อมูล Modbus',
    description: 'รวบรวมข้อมูลจากอุปกรณ์ Modbus RTU/TCP หลายตัวเข้าสู่ระบบศูนย์กลาง',
    icon: 'lucide:database',
    relatedCategories: ['modbus-scanner', 'ethernet-io'],
    problem: 'มีอุปกรณ์ Modbus RTU หลายสิบตัวในโรงงาน แต่ไม่มีระบบรวมข้อมูลเข้า Database หรือ Cloud',
    howItWorks: 'ใช้ Modbus Scanner/Gateway อ่านค่าจาก Slave หลายตัวผ่าน RS-485 แล้วส่งออก Ethernet Modbus TCP หรือ MQTT เข้าระบบ',
    benefits: ['รวม Modbus RTU Slave หลายตัวเข้า Ethernet', 'ลดสาย RS-485 ระยะไกล', 'รองรับ SCADA/HMI ทุกยี่ห้อ', 'ตั้งค่าง่ายผ่านเว็บเบราว์เซอร์'],
    compatibleProducts: ['ip-power-meter', 'ethernet-io', 'process-meter'],
  },
  {
    id: 'mqtt-iot',
    title: 'MQTT / IoT Gateway',
    titleTh: 'เชื่อมต่อ IoT Cloud',
    description: 'ส่งข้อมูลจากเครื่องจักรและเซ็นเซอร์ขึ้น Cloud ผ่าน MQTT เพื่อวิเคราะห์และ Dashboard',
    icon: 'lucide:cloud',
    relatedCategories: ['iot-mqtt', 'lora'],
    problem: 'ต้องการส่งข้อมูลเครื่องจักรขึ้น Cloud เพื่อทำ Dashboard แต่อุปกรณ์ในโรงงานไม่รองรับ MQTT',
    howItWorks: 'ใช้ IoT Gateway อ่านค่าจากอุปกรณ์ Modbus/Analog แล้วส่งผ่าน MQTT ขึ้น Cloud เช่น Node-RED, ThingsBoard, AWS IoT',
    benefits: ['เชื่อมต่อ Cloud ได้ทุก Platform ที่รองรับ MQTT', 'รองรับ TLS/SSL', 'ตั้งค่าง่าย ไม่ต้องเขียนโปรแกรม', 'รองรับ LoRa Wireless'],
    compatibleProducts: ['iot-mix-io', 'lora-rf-gateway', 'telegram-gateway'],
  },
  {
    id: 'telegram-alarm',
    title: 'Telegram Alarm Notification',
    titleTh: 'แจ้งเตือนผ่าน Telegram',
    description: 'รับแจ้งเตือนอัตโนมัติเมื่อค่าเกิน Setpoint หรือเกิดเหตุการณ์ผิดปกติในโรงงาน',
    icon: 'lucide:bell',
    relatedCategories: ['notify-telegram'],
    problem: 'เมื่อเครื่องจักรเกิดปัญหาหรือค่าเกิน Limit ไม่มีใครได้รับแจ้งทันที ทำให้สายการผลิตหยุดนาน',
    howItWorks: 'Gateway อ่านค่าจากอุปกรณ์ Modbus ทุก 1–10 วินาที เมื่อค่าเกิน/ต่ำกว่า Setpoint จะส่งข้อความแจ้งเตือนเข้า Telegram Group หรือ Channel ทันที',
    benefits: ['ได้รับแจ้งเตือนทันทีผ่านมือถือ', 'ตั้ง Setpoint ได้อิสระ', 'ไม่ต้องเขียนโปรแกรม', 'รองรับ Group Chat, Channel และ Bot'],
    compatibleProducts: ['telegram-gateway'],
  },
  {
    id: 'production-display',
    title: 'Large Display for Production Line',
    titleTh: 'จอแสดงผลสายการผลิต',
    description: 'แสดงค่าการผลิต เป้าหมาย OEE และสถานะเครื่องจักรบนจอ LED ขนาดใหญ่ที่มองเห็นทั่วพื้นที่',
    icon: 'lucide:monitor',
    relatedCategories: ['big-display'],
    problem: 'พนักงานในสายการผลิตไม่ทราบยอดผลิตปัจจุบัน เป้าหมาย หรือสถานะเครื่องจักรแบบ Real-time',
    howItWorks: 'ติดตั้งจอ LED ขนาดใหญ่รับข้อมูลจาก PLC หรือ SCADA ผ่าน Modbus RTU/TCP หรือ MQTT แสดงค่าการผลิต OEE หรือข้อความแบบ Real-time',
    benefits: ['มองเห็นได้ทั่วพื้นที่', 'ลดการพิมพ์รายงานกระดาษ', 'สั่งทำขนาดได้ตามต้องการ', 'Made in Thailand'],
    compatibleProducts: ['big-display-custom', 'ip-message-display'],
  },
  {
    id: 'ntp-sync',
    title: 'NTP Time Synchronization',
    titleTh: 'ซิงค์เวลา NTP',
    description: 'ซิงค์เวลาทุกอุปกรณ์ในโรงงานให้ตรงกันแม่นยำ เพื่อการบันทึกเหตุการณ์และ Audit Trail',
    icon: 'lucide:clock',
    relatedCategories: ['ntp-clock'],
    problem: 'เวลาของ PLC, HMI, SCADA และกล้องวงจรปิดในโรงงานไม่ตรงกัน ทำให้ Audit Trail ผิดพลาดและยากต่อการ Troubleshoot',
    howItWorks: 'NTP Clock Server ซิงค์เวลาจาก Internet NTP Server แล้วกระจายสัญญาณเวลาให้อุปกรณ์ในโรงงานทุกตัวผ่าน NTP/SNTP หรือ RS-485',
    benefits: ['เวลาตรงกันทุกอุปกรณ์ ±1ms', 'มี Battery Backup 72 ชั่วโมง', 'จอ LED ขนาดใหญ่มองเห็นได้ทั่วโรงงาน', 'Made in Thailand'],
    compatibleProducts: ['ntp-clock'],
  },
  {
    id: 'remote-io',
    title: 'Remote I/O & Ethernet I/O',
    titleTh: 'ระบบ Remote I/O',
    description: 'ขยาย I/O ของระบบควบคุมผ่าน Ethernet หรือ LoRa Wireless ลดค่าใช้จ่ายการเดินสาย',
    icon: 'lucide:network',
    relatedCategories: ['ethernet-io', 'lora'],
    problem: 'ต้องเดินสาย Fieldbus หรือสาย I/O ระยะไกลหลายสิบเมตรถึงหลายร้อยเมตร ค่าติดตั้งสูงและเสี่ยง Noise',
    howItWorks: 'ใช้ Ethernet I/O Module รับ/ส่งสัญญาณ Digital และ Analog ผ่าน LAN Modbus TCP หรือใช้ LoRa Wireless I/O สำหรับพื้นที่ที่เดินสายไม่ได้',
    benefits: ['ลดค่าเดินสาย Fieldbus', 'รองรับ Modbus TCP/IP', 'LoRa Wireless ไม่ต้องเดินสายเลย', 'ติดตั้งได้รวดเร็ว'],
    compatibleProducts: ['ethernet-io', 'iot-mix-io', 'lora-rf-gateway'],
  },
];
