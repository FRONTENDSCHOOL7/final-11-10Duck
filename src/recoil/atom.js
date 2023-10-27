const { atom } = require('recoil');

export const userState = atom({
    key: 'userState',
    default: {
        _id: '652f8bd5b2cb2056637c46f6',
        username: '10덕이',
        email: '10duck@test.com',
        accountname: '10duck',
        intro: '히사시부리랄까...!',
        image: 'https://api.mandarin.weniv.co.kr/1698429305810.png',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmY4YmQ1YjJjYjIwNTY2MzdjNDZmNiIsImV4cCI6MTcwMzU3MjE2OCwiaWF0IjoxNjk4Mzg4MTY4fQ.R1HOkmM18OiWuI1vrQ5ji0rWrYNu1HriCWOZod33O98',
        refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTgzODgxNjgsImV4cCI6MTY5OTU5Nzc2OH0.8OApb9sPOf07GPcT5RU4tc3jkpGtQWVMsSi_Z65V7tM',
    },
});
