export const encodeToBase64 = (data: string): string => {
  return btoa(data);
};

export const decodeToString = (data: string): string => {
  return atob(data);
};

const createEncodedUrl = (
  method: string,
  url: string,
  body?: string,
  headers?: Record<string, string>,
) => {
  const encodedUrl = encodeToBase64(url);

  const encodedBody = body ? encodeToBase64(body) : '';

  let fullUrl = `${method}/${encodedUrl}`;

  if (encodedBody) {
    fullUrl += `/${encodedBody}`;
  }

  if (headers) {
    const queryParams = new URLSearchParams();
    Object.entries(headers).forEach(([key, value]) => {
      queryParams.append(key, encodeURIComponent(value));
    });
    fullUrl += `?${queryParams.toString()}`;
  }

  return fullUrl;
};

export default createEncodedUrl;
