import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/atom';
import { useEffect, useState } from 'react';

export default function useCheckUser(userId) {
    const user = useRecoilValue(userState);
    const [isMyProfile, setIsMyProfile] = useState(false);

    useEffect(() => {
        !userId && setIsMyProfile(true);
        if (userId) {
            if (userId === user.accountname) setIsMyProfile(true);
        }
    }, []);

    return { isMyProfile };
}
