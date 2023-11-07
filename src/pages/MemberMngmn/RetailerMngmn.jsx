import React, { useEffect, useState } from "react";
import * as RM from "../../styles/MemberMngmn/RetailerMngmn.style";
import { useNavigate } from "react-router-dom";
import RetailerMemberInfoEdit from "./RetailerMemberInfoEdit";
import axios from "axios";
import { customAxios } from "../../lib/axios/axios";
import useRetailer from "../../hooks/RetailerManagemn/useRetailer";
import tokenStore from "../../lib/token/token";
import { ACCESS_TOKEN_KEY } from "../../constant/token";
import { RetailerList } from "../../constant/retailerlist";

function RetailerMngmn() {
  const navigate = useNavigate();

  const { getRetailerList } = useRetailer();

  const [dataFromServer, setDataFromServer] = useState(RetailerList);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(dataFromServer);
  }, [dataFromServer]);

  const fetchUsers = async () => {
    const data = await getRetailerList({ page: 1, size: 10 });
    console.log("hihi");
    console.log(data.list);
    setDataFromServer(data.list);
  };

  // const { getToken } = tokenStore();

  // console.log(getToken(ACCESS_TOKEN_KEY));

  const handleEditClick = (data) => {
    navigate("/retailerinfoedit", { state: { data } });
  };

  const handleDelete = (idx) => {
    setDataFromServer((prevData) =>
      prevData.filter((item) => item.idx !== idx)
    );
  };

  return (
    <RM.RetailerMngmnLayout>
      <RM.RetailerMngmnContainer>
        <RM.MoveContainer>
          <RM.MoveDiv>
            <RM.MoveUserItem onClick={() => navigate("/usermngmn")}>
              주민
            </RM.MoveUserItem>
            <RM.MoveRetailerItem onClick={() => navigate("/retailermngmn")}>
              업주
            </RM.MoveRetailerItem>
          </RM.MoveDiv>
        </RM.MoveContainer>
        <RM.TableContainer>
          <RM.TableWrapper>
            <RM.RetailerMemberTable>
              <RM.HeaderThead>
                <RM.HeaderTr>
                  <RM.HeaderIdx></RM.HeaderIdx>
                  <RM.HeaderName>이름</RM.HeaderName>
                  <RM.HeaderAccountNumber>계좌번호</RM.HeaderAccountNumber>
                  <RM.HeaderPhone>전화번호</RM.HeaderPhone>
                  <RM.HeaderBank>은행</RM.HeaderBank>
                  <RM.HeaderJoinDate>가입일</RM.HeaderJoinDate>
                  <RM.HeaderEndDate>최근접속일</RM.HeaderEndDate>
                  <RM.HeaderNote colSpan="2">비고</RM.HeaderNote>
                </RM.HeaderTr>
              </RM.HeaderThead>

              {dataFromServer.map((data) => (
                <RetailerTable
                  key={data.id}
                  data={data}
                  onDelete={handleDelete}
                  onEdit={handleEditClick}
                />
              ))}
            </RM.RetailerMemberTable>
          </RM.TableWrapper>
        </RM.TableContainer>
      </RM.RetailerMngmnContainer>
    </RM.RetailerMngmnLayout>
  );
}

function RetailerTable({ data, onDelete }) {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    onDelete(data.idx);
  };

  return (
    <RM.BodyTbody>
      <RM.BodyTr>
        <RM.BodyIdx>{data.idx}</RM.BodyIdx>
        <RM.BodyName>{data.name}</RM.BodyName>
        <RM.BodyAccountNumber>{data.accountNumber}</RM.BodyAccountNumber>
        <RM.BodyPhone>{data.phone}</RM.BodyPhone>
        <RM.BodyBank>{data.bank}</RM.BodyBank>
        <RM.BodyJoinDate>{data.joinDate}</RM.BodyJoinDate>
        <RM.BodyEndDate>{data.endDate}</RM.BodyEndDate>
        <RM.BodyNote>
          <RM.Retouch onClick={() => navigate(`/retailerinfoedit/${data.id}`)}>
            수정
          </RM.Retouch>
          <RM.Delete onClick={handleDeleteClick}>삭제</RM.Delete>
        </RM.BodyNote>
      </RM.BodyTr>
    </RM.BodyTbody>
  );
}

export default RetailerMngmn;
