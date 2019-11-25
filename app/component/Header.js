/**
 * Created by lychee on 2019/11/25.
 */
import React from 'react';
import AvatarImg from '../images/avatar.jpg';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-con">
                    <div className="user">
                        <span className="text">欢迎您！</span>
                        <span className="avatar">
                            <img src={AvatarImg} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;