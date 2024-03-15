import React, { useState } from 'react';
import axios from 'axios';

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    profile: {
      company_name: '',
      legal_name: '',
      business_address: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      },
      legal_address: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      },
      tax_identifiers: [],
      email: '',
      website: '',
    },
    products: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      profile: {
        ...formData.profile,
        [name]: value,
      },
    });
  };

  const handleTaxIdentifierChange = (index, field, value) => {
    const updatedTaxIdentifiers = [...formData.profile.tax_identifiers];
    updatedTaxIdentifiers[index] = {
      ...updatedTaxIdentifiers[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      profile: {
        ...formData.profile,
        tax_identifiers: updatedTaxIdentifiers,
      },
    });
  };

  const handleProductChange = (event, index) => {
    const { value } = event.target;
    const updatedProducts = [...formData.products];
    updatedProducts[index] = value;
    setFormData({
      ...formData,
      products: updatedProducts,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/subscribe', formData);
      console.log('Subscription response:', response.data);
      // Handle success or display a message to the user
    } catch (error) {
      console.error('Error subscribing:', error);
      // Handle error or display an error message to the user
    }
  };

  return (
    <div>
      <h2>Subscription Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Profile Information */}
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={formData.profile.company_name}
          onChange={handleInputChange}
        />
        {/* Add other profile fields */}
        
        {/* Tax Identifiers */}
        {formData.profile.tax_identifiers.map((taxIdentifier, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Tax Identifier Type"
              value={taxIdentifier.tax_identifier_type || ''}
              onChange={(e) => handleTaxIdentifierChange(index, 'tax_identifier_type', e.target.value)}
            />
            <input
              type="text"
              placeholder="Tax Identifier No"
              value={taxIdentifier.tax_identifier_no || ''}
              onChange={(e) => handleTaxIdentifierChange(index, 'tax_identifier_no', e.target.value)}
            />
          </div>
        ))}
        
        {/* Products */}
        {formData.products.map((product, index) => (
          <input
            key={index}
            type="text"
            placeholder="Product"
            value={product || ''}
            onChange={(e) => handleProductChange(e, index)}
          />
        ))}
        
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
