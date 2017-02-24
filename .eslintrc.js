module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended", "google"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
        },
        "sourceType": "module",
    },
    "plugins": ["react"],
};
