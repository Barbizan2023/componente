export default function Pacote(nome,preco,descricao,incluses,botao){
    return(
        <div className="pacote-header">
              <h3>{nome}</h3>
              <div className="preco">
                <span className="preco-anterior">{preco}</span>
                <span className="preco-atual">{preco}</span>
              </div>
              <p>
              {descricao}
            </p>
            <p>Incluem:</p>
            <ul>
              <li>
                <FaHotel /> {incluses}
              </li>
              <li>
                <FaPlane /> {incluses}
              </li>
              <li>
                <FaWalking /> {incluses}
              </li>
              <li>
                <FaBus /> {incluses}
              </li>
            </ul>
            <button type="button" className="btn-comprar">
              {botao}
            </button>
            </div>
            
    )
}