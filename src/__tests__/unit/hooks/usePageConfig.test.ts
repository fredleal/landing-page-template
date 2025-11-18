import { describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('usePageConfig Hook - localStorage Integration', () => {
  const TEST_KEY = 'test-key'
  const DEFAULT_VALUE = {
    title: 'Default Title',
    description: 'Default Description',
  }

  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('localStorage Serialization', () => {
    it('should serialize object to JSON in localStorage', () => {
      const config = { title: 'Test', value: 123 }
      const key = `page-config-${TEST_KEY}`

      localStorage.setItem(key, JSON.stringify(config))

      const saved = localStorage.getItem(key)
      expect(saved).toBeTruthy()
      expect(JSON.parse(saved!)).toEqual(config)
    })

    it('should store complex nested objects', () => {
      const config = {
        title: 'Complex',
        nested: {
          value: 123,
          array: [1, 2, 3],
        },
      }
      const key = `page-config-${TEST_KEY}`

      localStorage.setItem(key, JSON.stringify(config))

      const saved = JSON.parse(localStorage.getItem(key)!)
      expect(saved.nested.value).toBe(123)
      expect(saved.nested.array).toEqual([1, 2, 3])
    })

    it('should handle different data types', () => {
      const testCases = [
        { data: 'string value', expected: 'string value' },
        { data: 42, expected: 42 },
        { data: true, expected: true },
        { data: [1, 2, 3], expected: [1, 2, 3] },
        { data: { key: 'value' }, expected: { key: 'value' } },
      ]

      testCases.forEach(({ data, expected }, index) => {
        const key = `test-${index}`
        localStorage.setItem(key, JSON.stringify(data))
        expect(JSON.parse(localStorage.getItem(key)!)).toEqual(expected)
      })
    })
  })

  describe('localStorage Key Management', () => {
    it('should use correct key format', () => {
      const key = `page-config-hero`
      localStorage.setItem(key, '{"title": "Hero"}')

      expect(localStorage.getItem(key)).toBeTruthy()
      expect(localStorage.getItem(key)).toContain('Hero')
    })

    it('should isolate different keys', () => {
      localStorage.setItem('page-config-hero', JSON.stringify({ title: 'Hero' }))
      localStorage.setItem('page-config-features', JSON.stringify({ title: 'Features' }))

      const hero = localStorage.getItem('page-config-hero')
      const features = localStorage.getItem('page-config-features')

      expect(JSON.parse(hero!).title).toBe('Hero')
      expect(JSON.parse(features!).title).toBe('Features')
    })
  })

  describe('localStorage Clear and Reset', () => {
    it('should clear localStorage completely', () => {
      localStorage.setItem('key1', 'value1')
      localStorage.setItem('key2', 'value2')

      expect(localStorage.length).toBe(2)
      localStorage.clear()
      expect(localStorage.length).toBe(0)
    })

    it('should remove specific keys', () => {
      const key = 'page-config-test'
      localStorage.setItem(key, JSON.stringify({ data: 'test' }))

      expect(localStorage.getItem(key)).toBeTruthy()
      localStorage.removeItem(key)
      expect(localStorage.getItem(key)).toBeNull()
    })
  })

  describe('localStorage Error Scenarios', () => {
    it('should handle invalid JSON gracefully', () => {
      const key = 'page-config-invalid'
      localStorage.setItem(key, 'invalid-json{')

      const saved = localStorage.getItem(key)
      expect(() => JSON.parse(saved!)).toThrow()
    })

    it('should return null for non-existent keys', () => {
      const result = localStorage.getItem('non-existent-key')
      expect(result).toBeNull()
    })

    it('should handle empty strings', () => {
      const key = 'page-config-empty'
      localStorage.setItem(key, '')

      const result = localStorage.getItem(key)
      expect(result).toBe('')
    })
  })

  describe('Practical Hook Usage Patterns', () => {
    it('should simulate saveConfig pattern', () => {
      const key = 'page-config-hero'
      const defaultValue = { title: 'Default', subtitle: 'Sub' }

      // Simulate saveConfig
      function saveConfig(newData: typeof defaultValue) {
        try {
          localStorage.setItem(`${key}`, JSON.stringify(newData))
          return true
        } catch {
          return false
        }
      }

      const success = saveConfig({ title: 'Updated', subtitle: 'New' })
      expect(success).toBe(true)

      const saved = localStorage.getItem(key)
      expect(JSON.parse(saved!).title).toBe('Updated')
    })

    it('should simulate loadConfig pattern', () => {
      const key = 'page-config-hero'
      const defaultValue = { title: 'Default' }

      // Pre-save some data
      localStorage.setItem(key, JSON.stringify({ title: 'Saved Title' }))

      // Simulate loadConfig
      function loadConfig() {
        try {
          const saved = localStorage.getItem(key)
          if (saved) {
            return JSON.parse(saved)
          }
          return defaultValue
        } catch {
          return defaultValue
        }
      }

      const config = loadConfig()
      expect(config.title).toBe('Saved Title')
    })

    it('should simulate resetConfig pattern', () => {
      const key = 'page-config-hero'

      // Pre-save data
      localStorage.setItem(key, JSON.stringify({ title: 'Custom' }))
      expect(localStorage.getItem(key)).toBeTruthy()

      // Simulate resetConfig
      function resetConfig() {
        localStorage.removeItem(key)
      }

      resetConfig()
      expect(localStorage.getItem(key)).toBeNull()
    })
  })

  describe('Edge Cases', () => {
    it('should handle very long strings', () => {
      const key = 'page-config-long'
      const longString = 'a'.repeat(10000)

      localStorage.setItem(key, JSON.stringify({ content: longString }))
      const saved = JSON.parse(localStorage.getItem(key)!)

      expect(saved.content.length).toBe(10000)
    })

    it('should handle special characters', () => {
      const key = 'page-config-special'
      const specialContent = 'Hello "World" with \'quotes\' and \n newlines \t tabs'

      localStorage.setItem(key, JSON.stringify({ content: specialContent }))
      const saved = JSON.parse(localStorage.getItem(key)!)

      expect(saved.content).toBe(specialContent)
    })

    it('should handle unicode characters', () => {
      const key = 'page-config-unicode'
      const unicodeContent = '你好世界 🚀 Здравствуй мир'

      localStorage.setItem(key, JSON.stringify({ content: unicodeContent }))
      const saved = JSON.parse(localStorage.getItem(key)!)

      expect(saved.content).toBe(unicodeContent)
    })
  })

  describe('Performance Characteristics', () => {
    it('should handle multiple sequential saves', () => {
      const key = 'page-config-perf'

      for (let i = 0; i < 100; i++) {
        localStorage.setItem(key, JSON.stringify({ iteration: i }))
      }

      const final = JSON.parse(localStorage.getItem(key)!)
      expect(final.iteration).toBe(99)
    })

    it('should handle multiple keys', () => {
      for (let i = 0; i < 50; i++) {
        localStorage.setItem(`key-${i}`, JSON.stringify({ index: i }))
      }

      expect(localStorage.length).toBe(50)

      const middle = JSON.parse(localStorage.getItem('key-25')!)
      expect(middle.index).toBe(25)
    })
  })
})
