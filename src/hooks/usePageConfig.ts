import { useState, useEffect } from 'react'

/**
 * Hook para gerenciar configurações de página no localStorage
 * Permite salvar e carregar dados customizados pelos usuários
 */
export function usePageConfig<T = Record<string, unknown>>(
  key: string,
  defaultValue: T
) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Carregar dados do localStorage ao montar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`page-config-${key}`)
      if (saved) {
        setData(JSON.parse(saved) as T)
      } else {
        setData(defaultValue)
      }
    } catch (error) {
      console.error(`Erro ao carregar config ${key}:`, error)
      setData(defaultValue)
    } finally {
      setIsLoading(false)
    }
  }, [key, defaultValue])

  // Salvar dados no localStorage
  const saveConfig = (newData: T) => {
    try {
      localStorage.setItem(`page-config-${key}`, JSON.stringify(newData))
      setData(newData)
      return true
    } catch (error) {
      console.error(`Erro ao salvar config ${key}:`, error)
      return false
    }
  }

  // Resetar para valores padrão
  const resetConfig = () => {
    try {
      localStorage.removeItem(`page-config-${key}`)
      setData(defaultValue)
      return true
    } catch (error) {
      console.error(`Erro ao resetar config ${key}:`, error)
      return false
    }
  }

  return { data, isLoading, saveConfig, resetConfig }
}
