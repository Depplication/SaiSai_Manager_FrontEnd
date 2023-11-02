import React, { useState } from "react";
import * as UM from "../../styles/MemberMngmn/UserMngmn.style";
import { useNavigate } from "react-router-dom";
import UserMemberInfoEdit from "./UserMemberInfoEdit";

function UserMngmn() {
  const navigate = useNavigate();

  const [dataFromServer, setDataFromServer] = useState([
    {
      idx: 1,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 2,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 3,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 4,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 5,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 6,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 7,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 8,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 9,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 10,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 11,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 12,
      id: "username",
      password: "password",
      name: "이름",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      email: "saisai@naver.com",
      gender: "남자",
      age: "10대",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleEditClick = (data) => {
    setSelectedData(data);
    setIsPopupOpen(true);
  };

  const handleDelete = (idx) => {
    setDataFromServer((prevData) =>
      prevData.filter((item) => item.idx !== idx)
    );
  };

  const handleEditSubmit = (editData) => {
    setDataFromServer((prevData) => {
      return prevData.map((item) =>
        item.idx === editData.idx ? editData : item
      );
    });

    setIsPopupOpen(false);
  };

  return (
    <UM.UserMngmnLayout>
      <UM.UserMngmnContainer>
        <UM.MoveContainer>
          <UM.MoveDiv>
            <UM.MoveUserItem onClick={() => navigate("/usermngmn")}>
              주민
            </UM.MoveUserItem>
            <UM.MoveRetailerItem onClick={() => navigate("/retailermngmn")}>
              업주
            </UM.MoveRetailerItem>
          </UM.MoveDiv>
        </UM.MoveContainer>
        <UM.TableContainer>
          <UM.TableWrapper>
            <UM.UserMemberTable>
              <UM.HeaderThead>
                <UM.HeaderTr>
                  <UM.HeaderIdx></UM.HeaderIdx>
                  <UM.HeaderName>이름</UM.HeaderName>
                  <UM.HeaderAddress>주소</UM.HeaderAddress>
                  <UM.HeaderPhone>전화번호</UM.HeaderPhone>
                  <UM.HeaderJoinDate>가입일</UM.HeaderJoinDate>
                  <UM.HeaderEndDate>최근접속일</UM.HeaderEndDate>
                  <UM.HeaderNote colSpan="2">비고</UM.HeaderNote>
                </UM.HeaderTr>
              </UM.HeaderThead>

              {dataFromServer.map((data) => (
                <Table
                  key={data.idx}
                  data={data}
                  onDelete={handleDelete}
                  onEdit={handleEditClick}
                />
              ))}
            </UM.UserMemberTable>
            {/*팝업*/}
          </UM.TableWrapper>
        </UM.TableContainer>
      </UM.UserMngmnContainer>
    </UM.UserMngmnLayout>
  );
}

function Table({ data, onDelete, onEdit }) {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    onDelete(data.idx);
  };

  const handleEditClick = () => {
    onEdit(data);
  };

  return (
    <UM.BodyTbody>
      <UM.BodyTr>
        <UM.BodyIdx>{data.idx}</UM.BodyIdx>
        <UM.BodyName>{data.name}</UM.BodyName>
        <UM.BodyAddress>{data.address}</UM.BodyAddress>
        <UM.BodyPhone>{data.phone}</UM.BodyPhone>
        <UM.BodyJoinDate>{data.joinDate}</UM.BodyJoinDate>
        <UM.BodyEndDate>{data.endDate}</UM.BodyEndDate>
        <UM.BodyNote>
          <UM.Retouch>수정</UM.Retouch>
          <UM.Delete onClick={handleDeleteClick}>삭제</UM.Delete>
        </UM.BodyNote>
      </UM.BodyTr>
    </UM.BodyTbody>
  );
}

export default UserMngmn;
