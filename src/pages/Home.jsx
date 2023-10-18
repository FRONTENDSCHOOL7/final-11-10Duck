import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Layout from '../components/Layout';
import MainHeader from '../components/Header/MainHeader';
import NavBar from '../components/Footer/NavBar';
import Content from '../components/Content';

export default function Home() {
    return (
        <Layout>
            <MainHeader />

            <Content>
                <Link to="/signin">로그인</Link>
                <Link to="signup">회원가입</Link>
                <Button />
            </Content>

            <NavBar />
        </Layout>
    );
}