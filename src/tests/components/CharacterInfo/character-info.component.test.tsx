import React from 'react';
import { CharacterInfo } from "../../../components/CharacterInfo/character-info.component";
import { render, RenderResult  } from '@testing-library/react';
import { IStarWarsCharacter } from '../../../models/star-wars.model';
import StarWarsContext, { StarWarsContextProps } from '../../../context/star-wars.context';

const mockCharacter: IStarWarsCharacter = {
    name: 'testName',
    hair_color: 'testHairColor',
    eye_color: 'testEyeColor',
    skin_color: 'testSkinColor',
    gender: 'testGender',
    birth_year: 'testBirthYear',
    films: ['testFilmUrl'],
    height: 'testHeight',
    mass: 'testMass',
    url: 'testUrl'
}

const mockContext: StarWarsContextProps = {
    count: 12,
    films: [
        {
            url: 'testFilmUrl',
            title: 'testTitle',
            episode_id: 1,
        },
    ],
    characters: [mockCharacter]
};

describe('Character info component test', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(
            <StarWarsContext.Provider value={mockContext}>
                <CharacterInfo {...mockCharacter} />
            </StarWarsContext.Provider>
        )
    });

    it('should define component', () => {
        expect(component).toBeDefined();
    });

    it('should set film title', () => {
        const filmTitle = component.queryByText('testTitle');
        expect(filmTitle).toBeDefined();
    });

    it('should set film title to empty if no such film found', () => {
        component = render(
            <StarWarsContext.Provider value={{} as StarWarsContextProps}>
                <CharacterInfo {...mockCharacter} />
            </StarWarsContext.Provider>
        );

        const filmTitle = component.queryByText('Films: ');
        expect(filmTitle).toBeDefined();
    });
});