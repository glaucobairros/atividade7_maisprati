/* 8. Galeria de Imagens com Visualização Detalhada: Crie uma galeria simples com uma lista de imagens.
Quando o usuário clica em uma imagem, exiba-a em uma visualização ampliada em um modal.
Use useState para armazenar a imagem selecionada e renderize o modal condicionalmente.
Desafio: adicione um botão de “Fechar” no modal e uma funcionalidade de navegação entre as imagens. */


import React, { useState } from "react"
import '../css/ImageGallery.css'
import image1 from "../assets/img/mario.png"
import image2 from "../assets/img/link.png"
import image3 from "../assets/img/red.png"
import image4 from "../assets/img/super_mario_odyssey_dinosaur_4k.jpeg"

function ImageGallery() {
    //Lista de imagens
    const images = [image1, image2, image3, image4]

    //Estados para controlar a imagem selecionada e seu índice
    const [selectedImage, setSelectedImage] = useState(null) //Armazena a URL da imagem selecionada
    const [currentIndex, setCurrentIndex] = useState(null) //Armazena o índice da imagem selecionada


    //Função para abrir o modal com a imagem clicada
    const openModal = (index) => {
        setSelectedImage(images[index]) //Define imagem selecionada
        setCurrentIndex(index) //Define o índice da imagem
    }


    //Função para fechar o modal
    const closeModal = () => {
        setSelectedImage(null) //Remove a imagem selecionada
        setCurrentIndex(null) //Reseta o índice
    }


    //Função para mostrar imagem anterior
    const showPrevious = () => {
        if (currentIndex > 0) { //Se o índice atual for maior que 0 (não está na primeira imagem)
            const newIndex = currentIndex - 1 //Decremento do índice para obter imagem anterior
            setSelectedImage(images[newIndex]) //Atualiza imagem selecionada para anterior
            setCurrentIndex(newIndex) //Atualiza o índice para o novo índice
        }
    }

    //Função para mostrar prózima imagem
    const showNext = () => {
        if (currentIndex < images.length - 1) { //Se o índice atual for menor que o índice da última imagem (não está na última imagem)
            const newIndex = currentIndex + 1 //Incrementa o índice para obter a próxima imagem
            setSelectedImage(images[newIndex]) //Atualiza a imagem selecionada para a próxima
            setCurrentIndex(newIndex) //Atualiza o índice para o novo índice
        }
    }

    return (
        <div className="gallery-div" style={{ textAlign: "center", paddingTop: "20px" }}>
            <h2>Galeria de Imagens</h2>
            {/* Renderiza as imagens da galeria */}
            <div className="images">
                {images.map((image, index) => (
                    <img
                        key={index} //Cada imagem tem uma chave única baseada no índice
                        src={image} //URL da imagem
                        alt={`Imagem ${index + 1}`}
                        onClick={() => openModal(index)} //Abre o modal ao clicar
                    />
                ))}
            </div>

            {/* Renderiza o modal apenas se uma imagem estiver selecionada */}
            {selectedImage && (
                <div className="modal-content">
                    {/* Botão fechar modal */}
                    <button className="closeBtn" onClick={closeModal}>X</button>

                    {/* Botão imagem anterior */}
                    <button class="prevBtn" onClick={showPrevious} disabled={currentIndex === 0}> {/*Desabilitado na primeira imagem*/}
                        Anterior
                    </button>

                    {/* Imagem ampliada */}
                    <img src={selectedImage} alt="Selecionada" />

                    {/* Botão próxima imagem */}
                    <button className="nextBtn" onClick={showNext} disabled={currentIndex === images.length - 1}> {/*Desabilitado na última imagem*/}
                        Próxima
                    </button>
                </div>
            )}
        </div>
    )
}

export default ImageGallery
