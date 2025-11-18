'use client'

import { useState, useEffect } from 'react'

interface HeroConfig {
  title: string
  subtitle?: string
  description?: string
  backgroundColor?: string
  showGradient?: boolean
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  alignment?: 'left' | 'center' | 'right'
  minHeight?: 'auto' | 'screen' | 'half-screen'
}

const DEFAULT_CONFIG: HeroConfig = {
  title: 'The Landing Page Builder for Modern Teams',
  subtitle: 'Create stunning landing pages in minutes',
  description:
    'Create stunning, conversion-optimized landing pages in minutes. No coding required. Beautiful templates, smart analytics, and powerful integrations—all in one place.',
  backgroundColor: 'primary',
  showGradient: true,
  primaryCTA: { text: 'Start Free Trial', href: '#' },
  secondaryCTA: { text: 'Watch Demo', href: '#' },
  alignment: 'center',
  minHeight: 'screen',
}

export function Hero() {
  const [config, setConfig] = useState<HeroConfig>(DEFAULT_CONFIG)
  const [mounted, setMounted] = useState(false)

  // Carregar configuração do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('page-config-hero')
      if (saved) {
        setConfig(JSON.parse(saved))
      }
    } catch (error) {
      console.error('Erro ao carregar configuração:', error)
    }
    setMounted(true)
  }, [])

  if (!mounted) return null

  const bgColorMap: Record<string, string> = {
    primary: 'bg-gradient-to-b from-blue-50/80 via-white to-purple-50/50',
    secondary: 'bg-gradient-to-b from-purple-50/80 via-white to-pink-50/50',
    accent: 'bg-gradient-to-b from-teal-50/80 via-white to-cyan-50/50',
    white: 'bg-white',
    dark: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
  }

  const heightMap: Record<string, string> = {
    auto: 'min-h-auto',
    'half-screen': 'min-h-[50vh]',
    screen: 'min-h-[calc(100vh-64px)]',
  }

  const alignmentMap: Record<string, string> = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  return (
    <section
      className={`relative ${heightMap[config.minHeight || 'screen']} flex items-center justify-center overflow-hidden pt-20 pb-20`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${bgColorMap[config.backgroundColor || 'primary']} z-0`}></div>

      {/* Animated Blobs */}
      {config.showGradient && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in z-0"></div>
          <div className="absolute -bottom-32 right-10 w-72 h-72 bg-secondary-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in delay-200 z-0"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in delay-400 z-0"></div>
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 container-max section-lg ${alignmentMap[config.alignment || 'center']}`}>
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="badge-primary">✨ Launch Your Ideas Into Reality</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display-xl lg:text-[3.5rem] font-bold leading-tight text-neutral-900">
            {config.title}
          </h1>

          {/* Subheadline */}
          {config.description && (
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">{config.description}</p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {config.primaryCTA && (
              <a href={config.primaryCTA.href} className="btn-primary inline-block text-center">
                {config.primaryCTA.text}
              </a>
            )}
            {config.secondaryCTA && (
              <a href={config.secondaryCTA.href} className="btn-outline inline-block text-center">
                {config.secondaryCTA.text}
              </a>
            )}
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-neutral-200">
            <div className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">10K+</span> teams building amazing
              landing pages
            </div>
            <div className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">99.9%</span> uptime guaranteed
            </div>
            <div className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">24/7</span> customer support
            </div>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-3xl"></div>
          <div className="relative bg-gradient-to-b from-white to-neutral-50 rounded-2xl p-8 md:p-12 shadow-elevation border border-neutral-100">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-neutral-400">
              <span className="text-center">
                <p className="text-sm">Mockup Image Here</p>
                <p className="text-xs">Dashboard Preview</p>
              </span>
            </div>
          </div>
        </div>

        {/* Admin Link */}
        <div className="mt-8 text-center">
          <a
            href="/admin"
            className="text-sm text-primary-600 hover:text-primary-700 font-medium underline"
          >
            Edit Hero Section →
          </a>
        </div>
      </div>
    </section>
  )
}
