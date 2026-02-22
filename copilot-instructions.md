# Repository Overview

This is a TypeScript project with a webpack-based build system and Jest testing framework.

## Project Structure

- **src/**: Main source code

  - `index.ts`: Entry point
  - `index.html`: HTML template
  - `manifest.json`: Application manifest
  - `@types/`: TypeScript type definitions (includes Chebyshev library types)
  - `assets/`: Static assets
    - `fonts/`: RuneScape font files (WOFF/WOFF2)
    - `images/`: Image assets
  - `content/`: Content modules (includes Inferno-related content)

- **test/**: Test configuration and test files

  - `setupFiles.ts`: Jest setup configuration
  - `__mocks__/`: Mock implementations for assets and CSS
  - `simulations/`: Simulation tests (e.g., ZukLineOfSight.test.ts)

- **Configuration Files**:

  - `tsconfig.json`: TypeScript configuration
  - `webpack.config.js`: Webpack build configuration
  - `jest.config.js`: Jest testing configuration
  - `.eslintrc.js`: ESLint configuration
  - `.prettierrc`: Prettier formatting configuration
  - `package.json`: Project dependencies and scripts

- **Documentation**:
  - `README.md`: Project readme
  - `assets.md`: Asset documentation
  - `index.d.ts`: TypeScript type definitions for the project

## Technology Stack

- **Language**: TypeScript
- **Build Tool**: Webpack
- **Testing**: Jest
- **Linting**: ESLint
- **Formatting**: Prettier

## Key Features

- Custom fonts (RuneScape-themed)
- Game content modules (Inferno mechanics)
- Simulation-based testing
- Type-safe development with TypeScript
