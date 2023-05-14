import { useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const [maxCount, setMaxCount] = useState<null | number>(initialValues?.maxCount ?? null);
  // const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (maxCount) {
      newValue = Math.min(newValue, maxCount);
    }
    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  }

  const reset = () => {
    setCounter(initialValues?.count ?? value)
  }

  // useEffect(() => {
  //   isMounted.current = true
  // }, [])

  // useEffect(() => {
  //   console.log(isMounted.current);

  //   if (!isMounted.current) return;
  //   setCounter(value);
  // }, [value]);



  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.count === counter,
    maxCount,
    increaseBy,
    reset
  }
}
