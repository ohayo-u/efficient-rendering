# Examples for tips to reduce unnecessary re-rendering in React
1. Pass component as a child
   ```
    ✅ This way Baz will not re-render when useSomethingContext changes.
    // Main.tsx
    <Foo>
      <Baz />
    </Foo>
    
    // Foo.tsx
    const { something } = useSomethingContext()
    <Bar>
      {props.children}
    </Bar>
    
    ❌ This way Baz will re-render when useSomethingContext changes.
    // Main.tsx
    <Foo />
    
    // Foo.tsx
    const { something } = useSomethingContext()
    <Bar>
      <Baz />
    </Bar>
    ```
3. Use zustand with explicit selector
   ```
    interface Context {
      a: number
      b: number
    }
    const { a } = useReactContext(); // re-renders when b changes
    const { a } = useZustandStore(); // same as above
    const [a] = useZustandStore(useShallow((state) => [state.a])); // won't re-render when b changes
    ```
5. Use React.memo
   https://react.dev/reference/react/memo