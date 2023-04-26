/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    firebase: {
      apiKey: "AIzaSyAf1aN9feQTTVkBQBQJIfMq199Ff-65HjU",
      authDomain: "tigrehacks-72818.firebaseapp.com",
      projectId: "tigrehacks-72818",
      storageBucket: "tigrehacks-72818.appspot.com",
      messagingSenderId: "700985272275",
      appId: "1:700985272275:web:341ee055bc2f6fc71af126",
      databaseURL:"https://tigrehacks-72818-default-rtdb.firebaseio.com/"
    },
  },
};

module.exports = nextConfig;
