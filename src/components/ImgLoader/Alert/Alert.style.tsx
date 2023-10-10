import styled from "styled-components";

interface DropdownBoddyI {
  err?: boolean;
  succes?: boolean;
}

export const ContainerAlertInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const AlertInfoError = styled.div<DropdownBoddyI>`
  position: absolute;
  z-index: ${({ err }) => (err ? `1` : `0`)};
  opacity: ${({ err }) => (err ? `1` : `0`)};
  transition: all 0.5s ease;
`;

export const AlertInfoSucces = styled.div<DropdownBoddyI>`
  position: absolute;
  z-index: ${({ succes }) => (succes ? `1` : `0`)};
  opacity: ${({ succes }) => (succes ? `1` : `0`)};
  transition: all 0.5s ease;
`;
