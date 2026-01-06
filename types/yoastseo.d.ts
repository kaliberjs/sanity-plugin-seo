declare module '@types/yoastseo' {
  export const helpers: {
    measureTextWidth(text: string): number
  }

  export const interpreters: {
    scoreToRating(score: number): string
  }

  export const Paper: (typeof import('yoastseo'))['Paper']
}
