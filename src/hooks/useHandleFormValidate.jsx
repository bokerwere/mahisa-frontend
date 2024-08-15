const useHandleFormValidate = () => {
  return async (data = {}) => {
    let keys = Object.keys(data)
    let error = {}
    let valid = true
    for (let i = 0; i < keys.length; i++) {
      let key = Object.keys(data)[i]
      let value = Object.values(data)[i]
      if (!value || value === "") {
        valid = false
        error[key] = `The ${key} value is required.`
      }
    }
    return { error, valid }
  }
}

export default useHandleFormValidate
