function Service({ service, onService, children }) {
  const handleGetPercent = (e) => {
    onService(+e.currentTarget.value);
  };

  console.log(service);
  return (
    <div>
      {children}
      <select onChange={handleGetPercent} value={service}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}

export default Service;
