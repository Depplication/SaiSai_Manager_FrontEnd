/* eslint-disable jsx-a11y/alt-text */
import "../../styles/PointHistory/PointHistory.css";
import { Link } from 'react-router-dom';

const PointHistoryPage = () => {

    
    return <div>
        <header>
            <nav>
                <Link to="/"><img src="https://i.ibb.co/FJRnxTV/Group-294.png"/></Link>
                
            </nav>
        </header>
        <Link to="pointHistory"></Link>포인트 사용 기록________<Link to="couponHistory">쿠폰 사용 기록</Link>
       <table>

            <tr>
                <th>순번</th>
                <th>이름</th>
                <th>아이디</th>
                <th>가게명</th>
                <th>지급된 포인트</th>
                <th>사용 시각</th>
                <th>총 포인트</th>
            </tr>
            <tr>
                <td>1</td>
                <td>문주호</td>
                <td>joshmoon</td>
                <td>starbucks</td>
                <td>10</td>
                <td>11/15 12:30:15</td>
                <td>75000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>주호문</td>
                <td>joshmoon77</td>
                <td>starbucks</td>
                <td>100</td>
                <td>11/15 12:30:15</td>
                <td>735000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>호주문</td>
                <td>joshmoon777</td>
                <td>starbucks</td>
                <td>10</td>
                <td>11/15 12:30:15</td>
                <td>64000</td>
            </tr>
            
        </table>
        </div>
}

export default PointHistoryPage;