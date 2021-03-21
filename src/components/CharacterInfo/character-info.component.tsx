import React, { useContext, useMemo } from 'react';
import { IStarWarsCharacter } from '../../models/star-wars.model';
import { Card, ListGroup } from 'react-bootstrap';
import StarWarsContext from '../../context/star-wars.context';

export const CharacterInfo = (props: IStarWarsCharacter) => {
    const ctx = useContext(StarWarsContext);
    const filmNames = useMemo(() => {
        const films = ctx.films;

        if (ctx?.films?.length) {
            return props.films.map((film: string) => films.find((item) => item.url === film)?.title);
        } 
        return [];
    }, [props.films, ctx.films]);
    
    return (
        <Card className="mb-3">
            <Card.Header as="h5">{ props.name }</Card.Header>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>Gender: { props.gender }</ListGroup.Item>
                    <ListGroup.Item>Height: { props.height }</ListGroup.Item>
                    <ListGroup.Item>Weight: { props.mass }</ListGroup.Item>
                    <ListGroup.Item>Hair color: { props.hair_color }</ListGroup.Item>
                    <ListGroup.Item>Skin color: { props.skin_color }</ListGroup.Item>
                    <ListGroup.Item>Eye color: { props.eye_color }</ListGroup.Item>
                    <ListGroup.Item>Birth year: { props.birth_year }</ListGroup.Item>
                    <ListGroup.Item>Films: { filmNames.join(', ') }</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}