import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

interface Props {
    onChange: (query: string) => void,
}

export const SearchInput = (props: Props) => {
    return (
        <InputGroup>
            <FormControl
                placeholder="Start typing your favorite character name and we will upload details..."
                onChange={(e) => {
                    props.onChange(e.target.value);
                }}
            />
        </InputGroup>
    )
}