import React, { useState, useEffect } from 'react';
// value es lo que voy a tratar de guardar su valor ara que se vaya ejecutando
export default function useDebounce(value, delay){

    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue (value)
            console.log("Valor actual ---> ", value)
        }, delay)


    }, [value])
// debounce cada que tecleamos una tecla, va aempezando con el valor inicial 
    return debounceValue
}
