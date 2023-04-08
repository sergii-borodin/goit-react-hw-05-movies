import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding-left: 0;

  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReviewItem = styled.li`
  padding-right: 10px;
  padding-left: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;
