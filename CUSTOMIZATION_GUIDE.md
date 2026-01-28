# Cybersecurity Portfolio Website - Customization Guide

This comprehensive guide will walk you through all the ways to customize your cybersecurity-themed portfolio website, including colors, links, images, text, and more.

---

## Table of Contents
1. [Color Customization](#color-customization)
2. [Text & Content Changes](#text--content-changes)
3. [Images & Assets](#images--assets)
4. [Links & Navigation](#links--navigation)
5. [Components & Sections](#components--sections)
6. [Advanced Customization](#advanced-customization)

---

## Color Customization

### Understanding the Color System

The website uses **CSS Custom Properties (CSS Variables)** defined in the `:root` selector. The color system uses **HSL (Hue, Saturation, Lightness)** format, which makes it easy to adjust colors globally.

### Location
**File:** `client/src/index.css` (Lines 38-63)

### Current Color Palette

| Variable | Current Value | Description |
|----------|---------------|-------------|
| `--background` | `220 40% 2%` | Main dark background (near black blue) |
| `--foreground` | `180 20% 90%` | Default text color (off-white cyan tint) |
| `--primary` | `180 100% 50%` | Neon cyan accent color |
| `--secondary` | `215 25% 15%` | Dark secondary color |
| `--accent` | `280 100% 60%` | Neon purple accent |
| `--destructive` | `0 85% 60%` | Red warning color |
| `--border` | `215 25% 15%` | Border color |
| `--muted` | `215 25% 15%` | Muted text/background color |

### How to Change Colors

#### Example 1: Change Primary Neon Cyan to Different Color

**Step 1:** Open `client/src/index.css`

**Step 2:** Locate the `:root` section (around line 38)

**Step 3:** Find the line:
```css
--primary: 180 100% 50%;
```

**Step 4:** Replace with your desired HSL value. For example:
- **Neon Green:** `120 100% 50%`
- **Neon Pink:** `320 100% 50%`
- **Neon Yellow:** `60 100% 50%`
- **Neon Orange:** `30 100% 50%`

#### Example 2: Change Background Color

To make the background lighter or darker:

```css
/* Current */
--background: 220 40% 2%;

/* Lighter dark background */
--background: 220 40% 5%;

/* Much darker (near pure black) */
--background: 220 40% 1%;
```

#### Example 3: Change Accent Purple to Something Else

```css
/* Current */
--accent: 280 100% 60%;

/* To Neon Blue */
--accent: 210 100% 50%;

/* To Neon Red */
--accent: 0 100% 50%;
```

### Quick Color Schemes

You can copy-paste these entire color sets to change the theme:

#### Scheme 1: Electric Blue & Magenta
```css
--primary: 240 100% 50%;      /* Electric Blue */
--accent: 300 100% 50%;       /* Bright Magenta */
--secondary: 240 25% 15%;
--background: 240 40% 2%;
```

#### Scheme 2: Green Matrix
```css
--primary: 120 100% 50%;      /* Neon Green */
--accent: 140 100% 50%;       /* Cyan Green */
--secondary: 120 25% 15%;
--background: 220 40% 2%;
```

#### Scheme 3: Red & Yellow Warning
```css
--primary: 0 100% 50%;        /* Neon Red */
--accent: 60 100% 50%;        /* Neon Yellow */
--secondary: 0 25% 15%;
--background: 220 40% 2%;
```

### Understanding HSL Format

HSL stands for **Hue, Saturation, Lightness**:

- **Hue** (0-360): The color itself
  - 0: Red
  - 60: Yellow
  - 120: Green
  - 180: Cyan
  - 240: Blue
  - 300: Magenta

- **Saturation** (0-100%): How vivid the color is
  - 0%: Grayscale
  - 100%: Most vivid

- **Lightness** (0-100%): How bright the color is
  - 0%: Black
  - 50%: Pure color
  - 100%: White

---

## Text & Content Changes

### Hero Section

**File:** `client/src/pages/home.tsx` (Lines 60-95)

#### Change Main Heading
Find this code:
```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans tracking-tight">
  SECURE.<br />
  <GlitchText text="DEFEND." className="text-white" /><br />
  <span className="text-primary">PROTECT.</span>
</h1>
```

Replace the text inside with your own:
```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans tracking-tight">
  YOUR TITLE.<br />
  <GlitchText text="YOUR SUBTITLE." className="text-white" /><br />
  <span className="text-primary">YOUR EMPHASIS.</span>
</h1>
```

#### Change Hero Description
Find this code:
```tsx
<p className="text-muted-foreground text-lg mb-8 max-w-lg font-mono">
  Advanced security architecture and threat analysis for the digital age. protecting critical infrastructure from cyber adversaries.
</p>
```

Replace with your own description:
```tsx
<p className="text-muted-foreground text-lg mb-8 max-w-lg font-mono">
  Your custom description goes here. Explain your expertise and what you offer.
</p>
```

#### Change Button Text
Find these lines:
```tsx
<Button ... >
  <Terminal className="w-4 h-4 mr-2" />
  INITIATE_CONTACT
</Button>

<Button ... >
  <Download className="w-4 h-4 mr-2" />
  DOWNLOAD_CV
</Button>
```

Replace the text:
```tsx
<Button ... >
  <Terminal className="w-4 h-4 mr-2" />
  GET IN TOUCH
</Button>

<Button ... >
  <Download className="w-4 h-4 mr-2" />
  DOWNLOAD RESUME
</Button>
```

### About Section

**File:** `client/src/pages/home.tsx` (Lines 124+)

#### Change Section Title
Find:
```tsx
<h2 className="text-3xl font-bold font-mono mb-6 flex items-center gap-2">
  <span className="text-primary">01.</span> ABOUT_OPERATOR
</h2>
```

Replace with:
```tsx
<h2 className="text-3xl font-bold font-mono mb-6 flex items-center gap-2">
  <span className="text-primary">01.</span> ABOUT_ME
</h2>
```

#### Change Identity Hash
Find:
```tsx
<div className="font-mono text-[10px] break-all opacity-50">7A8F2B9C0D1E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z</div>
```

Replace with your own hash or identifier:
```tsx
<div className="font-mono text-[10px] break-all opacity-50">YOUR_CUSTOM_HASH_OR_ID_12345</div>
```

### Skills Section

**File:** `client/src/pages/home.tsx` (Lines 29-36)

Modify the skill groups array:
```tsx
const skillGroups = [
  {
    title: "YOUR CATEGORY 1",
    icon: ShieldCheck,
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
  },
  {
    title: "YOUR CATEGORY 2",
    icon: Activity,
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
  },
  {
    title: "YOUR CATEGORY 3",
    icon: Zap,
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
  }
];
```

### Navigation Links

**File:** `client/src/components/nav.tsx` (Lines 4-8)

Change navigation label text:
```tsx
const links = [
  { href: "#about", label: "ABOUT", icon: Terminal },
  { href: "#projects", label: "PROJECTS", icon: Shield },
  { href: "#skills", label: "SKILLS", icon: Cpu },
  { href: "#contact", label: "CONTACT", icon: Mail },
];
```

You can change "ABOUT", "PROJECTS", etc. to your preferred labels:
```tsx
const links = [
  { href: "#about", label: "ABOUT ME", icon: Terminal },
  { href: "#projects", label: "PORTFOLIO", icon: Shield },
  { href: "#skills", label: "EXPERTISE", icon: Cpu },
  { href: "#contact", label: "GET IN TOUCH", icon: Mail },
];
```

#### Change Logo/Brand Text

Find this in `nav.tsx`:
```tsx
<span className="font-mono text-primary">CYBER<span className="text-white">SEC</span></span>
```

Replace with:
```tsx
<span className="font-mono text-primary">YOUR<span className="text-white">BRAND</span></span>
```

---

## Images & Assets

### Current Image Structure

**Location:** `client/src/assets/`

Currently contains:
- `hero-bg.png` - Background image used in the hero section

### How to Add/Change Background Image

**Step 1:** Add your image to `client/src/assets/`

**Step 2:** Open `client/src/index.css` (around line 95)

**Step 3:** Find:
```css
body {
  @apply font-body antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary;
  background-image: 
    linear-gradient(rgba(5, 10, 20, 0.95), rgba(5, 10, 20, 0.9)),
    url('/src/assets/hero-bg.png');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
```

**Step 4:** Replace `hero-bg.png` with your filename:
```css
background-image: 
  linear-gradient(rgba(5, 10, 20, 0.95), rgba(5, 10, 20, 0.9)),
  url('/src/assets/your-image-name.png');
```

### Adjust Background Opacity

To make the background more or less visible, adjust the gradient values:

```css
/* Current - quite dark overlay */
linear-gradient(rgba(5, 10, 20, 0.95), rgba(5, 10, 20, 0.9))

/* More visible - lighter overlay */
linear-gradient(rgba(5, 10, 20, 0.7), rgba(5, 10, 20, 0.6))

/* Less visible - darker overlay */
linear-gradient(rgba(5, 10, 20, 0.98), rgba(5, 10, 20, 0.97))
```

The values `0.95` and `0.9` represent opacity (0 = transparent, 1 = fully opaque).

### Add Profile Image

**Location:** `client/src/pages/home.tsx` (Around line 145)

The about section currently shows a placeholder `<User />` icon. To add a profile image:

**Current code:**
```tsx
<motion.div
  className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20 bg-primary/5"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)]" />
  <div className="flex items-center justify-center h-full">
    <User className="w-32 h-32 text-primary/20" />
  </div>
```

**Replace with:**
```tsx
<motion.div
  className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20 bg-primary/5"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)]" />
  <img 
    src="/src/assets/your-profile-image.jpg" 
    alt="Profile" 
    className="w-full h-full object-cover"
  />
```

---

## Links & Navigation

### Change Navigation Links

**File:** `client/src/components/nav.tsx` (Lines 4-8)

To add or modify navigation links:

```tsx
const links = [
  { href: "#about", label: "ABOUT", icon: Terminal },
  { href: "#projects", label: "PROJECTS", icon: Shield },
  { href: "#skills", label: "SKILLS", icon: Cpu },
  { href: "#contact", label: "CONTACT", icon: Mail },
  // Add new link:
  { href: "#blog", label: "BLOG", icon: FileText },
];
```

### Change External Links

#### Contact Button Redirect

**File:** `client/src/pages/home.tsx` (Around line 80)

The "INITIATE_CONTACT" button currently scrolls to the contact section. To make it redirect to an email:

```tsx
// Current
onClick={() => {
  handleAction("INITIATE_CONTACT");
  const target = document.querySelector("#contact");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}}

// Changed to open email
onClick={() => {
  window.location.href = "mailto:your.email@example.com";
}}
```

#### CV Download Link

**File:** `client/src/pages/home.tsx` (Around line 91)

```tsx
// Current
onClick={() => handleAction("DOWNLOAD_CV")}

// Add actual download functionality
onClick={() => {
  const link = document.createElement('a');
  link.href = '/path-to-your-cv.pdf';
  link.download = 'YourName_CV.pdf';
  link.click();
}}
```

### Change Project Links

**File:** `client/src/pages/home.tsx` (Look for where projects are rendered)

You'll find project cards defined with project data. Update the links in the project cards:

```tsx
// In ProjectCard component, look for:
<Button> ... <Github ... /> Source </Button>
<Button> ... <ExternalLink ... /> Execute </Button>

// These buttons can be updated to link to your actual projects:
<a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer">
  <Button> ... <Github ... /> Source </Button>
</a>
```

---

## Components & Sections

### Projects Section

**File:** `client/src/pages/home.tsx` (Search for "PROJECTS" section)

#### Add New Projects

Find where projects are being rendered and add new project cards:

```tsx
<ProjectCard
  title="Your Project Name"
  description="Brief description of what this project does"
  tags={["Tag1", "Tag2", "Tag3"]}
  status="PUBLIC"  // or "CLASSIFIED"
  image="/path-to-image.png"
  delay={0}
/>
```

#### Change Project Status Badge

- `status="PUBLIC"` - Shows a globe icon and "PUBLIC" badge
- `status="CLASSIFIED"` - Shows a lock icon and "CLASSIFIED" badge

### Contact Section

**File:** `client/src/pages/home.tsx` (Search for "CONTACT" section)

#### Change Form Labels and Placeholders

```tsx
// Find the Input and Textarea components and update:
<Input 
  placeholder="YOUR_NAME_HERE" 
  className="bg-background/50 border-primary/20 font-mono"
/>

<Textarea 
  placeholder="YOUR_MESSAGE_HERE" 
  className="bg-background/50 border-primary/20 font-mono min-h-32"
/>
```

#### Change Form Submission Handler

Currently shows a toast notification. To send actual emails, you can integrate with services like:
- EmailJS
- Formspree
- SendGrid
- Your own backend

Example with Formspree:
```tsx
const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
  });
  
  if (response.ok) {
    toast({
      title: "SUCCESS",
      description: "Your message has been sent!",
    });
  }
};
```

---

## Advanced Customization

### Change Fonts

**File:** `client/src/index.css` (Lines 5-8)

The website uses three fonts defined in the CSS theme:

```css
--font-sans: 'Space Grotesk', sans-serif;     /* Headers */
--font-mono: 'JetBrains Mono', monospace;     /* Code/Terminal */
--font-body: 'Inter', sans-serif;              /* Body text */
```

To use different fonts, change these values. You'll need to import the fonts in your CSS as well.

#### Example: Using Different Fonts

In `client/src/index.css` at the top, update or add font imports:

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:mono&display=swap');

@theme inline {
  --font-sans: 'Orbitron', sans-serif;
  --font-mono: 'Courier Prime', monospace;
  --font-body: 'Inter', sans-serif;
}
```

### Change Text Sizes

Text sizes are controlled via Tailwind CSS classes. Common size classes:

- `text-sm` - Small
- `text-base` - Normal (default)
- `text-lg` - Large
- `text-xl`, `text-2xl`, etc. - Extra large

**Example:** To make hero title smaller:

Find:
```tsx
<h1 className="text-5xl md:text-7xl font-bold ...">
```

Change to:
```tsx
<h1 className="text-4xl md:text-6xl font-bold ...">
```

### Modify Border Radius (Roundness)

Border radius values are defined in `client/src/index.css`:

```css
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
```

To make elements more rounded:
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

### Change Glow Effects

The website has custom glow effects defined in `client/src/index.css` (Lines 117-134):

```css
.text-glow {
  text-shadow: 0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3);
}

.border-glow {
  box-shadow: 0 0 10px hsl(var(--primary) / 0.3);
}
```

To intensify the glow:
```css
.text-glow {
  text-shadow: 0 0 20px hsl(var(--primary) / 0.8), 0 0 30px hsl(var(--primary) / 0.5);
}

.border-glow {
  box-shadow: 0 0 20px hsl(var(--primary) / 0.6);
}
```

### Adjust Animation Speed

Animations use `framer-motion`. To make them faster or slower, look for `transition` properties:

```tsx
// Slower (increase duration)
transition={{ duration: 1.2 }}  // was 0.8

// Faster (decrease duration)
transition={{ duration: 0.4 }}  // was 0.8
```

### Change Matrix Rain Animation

**File:** `client/src/components/matrix-rain.tsx`

This component creates the falling characters effect. You can:
- Change the characters displayed
- Adjust opacity/color
- Modify animation speed
- Add/remove rain intensity

---

## Configuration & Settings

### Environment Variables

Create a `.env` file in the project root if you need:

```
VITE_API_BASE_URL=https://your-api.com
VITE_CONTACT_EMAIL=your.email@example.com
```

Then reference in code:
```tsx
const email = import.meta.env.VITE_CONTACT_EMAIL;
```

### Build & Deployment Settings

**File:** `vite.config.ts`

This file controls how your site is built. Generally, you won't need to change it unless customizing the build process.

---

## Troubleshooting Color Changes

### Colors Not Applying?

1. Make sure you're editing the `:root` section in `client/src/index.css`
2. Check for any spelling mistakes in CSS variable names
3. Ensure HSL format is correct: `hue saturation% lightness%`
4. Clear browser cache (Ctrl+Shift+Delete) or do a hard refresh (Ctrl+Shift+R)

### Glow Effects Not Showing?

1. Check if `.text-glow` or `.border-glow` classes are applied
2. Ensure the color has sufficient opacity (not 0.1 or lower)
3. Check if dark mode is properly enabled

### Images Not Loading?

1. Verify the image is in `client/src/assets/`
2. Check the path is correct (case-sensitive on Linux/Mac)
3. Ensure image format is supported (JPG, PNG, WebP, SVG)
4. For relative paths, use `/src/assets/filename.ext`

---

## Quick Reference

### Most Common Changes

| Change | File | Location |
|--------|------|----------|
| Primary Color (Cyan) | `client/src/index.css` | Line 48: `--primary: 180 100% 50%;` |
| Accent Color (Purple) | `client/src/index.css` | Line 54: `--accent: 280 100% 60%;` |
| Hero Title Text | `client/src/pages/home.tsx` | Lines 65-68 |
| Logo/Brand | `client/src/components/nav.tsx` | Line 24 |
| Nav Links | `client/src/components/nav.tsx` | Lines 4-8 |
| Background Image | `client/src/index.css` | Line 103 |
| Skills Content | `client/src/pages/home.tsx` | Lines 29-36 |

---

## Support

If you need help:
1. Check the file paths carefully
2. Make sure you're in the correct section
3. Verify JSX/CSS syntax is correct
4. Test in a fresh browser window
5. Check browser console for errors (F12)

Happy customizing! 🚀
