import { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  containerClass?: string;
  fieldError?: FieldError;
  icon: string;
  label: string;
  placeholder: string;
  registerField?: UseFormRegisterReturn;
  type: HTMLInputTypeAttribute;
}

export function Input({
  containerClass = '',
  fieldError,
  icon,
  label,
  placeholder,
  registerField,
  type,
}: Props) {
  return (
    <div className={containerClass}>
      <span className="pl-2.5 text-gray-400 text-sm font-bold">{label}</span>
      <div
        className={`bg-gray-50 text-black flex items-center rounded-lg overflow-hidden border border-gray-50 focus-within:border-sky-700 ${
          fieldError ? 'border-red-600 focus-within:border-red-600' : ''
        }`}
      >
        <input
          type={type}
          className="bg-gray-50 text-black py-2.5 pl-5 grow outline-0 placeholder-gray-400 peer"
          placeholder={placeholder}
          {...registerField}
        />
        <div className="py-2.5 px-5 h-full text-gray-400 peer-focus:text-sky-700 transition-none">
          <i className={`fas fa-${icon} ${fieldError ? 'text-red-600' : ''}`}></i>
        </div>
      </div>
      {/*Error message*/}
      {fieldError && (
        <div className="text-red-600 font-semibold text-right pr-2.5 mt-1 text-sm">
          {fieldError.message}
        </div>
      )}
    </div>
  );
}
