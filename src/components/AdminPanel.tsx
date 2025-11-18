'use client'

import { useState } from 'react'
import Form from '@rjsf/core'
import { RJSFSchema, CustomValidator } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import type { ComponentSchema } from '../types/schema'

interface AdminPanelProps {
  schema: ComponentSchema
  onSave: (data: any) => void
  initialData?: any
  title?: string
  description?: string
}

export function AdminPanel({
  schema,
  onSave,
  initialData = {},
  title = 'Component Editor',
  description,
}: AdminPanelProps) {
  const [formData, setFormData] = useState(initialData)
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleSubmit = async (data: any) => {
    setIsSaving(true)
    try {
      // Simula delay de salvamento
      await new Promise(resolve => setTimeout(resolve, 500))

      onSave(data.formData)
      setSaveSuccess(true)

      // Limpar mensagem de sucesso após 3 segundos
      setTimeout(() => setSaveSuccess(false), 3000)
    } catch (error) {
      console.error('Erro ao salvar:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setFormData(initialData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">{title}</h1>
          {description && <p className="text-neutral-600">{description}</p>}
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg">
            <p className="text-success-800 font-medium">✅ Configurações salvas com sucesso!</p>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <Form
            schema={schema as RJSFSchema}
            validator={validator}
            formData={formData}
            onChange={e => setFormData(e.formData)}
            onSubmit={handleSubmit}
            uiSchema={{
              'ui:submitButtonOptions': {
                submitText: 'Salvar Alterações',
                norender: false,
              },
            }}
          >
            {/* Custom button area */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={isSaving}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                  isSaving
                    ? 'bg-primary-400 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg'
                }`}
              >
                {isSaving ? 'Salvando...' : 'Salvar Alterações'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-lg font-semibold border-2 border-neutral-300 text-neutral-700 hover:border-neutral-400 transition-all"
              >
                Resetar
              </button>
            </div>
          </Form>
        </div>

        {/* Info Card */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>💡 Dica:</strong> As alterações são salvas localmente no seu navegador.
            Você pode editar os campos acima e clicar em "Salvar Alterações" para aplicar as
            mudanças na página.
          </p>
        </div>
      </div>

      {/* Global styles for RJSF */}
      <style>{`
        .rjsf form {
          display: flex;
          flex-direction: column;
        }

        .rjsf .form-group {
          margin-bottom: 1.5rem;
        }

        .rjsf label {
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
          display: block;
        }

        .rjsf .help-block {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 0.25rem;
        }

        .rjsf input[type="text"],
        .rjsf input[type="number"],
        .rjsf input[type="email"],
        .rjsf input[type="url"],
        .rjsf textarea,
        .rjsf select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .rjsf input[type="text"]:focus,
        .rjsf input[type="number"]:focus,
        .rjsf input[type="email"]:focus,
        .rjsf input[type="url"]:focus,
        .rjsf textarea:focus,
        .rjsf select:focus {
          outline: none;
          border-color: #5a9bff;
          box-shadow: 0 0 0 3px rgba(90, 155, 255, 0.1);
        }

        .rjsf input[type="checkbox"],
        .rjsf input[type="radio"] {
          width: 1.25rem;
          height: 1.25rem;
          cursor: pointer;
        }

        .rjsf button:not(.btn-add) {
          display: none;
        }

        .rjsf .array-item-list {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  )
}
