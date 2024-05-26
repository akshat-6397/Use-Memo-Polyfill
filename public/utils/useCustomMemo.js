import { useEffect, useRef } from "react";
const useCustomMemo = (callback, dependencies) => {
  // cache value in some state or variable
  // -> We're using ref as a cache variable to store the data
  // because ref variable persists to the whole Component life
  // cycle either the component is render or not.
  const memoizedRef = useRef(null);
  // detect change in dependencies
  const isSame = (prev, current) => {
    if (prev === null) {
      return false;
    }
    if (prev.length !== current.length) {
      return false;
    }

    for (let i = 0; i < prev.length; i++) {
      if (prev[i] !== current[i]) {
        return false;
      }
    }
    return true;
  };

  if (
    !memoizedRef.current ||
    !isSame(memoizedRef.current.dependencies, dependencies)
  ) {
    memoizedRef.current = {
      value: callback(),
      dependencies,
    };
  }
  // cleanup on unmount

  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);
  // return the cache value

  return memoizedRef.current.value;
};

export default useCustomMemo;
