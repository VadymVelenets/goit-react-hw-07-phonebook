import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const Button = styled.button`
background-color: #d80032;
color: #fff;
border: none;
padding: 5px 10px;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.2s;
&:hover {
background-color: #e74646;}
`;