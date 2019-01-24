module.exports = ({ status }) => {
  if (status === 'confirmed') {
    return {
      name: true,
      address: true,
      phone: true,
    };
  }

  if (status === 'canceled' || status === 'deferred') {
    return {
      name: true,
    };
  }

  return null;
};
