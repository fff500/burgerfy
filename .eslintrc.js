module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [
    "react"
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
      flowVersion: "0.53"
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      {property: "freeze", object: "Object"},
      {property: "myFavoriteWrapper"}
    ],
    linkComponents: [
      "Hyperlink",
      {name: "Link", linkAttribute: "to"}
    ]
  },
  rules: {
    "object-curly-spacing": ["error", "always"],
    "react/prop-types": [2, { ignore: ['children'] }]
  }
}
