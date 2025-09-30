import React from 'react'

// Primary Button Component (bg-primary, text-secondary)
export const PrimaryButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  size = 'md', 
  className = '',
  type = 'button',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-12 py-5 text-xl'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-primary text-secondary border-1 border-primary
        hover:bg-secondary/50 hover:text-primary
        font-semibold rounded-full
        transition-colors duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center gap-2 cursor-pointer
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
      <svg 
        className="w-5 h-5 fill-current transition-colors duration-200" 
        viewBox="0 0 24 24"
      >
        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
      </svg>
    </button>
  )
}

// Secondary Button Component (bg-secondary, text-primary)
export const SecondaryButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  size = 'md', 
  className = '',
  type = 'button',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-12 py-5 text-xl'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-secondary text-primary border-1 border-primary
        hover:bg-primary hover:text-secondary 
        font-semibold rounded-full
        transition-colors duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer 
        flex items-center gap-2
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
      <svg 
        className="w-4 h-4 fill-current transition-colors duration-200" 
        viewBox="0 0 24 24"
      >
        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
      </svg>
    </button>
  )
}

export const SecondaryButtonRevert = ({ 
  children, 
  onClick, 
  disabled = false, 
  size = 'md', 
  className = '',
  type = 'button',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-12 py-5 text-xl'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        text-secondary border-1 border-secondary
        hover:bg-secondary hover:text-primary 
        font-semibold rounded-full
        transition-colors duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer 
        flex items-center gap-2
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
      <svg 
        className="w-4 h-4 fill-current transition-colors duration-200" 
        viewBox="0 0 24 24"
      >
        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
      </svg>
    </button>
  )
}