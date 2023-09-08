export default function User({ user }) {

  const { name, email } = user;
  const box = {
    borderBottom: "1px solid gray",
    marginBottom: "5px",
    textAlign: "left",
  }
  return (
    <div style={box}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}