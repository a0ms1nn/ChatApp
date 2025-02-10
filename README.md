โปรเจกต์นี้เป็นแอปพลิเคชันแชทที่พัฒนาด้วย Ruby on Rails  

## วิธีการรันโปรเจกต์  

### 1. โคลนโปรเจกต์ลงเครื่อง  

   git clone https://github.com/a0ms1nn/ChatApp.git  
   cd ChatApp  

### 2. ติดตั้ง Dependencies

bundle install  

3. ตั้งค่า Database
	•	สร้างฐานข้อมูล:

rails db:create  


	•	รันการ Migrate:

rails db:migrate  



4. รันเซิร์ฟเวอร์

rails server  

5. เปิดใช้งาน
	•	เปิดเบราว์เซอร์และไปที่:

http://localhost:3000  
