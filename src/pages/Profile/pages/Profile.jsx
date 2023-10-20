import React from 'react';
import Layout from '../../../components/Layout/Layout';
import BasicHeader from '../../../components/Header/BasicHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';
import NavBar from '../../../components/Footer/NavBar';
import PostItem from '../../../components/Post';
import ProfileInfo from '../components/ProfileInfo';

export default function Profile() {
    return (
        <Layout>
            <BasicHeader />
            <LayoutContent isWhite={false}>
                <ProfileInfo />

                <PostItem />
            </LayoutContent>
            <NavBar />
        </Layout>
    );
}
