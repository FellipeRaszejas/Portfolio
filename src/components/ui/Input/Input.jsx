function Input({ type = "text", name, label, place }) {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>

      <input type={type} name={name} id={name} placeholder={place}></input>
    </>
  );
}
export default Input;
