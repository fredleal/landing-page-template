/**
 * JSON Schema type definitions for component customization
 */

export interface SchemaProperty {
  type: string
  title?: string
  description?: string
  default?: any
  enum?: string[]
  enumNames?: string[]
  format?: string
  items?: SchemaProperty
  properties?: Record<string, SchemaProperty>
  required?: string[]
  pattern?: string
  minLength?: number
  maxLength?: number
  minimum?: number
  maximum?: number
}

export interface ComponentSchema {
  title: string
  description?: string
  type: 'object'
  properties: Record<string, SchemaProperty>
  required?: string[]
}
