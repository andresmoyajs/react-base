const prod = {
  url: {
    API_URL: "https://myapp.heroku.com",
  },
};

const dev = {
  url: {
    API_URL: `http://localhost:5152`,
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
