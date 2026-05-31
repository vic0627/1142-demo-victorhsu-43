'use client';

import {useState, useEffect} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import {useSearchParams, useRouter} from 'next/navigation';

import {Input} from '@/components/ui/input';

const NavSearch_43 = () => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const [search, setSearch] = useState(searchParams.get('search')?.toString() ||'');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value){
      params.set('search', value);
    }else{
      params.delete('search');
    }
    replace(`/store_43/products_43?${params.toString()}`);
  });

  return (
    <Input
      type="search"
      placeholder="Search products..."
      className="max-w-xs border-gary dark:bg-muted"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  )
}

export default NavSearch_43
