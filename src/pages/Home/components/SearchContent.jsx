import { styled } from 'styled-components';
import { FONT_SIZE, COLOR } from '../../../utils';

export default function SearchContent(props) {
    const { user, searchInput } = props;

    return (
        <DataStyle>
            <ImgStyle src={user.image} alt="프로필 이미지" />
            <ContentStyle>
                {user.username.includes(searchInput) ? (
                    <UserName>
                        {user.username.split(searchInput)[0]}
                        <span style={{ color: COLOR.borderOrangeColor }}>{searchInput}</span>
                        {user.username.split(searchInput)[1]}
                    </UserName>
                ) : (
                    <UserName>{user.username}</UserName>
                )}
                {user.accountname.includes(searchInput) ? (
                    <UserAccount>
                        @{user.accountname.split(searchInput)[0]}
                        <span style={{ color: COLOR.borderOrangeColor }}>{searchInput}</span>
                        {user.accountname.split(searchInput)[1]}
                    </UserAccount>
                ) : (
                    <UserAccount>@{user.accountname}</UserAccount>
                )}
            </ContentStyle>
        </DataStyle>
    );
}

const DataStyle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;
const ContentStyle = styled.article`
    vertical-align: middle;
`;

const UserName = styled.p`
    font-size: ${FONT_SIZE.large};
    margin-bottom: 6px;
    color: ${COLOR.fontDarkColor};
`;

const UserAccount = styled.p`
    font-size: ${FONT_SIZE.medium};
    color: ${COLOR.fontPrimaryColor};
`;

const ImgStyle = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 12px;
    border-radius: 50%;
`;
