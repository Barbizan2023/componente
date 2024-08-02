import "./style.css"

export default function Depoimentos({avaliacao, nome}){
    return(
        <div className="card-depoimento">
            <div className="depoimento-info">
              <h3>{nome}</h3>
              <blockquote>{avaliacao}</blockquote>
            </div>
          </div>
    )
}