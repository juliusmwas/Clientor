import type { InputHTMLAttributes, ReactNode } from 'react'

type RadioOption = {
  value: string
  label: ReactNode
  disabled?: boolean
}

type RadioGroupProps = {
  name: string
  options: RadioOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  error?: boolean
  disabled?: boolean
  className?: string
}

function RadioGroup({
  name,
  options,
  value,
  defaultValue,
  onChange,
  error = false,
  disabled = false,
  className,
}: RadioGroupProps) {
  const inputProps: Partial<
    InputHTMLAttributes<HTMLInputElement>
  > = {
    name,
    type: 'radio',
    disabled,
  }

  if (value !== undefined) {
    inputProps.checked = false
  } else {
    inputProps.defaultChecked = false
  }

  return (
    <div
      role="radiogroup"
      className={[
        'flex flex-col gap-3',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {options.map((option) => {
        const isDisabled = disabled || option.disabled

        return (
          <label
            key={option.value}
            className={[
              'flex items-center gap-3',
              'text-sm text-text-primary',
              isDisabled
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer',
            ].join(' ')}
          >
            <input
              {...inputProps}
              value={option.value}
              checked={
                value !== undefined
                  ? value === option.value
                  : undefined
              }
              defaultChecked={
                value === undefined
                  ? defaultValue === option.value
                  : undefined
              }
              disabled={isDisabled}
              aria-invalid={error || undefined}
              onChange={() => onChange?.(option.value)}
              className={[
                'size-4 shrink-0 appearance-none rounded-full border',
                'bg-surface-raised',
                'transition-colors duration-200',
                'checked:border-primary checked:bg-primary',
                'focus:outline-none focus:ring-2 focus:ring-primary/20',
                'focus:ring-offset-2 focus:ring-offset-background',
                error
                  ? 'border-error focus:border-error'
                  : 'border-border focus:border-primary',
              ].join(' ')}
            />

            <span>{option.label}</span>
          </label>
        )
      })}
    </div>
  )
}

export default RadioGroup