import "./styles.css";
import { useState } from "react";

const INITIAL_TOPICS = [
  { id: 1, title: "html", body: "html is ..." },
  { id: 2, title: "css", body: "css is ..." },
  { id: 3, title: "javascript", body: "javascript is ..." },
];

function Header({ title, onSelect }) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onSelect();
          }}
        >
          {title}
        </a>
      </h1>
    </header>
  );
}

function Nav({ topics, onSelect }) {
  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              href={`/read/${topic.id}`}
              onClick={(event) => {
                event.preventDefault();
                onSelect(topic.id);
              }}
            >
              {topic.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

function Create({ onCreate }) {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleCreate() {
    const title = form.title.trim();
    const body = form.body.trim();

    if (!title || !body) {
      return;
    }

    onCreate(title, body);

    setForm({
      title: "",
      body: "",
    });
  }

  return (
    <article>
      <h2>Create</h2>

      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={form.title}
            onChange={handleChange}
          />
        </p>

        <p>
          <textarea
            name="body"
            placeholder="body"
            value={form.body}
            onChange={handleChange}
          />
        </p>

        <p>
          <button type="button" onClick={handleCreate}>
            Create
          </button>
        </p>
      </form>
    </article>
  );
}

export default function App() {
  const [topics, setTopics] = useState(INITIAL_TOPICS);
  const [mode, setMode] = useState("WELCOME");
  const [selectedId, setSelectedId] = useState(null);

  const selectedTopic = topics.find((topic) => topic.id === selectedId);

  function handleSelectWelcome() {
    setMode("WELCOME");
    setSelectedId(null);
  }

  function handleSelectTopic(id) {
    setMode("READ");
    setSelectedId(id);
  }

  function handleSelectCreate() {
    setMode("CREATE");
  }

  function handleCreate(title, body) {
    const newTopic = {
      id: crypto.randomUUID(),
      title,
      body,
    };

    setTopics((currentTopics) => [...currentTopics, newTopic]);
    setMode("READ");
    setSelectedId(newTopic.id);
  }

  let content;

  switch (mode) {
    case "READ":
      content = selectedTopic ? (
        <Article title={selectedTopic.title} body={selectedTopic.body} />
      ) : (
        <Article title="Not found" body="선택한 글이 없습니다." />
      );
      break;

    case "CREATE":
      content = <Create onCreate={handleCreate} />;
      break;

    case "WELCOME":
    default:
      content = <Article title="Welcome" body="Hello, Web" />;
  }

  return (
    <div className="App">
      <Header title="Header Test" onSelect={handleSelectWelcome} />

      <Nav topics={topics} onSelect={handleSelectTopic} />

      {content}

      <a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          handleSelectCreate();
        }}
      >
        Create
      </a>
    </div>
  );
}
