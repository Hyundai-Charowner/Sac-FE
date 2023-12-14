import Header from "../components/Header/Header";
import TileView from "../components/TopicLookAround/TileView";
import "../styles/TopicLookAround.css";

function TopicLookAround() {
  const boards = [
    {
        title: "프론트엔드",
        image:
            "https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202303/023134-934/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%98%EB%8A%94-%EC%9D%BC1.png",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "백엔드",
        image:
            "https://velog.velcdn.com/images%2Fdnflekf2748%2Fpost%2Fcf513e18-6870-44a5-a16f-c3b3a93f14f1%2Fimage.png",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "맛집",
        image:
            "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2019/11/06/1399dc71022b42d0a330c541ebc30938_%EC%82%AC%EC%9D%B4%EC%A6%88.jpg",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "전자기기",
        image: "https://www.ilovepc.co.kr/news/photo/202008/35854_72684_4024.png",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "축구",
        image:
            "https://i.namu.wiki/i/kqZG3UkhCKdtsg_jh8FbqejdLjlIvgOTci9QaRyu6Yz43YzoGSGYgiFW9gdFkMe1HOqKUWtC67aRiRbrvyvXh7qf1mj4GvxIn98xLV8kgml71QUEWYIk3zOCloJmoCw-phmOcL44WLaTpKO3z2j5dg.webp",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "영화",
        image:
            "https://img.freepik.com/premium-vector/movie-illustration_28918-69.jpg",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "건강",
        image:
            "https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-43069.jpg",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "문화생활",
        image: "https://newsimg.sedaily.com/2022/03/22/263IM8UPEO_1.jpg",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "뷰티",
        image:
            "https://dt40dm21pj8em.cloudfront.net/uploads/froala/file/4355/%EB%B7%B0%ED%8B%B0%20MD%201.jpg",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "음주",
        image:
            "https://i.namu.wiki/i/rf7GThCUAaqaP_PK7tNFt8EHu4lZKlSVofvqiUfPAZVGwDR4_GBjwY3OEElpcmLJxDgUM_sBxdoeH2F3VjNp2ftobgJ_Wqj81Ax1rJSw1Vb2ipxOk_MXqar-WyJSL3XYNF9Lhks9LCTlH0yZHKlvlQ.webp",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "연애",
        image:
            "https://thumb.ac-illust.com/ad/add7ec490d7fd51612deb486ad5151d2_t.jpeg",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "예능",
        image: "https://cdn.ggilbo.com/news/photo/202105/848641_677727_570.jpg",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    {
        title: "드라마",
        image:
            "https://newsimg.hankookilbo.com/cms/articlerelease/2021/09/14/368533d7-9cb1-4e01-89ad-8bfc805cf3d8.jpg",
        content: "프론트엔드 개발자를 위한 커리어, 취업 정보를 공유합니다.",
    },
    ];

  return (  
        <div claseeName="look-page">
            <div className="header-look">
                <Header />
            </div>
            <div className="body">
                <div className="look-body">
                    <div className="body-title">
                        토픽 둘러보기
                    </div>
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
