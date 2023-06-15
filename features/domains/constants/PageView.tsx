export const pageview = (url: string) => {
  window.dataLayer['push']({
    event: 'pageLoad',
    pagePath: url,
  });
};
