import styled from 'styled-components'
import { darken, transparentize } from 'polished'

interface IRadioTypeProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#E52E4D'
}

export const Container = styled.form`
  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--inputBd);
    background-color: var(--inputBg);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;

    font-weight: 600;
    font-size: 1rem;

    border: 0;
    border-radius: 0.25rem;

    background-color: var(--green);
    color: var(--shape);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin: 1rem 0;
`

export const RadioType = styled.button<IRadioTypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  border-radius: 0.25rem;

  border: 1px solid var(--inputBd);
  background-color: ${props =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : '#E7E9EE'};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')}; //inputBd
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;

    font-size: 1rem;
    color: var(--title);
  }
`
