import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const ProjectsAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${breakpointsMedia({
    md: css`
      h3 {
        ${textStyleVariantsMap.textInvokeModalMD}
      }
    `,
  })}
`;

ProjectsAreaWrapper.Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & div:nth-child(1) {
    order: 2;
  }
  & div:nth-child(2) {
    order: 2;
  }
  & div:nth-child(3) {
    order: 2;
  }
  & div:nth-child(4) {
    order: 1;
  }

  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      flex-wrap: wrap;

      & div:nth-child(1) {
        order: 1;
      }
      & div:nth-child(2) {
        order: 1;
      }
      & div:nth-child(3) {
        order: 1;
      }
      & div:nth-child(4) {
        order: 1;
      }
    `,
  })}
`;

export default ProjectsAreaWrapper;
