# Contributing Guidelines

## Code Style

### React Components
- Use functional components with hooks
- Use arrow functions for event handlers
- Use destructuring for props
- Keep components focused and single-responsibility

### Naming Conventions
- Components: PascalCase (e.g., `ChatMessage.js`)
- Files: PascalCase for components, camelCase for utilities
- Variables/Functions: camelCase (e.g., `handleSendMessage`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

### CSS/Tailwind
- Use Tailwind utility classes
- Avoid inline styles
- Use consistent spacing scale
- Mobile-first responsive design

## File Organization

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components (full-page views)
├── context/         # React Context files
├── utils/           # Utility functions and API calls
└── App.js           # Main component
```

## Git Commit Messages

```
type: description

fix: resolve memory leak in ChatMessage
feat: add message search functionality
docs: update README with API documentation
refactor: simplify theme context logic
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

## Testing

Add tests for:
- New utility functions
- Complex components
- API integration functions

## Performance Tips

- Use React.memo for expensive components
- Implement proper key props in lists
- Use lazy loading for routes
- Minimize unnecessary re-renders

## Before Submitting PR

1. ✅ Code follows style guide
2. ✅ No console errors/warnings
3. ✅ Responsive design tested
4. ✅ Dark mode tested
5. ✅ API integration tested
