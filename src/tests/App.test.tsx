import React from 'react';
import { render, RenderResult, fireEvent, act } from '@testing-library/react';
import App from '../App';
import fetchMock from 'fetch-mock';
import { starWarsBaseUrl, StarWarsServerResponse } from '../services/star-wars.service';
import { IStarWarsCharacter, IStarWarsFilm } from '../models/star-wars.model';

const mockCharactersResponse = {
  count: 12,
  results: [
    {
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
    } as IStarWarsCharacter,
  ]
} as StarWarsServerResponse;

const mockFilmsResponse = {
  results: [
    {
      title: 'testFilmTitle',
      url: 'testFilmUrl',
    } as IStarWarsFilm,
  ]
} as StarWarsServerResponse;

describe('App component test', () => {
  let component: RenderResult;

  beforeAll(() => {
    fetchMock.get(`${starWarsBaseUrl}people/?search=&page=1`, mockCharactersResponse);
    fetchMock.get(`${starWarsBaseUrl}films/`, mockFilmsResponse);
  });

  beforeEach(async () => {
    await act(async () => {
      component = await render(<App />);
    });
  });
  
  afterAll(() => {
    fetchMock.reset();
  });
  
  it('should define component and call endpoints on load', () => {
    expect(component).toBeDefined();
    expect(fetchMock.called(`${starWarsBaseUrl}people/?search=&page=1`)).toBeTruthy();
    expect(fetchMock.called(`${starWarsBaseUrl}films/`)).toBeTruthy();
  });

  it('should call an endpoint on pagination item click', async () => {
    fetchMock.get(`${starWarsBaseUrl}people/?search=&page=2`, mockCharactersResponse);
    const secondPaginationItem = component.queryAllByTestId('pagination-item')[1];

    await act(async () => {
      await fireEvent.click(secondPaginationItem as Element, {});
    })

    expect(fetchMock.lastCall()).toContain(`${starWarsBaseUrl}people/?search=&page=2`);
  });

  it('should not call an endpoint on pagination item click if clicking on active item', async () => {
    const activePaginationItem = component.queryByText('(current)');

    await act(async () => {
      await fireEvent.click(activePaginationItem as Element, {});
    });

    expect(fetchMock.lastCall()).not.toContain(`${starWarsBaseUrl}people/?search=&page=1`);
  });

  it('should debounce endpoint call on search input change', async () => {
    jest.useFakeTimers();
    fetchMock.get(`${starWarsBaseUrl}people/?search=test&page=1`, mockCharactersResponse);
    const searchInput = component.queryByTestId('search-input');
    
    await act(async () => {
      await fireEvent.input(searchInput as Element, { target: { value: 't' } });
      await fireEvent.input(searchInput as Element, { target: { value: 'test' } });
    
      jest.runOnlyPendingTimers();
    });

    expect((searchInput as HTMLInputElement).value).toBe('test');
    expect(fetchMock.called(`${starWarsBaseUrl}people/?search=t&page=1`)).toBeFalsy();
    expect(fetchMock.called(`${starWarsBaseUrl}people/?search=test&page=1`)).toBeTruthy();
    jest.useRealTimers();
  });
});
