export interface Solution {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  icon: string;
  relatedCategories: string[];
}

export const solutions: Solution[] = [
  {
    id: 'factory-monitoring',
    title: 'Factory Monitoring',
    titleTh: 'ระบบตรวจสอบโรงงาน',
    description: 'ติดตามค่าพลังงาน อุณหภูมิ และสถานะเครื่องจักรทั่วโรงงานแบบ Real-time ผ่าน SCADA',
    icon: 'lucide:factory',
    relatedCategories: ['ac-meter', 'ethernet-io', 'big-display'],
  },
  {
    id: 'power-quality',
    title: 'Power Quality Monitoring',
    titleTh: 'ตรวจสอบคุณภาพไฟฟ้า',
    description: 'วิเคราะห์ THD, Harmonics, Power Factor และเหตุการณ์ไฟกระชากในระบบไฟฟ้า',
    icon: 'lucide:zap',
    relatedCategories: ['ac-meter'],
  },
  {
    id: 'modbus-collection',
    title: 'Modbus Data Collection',
    titleTh: 'เก็บข้อมูล Modbus',
    description: 'รวบรวมข้อมูลจากอุปกรณ์ Modbus RTU/TCP หลายตัวเข้าสู่ระบบศูนย์กลาง',
    icon: 'lucide:database',
    relatedCategories: ['modbus-scanner', 'ethernet-io'],
  },
  {
    id: 'mqtt-iot',
    title: 'MQTT / IoT Gateway',
    titleTh: 'เชื่อมต่อ IoT Cloud',
    description: 'ส่งข้อมูลจากเครื่องจักรและเซ็นเซอร์ขึ้น Cloud ผ่าน MQTT เพื่อวิเคราะห์และ Dashboard',
    icon: 'lucide:cloud',
    relatedCategories: ['iot-mqtt', 'lora'],
  },
  {
    id: 'telegram-alarm',
    title: 'Telegram Alarm Notification',
    titleTh: 'แจ้งเตือนผ่าน Telegram',
    description: 'รับแจ้งเตือนอัตโนมัติเมื่อค่าเกิน Setpoint หรือเกิดเหตุการณ์ผิดปกติในโรงงาน',
    icon: 'lucide:bell',
    relatedCategories: ['notify-telegram'],
  },
  {
    id: 'production-display',
    title: 'Large Display for Production Line',
    titleTh: 'จอแสดงผลสายการผลิต',
    description: 'แสดงค่าการผลิต เป้าหมาย OEE และสถานะเครื่องจักรบนจอ LED ขนาดใหญ่ที่มองเห็นทั่วพื้นที่',
    icon: 'lucide:monitor',
    relatedCategories: ['big-display'],
  },
  {
    id: 'ntp-sync',
    title: 'NTP Time Synchronization',
    titleTh: 'ซิงค์เวลา NTP',
    description: 'ซิงค์เวลาทุกอุปกรณ์ในโรงงานให้ตรงกันแม่นยำ เพื่อการบันทึกเหตุการณ์และ Audit Trail',
    icon: 'lucide:clock',
    relatedCategories: ['ntp-clock'],
  },
  {
    id: 'remote-io',
    title: 'Remote I/O & Ethernet I/O',
    titleTh: 'ระบบ Remote I/O',
    description: 'ขยาย I/O ของระบบควบคุมผ่าน Ethernet หรือ LoRa Wireless ลดค่าใช้จ่ายการเดินสาย',
    icon: 'lucide:network',
    relatedCategories: ['ethernet-io', 'lora'],
  },
];
