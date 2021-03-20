import React, { useContext } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import StarWarsContext from '../../context/star-wars.context';
import { CharacterInfo } from '../CharacterInfo/character-info.component';

interface Props {
    isLoading: boolean;
}

export const CharacterList = (props: Props) => {
    const ctx = useContext(StarWarsContext);

    return (
        <>
            {props.isLoading 
            ? <Spinner animation="border" variant="secondary" /> 
            : (ctx?.characters?.map((character) => (
                <Row key={character.url} className="w-100">
                    <Col lg={12} md={12} sm={12} >
                        <CharacterInfo {...character}/>
                    </Col>
                </Row>
            )))}
        </>
    )
}