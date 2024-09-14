import useToggle from "../hooks/useToggle";

const Toggle1 = (props) => {
  return <button onClick={() => props.setMode("red")}>H1 Button</button>;
};

const Toggle2 = (props) => {
  return <button onClick={() => props.setMode("green")}>H2 Button</button>;
};

const Toggle3 = (props) => {
  return <button onClick={() => props.setMode("yellow")}>H3 Button</button>;
};

const ToggleUseComponent = () => {
  const { toggleValue, setMode } = useToggle();

  return (
    <div style={{ backgroundColor: toggleValue }}>
      <Toggle1 setMode={(value) => setMode(value)}></Toggle1>
      <Toggle2 setMode={(value) => setMode(value)}></Toggle2>
      <Toggle3 setMode={(value) => setMode(value)}></Toggle3>
    </div>
  );
};

export default ToggleUseComponent;
