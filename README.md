-> bunx --bun create-expo-app --help

-> bun create expo-app plantly --template

-> bun run start or bun run start --tunnel

-> npx expo lint

-> npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier

-> 
```javascript
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
```

-> yarn lint --fix
