import styled from 'styled-components';

export const Container = styled.div`
  .sidebarStyle {
    display: inline-block;
    position: absolute;
    top: 1;
    left: 0;
    margin: 12px;
    background-color: #404040;
    color: #ffffff;
    z-index: 1 !important;
    padding: 6px;
    font-weight: bold;
  }

  .mapContainer {
    position: unset;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;
