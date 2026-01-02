export const Child = () => {
  console.log("Child in Good render");
  return <div>This component is not re-rendered when context is changed</div>;
};
