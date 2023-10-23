import React from 'react';
import { styled } from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../utils';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import BasicHeader from '../../../components/Header/BasicHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';
import NavBar from '../../../components/Footer/NavBar';
import FollowUser from '../components/FollowUser';

export default function Follow() {
    const { followMode } = useParams();

    return (
        <Layout>
            <BasicHeader isFollowersPage={true} followMode={followMode} />
            <LayoutContent>
                <FollowUser />
                <FollowUser />
                <FollowUser />
            </LayoutContent>
            <NavBar />
        </Layout>
    );
}
