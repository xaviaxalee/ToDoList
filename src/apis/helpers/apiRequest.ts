type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

function formRequestBody(method: Method, data: unknown): RequestInit {
  const request: RequestInit = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (method === 'GET') return request;
  return {
    ...request,
    body: JSON.stringify(data),
  };
}

export async function buildRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> {
  const res = await fetch(url, formRequestBody(method, data));
  if (!res.ok) throw new Error('An error occurred: ' + res.status);
  return (await res.json()) as Promise<T>;
}
