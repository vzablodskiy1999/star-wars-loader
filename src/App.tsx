import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { SearchInput } from './components/SearchInput/search-input.component';
import { Container, Row } from 'react-bootstrap';
import { fetchStarWarsCharacters, fetchStarWarsFilms } from './services/star-wars.service';
import StarWarsContext from './context/star-wars.context';
import { StarWarsContextProps } from './context/star-wars.context';
import { CharacterList } from './components/CharacterList/character-list.component';
import { Pagination } from 'react-bootstrap';

let timeout: NodeJS.Timeout;

function App() {
  const [contextProps, setContextProps] = useState<StarWarsContextProps>({} as StarWarsContextProps);
  const [activePage, setActivePage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharactersAndSetContext = (page: number, searchQuery: string): Promise<any> => {
    setIsLoading(true);
    return fetchStarWarsCharacters(page, searchQuery).then(data => {
      setContextProps({
        ...contextProps,
        count: data.count,
        characters: data.results,
      });
    })
    .finally(() => { setIsLoading(false) });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchStarWarsCharacters(1, '').then((characters) => {
      fetchStarWarsFilms().then((films) => {
        setContextProps({
          count: characters.count,
          characters: characters.results,
          films: films.results
        });
      });
    })
    .finally(() => { setIsLoading(false) });
  }, []);

  const paginationItems = useMemo(() => {
    const { count } = contextProps;
    const pages = Math.ceil(count / 10);
    const items = [];

    if (pages > 1) {
      for (let i = 1; i <= pages; i ++) {
        items.push(
          <Pagination.Item key={i} active={activePage === i} data-testid="pagination-item" onClick={() => {
            if (activePage !== i) { 
              setActivePage(i);
              fetchCharactersAndSetContext(i, query);
            }
          }}>
            {i}
          </Pagination.Item>
        )
      }
    }
    
    return items;
  }, [contextProps.count, activePage]);

  const handleSearch = (event: string) => {
    setQuery(event);
    setActivePage(1);
    if (timeout !== undefined) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetchCharactersAndSetContext(1, event);
    }, 1000);
  }

  return (
    <StarWarsContext.Provider value={contextProps}>
      <div className='pt-5'>
        <Container>
          <Row className="mb-4">
            <h1 className="w-100 text-center">Star wars characters loader</h1>
          </Row>
          <Row className="mb-4">
            <SearchInput onChange={handleSearch} />
          </Row>
          <Row className="d-flex justify-content-center">
            <CharacterList isLoading={isLoading} />
          </Row>
          <Row className="mb-4">
            {!isLoading && <Pagination>
              {paginationItems}
            </Pagination>}
          </Row>
        </Container>
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
