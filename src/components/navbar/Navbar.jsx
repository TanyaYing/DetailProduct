import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/img/all.jpg" alt="" className="navLogo" />
      </div>
      <ul className="navLists">
        <li className="navList">ALL</li>
        <li className="navList">บ้านเเละสวน</li>
        <li className="navList">แฟชั่น</li>
        

      </ul>
      <div className="navIcons">
        <div className="navSearch">
          <SearchIcon className="navSearchIcon" />
          <input placeholder="Search" className="navSearchInput" />
        </div>
        <FavoriteBorderIcon className="navFavoriteBorderIcon" />
        <div className="navCart">
           <ShoppingCartIcon className="navCartIcon" />
          <label className="navCartLabel">2</label>
        </div>

      </div>
    </div>
  )
}
