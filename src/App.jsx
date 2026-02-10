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
      <section className="p-5">
        <div className="container text-start p-3">
          <ul class="list-group list-group-flush">
            {headLines.map((headLine, index) => {
              return (
                <li key={index} class="list-group-item">
                  {headLine}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
