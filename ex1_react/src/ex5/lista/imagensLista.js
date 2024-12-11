import React, { useState } from 'react';
import { useFetchImagesQuery } from '../api/apiGatinhos'
import styled from 'styled-components';

const ListaImagens = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useFetchImagesQuery({ page: currentPage });

    const handleNextPage = () => {
        if (currentPage < data.totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <Container>
            <Title>Os gatinhos mais gatinhos. MIAU!</Title>
            <ImageList>
                {data?.images.map((image, index) => (
                    <Image key={index} src={image.url} alt="Cat" />
                ))}
            </ImageList>
            <Pagination>
                <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Voltar
                </Button>
                <PageInfo>{`Página ${currentPage} de ${data?.totalPages || 1}`}</PageInfo>
                <Button onClick={handleNextPage} disabled={currentPage === data?.totalPages}>
                    Seguinte
                </Button>
            </Pagination>
        </Container>
    );
};

export default ListaImagens;

const Container = styled.div`
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f7f7f7;
    color: #333;
`;

const Title = styled.h1`
    color: #555;
    margin-bottom: 20px;
`;

const LoadingMessage = styled.p`
    font-size: 1.2rem;
    color: #888;
`;

const ErrorMessage = styled.p`
    font-size: 1.2rem;
    color: #e63946;
`;

const ImageList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin: 20px 0;
`;

const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: purple;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: black;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const PageInfo = styled.span`
    font-size: 1rem;
    color: #555;
`;
