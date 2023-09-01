import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color:#FFF;
`
const useSelectMonedas = (label,opciones) => {

    const SelectMonedas = ()=>( //Si se da por implicito el return con parentesis se mostrara en pantalla
        <>
            <Label htmlFor="">{label}</Label>
            <select>
                <option value="">Selecciones</option>
                {opciones.map(opcion=>(
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </select>
            
        </>
    )
    return [SelectMonedas]
}

export default useSelectMonedas