import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
`;

export const Item = styled.li`
  padding: 10px 26px;
  outline: 1px solid ${({ theme }) => theme.colors.acsent1};
  border-radius: 8px;
  & button {
    display: block;
    margin-top: 16px;
    margin-left: auto;
  }
`;

export const Text = styled.p`
  text-shadow: 5px 5px 6px ${({ theme }) => theme.colors.acsent1};
`;
