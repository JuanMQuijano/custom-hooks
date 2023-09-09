import { useState } from "react";

const useForm = (initialValue = {}) => {

    const [formState, setFormState] = useState(initialValue)

    const onInputChange = ({name, value}) => {        
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialValue)
    }

    return {
        ...formState, formState, onInputChange, onResetForm
    }
}

export default useForm