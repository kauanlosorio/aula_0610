import React from "react"

const NoticiaComponente = ({ titulo, imagem, alt, descricao, categoria}) => {
    return (
        <div className="noticia">
            <img src={imagem} alt={alt} className='noticia-imagem' />
            <h2 className='noticia-titulo'>{titulo}</h2>
            < p className="noticia-descricao">{descricao}</p>
            < p className="noticia-categoria">{categoria}</p>
        </div>
    );
}

export default NoticiaComponente;