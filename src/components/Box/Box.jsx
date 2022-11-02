import styled from 'styled-components';
import { layout, flexbox } from 'styled-system';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },

  layout,
  flexbox
);

export default Box;
