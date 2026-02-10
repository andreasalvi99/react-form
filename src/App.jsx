const headLines = [
  "Come organizzare la tua giornata in modo efficace",
  "5 strumenti digitali indispensabili per lavorare meglio",
  "Guida base al minimalismo digitale",
  "Come migliorare la concentrazione in ambienti rumorosi",
  "Introduzione al lavoro da remoto",
  "Perché le pause migliorano la produttività",
  "Le basi della sicurezza online",
];

export default function App() {
  return (
    <>
      <section
        id="article-list"
        className="p-5 d-flex justify-content-center align-items-center flex-column"
      >
        <div className="container text-start p-3 bg-primary-subtle">
          <ul className="list-group list-group-flush">
            {headLines.map((headLine, index) => {
              return (
                <li key={index} className="list-group-item fw-bold p-3">
                  {headLine}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="input-group mb-3 container mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="New Article"
            aria-label="New Article"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
          >
            + Aggiungi
          </button>
        </div>
      </section>
    </>
  );
}
