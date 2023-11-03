import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { COLOR } from "../../../utils/index";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";

export default function Vote() {
  const [docId, setDocID] = useState("");
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [voteData, setVoteData] = useState({
    title: "",
    option1: "",
    option2: "",
    option1Vote: 0,
    option2Vote: 0,
    user: [],
  });

  const user = useRecoilValue(userState);

  const option1Percentage = (
    (voteData.option1Vote / (voteData.option1Vote + voteData.option2Vote)) *
    100
  ).toFixed(1);

  const option2Percentage = (
    (voteData.option2Vote / (voteData.option1Vote + voteData.option2Vote)) *
    100
  ).toFixed(1);

  /**
   * firebase에서 투표내용을 불러오는 함수
   */
  const fetchVote = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "vote"));
      // 여러개일 땐 가장 최근 것만 불러오기로 수정할 예정
      querySnapshot.forEach((doc) => {
        setVoteData(doc.data());
        setDocID(doc.id);
      });
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * 투표한 유저들을 Firebase에 저장하기
   */
  const addUserDidVote = async () => {
    try {
      const docRef = doc(db, "vote", docId);
      await updateDoc(docRef, {
        user: arrayUnion(user.accountname),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onClickOption1Button = async () => {
    try {
      const docRef = doc(db, "vote", docId);
      await updateDoc(docRef, { option1Vote: voteData.option1Vote + 1 });
      await addUserDidVote();
      setIsActiveButton(false);
    } catch (err) {
      console.error(err);
    }
  };
  const onClickOption2Button = async () => {
    try {
      const docRef = doc(db, "vote", docId);
      await updateDoc(docRef, { option2Vote: voteData.option2Vote + 1 });
      await addUserDidVote();
      setIsActiveButton(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchVote();
  }, []);

  useEffect(() => {
    if (voteData.user.includes(user.accountname)) {
      setIsActiveButton(false);
    }
  }, [voteData, user.accountname]);

  return (
    <>
      <LabelTitleStyle>오늘의 토론</LabelTitleStyle>
      <VoteContainerStyle>
        <VoteTitleStyle>{voteData.title}</VoteTitleStyle>
        <VoteBtnContainerStyle>
          <VoteButtonStyle
            disabled={!isActiveButton}
            onClick={onClickOption1Button}
            bgChange={voteData.option1Vote > voteData.option2Vote}
            changeWidth={
              voteData.option1Vote /
              (voteData.option1Vote + voteData.option2Vote)
            }
          >
            {isActiveButton
              ? voteData.option1
              : `${voteData.option1} (${option1Percentage}%)`}
          </VoteButtonStyle>
          <VoteButtonStyle
            disabled={!isActiveButton}
            onClick={onClickOption2Button}
            bgChange={voteData.option1Vote < voteData.option2Vote}
            changeWidth={
              voteData.option2Vote /
              (voteData.option1Vote + voteData.option2Vote)
            }
          >
            {isActiveButton
              ? voteData.option2
              : `${voteData.option2} (${option2Percentage}%)`}
          </VoteButtonStyle>
        </VoteBtnContainerStyle>
      </VoteContainerStyle>
    </>
  );
}

const LabelTitleStyle = styled.div`
  font-family: "PyeongChangPeace-Bold";
  color: ${COLOR.fontOrangeColor};
  padding-top: 12px;
`;

const VoteContainerStyle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid gray;
  margin-top: 12px;
`;

const VoteTitleStyle = styled.div`
  padding: 36px 0;
`;

const VoteBtnContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const VoteButtonStyle = styled.button`
  min-width: 50px;
  width: ${(props) =>
    props.disabled ? `${props.changeWidth * 100}%` : "100%"};
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  border: none;
  font-family: "PyeongChang";

  &:disabled {
    background-color: ${(props) =>
      props.bgChange ? COLOR.btnPrimaryColor : COLOR.btnSecondaryColor};
    color: #000000;
  }
`;
