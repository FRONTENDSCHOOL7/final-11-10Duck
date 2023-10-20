import React from 'react';
import { styled } from 'styled-components';
import Button from '../../../components/Button';
import useimg from '../../../assets/basic-profile-img.png';
import chatIcon from '../../../assets/icon/icon-message-circle.svg';
import shareIcon from '../../../assets/icon/icon-share.png';

export default function ProfileInfo() {
    return (
        <ProfileInfoContainer>
            <h2>프로필 정보</h2>
            <ProfileImgStyle>
                <div>
                    <p>2950</p>
                    <span>followers</span>
                </div>
                <img src={useimg} alt="" />
                <div>
                    <p>590</p>
                    <span>followings</span>
                </div>
            </ProfileImgStyle>
            <h3>애월읍 위니브 감귤농장</h3>
            <p>@ weniv_Mandarin</p>
            <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
            <ButtonsStyle>
                <img src={chatIcon} alt="" />
                <Button />
                <img src={shareIcon} alt="" />
            </ButtonsStyle>
        </ProfileInfoContainer>
    );
}

const ProfileInfoContainer = styled.section`
    width: 100%;
    height: 314px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ProfileImgStyle = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const ButtonsStyle = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
