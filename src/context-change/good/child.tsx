export const Child = () => {
  console.log("Child in Good render");
  return <div>This text is not re-rendered when context is changed</div>;
};
