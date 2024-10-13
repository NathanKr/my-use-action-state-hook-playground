

<h2 id="project-description">Project Description</h2>
A next.js project with server action that is invoked using generic custom hook and consumed by a generic component

<h2 id="motivation">Motivation</h2>
i want to use useActionState check <a href='https://github.com/NathanKr/use-action-state-hook-playground'>use-action-state-hook-playground</a> 
for generic error \ loading of server action <a href='https://github.com/NathanKr/generic-handle-server-action-error-and-loading'>generic-handle-server-action-error-and-loading</a> 
but useActionState does not work in next.js so i want to do my simplified version

<h2 id="installation">Installation</h2>

```bash
pnpm i
```

You can use also npm

<h2 id="usage">Usage</h2>

<h3>Development server</h3>
Invoke the development server using

```bash
npm run dev
```

<h3>logic - useCustomActionState</h3>

```tsx
 const [state, run, isPending] = useCustomActionState<number>(
    async () => {
      const length = await fetchPostsLength();
      return length;
    },
    { data: null, error: null }
  );
```

<h3>ui - ServerActionState </h3>

```tsx
    <div>
      <button onClick={run}>Get posts length</button>
      <ServerActionState
        isPending={isPending}
        error={state.error}
        loadingComponent={<p>Loading...</p>}
        errorComponent={<p>Error: {state.error?.message}</p>}
        successComponent={
          <div>
            <p>Operation successful!</p>
            {state.data !== null && <p>Posts length: {state.data}</p>}
          </div>
        }
      />
    </div>
```

<h2 id="design">Design pros</h2>
<ol>
<li>seperation of concerns
<p>logic - useCustomActionState</p>
<p>ui - ServerActionState</p></li>
<li>seperate action state to two :  error : bad  and data : good</li>
<li>the server action is invoked at lower priorirty using transition, this will allow input fields to be more responsive</li>
<li>out of the box handle exception in server action</li>
<li>use typescript interface for Error : 

```ts
interface Error {
    name: string;
    message: string;
    stack?: string;
}
```

This is actually used commonly to throw exception 

```ts
throw new Error("Something went wrong!")
```

</li>
</ol>

<h2>Code - useCustomActionState</h2>

```ts
export function useCustomActionState<TData>(
  action: () => Promise<TData>,
  initialState: State<TData>
): [State<TData>, () => void, boolean] {
  const [state, setState] = useState<State<TData>>(initialState);
  const [isPending, startTransition] = useTransition();

  const run = () => {
    startTransition(async () => {
      try {
        const data = await action();
        setState({ data, error: null });
      } catch (error) {
        setState({ data: null, error: error as Error });
      }
    });
  };

  return [state, run, isPending];
}

```

<h2>How to handle error in server action</h2>
suppose you have an error in server action - how to handle it ?
<ul>
<li>if your server action throw and error than it is handled out ofthe box by this design</li>
<li>if your server action fail and return an error inside data - you have two options
<ul>
<li>handle it as data in the ui (in this case data is not only good)</li> 
<li>create a wrapper around your server action and throw excpetion in ase of error (in this case data is kept strickly good)</li> 
</ul>
</li>
</ul>

<h2 id="demo">Demo</h2>
.............
<ul>
    <li>.........</li>
</ul>

<h2 id="points-of-interest">Points of Interest</h2>
<ul>
    <li>.....</li>
</ul>

<h2 id="references">References</h2>
<ul>
    <li><a href='https://youtu.be/IBZ4esQbKjw?si=XZTIV2mNYLDOVP-w'>Boost React UI Responsiveness with useTransition!</a> - Learn how to use the hook useTransition in 4 minutes</li>
</ul>

