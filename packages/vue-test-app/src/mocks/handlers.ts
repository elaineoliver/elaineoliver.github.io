import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.domain.com/windmills", () => {
    return HttpResponse.json([
      {
        id: "10",
        capacity: 1500,
        efficiency: 0.25
      },
      {
        id: "20",
        capacity: 2000,
        efficiency: 0.33
      },
    ]);
  }),
];