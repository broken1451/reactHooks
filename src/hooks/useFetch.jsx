import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const refIsMounted = useRef(true);

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      refIsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (refIsMounted.current) {
          setstate({
            data: data,
            loading: false,
            error: null,
          });
        } else {
          console.log("El componene se desmonto y el setState no se llamo");
        }
      });
  }, [url]);

  return state;
};
