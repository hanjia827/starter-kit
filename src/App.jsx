import { useState } from "react";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "modern-normalize/modern-normalize.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import PostAddIcon from "@mui/icons-material/PostAdd";

const itemData = [
  {
    id: 1,
    category: "기획기사",
    type: "제품뉴스",
    title: "차세대 스마트 플랫폼이 만드는 새로운 업무 환경",
    description:
      "기업의 디지털 전환을 지원하는 최신 기술과 활용 사례를 소개합니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.08.02",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 2,
    category: "기획기사",
    type: "카드뉴스",
    title: "미래 산업을 이끄는 5가지 핵심 기술",
    description: "빠르게 변화하는 산업 트렌드와 미래 기술 방향을 알아봅니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.28",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 3,
    category: "기획기사",
    type: "인터뷰",
    title: "혁신 연구자가 말하는 새로운 기술의 가능성",
    description: "연구 현장에서 바라본 미래 기술 개발 이야기를 담았습니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.22",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  },
  {
    id: 4,
    category: "기획기사",
    type: "기술",
    title: "데이터 기반 혁신으로 변화하는 기업 생태계",
    description: "데이터 활용 기술이 산업 현장에 가져오는 변화를 소개합니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.15",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },

  {
    id: 5,
    category: "보도자료",
    type: "기업소식",
    title: "글로벌 시장 확대 위한 신규 전략 발표",
    description: "새로운 사업 방향과 성장 계획을 공개했습니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.08.01",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  {
    id: 6,
    category: "보도자료",
    type: "제품뉴스",
    title: "고성능 기술 적용한 신제품 공개",
    description: "향상된 성능과 사용자 경험을 제공하는 제품을 선보입니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.26",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 7,
    category: "보도자료",
    type: "기술",
    title: "차세대 기술 연구 성과 발표",
    description: "미래 산업 경쟁력 강화를 위한 연구 결과를 발표했습니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.19",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3",
  },
  {
    id: 8,
    category: "보도자료",
    type: "카드뉴스",
    title: "기업 혁신 활동 한눈에 보기",
    description: "주요 성과와 새로운 프로젝트를 카드 형태로 소개합니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.10",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
  },

  {
    id: 9,
    category: "해외소식",
    type: "기업소식",
    title: "글로벌 파트너십 확대 및 협력 강화",
    description: "해외 주요 기업과 함께 새로운 비즈니스 기회를 만들어갑니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.08.03",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
  },
  {
    id: 10,
    category: "해외소식",
    type: "제품뉴스",
    title: "글로벌 시장 출시 예정 신제품 소개",
    description: "해외 고객을 위한 새로운 제품 라인업을 공개합니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.30",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: 11,
    category: "해외소식",
    type: "인터뷰",
    title: "글로벌 전문가가 바라본 미래 산업",
    description: "각 분야 전문가들의 의견과 전망을 소개합니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.18",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    id: 12,
    category: "해외소식",
    type: "기술",
    title: "글로벌 연구센터의 새로운 기술 개발",
    description: "세계 각 지역 연구팀의 기술 혁신 사례입니다.",
    content: "여기에 상세페이지 본문이 들어갑니다.",
    date: "2026.07.05",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
  },
];
/**이미지 */
function srcset(image) {
  return {
    src: `${image}?fit=crop&w=600&h=338&auto=format&q=75`,
    srcSet: `${image}?fit=crop&w=1200&h=675&auto=format&q=75 2x`,
  };
}

/** 이미지리스트 */
function ListImage({ items, onRead }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const cols = isMobile ? 1 : isTablet ? 3 : 4;

  return (
    <ImageList cols={cols} gap={16}>
      {items.map((item) => (
        <ImageListItem key={item.id} className="image-list__item">
          <a href="#none" onClick={(event) => onRead(event, item)}>
            <Box
              component="img"
              {...srcset(item.image, 250, 200)}
              alt={item.title}
              loading="eager"
              sx={{
                aspectRatio: " 16 / 9",
                objectFit: "cover",
              }}
            />
            <div className="image-list__bar">
              <p className="list-type">{item.type}</p>
              <div className="list-title">
                <Typography
                  sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                >
                  {item.title}
                </Typography>
              </div>
              <p className="list-date">{item.date}</p>
            </div>
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

/**리스트페이지 */
function NewsList({ value, items, onTabChange, onRead, onCreateClick }) {
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={onTabChange} aria-label="뉴스 카테고리">
          <Tab label="전체" value="전체" />
          <Tab label="기획 기사" value="기획기사" />
          <Tab label="보도 자료" value="보도자료" />
          <Tab label="해외 소식" value="해외소식" />
        </TabList>
      </Box>

      <Button startIcon={<PostAddIcon />} onClick={onCreateClick}>
        글쓰기
      </Button>
      <div className="tab-pannel">
        <ListImage items={items} onRead={onRead} />
      </div>
    </TabContext>
  );
}

/**상세페이지 */
function NewsDetail({ item, onBack, onSelectUpdate, onDelete }) {
  return (
    <article>
      <h1 className="list-detail__title">{item.title}</h1>
      <Box sx={{ justifyContent: "space-between" }}>
        <p className="list-detail__date">{item.date}</p>
      </Box>
      <div className="list-detail_content">{item.content}</div>
      <div className="list-detail__action">
        <Button startIcon={<ArrowBackIcon />} onClick={onBack}>
          목록
        </Button>
        <Button
          startIcon={<EditIcon />}
          variant="contained"
          onClick={onSelectUpdate}
        >
          수정
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={onDelete}
        >
          삭제
        </Button>
      </div>
    </article>
  );
}

function NewsForm({
  submitText,
  initialTitle = "",
  initialBody = "",
  onSubmit,
}) {
  const [form, setForm] = useState({
    title: initialTitle,
    content: initialBody,
  });
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    /*
    기존 form 값은 유지하고
    입력한 항목만 변경
    */
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }; // input 내용 변경 감

  /*
  CREATE 또는 UPDATE 버튼을 누르면 실행
  */
  function handleSubmit(event) {
    // form 제출 시 발생하는 새로고침 막기
    event.preventDefault();

    // 입력값 앞뒤의 공백 제거
    const title = form.title.trim();
    const content = form.content.trim();

    // 제목이나 내용이 비어 있으면 실행하지 않음
    if (!title || !content) {
      return;
    }

    /*
    부모가 전달한 함수 실행

    Create 화면에서는 handleCreate가 실행되고,
    Update 화면에서는 handleUpdate가 실행된다.
    */
    onSubmit(title, content);
  }
  return (
    <article>
      <form onSubmit={handleSubmit}>
        <h1 className="list-detail__title">
          <input
            type="text"
            name="title"
            placeholder="title"
            value={form.title}
            onChange={handleFormChange}
          />
        </h1>

        <div className="list-detail_content">
          <p>
            <textarea
              name="content"
              placeholder="content"
              value={form.content}
              onChange={handleFormChange}
            />
          </p>
        </div>
        <div className="list-detail__action">
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            {submitText}
          </Button>
        </div>
      </form>
    </article>
  );
}

export default function App() {
  /**State */
  const [value, setValue] = useState("전체"); //tab
  const [itemList, setItemList] = useState(itemData); //list item
  const [mode, setMode] = useState("LIST"); //페이지 변경 모드
  const [selectedItem, setSelectedItem] = useState(null); //현재 선택된 아이템

  /**Function */
  //tab 함수
  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === "전체") {
      setItemList(itemData);
      return;
    }

    const filteredList = itemData.filter((item) => item.category === newValue);

    setItemList(filteredList);
  };
  //리스트 상세보기
  const handleRead = (event, item) => {
    event.preventDefault();
    setSelectedItem(item);
    setMode("DETAIL");
  };
  //Detail 목록 버튼
  const handleBackToList = () => {
    setMode("LIST");
  };

  /*Update 버튼 클릭- 글 수정 화면으로 이동*/
  function handleSelectUpdate() {
    setMode("UPDATE");
  }
  /*기존 게시글 수정*/
  function handleUpdate(id, title, content) {
    const updatedItem = {
      ...selectedItem,
      title,
      content,
    };

    setItemList((currentItems) =>
      currentItems.map((item) => (item.id === id ? updatedItem : item)),
    );

    setSelectedItem(updatedItem);
    setMode("DETAIL");
  }

  /**삭제 */
  function handleDelete(id) {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id),
    );
    setMode("LIST");
  }

  /**생성 */
  function handleCreateClick() {
    setMode("CREATE");
  }
  function handleCreate(title, content) {
    const newItem = {
      id: crypto.randomUUID(),
      category: "기획기사",
      type: "카드뉴스",
      title,
      description: content,
      content,
      date: new Date().toLocaleDateString("ko-KR"),
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    };
    setItemList((currentItems) => [...currentItems, newItem]);
    setSelectedItem(newItem);
    setMode("DETAIL");
  }
  /** mode 변경  */
  let content;
  switch (mode) {
    case "LIST":
      content = (
        <NewsList
          value={value}
          onTabChange={handleChange}
          items={itemList}
          onRead={handleRead}
          onCreateClick={handleCreateClick}
        />
      );
      break;

    case "DETAIL":
      content = (
        <NewsDetail
          item={selectedItem}
          onBack={handleBackToList}
          onUpdate={handleUpdate}
          onSelectUpdate={handleSelectUpdate}
          onDelete={() => handleDelete(selectedItem.id)}
        />
      );
      break;

    case "UPDATE":
      content = (
        <NewsForm
          submitText="완료"
          initialTitle={selectedItem.title}
          initialBody={selectedItem.content}
          onSubmit={(title, content) => {
            handleUpdate(selectedItem.id, title, content);
          }}
        ></NewsForm>
      );
      break;

    case "CREATE":
      content = (
        <NewsForm
          submitText="완료"
          onSubmit={(title, content) => {
            handleCreate(title, content);
          }}
        ></NewsForm>
      );
      break;

    default:
      content = null;
      break;
  }

  return <div className="container">{content}</div>;
}
