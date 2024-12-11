import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions/actions';
import styled from 'styled-components';

const ListaImagens = () => {
    const dispatch = useDispatch();
    const { loading, images, error, currentPage, totalPages } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchImages(currentPage));
    }, [dispatch, currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) dispatch(fetchImages(currentPage + 1));
    };

    const handlePrevPage = () => {
        if (currentPage > 1) dispatch(fetchImages(currentPage - 1));
    };

    return (
        <Wrapper>
            <Header>Os gatinhos mais gatinhos. MIAU!</Header>
            {loading && <Message>Carregando...</Message>}
            {error && <ErrorMessage>Erro: {error}</ErrorMessage>}
            <Gallery>
                {images.map((image, index) => (
                    <Thumbnail key={index} src={image.url} alt={`Cat ${index}`} />
                ))}
            </Gallery>
            <Nav>
                <ActionButton onClick={handlePrevPage} disabled={currentPage === 1}>
                    Voltar
                </ActionButton>
                <PageStatus>{`Página ${currentPage} de ${totalPages}`}</PageStatus>
                <ActionButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Seguinte
                </ActionButton>
            </Nav>
        </Wrapper>
    );
};

export default ListaImagens;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
    color: #444;
    font-family: 'Helvetica', sans-serif;
`;

const Header = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 15px;
`;

const Message = styled.p`
    font-size: 1rem;
    color: #666;
`;

const ErrorMessage = styled.p`
    font-size: 1rem;
    color: red;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    width: 100%;
    max-width: 900px;
    margin: 20px 0;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.08);
    }
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
`;

const ActionButton = styled.button`
    padding: 8px 16px;
    font-size: 0.9rem;
    color: white;
    background: purple;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #4b0082;
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
`;

const PageStatus = styled.span`
    font-size: 0.9rem;
    color: #333;
`;
