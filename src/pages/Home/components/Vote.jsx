import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function Vote() {
  const [docId, setDocID] = useState("");
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [voteData, setVoteData] = useState({
    title: "",
    option1: "",
    option2: "",
    option1Vote: 0,
    option2Vote: 0,
  });

  /**
   * firebase에서 투표내용을 불러오는 함수
   */
  const fetchVote = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "vote"));
      querySnapshot.forEach((doc) => {
        setVoteData(doc.data());
        setDocID(doc.id);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onClickOption1Button = async () => {
    try {
      const docRef = doc(db, "vote", docId);
      await updateDoc(docRef, { option1Vote: voteData.option1Vote + 1 });
      setIsActiveButton(false);
    } catch (err) {
      console.error(err);
    }
  };
  const onClickOption2Button = async () => {
    try {
      const docRef = doc(db, "vote", docId);
      await updateDoc(docRef, { option2Vote: voteData.option2Vote + 1 });
      setIsActiveButton(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchVote();
  });

  return (
    <VoteContainerStyle>
      <VoteTitleStyle>{voteData.title}</VoteTitleStyle>
      <VoteBtnContainerStyle>
        <VoteButtonStyle
          disabled={!isActiveButton}
          onClick={onClickOption1Button}
          changeWidth={
            voteData.option1Vote / (voteData.option1Vote + voteData.option2Vote)
          }
        >
          {voteData.option1}
        </VoteButtonStyle>
        <VoteButtonStyle
          disabled={!isActiveButton}
          onClick={onClickOption2Button}
          changeWidth={
            voteData.option2Vote / (voteData.option1Vote + voteData.option2Vote)
          }
        >
          {voteData.option2}
        </VoteButtonStyle>
      </VoteBtnContainerStyle>
    </VoteContainerStyle>
  );
}

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
`;
