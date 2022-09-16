import React, { useState } from 'react'

function useFormData() {

  const [ state , setState ] = useState({})

  const handleSubmit = e => {
    e.persist();
    setState(state => ({...state,[e.target.name]:e.target.value}))
  }

  return [state, handleSubmit]
}

export default useFormData