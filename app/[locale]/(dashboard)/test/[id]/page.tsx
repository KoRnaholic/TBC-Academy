import React from "react";

export default function Page(props) {
  return (
    <>
      <section className="mt-40">
        <div className="product Box-root">
          <div className="description Box-root">
            <h3>Subscription to starter plan successful!</h3>
          </div>
        </div>
        <form action="/api/create-portal-session" method="POST">
          <input type="hidden" id="session-id" name="session_id" />
          <button id="checkout-and-portal-button" type="submit">
            Manage your billing information
          </button>
        </form>
      </section>
    </>
  );
}
