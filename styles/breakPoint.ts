import {
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  css,
} from 'styled-components';

export const sp = (
    base: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
      @media (max-width: 768px) {
    ${css(base, ...interpolations)}
  }
  `;