# Contributing to Landing Page Template

Thank you for your interest in contributing to the Landing Page Template! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome all skill levels
- Provide constructive feedback
- Help others learn

## How to Contribute

### Reporting Bugs

Found a bug? Please create an issue with:

1. **Clear title** - Describe the bug in a few words
2. **Description** - What happened and what you expected
3. **Steps to reproduce** - How to reproduce the issue
4. **Screenshots** - If applicable
5. **Environment** - OS, browser, Node version

### Suggesting Features

Have an idea? Create an issue with:

1. **Clear title** - Brief description of the feature
2. **Description** - Why you think it would be useful
3. **Examples** - How it would be used
4. **Alternative solutions** - Any other approaches you've considered

### Pull Requests

We love pull requests! Here's how to contribute code:

1. **Fork the repository**
   ```bash
   git clone https://github.com/fredleal/landing-page-template.git
   cd landing-page-template
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code style (TypeScript, React best practices)
   - Add comments for complex logic
   - Keep components focused and reusable

4. **Test your changes**
   ```bash
   npm run dev      # Test locally
   npm run build    # Verify build succeeds
   ```

5. **Commit with clear messages**
   ```bash
   git commit -m "Add feature: brief description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Reference any related issues
   - Describe what you changed and why
   - Include screenshots if UI changes

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
git clone https://github.com/fredleal/landing-page-template.git
cd landing-page-template
npm install
npm run dev
```

## Code Style Guide

### TypeScript
- Use strict mode
- Define interfaces for props
- Avoid `any` type
- Use meaningful variable names

### React
- Use functional components
- Use hooks (useState, useEffect, etc)
- Keep components small and focused
- Memoize expensive computations

### Tailwind CSS
- Use custom tokens from config
- Avoid arbitrary values when possible
- Follow mobile-first approach
- Use semantic color names

### File Organization
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── index.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Component Template

When creating new components, follow this pattern:

```typescript
import { ReactNode } from 'react'

export interface YourComponentProps {
  title: string
  children?: ReactNode
  className?: string
}

export function YourComponent({
  title,
  children,
  className = '',
}: YourComponentProps) {
  return (
    <section className={`section-lg ${className}`}>
      <div className="container-max">
        <h2 className="text-heading-xl font-bold">{title}</h2>
        {children}
      </div>
    </section>
  )
}
```

## Design System

Always use the design system tokens:

### Colors
- `text-primary-500` - Primary blue
- `text-secondary-500` - Secondary purple
- `text-accent-500` - Accent teal

### Typography
- `text-display-lg` - Large headings
- `text-heading-xl` - Section headings
- `text-body-base` - Regular text

### Spacing
- `section-lg` - Large section padding
- `container-max` - Max width container

## Testing

- Test locally before submitting
- Verify responsive design on mobile
- Check accessibility with keyboard navigation
- Test in multiple browsers

## Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Tests

### Examples
```
feat: Add dark mode support
fix: Resolve mobile menu animation bug
docs: Update customization guide
```

## Review Process

1. **Automated checks** - Tests and linting must pass
2. **Code review** - Maintainers review your changes
3. **Feedback** - We may suggest improvements
4. **Approval** - Once approved, your PR will be merged

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## Questions?

- Create an issue for discussion
- Check existing issues and PRs
- Read the documentation
- Review example components

## Thank You!

Your contributions help make this template better for everyone. We appreciate your time and effort! 🙏
