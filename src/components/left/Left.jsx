import "./left.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
export default function Left() {
  return (
    <div className="left">
      <h1 className="leftHeading">Clarte' เตาแก๊สหัวทองเหลือง รุ่น GBG3512</h1>
      <p className="leftText-1">รหัสสินค้า 106824010</p>
      <p className="leftText-2">Price: 1,290฿</p>
      <p className="leftText-3">- ทุกหัวเตา ให้ความร้อนสูง ปรับความแรงตามต้องการ</p>
      <p className="leftText-4">- โครงสร้างจากกระจกนิรภัย ทนความร้อน ทนทาน</p>
      <p className="leftText-5">- เลือกใช้งาน 1 หรือ 2 หัวเตาได้ เนื่องจากหัวเตาแต่ละหัวแยกอิสระต่อกัน</p>
     <button className='leftButton'>
     BUY NOW
     <ArrowCircleRightIcon className='leftButtonIcon'/>
     </button>
  
    </div>
  )
}
