import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="category">
                <h3 className="category__heading">Thể loại</h3>
                <div className="category__list">
                    <ul className="category_item">
                        <li className="category_icon">
                            <IoIosArrowRoundForward />
                        </li>
                        <li>
                            <Link to="">Các hoạt động Thể thao-Văn hóa</Link>
                        </li>
                    </ul>
                    <ul className="category_item">
                        <li className="category_icon">
                            <IoIosArrowRoundForward />
                        </li>
                        <li>
                            <Link to="">Các hoạt động Thể thao-Văn hóa</Link>
                        </li>
                    </ul>
                    <ul className="category_item">
                        <li className="category_icon">
                            <IoIosArrowRoundForward />
                        </li>
                        <li>
                            <Link to="">
                                Các hoạt động Thể thao-Văn hóa Các hoạt động Thể thao-Văn hóa Các hoạt động Thể thao-Văn
                                hóa
                            </Link>
                        </li>
                    </ul>
                    <ul className="category_item">
                        <li className="category_icon">
                            <IoIosArrowRoundForward />
                        </li>
                        <li>
                            <Link to="">Các hoạt động Thể thao-Văn hóa</Link>
                        </li>
                    </ul>
                    <ul className="category_item">
                        <li className="category_icon">
                            <IoIosArrowRoundForward />
                        </li>
                        <li>
                            <Link to="">Các hoạt động Thể thao-Văn hóa Các hoạt động Thể thao-Văn hóa</Link>
                        </li>
                    </ul>
                    <ul className="category_item">
                        <li className="category_icon">
                            <IoIosArrowRoundForward />
                        </li>
                        <li>
                            <Link to="">Các hoạt động Thể thao-Văn hóa</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;
