# Windsurf Technical Screening Challenge

## Overview

This technical screen is designed to test your ability to work with complex code, refactor, and implement new features under time pressure. You are encouraged to use Cursor to help you solve these challenges efficiently.

## Challenge Description

You are given a React application that manages a dashboard for monitoring AI agents in a production environment. The code has several issues:

1. The main dashboard component is overly complex and needs refactoring
2. There are type inconsistencies throughout the codebase
3. The API integration is broken and needs to be fixed
4. Performance optimizations are needed for rendering large datasets
5. You need to implement a new feature for visualizing agent performance

## Tasks

### Task 1: Component Refactoring
The `AgentDashboard` component is a mess of tangled logic, inline styles, and poor TypeScript usage. Refactor it using:
- Proper TypeScript typing
- Modularization (break into smaller components)
- ShadCN UI styling best practices
- Custom hooks for logic separation

### Task 2: Fix the API Integration
The dashboard is failing to load agent data properly. Debug the API integration in the `fetchAgentData` service and fix any issues. Add proper error handling and loading states.

### Task 3: Schema Implementation
Implement a Zod validation schema for the `Agent` and `AgentActivity` types, then create a Prisma schema for storing this data. Finally, implement a typed endpoint that uses these schemas.

### Task 4: Add Agent Performance Visualization
Create a new page that visualizes agent performance metrics over time using a charting library of your choice.

## Evaluation Criteria

- Code quality and organization
- TypeScript usage and type safety
- UI/UX considerations
- API integration and error handling
- Performance optimizations
- Testing approach
- Effective use of Cursor to solve these problems

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Use Cursor to help you navigate and refactor the codebase

## Time Limit

You have 2 hours to complete as many tasks as possible. Quality is more important than completing everything.

Good luck!
