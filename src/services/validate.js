exports.validateFields = (formData,setErrors) => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.crimeType) newErrors.crimeType = 'Crime Type is required';
    if (!formData.crimeDate) newErrors.crimeDate = 'Crime Date is required';
    if (!formData.policeStation) newErrors.policeStation = 'Police Station is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.isFirstTimeOffender && !formData.crimeNumber) {
      newErrors.crimeNumber = 'Crime Number is required for repeat offenders';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };