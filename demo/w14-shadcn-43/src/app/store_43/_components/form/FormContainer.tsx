'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { actionFunction } from '../../_utils/types';

const initialState = {
  message: '',
};

// 1. 定義一個型別來包含 productId
type FormContainerProps = {
  action: actionFunction;
  children: React.ReactNode;
  productId?: string; // 加上這個選填屬性
};

function FormContainer({
  action,
  children,
  productId, // 2. 解構出來
}: FormContainerProps) {
  const [state, formAction] = useActionState(action, initialState);
  
  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* 3. 如果有 productId，可以將其作為隱藏欄位傳入表單 */}
      {productId && <input type="hidden" name="id" value={productId} />}
      {children}
    </form>
  );
}

export default FormContainer;