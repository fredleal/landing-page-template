'use client'

import { useState, useRef, useEffect } from 'react'
import { usePageConfig } from '@/hooks/usePageConfig'
import { AdminPanel } from '@/components/AdminPanel'
import { schemaRegistry } from '@fredleal/saas-components/schemas'

const DEFAULT_HERO_CONFIG = {
  title: 'Landing Page Builder for Modern Teams',
  subtitle: 'Create stunning landing pages in minutes',
  description: 'Build beautiful, high-converting landing pages without any coding required.',
  backgroundColor: 'primary',
  showGradient: true,
  alignment: 'center',
  minHeight: 'screen',
  primaryCTA: {
    text: 'Get Started',
    href: '/blog',
  },
  secondaryCTA: {
    text: 'Learn More',
    href: '/#features',
  },
}

export default function AdminPage() {
  const [mounted, setMounted] = useState(false)
  const mountedRef = useRef(false)
  const { data: heroConfig, saveConfig } = usePageConfig('hero', DEFAULT_HERO_CONFIG)

  // Previne erro de hidratação
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true)
    }
  }, [])

  if (!mounted || !heroConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Carregando painel de administração...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-neutral-900">
                Admin Panel - Landing Page
              </h2>
              <p className="text-sm text-neutral-600">Customize your landing page components</p>
            </div>
            <div className="flex gap-3">
              <a
                href="/"
                className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors font-medium"
              >
                Ver Página
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Admin Content */}
      <AdminPanel
        schema={schemaRegistry.Hero}
        initialData={heroConfig}
        onSave={(data) => {
          saveConfig(data as typeof DEFAULT_HERO_CONFIG)
        }}
        title="Hero Section"
        description="Customize the main hero section of your landing page. Changes are saved automatically to your browser."
      />

      {/* Footer Info */}
      <div className="bg-neutral-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-neutral-400">
          <p>
            💾 Suas alterações são salvas localmente no navegador. Para sincronizar com um banco
            de dados real, configure um backend.
          </p>
        </div>
      </div>
    </div>
  )
}
