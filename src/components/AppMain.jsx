import './AppMain.css'

export default function AppMain(){

    const project = [{
        id: 1,
        nome: "Portfolio Personale",
        difficoltà: "Intermedia",
        descrizione: "Crea un sito web per mostrare i tuoi progetti e abilità.",
        completato: false
      },
      {
        id: 2,
        nome: "To-do List App",
        difficoltà: "Facile",
        descrizione: "Costruisci un'applicazione per gestire una lista di cose da fare.",
        completato: true
      },
      {
        id: 3,
        nome: "E-commerce Shop",
        difficoltà: "Avanzata",
        descrizione: "Sviluppa un negozio online completo di carrello e pagamento.",
        completato: false
      },
      {
        id: 4,
        nome: "App di Ricette",
        difficoltà: "Intermedia",
        descrizione: "Crea un'app per cercare e salvare ricette di cucina.",
        completato: true
      },
      {
        id: 5,
        nome: "Gioco a Quiz",
        difficoltà: "Intermedia",
        descrizione: "Sviluppa un gioco a quiz a scelta multipla con punteggio finale.",
        completato: false
      }]
      
    const completato = project.filter((projectCompletato) => projectCompletato.completato)
    const daCompletare = project.filter((projectCompletato) => !projectCompletato.completato)
    return(
        <main> 
            <h1 style={{textAlign: "center"}}>
            I miei projetti
            </h1>

            <section className='boxProject'>
              <h1 style={{textAlign: "center", margin:"1rem"}}>Completati</h1>
                <ul>
                {completato.map((project) =>
                     <li key={project.id}>
                        <h3>{project.nome}</h3>
                        <p>
                        id:{project.id}
                        </p>
                        <p>difficoltà: {project.difficoltà}</p>
                        <p>descrizione: {project.descrizione}</p>
                        <p>
                            completato?  {project.completato ? (
                                            <span>✅</span>
                                        ) : (
                                            <span>❌</span>
                                        )}
                        </p>
                        </li> 
                     )}
                </ul>
                <div>
                  
                    
                </div>
            </section>

            <section className='boxProject'>
              <h1 style={{textAlign: "center", margin:"1rem"}}>Da completare</h1>
              <ul>
                {daCompletare.map((project) =>
                     <li key={project.id}>
                        <h3>{project.nome}</h3>
                        <p>
                        id:{project.id}
                        </p>
                        <p>difficoltà: {project.difficoltà}</p>
                        <p>descrizione: {project.descrizione}</p>
                        <p>
                            completato?  {project.completato ? (
                                            <span>✅</span>
                                        ) : (
                                            <span>❌</span>
                                        )}
                        </p>
                        </li> 
                     )}
                </ul>
                <div>
                  
                    
                </div>
            </section>
            </main>
    )
}