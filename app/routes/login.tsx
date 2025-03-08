// app/routes/login.tsx
import { useState } from "react";
import { Form, useActionData } from "@remix-run/react";

export default function Login() {
// eslint-disable-next-line react-hooks/rules-of-hooks
  const actionData = useActionData<ActionData>();
  const [error] = useState<string | undefined>(actionData?.error);

  return (
    <div>
      <h2>Login</h2>
      <Form method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </Form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}