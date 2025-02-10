# Description
โปรเจกต์นี้เป็น Assignment ที่ได้รับมอบหมายจากบริษัท ODDS โดยมีโจทย์ให้พัฒนา ChatApp ด้วย Ruby on Rails จึงได้ทำการออกแบบและพัฒนาฟีเจอร์ต่าง ๆ พร้อมทั้งจัดแต่งส่วนติดต่อผู้ใช้งาน (UI) ให้สวยงามและใช้งานง่าย
## Remark
อย่างไรก็ตามขณะนี้โปรเจกต์ยังมีข้อผิดพลาดบางประการ ในส่วนของการลบห้องแชท หากห้องแชทนั้นมีข้อความสนทนาค้างอยู่ จะไม่สามารถลบห้องแชทได้โดยตรง หากต้องการลบห้องแชท ผู้ใช้จำเป็นต้องลบข้อความสนทนาในห้องดังกล่าวให้เรียบร้อยก่อน
# วิธีการรันโปรเจกต์
ทำตามขั้นตอนด้านล่างเพื่อเริ่มต้นใช้งานโปรเจกต์:

## 1. โคลนโปรเจกต์ลงในเครื่องของคุณ
ใช้คำสั่งต่อไปนี้เพื่อโคลนโปรเจกต์และเข้าไปในไดเรกทอรี:
```
   git clone https://github.com/a0ms1nn/ChatApp.git  
   cd ChatApp  
```
## 2. ติดตั้ง Dependencies
ใช้คำสั่งด้านล่างเพื่อติดตั้ง dependencies ที่จำเป็น:
```
   bundle install  
```
## 3. ตั้งค่าฐานข้อมูล
### สร้างฐานข้อมูล:
```
rails db:create  
```
### รันการ Migrate:
```
rails db:migrate  
```
## 4. รันเซิร์ฟเวอร์
ใช้คำสั่งต่อไปนี้เพื่อเริ่มเซิร์ฟเวอร์:
```
rails server  
```
## 5. เปิดเบราว์เซอร์แล้วไปที่:

http://localhost:3000


