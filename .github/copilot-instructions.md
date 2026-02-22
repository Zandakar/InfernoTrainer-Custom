# Repository Overview

This is a TypeScript project for an **Inferno Trainer** application - a RuneScape game mechanic simulator/trainer focused on the Inferno minigame. Built with webpack and tested with Jest.

## Useful links

https://github.com/OldSchoolSDK/oldschool-cdn/tree/master/models

## Project Structure

- **src/**: Main source code

  - `index.ts`: Entry point
  - `index.html`: HTML template
  - `manifest.json`: Application manifest
  - `@types/`: TypeScript type definitions (includes Chebyshev library types)
  - `assets/`: Static assets
    - `fonts/`: RuneScape font files (WOFF/WOFF2)
    - `images/`: Image assets
  - `content/`: Content modules for Inferno mechanics
    - Inferno-specific game logic and simulations
    - Prayer/combat mechanics
    - Wave progression systems
    - Boss mechanics (e.g., Zuk, line-of-sight calculations)
  - `utils/`: Utility functions and helpers
  - `components/`: UI components and views
  - `models/`: Game state and data models

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

## Domain: RuneScape Inferno Minigame

The Inferno is an end-game PvM (Player vs Monster) challenge in RuneScape featuring:

- Progressive waves of increasingly difficult monsters
- Prayer mechanics and combat rotations
- Boss encounters (Zuk as final boss)
- Line-of-sight mechanics and positioning
- Game state tracking and progression

This trainer helps players practice and understand Inferno mechanics through simulation.

## Key Features

- Custom RuneScape-themed fonts and branding
- Inferno wave simulation and mechanics
- Combat/prayer system modeling
- Boss AI and behavior simulation
- Type-safe development with TypeScript
- Comprehensive test coverage for game simulations
