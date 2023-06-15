type DataLayer ={
  event:string,
  [url:string]
}

export declare global {
  interface Window {
    dataLayer: DataLayer
  }
}