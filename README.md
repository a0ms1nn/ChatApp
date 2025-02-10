### วิธีการรันโปรเจกต์
## ทำตามขั้นตอนด้านล่างเพื่อเริ่มต้นใช้งานโปรเจกต์:

1. โคลนโปรเจกต์ลงในเครื่องของคุณ

  git clone https://github.com/a0ms1nn/ChatApp.git  
  cd ChatApp  

2. ติดตั้ง Dependencies

ใช้คำสั่งด้านล่างเพื่อดาวน์โหลด dependencies ที่จำเป็น:

bundle install  

3. ตั้งค่าฐานข้อมูล
	1.	สร้างฐานข้อมูล:

rails db:create  


	2.	รันการ Migrate:

rails db:migrate  



4. รันเซิร์ฟเวอร์

เริ่มเซิร์ฟเวอร์ด้วยคำสั่ง:

rails server  

5. เปิดเบราว์เซอร์แล้วไปที่:

http://localhost:3000  
