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

export const pcMin = (
    base: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
      @media (max-width: 1500px) {
    ${css(base, ...interpolations)}
  }
  `;

export const tablet = (
    base: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
      @media (max-width: 1024px) {
    ${css(base, ...interpolations)}
  }
  `;

