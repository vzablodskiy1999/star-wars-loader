import fetchMock from 'fetch-mock';
import { starWarsBaseUrl, StarWarsServerResponse, fetchStarWarsCharacters, fetchStarWarsFilms } from '../../services/star-wars.service';

describe('Star wars service tests', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should have endpoint to fetch characters', async () => {
        fetchMock.getOnce(starWarsBaseUrl + "people/?search=test&page=1", {
            count: 12,
            results: ['test']
        } as StarWarsServerResponse);

        await fetchStarWarsCharacters(1, 'test').then((data) => {
            expect(data.results[0]).toBe('test');
        });
    });

    it('should have endpoint to fetch characters and handle error if such', async () => {
        const spy = jest.fn();
        console.log = spy;
        fetchMock.getOnce(starWarsBaseUrl + "people/?search=&page=1", 500);

        await fetchStarWarsCharacters(1).then(() => {
            expect(spy).toHaveBeenCalled();
        });
    });

    it('should have endpoint to fetch films', async () => {
        fetchMock.getOnce(starWarsBaseUrl + "films/", {
            count: 12,
            results: ['test']
        } as StarWarsServerResponse);

        await fetchStarWarsFilms().then((data) => {
            expect(data.results[0]).toBe('test');
        });
    });

    it('should have endpoint to fetch films and handle error if such', async () => {
        const spy = jest.fn();
        console.log = spy;
        fetchMock.getOnce(starWarsBaseUrl + "films/", 500);

        await fetchStarWarsFilms().then(() => {
            expect(spy).toHaveBeenCalled();
        });
    });
});