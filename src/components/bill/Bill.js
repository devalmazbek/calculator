function Bill({ bill, setBill }) {
  const handleChange = (e) => {
    setBill(+e.currentTarget.value);
  };
  return (
    <p>
      How much was the bill ?{" "}
      <input type="text" value={bill} onChange={handleChange} />
    </p>
  );
}

export default Bill;
