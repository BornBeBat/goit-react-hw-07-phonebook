import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;

  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 25em; */
  /* gap: 26px; */
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Text = styled.p`
  text-shadow: 5px 5px 6px ${({ theme }) => theme.colors.acsent1};
`;
