export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const AVATAR_URL =
  "https://lh3.googleusercontent.com/a/ACg8ocKu4xNckDF9-9VHMBQI2tYI65Cel0udrANw-9isjj-Z-LiDeUc=s360-c-no";
export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const APP_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIE_IMG_CDN = "https://image.tmdb.org/t/p/w500/";
export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hin", name: "Hindi" },
  { identifier: "spanis", name: "Spanish" },
];
export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;
