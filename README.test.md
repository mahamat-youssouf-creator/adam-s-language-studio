# Unit Tests for Tordjok Academy

This document provides unit test examples for the main components of the Tordjok Academy website.

## Running Tests

To run the tests, use:
```bash
npm run test
```

## Test Structure

### Navbar Component Tests
- ✅ Renders the Tordjok Academy logo and branding
- ✅ Displays all navigation links (Home, About, Services, Pricing, Testimonials, Contact)
- ✅ Opens mobile menu when clicked
- ✅ Applies glass-card styling when scrolled
- ✅ Closes mobile menu after selecting a link

### Hero Component Tests
- ✅ Renders main heading with "Learn Qur'an & Islamic Studies"
- ✅ Displays description mentioning Tordjok Academy
- ✅ Shows CTA buttons ("Start Free Trial" and "View Programs")
- ✅ Renders hero image with proper alt text
- ✅ Displays statistics (15+ years, 500+ students, etc.)

### Services Component Tests
- ✅ Renders "Our Services" section heading
- ✅ Displays all four service cards:
  - Qur'an Recitation (Tajweed)
  - Qur'an Memorization (Hifz)
  - Islamic Studies
  - Arabic Language
- ✅ Shows service descriptions and features
- ✅ Displays duration and format information

### Contact Component Tests
- ✅ Renders contact form with all fields (Name, Email, Message)
- ✅ Displays contact information (email, phone, location)
- ✅ Submits form successfully with toast notification
- ✅ Disables submit button during submission
- ✅ Resets form after successful submission

### Footer Component Tests
- ✅ Renders Tordjok Academy branding
- ✅ Displays all quick links
- ✅ Shows contact information
- ✅ Renders copyright notice with current year

## Test Files Location

Test files are located in: `src/components/__tests__/`

## Testing Libraries Used

- **Vitest**: Modern testing framework
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom matchers for DOM testing
- **@testing-library/user-event**: User interaction simulation

## Example Test Code

```typescript
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders the Tordjok Academy logo', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('TA')).toBeTruthy();
    expect(getByText('Tordjok Academy')).toBeTruthy();
  });

  it('renders all navigation links', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('About')).toBeTruthy();
    expect(getByText('Services')).toBeTruthy();
  });
});
```

## Coverage Goals

- Aim for 80%+ code coverage
- Focus on critical user paths
- Test component rendering
- Verify user interactions
- Validate form submissions
- Check responsive behavior

## Best Practices

1. **Write descriptive test names** that explain what is being tested
2. **Test user behavior** not implementation details
3. **Keep tests isolated** - each test should be independent
4. **Mock external dependencies** to keep tests fast and reliable
5. **Test edge cases** and error handling

## Next Steps

To implement these tests, you would:

1. Install dependencies (already done):
   - vitest
   - @testing-library/react
   - @testing-library/jest-dom
   - jsdom

2. Configure Vitest (already done in vitest.config.ts)

3. Create test files in `src/components/__tests__/`

4. Run tests with `npm run test`

5. Generate coverage report with `npm run test:coverage`
