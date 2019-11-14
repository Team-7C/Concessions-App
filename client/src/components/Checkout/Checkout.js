import React from 'react';
//import UFLogo from '../../assets/UF_Wallpaper.jpg';
import './Checkout.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class Checkout extends React.Component {
    render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className = "header-color" title="Checkout" scroll>
                    <Navigation>
                        <a href="/">Venders page</a>
                        <a href="/">Checkout</a>
                        <a href="/">Sign Up/Sign In</a>
                    </Navigation>
                </Header>
                <Drawer title="Navigation Bar">
                    <Navigation>
                        <a href="/">Venders page</a>
                        <a href="/">Checkout</a>
                        <a href="/">Sign Up/Sign In</a>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                </Content>
            </Layout>
        </div>
    );
}
}
export default Checkout;
