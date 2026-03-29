export const Tags ={
   UI:"@ui",
   Smoke:"@smoke",
   Regression:"@regression",
   E2E:"@e2e",
 } as const

 export type Tag = (typeof Tags )[keyof typeof Tags ];