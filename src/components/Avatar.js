import React from 'react';
import styled from 'styled-components';

import profilePic from '../images/avatar.jpg';

const Picture = styled.img.attrs({
    src: profilePic
})`
width: 240px;
height: 240px;
-moz-border-radius: 120px; 
-webkit-border-radius: 120px; 
border-radius: 120px;
`;

const Avatar = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Picture />  
    </div>     
);

export default Avatar;