# LandingPro - Design System & Branding Guide

## 🎨 Color Palette

### Primary Colors
The primary colors define our brand identity - modern, tech-forward, and trustworthy.

#### Primary Blue
```
primary-50:   #f0f7ff
primary-100:  #e0effe
primary-200:  #c7e0fd
primary-300:  #a4cafe
primary-400:  #7bb3fc
primary-500:  #5a9bff (Main Brand Color)
primary-600:  #3b7cf5
primary-700:  #2b5de0
primary-800:  #1f41b3
primary-900:  #1a308f
primary-950:  #0f1d5a
```

**Usage**: Main brand color, primary buttons, primary links, active states, focus states

#### Secondary Purple
```
secondary-50:   #faf8ff
secondary-100:  #f3f0ff
secondary-200:  #e9e0ff
secondary-300:  #d7c9ff
secondary-400:  #be9dff
secondary-500:  #a573f5 (Secondary Brand Color)
secondary-600:  #8f51f0
secondary-700:  #7736d6
secondary-800:  #5f24b5
secondary-900:  #4a1a97
secondary-950:  #2d0d5f
```

**Usage**: Secondary buttons, accent gradients, hover states, decorative elements

#### Accent Teal
```
accent-50:   #f0fdfd
accent-100:  #d9f7f7
accent-200:  #b3eef0
accent-300:  #7de3e8
accent-400:  #45d4dd
accent-500:  #1ec8d3 (Accent Color)
accent-600:  #16aab8
accent-700:  #138a96
accent-800:  #136e7a
accent-900:  #135968
accent-950:  #083b44
```

**Usage**: Call-to-action highlights, success states, premium features

### Semantic Colors

#### Success (Green)
- Used for positive actions, confirmations, completed states
- primary-500: #22c55e

#### Warning (Orange)
- Used for warnings, important notices, caution actions
- primary-500: #eaa500

#### Error (Red)
- Used for errors, deletions, destructive actions
- primary-500: #ef4444

#### Neutral (Gray)
- Used for text, backgrounds, borders, disabled states
- primary-600: #4b5563 (Dark text)
- primary-900: #111827 (Headings)
- primary-100: #f3f4f6 (Light backgrounds)

## 📐 Typography

### Font Family
- Primary: System Stack (system-ui, Avenir, Helvetica, Arial, sans-serif)
- Weight: 400 (Regular), 600 (Semibold), 700 (Bold)

### Font Sizes & Hierarchy

#### Display Sizes (Headlines)
- **display-xl**: 3.5rem (56px) - Main hero headings
- **display-lg**: 3rem (48px) - Section headings
- **display-md**: 2.25rem (36px) - Major headings

#### Heading Sizes
- **heading-xl**: 2rem (32px) - h2
- **heading-lg**: 1.5rem (24px) - h3
- **heading-md**: 1.25rem (20px) - h4
- **heading-sm**: 1.125rem (18px) - h5

#### Body Sizes
- **body-lg**: 1.125rem (18px) - Large body text
- **body-base**: 1rem (16px) - Standard body text
- **body-sm**: 0.875rem (14px) - Small body text
- **caption**: 0.75rem (12px) - Very small text, labels

## 🎯 Component Library

### Buttons
- **Primary**: Solid blue background, white text
- **Secondary**: Solid purple background, white text
- **Outline**: Blue border, blue text, transparent background
- **Ghost**: No border, blue text, transparent background

### Cards
- **Standard**: White background, subtle shadow, rounded corners
- **Elevated**: White background, stronger shadow, hover effect
- **Gradient**: Gradient background (primary to secondary), shadow

### Badges
- **Primary**: Blue background, dark blue text
- **Secondary**: Purple background, dark purple text
- **Accent**: Teal background, dark teal text
- **Success**: Green background, dark green text

## 🎨 Gradients

### Primary Gradient
```
from-primary-500 to-secondary-500
Used for: Text gradients, button hover states, decorative elements
```

### Accent Gradient
```
from-accent-500 to-primary-500
Used for: Final CTA section, premium features, highlights
```

### Background Gradient
```
from-blue-50/80 via-white to-purple-50/50
Used for: Hero section background, subtle section backgrounds
```

## 📏 Spacing System

### Section Spacing
- **section-xs**: 2rem (32px) - Small sections
- **section-sm**: 3rem (48px) - Medium sections
- **section-md**: 4rem (64px) - Standard sections
- **section-lg**: 6rem (96px) - Large sections
- **section-xl**: 8rem (128px) - Extra large sections

### Other Spacing
- **gutter**: 1.5rem (24px) - Standard padding

## 🎭 Effects & Shadows

### Box Shadows
- **sm**: Subtle shadow for hover states
- **base**: Standard shadow for cards
- **md**: Medium shadow for elevated cards
- **lg**: Strong shadow for modal-like elements
- **elevation**: Special gradient shadow (primary + secondary colors)

### Glassmorphism
- Backdrop blur with semi-transparent white background
- Used for overlays, floating elements

## 🎬 Animations

### Fade In
- Smooth opacity transition from 0 to 1
- Duration: 600ms

### Fade Up
- Opacity + vertical translation (10px down → normal)
- Duration: 600ms

### Scale In
- Opacity + scale transformation (95% → 100%)
- Duration: 500ms

### Slide Right
- Horizontal translation + opacity
- Duration: 500ms

## 🎯 Key Design Principles

1. **Modern & Clean**: Minimalist design with purposeful use of white space
2. **Professional**: Trust-inducing colors and layouts
3. **Accessible**: High contrast ratios, semantic colors
4. **Responsive**: Mobile-first approach, adaptive layouts
5. **Interactive**: Smooth transitions, clear feedback states
6. **Cohesive**: Consistent use of colors, typography, spacing

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Brand Voice

- **Tone**: Professional yet approachable
- **Energy**: Modern, energetic, forward-thinking
- **Values**: Simplicity, reliability, innovation

## Color Usage Guidelines

### Do's ✅
- Use primary blue for main CTAs
- Use secondary purple for secondary actions
- Use accent teal for highlights and important features
- Combine primary + secondary for gradients
- Use semantic colors consistently

### Don'ts ❌
- Don't mix too many colors in one section
- Don't use primary color for large text areas
- Don't use colored text on colored backgrounds (unless high contrast)
- Don't animate for more than 1 second
- Don't use shadows in excess

## 🎓 Component Status

- ✅ Header (Navigation with mobile menu)
- ✅ Hero (Hero section with animated background)
- ✅ Features (Grid of feature cards)
- ✅ How It Works (Step-by-step section)
- ✅ Testimonials (Social proof section)
- ✅ Pricing (Pricing plans with comparison)
- ✅ FAQ (Accordion-style FAQ)
- ✅ Final CTA (Final call-to-action)
- ✅ Footer (Footer with links and social)

## 🔄 Future Enhancements

- [ ] Dark mode support
- [ ] Additional animation variations
- [ ] More gradient combinations
- [ ] Accessibility improvements
- [ ] Component storybook
- [ ] Design tokens export
