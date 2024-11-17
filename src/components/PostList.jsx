/* 7. Aplicação de Requisição de Dados Simples: Crie um componente que exiba uma lista de posts obtidos de uma API
pública (como JSONPlaceholder). Use useEffect para fazer a requisição ao carregar o componente e exiba os posts
em uma lista. Desafio: adicione um botão para recarregar os dados e um indicador de carregamento enquanto a 
requisição está sendo feita. */


import React, { useState, useEffect } from "react"
import '../css/PostList.css'

function PostList() {
    //useState para gerenciar o estado do componente
    const [posts, setPosts] = useState([]) //Armazena os posts obtidos da API
    const [loading, setLoading] = useState(false) //Indica se os dados estão sendo carregados


    //Função que faz a requisição para obter os posts, gerencia o estado de carregamento e atualiza a lista de posts
    const fetchPosts = async () => {
        setLoading(true) // Inicia o estado de carregamento
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts") //Fazendo a requisição
            const data = await response.json() //COnverte resposta para JSON
            setPosts(data.slice(0, 5)) //Atualiza o estado com os primeiros 5 posts
        } catch (error) {
            console.error("Erro ao carregar posts:", error)
        } finally {
            setLoading(false) //FInaliza o estado de carregamento
        }
    }


    //useEffect faz com que a função fetchPosts seja executada assim que o componente é montado
    useEffect(() => {
        fetchPosts() // Carrega os posts quando o componente é montado
    }, [])

    return (
        <div className="postList-div">
            <h2>Lista de Posts</h2>

            {/* Exibe o indicador de carregamento ou a lista de posts */}
            {loading ? (
                <p className="loadingPosts">Carregando posts...</p> //Indicador de carregamento
            ) : (
                <ul>
                    {/* Itera sobre o array "posts" e cria um item de lista (li) para cada post*/}
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}

            {/* Botão para recarregar os posts */}
            <button className="postListBtn"onClick={fetchPosts}>Recarregar Posts</button>
        </div>
    )
}

export default PostList
