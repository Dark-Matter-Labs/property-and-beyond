export default function Layout(props) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
