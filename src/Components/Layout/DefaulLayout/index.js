import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './DefaultLayout.scss';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
