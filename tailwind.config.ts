import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Portfolio-specific colors
				portfolio: {
					dark: 'hsl(var(--portfolio-dark))',
					darker: 'hsl(var(--portfolio-darker))',
					surface: 'hsl(var(--portfolio-surface))',
					'surface-elevated': 'hsl(var(--portfolio-surface-elevated))',
					accent: 'hsl(var(--portfolio-accent))',
					'accent-glow': 'hsl(var(--portfolio-accent-glow))',
					secondary: 'hsl(var(--portfolio-secondary))',
					'text-primary': 'hsl(var(--portfolio-text-primary))',
					'text-secondary': 'hsl(var(--portfolio-text-secondary))',
					'text-muted': 'hsl(var(--portfolio-text-muted))',
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--portfolio-gradient-primary)',
				'gradient-dark': 'var(--portfolio-gradient-dark)',
				'gradient-glow': 'var(--portfolio-gradient-glow)',
			},
			boxShadow: {
				'glass': 'var(--portfolio-shadow-glass)',
				'accent': 'var(--portfolio-shadow-accent)',
				'elevation': 'var(--portfolio-shadow-elevation)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
