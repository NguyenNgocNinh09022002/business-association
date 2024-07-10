import './Header.scss';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';

import img_logo from '../../../../asset/image/slider/logo.jpg';

function Header() {
    const [menus, setMenu] = useState([
        {
            name: 'Trang chủ',
            path: '/',
        },
        {
            name: 'Giới thiệu',
            path: '/su-kien',
            isShowSubmenu: false,
            child: [
                {
                    name: 'Giới thiệu chung',
                    path: '',
                },
                {
                    name: 'Điều lệ',
                    path: '',
                },
                {
                    name: 'Ban chấp hành',
                    path: '',
                },
                {
                    name: 'Ban thường trực',
                    path: '',
                },
                {
                    name: 'Các đơn vị trực thuộc',
                    path: '',
                },
            ],
        },
        {
            name: 'Sự kiên',
            path: '',
            isShowSubmenu: false,
            child: [
                {
                    name: 'ITem1',
                    path: '',
                },
                {
                    name: 'ITem2',
                    path: '',
                },
                {
                    name: 'ITem3ITem3ITem3ITem3ITem3',
                    path: '',
                },
                {
                    name: 'ITem3ITem3ITem3ITem3ITem3ITem3ITem3',
                    path: '',
                },
            ],
        },
        {
            name: 'Thành viên',
            path: '/thanh-vien',
        },
        {
            name: 'Liên hệ',
            path: '',
        },
    ]);
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className=" header__logo ">
                        <img src={img_logo} style={{width:40, heigh:40}} />
                    </div>
                    <div className="header__menu">
                        <ul>
                            {menus?.map((menu, menuKey) => (
                                <li key={menuKey}>
                                    <Link to={menu?.path}>
                                        {menu?.name}
                                        {menu.name === 'Giới thiệu' && <AiOutlineDown className="icon_down" />}
                                        {menu.name === 'Sự kiên' && <AiOutlineDown className="icon_down" />}
                                    </Link>
                                    {menu.child && (
                                        <ul className="header__menu_dropdown">
                                            {menu.child.map((childItem, childKey) => (
                                                <li
                                                    key={`${menuKey}-${childKey}`}
                                                    className="header__menu_dropdown_child"
                                                >
                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="search ">
                        <ul>
                            <li>
                                <ImSearch className="icon_search" />
                                <div className="input_search">
                                    <input type="text" placeholder="Tìm kiếm... " />
                                    <button type="submit" className="button_submit">
                                        {' '}
                                        Search{' '}
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
