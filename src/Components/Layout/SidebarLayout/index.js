import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from './Sidebar';
import './SidebarLayout.scss';
import '../DefaulLayout/DefaultLayout.scss';

function SidebarLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container Sidebar_content">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default SidebarLayout;
