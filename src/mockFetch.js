export default async function mockFetch(url) {
  switch (url) {
    case "https://jsonplaceholder.typicode.com/users?id=1": {
      return {
        ok: true,
        status: 200,
        json: async () => ({
          id: 1,
          name: "evondev",
        }),
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
