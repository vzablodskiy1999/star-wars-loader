import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { SearchInput } from '../../../components/SearchInput/search-input.component';
import { act } from 'react-dom/test-utils';

describe('Search input component tests', () => {
    let component: RenderResult;
    const spy = jest.fn();

    beforeEach(() => {
        component = render(<SearchInput onChange={spy} />);
    });

    it('should define component', () => {
        expect(component).toBeDefined();
    });

    it('shoud fire a callback on input change', () => {
        const input = component.queryByTestId('search-input');

        act(() => {
            fireEvent.change(input as Element, { target: { value: 'test' } });
        });

        expect(spy).toHaveBeenCalledWith('test');
    });
});