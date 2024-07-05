import React from 'react';
import styled from 'styled-components';

// Styled components for Employee Card
const Card = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #ccc;
  background: linear-gradient(to right, #f0f0f0, #e0e0e0);
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const InfoWrapper = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  margin: 0;
`;

const DateOfBirth = styled.p`
  margin: 5px 0;
`;

const Title = styled.p`
  margin: 5px 0;
`;

const EmployeeCard = ({ employee }) => {
  const { lastName, firstName, birthDate, title, photo } = employee;

  return (
    <Card>
      <Photo src={`data:image/jpeg;base64,${photo}`} alt="Employee Photo" />
      <InfoWrapper>
        <Name>{lastName}, {firstName}</Name>
        <DateOfBirth>Date of Birth: {birthDate.substring(0,10)}</DateOfBirth>
        <Title>Title: {title}</Title>
      </InfoWrapper>
    </Card>
  );
};

export default EmployeeCard;
