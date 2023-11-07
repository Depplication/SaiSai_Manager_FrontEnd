import React, { useEffect, useState } from "react";
import * as UM from "../../styles/MemberMngmn/UserMngmn.style";
import { useNavigate } from "react-router-dom";
import UserMemberInfoEdit from "./UserMemberInfoEdit";
import { UserList } from "../../constant/userlist";
import axios from "axios";
import { REQUEST_TOKEN_KEY } from "../../constant/token";
import useUser from "../../hooks/RetailerManagemn/useRetailer";

function UserMngmn() {
  const navigate = useNavigate();

  const [dataFromServer, setDataFromServer] = useState(UserList);

  const { getUserList } = useUser();

  const handleDelete = (idx) => {
    setDataFromServer((prevData) =>
      prevData.filter((item) => item.idx !== idx)
    );
  };

  const fetchUser = async ({ page, size }) => {
    const data = await getUserList({ page, size });
    console.log(data.list);
    setDataFromServer(data.list);
  };

  useEffect(() => {
    console.log(dataFromServer);
  }, [dataFromServer]);

  useEffect(() => {
    fetchUser({ page: 1, size: 10 });
  }, []);

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
                <Table key={data.idx} data={data} onDelete={handleDelete} />
              ))}
            </UM.UserMemberTable>
          </UM.TableWrapper>
        </UM.TableContainer>
      </UM.UserMngmnContainer>
    </UM.UserMngmnLayout>
  );
}

function Table({ data, onDelete }) {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    onDelete(data.idx);
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
          <UM.Retouch onClick={() => navigate(`/userinfoedit/${data.id}`)}>
            수정
          </UM.Retouch>
          <UM.Delete onClick={handleDeleteClick}>삭제</UM.Delete>
        </UM.BodyNote>
      </UM.BodyTr>
    </UM.BodyTbody>
  );
}

export default UserMngmn;
