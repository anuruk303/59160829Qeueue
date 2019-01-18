// 0. import Queue มาใช้ ใน test
const Queue = require('./Queue');
// 1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)
test('empty มีค่าเป็น true (ว่าง)', ()=> {
    expect(new Queue(0).empty()).toBe(true);
  });
// 2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20
test('enqueue(20) และ dequeue ค่าที่ได้จะได้ 20', ()=> {
const t =new Queue(1)
    t.enqueue(20)
    expect(t.dequeue()).toBe(20);
    
  });
// 3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)
test('enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true', ()=> {
    const t =new Queue(1)   
    t.enqueue(1)        
        expect(t.full()).toBe(true);
        
      });
// 4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)
test('เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false', ()=> {
    const t =new Queue(1)
    t.enqueue(5)
        expect(t.enqueue(1)).toBe(false);
      });
// 5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน
test('enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 ', ()=> {
    const t =new Queue(2)  
    t.enqueue(1)
    t.enqueue(2)
        expect(t.dequeue()).toBe(1);
        expect(t.dequeue()).toBe(2);

      });
// 6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null
test('จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null', ()=> {
    const t =new Queue()  
        expect(t.dequeue()).toBe(null);


      });+
      
test('bug',() => {
        const t =new Queue(3)
    t.enqueue(1)
    t.enqueue(2)
    t.enqueue(3)
        expect(t.dequeue()).toBe(1);
        expect(t.dequeue()).toBe(2);
        expect(t.dequeue()).toBe(3);
    t.enqueue(3)
    t.enqueue(4)
        expect(t.dequeue()).toBe(3);
    
    
          });