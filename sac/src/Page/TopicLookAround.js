import Header from "../components/Header/Header";
import TileView from "../components/TopicLookAround/TileView";
import axiosInstance from "../utils/api.js";
import "../styles/TopicLookAround.css";
import React, { useState, useEffect } from "react";

function TopicLookAround() {
  const [boards, setBoards] = useState([
        {
            boardId: 1,
            title: "프론트엔드",
            image:"https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202303/023134-934/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%98%EB%8A%94-%EC%9D%BC1.png",
            content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
            liked: false
        },
        {
            boardId: 2,
            title: "백엔드",
            image: "https://www.bemax.co.kr/wp/wp-content/uploads/kboard_attached/4/201912/5e0191bc887877390554.jpg",
            content: "백엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
            liked: false
        },
        {
            boardId: 3,
            title: "맛집",
            image:
                "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2019/11/06/1399dc71022b42d0a330c541ebc30938_%EC%82%AC%EC%9D%B4%EC%A6%88.jpg",
            content: "미식가를 위한 숨겨진 맛집을 공유합니다.",
            liked: false
        },
        {
            boardId: 4,
            title: "전자기기",
            image: "https://www.ilovepc.co.kr/news/photo/202008/35854_72684_4024.png",
            content: "최신 it기기 등 전자기기에 관련한 정보를 공유합니다.",
            liked: false
        },
        {
            boardId: 5,
            title: "축구",
            image:
                "https://i.namu.wiki/i/kqZG3UkhCKdtsg_jh8FbqejdLjlIvgOTci9QaRyu6Yz43YzoGSGYgiFW9gdFkMe1HOqKUWtC67aRiRbrvyvXh7qf1mj4GvxIn98xLV8kgml71QUEWYIk3zOCloJmoCw-phmOcL44WLaTpKO3z2j5dg.webp",
            content: "축구를 좋아하는 기훈이형과 함께 풋살예약을 할 수 있는 공간입니다.",
            liked: false
        },
        {
            boardId: 6,
            title: "영화",
            image:
                "https://img.freepik.com/premium-vector/movie-illustration_28918-69.jpg",
            content: "영화를 좋아하는 새싹인들이 영화에 대한 감상을 나눌 수 있는 공간을 제공합니다.",
            liked: false
        },
        {
            boardId: 7,
            title: "건강",
            image:
                "https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-43069.jpg",
            content: "운동, 건강에 관심있는 새싹인들이 함께 건강을 지킬 수 있는 공간입니다.",
            liked: false
        },
        {
            boardId: 8,
            title: "문화생활",
            image: "https://newsimg.sedaily.com/2022/03/22/263IM8UPEO_1.jpg",
            content: "문화생활을 즐기는 새싹인들이 정보를 공유할 수 있는 공간입니다.",
            liked: false
        },
        {
            boardId: 9,
            title: "뷰티",
            image:
                "https://dt40dm21pj8em.cloudfront.net/uploads/froala/file/4355/%EB%B7%B0%ED%8B%B0%20MD%201.jpg",
            content: "뷰티에 관심이 있는 새싹인들이 정보를 공유할 수 있는 공간입니다.",
            liked: false
        },
        {
            boardId: 10,
            title: "음주",
            image:
                "https://i.namu.wiki/i/rf7GThCUAaqaP_PK7tNFt8EHu4lZKlSVofvqiUfPAZVGwDR4_GBjwY3OEElpcmLJxDgUM_sBxdoeH2F3VjNp2ftobgJ_Wqj81Ax1rJSw1Vb2ipxOk_MXqar-WyJSL3XYNF9Lhks9LCTlH0yZHKlvlQ.webp",
            content: "음주를 좋아하거나 관심있는 새싹인들을 위해 정보를 공유합니다.",
            liked: false
        },
        {
            boardId: 11,
            title: "연애",
            image:
                "https://thumb.ac-illust.com/ad/add7ec490d7fd51612deb486ad5151d2_t.jpeg",
            content: "연애에 관심있는 새싹인들이 이야기 나눌 수 있는 공간을 제공합니다.",
            liked: false
        },
        {
            boardId: 12,
            title: "예능",
            image: "https://cdn.ggilbo.com/news/photo/202105/848641_677727_570.jpg",
            content: "예능을 즐겨보는 새싹인들을 위한 정보를 공유합니다.",
            liked: false
        },
        {
            boardId: 13,
            title: "드라마",
            image:
                "https://newsimg.hankookilbo.com/cms/articlerelease/2021/09/14/368533d7-9cb1-4e01-89ad-8bfc805cf3d8.jpg",
            content: "드라마를 좋아하는 새싹인들을 위한 정보를 공유합니다.",
            liked: false
        },
  ]);

  useEffect(() => {
    const fetchLikeList = async () => {
      try {
        const response = await axiosInstance.get("user/boards");
        const likeList = response.data;
  
        console.log(likeList);
        setBoards((prevBoards) =>
          prevBoards.map((board) => ({
            ...board,
            liked: likeList.likeList.includes(board.boardId),
          }))
        );
      } catch (error) {
        console.error("Failed to fetch likeList data:", error);
      }
    };
  
    fetchLikeList();
  }, []); // No dependencies, as it should run only once
  
  
  // Log the boards state after it's updated
  useEffect(() => {
    console.log("Updated boards:", boards);
  }, [boards]);

  return (
    <div className="look-page">
      <div className="header-look">
        <Header />
      </div>
      <div className="body">
        <div className="look-body">
          <div className="body-title">토픽 둘러보기</div>
          <div className="body-content">
            관심 있는 토픽을 통해 사람들과의 네트워킹과 교류를 즐겨보세요.
          </div>
          <TileView boards={boards} />
        </div>
      </div>
    </div>
  );
}

export default TopicLookAround;

