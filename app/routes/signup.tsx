import { Form, useActionData } from "@remix-run/react";
import { useState } from "react";

interface ActionData {
  error?: string;
}

export default function signup() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const actionData = useActionData<ActionData>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error] = useState<string | undefined>(actionData?.error);

  return (
    <div className="border-2 border-gray">
      <h2>Sign Up</h2>
      <Form method="post">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <select name="role">
          <option value="CUSTOMER">Customer</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">Sign Up</button>
      </Form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
