'use client'

import { useState, useEffect } from 'react'
import { HeroSection, type HeroSectionProps } from '@fredleal/saas-components'

interface HeroConfig extends Omit<HeroSectionProps, 'primaryCTA' | 'secondaryCTA'> {
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  backgroundColor?: string
  showGradient?: boolean
  alignment?: 'left' | 'center' | 'right'
  minHeight?: 'auto' | 'screen' | 'half-screen'
}

const DEFAULT_CONFIG: HeroConfig = {
  title: 'The Landing Page Builder for Modern Teams',
  subtitle: 'Create stunning landing pages in minutes',
  description:
    'Create stunning, conversion-optimized landing pages in minutes. No coding required. Beautiful templates, smart analytics, and powerful integrations—all in one place.',
  backgroundGradient: true,
  primaryCTA: { label: 'Start Free Trial', href: '#' },
  secondaryCTA: { label: 'Watch Demo', href: '#' },
}

export function Hero() {
  const [config, setConfig] = useState<HeroConfig>(DEFAULT_CONFIG)
  const [mounted, setMounted] = useState(false)

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

  const heroProps: HeroSectionProps = {
    title: config.title,
    subtitle: config.subtitle,
    description: config.description,
    backgroundGradient: config.showGradient !== false,
    primaryCTA: config.primaryCTA
      ? {
          label: config.primaryCTA.label,
          href: config.primaryCTA.href,
        }
      : undefined,
    secondaryCTA: config.secondaryCTA
      ? {
          label: config.secondaryCTA.label,
          href: config.secondaryCTA.href,
        }
      : undefined,
  }

  return (
    <div>
      <HeroSection {...heroProps} />
      {/* Admin Link */}
      <div className="text-center py-4">
        <a
          href="/admin"
          className="text-sm text-primary-600 hover:text-primary-700 font-medium underline"
        >
          Edit Hero Section →
        </a>
      </div>
    </div>
  )
}
