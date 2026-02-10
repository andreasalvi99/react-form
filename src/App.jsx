import { useState } from "react";

const startHeadLines = [
  `"Come organizzare la tua giornata in modo efficace"`,
  `
"5 strumenti digitali indispensabili per lavorare meglio"`,
  `
"Guida base al minimalismo digitale"`,
  `
"Come migliorare la concentrazione in ambienti rumorosi"`,
  `
"Introduzione al lavoro da remoto"`,
  `
"Perché le pause migliorano la produttività"`,
  `
"Le basi della sicurezza online"`,
];

export default function App() {
  const [headLines, setArticle] = useState(startHeadLines);
  const [newArticle, setNewArticle] = useState("");

  // ** FUNZIONI

  function handleSubmit(e) {
    e.preventDefault();
    if (newArticle === "") return;
    setArticle([...headLines, newArticle]);
    setNewArticle("");
  }

  function handleSend() {
    if (newArticle === "") return;
    setArticle([...headLines, newArticle]);
    setNewArticle("");
  }

  function handleChanges(e) {
    setNewArticle(e.target.value);
  }

  return (
    <>
      <section
        id="article-list"
        className="p-5 d-flex justify-content-center align-items-center flex-column"
      >
        <h1 className="mb-3 fw-bolder">HEADLINES</h1>
        <div className="container text-start p-3 bg-primary-subtle rounded-3">
          <ul className="list-group list-group-flush rounded-3">
            {headLines.map((headLine, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item fw-bold p-3 d-flex justify-content-between"
                >
                  {headLine}
                  <button>
                    <i
                      className="bi bi-trash-fill"
                      onClick={() => {
                        console.log("index:", index);

                        const updatedHeadlines = headLines.filter(
                          (_, newIndex) => {
                            console.log("newIndex:", newIndex);

                            return newIndex !== index;
                          },
                        );
                        console.log(updatedHeadlines);
                        setArticle(updatedHeadlines);
                      }}
                    ></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="input-group mb-3 container mt-3 "
        >
          <input
            value={newArticle}
            type="text"
            onChange={handleChanges}
            className="form-control"
            placeholder="New Article"
            aria-label="New Article"
            aria-describedby="button-new-article"
          />
          <button
            onClick={handleSend}
            className="btn btn-outline-primary"
            type="button"
            id="button-new-article"
          >
            + Aggiungi
          </button>
        </form>
      </section>
    </>
  );
}
