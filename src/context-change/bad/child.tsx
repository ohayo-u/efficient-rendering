export function Child() {
  console.log("Child in Bad render");
  return <div>This text is re-rendered when context is changed</div>;
};
