import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 50vh;
  background-color: #f8f9fa;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

export const Left = styled.div`
  height: 40vh;
  width: 40%;
  background-color: #9da3a8;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.1rem;
  gap: 10px;
`

export const Right = styled.div`
  height: 40vh;
  width: 60%;
  padding: 20px;
  font-size: 1.3rem;
`

export const HeaderImage = styled.img`
  width: 100%;
  max-width: 550px;
  height: auto;
  border-radius: 10px;
`;

export const HeaderButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;