'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { useRef } from 'react';

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

function CheckboxInput({
  name,
  label,
  defaultChecked = false,
}: CheckboxInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (checked: boolean) => {
    if (inputRef.current) {
      inputRef.current.value = checked ? 'on' : '';
    }
  };

  return (
    <div className='flex items-center space-x-2'>
      <input
        ref={inputRef}
        type='hidden'
        name={name}
        value={defaultChecked ? 'on' : ''}
      />
      <Checkbox
        id={name}
        defaultChecked={defaultChecked}
        onCheckedChange={handleChange}
      />
      <label
        htmlFor={name}
        className='text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {label}
      </label>
    </div>
  );
}
export default CheckboxInput;
