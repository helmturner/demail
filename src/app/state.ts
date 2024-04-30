import { createMachine, fromPromise } from "xstate";

export const machine = createMachine(
  {
    context: {
      error: null,
      emails: [],
      emailAccounts: [],
      currentAccount: null,
    },
    id: "emailClient",
    initial: "Idle",
    states: {
      Idle: {
        description:
          "The email client is not actively performing any operations.",
        on: {
          add_account: {
            target: "Adding account",
            actions: {
              type: "displayAddAccountForm",
            },
          },
          select_account: {
            target: "Viewing emails",
            actions: {
              type: "selectAccount",
            },
          },
        },
      },
      "Adding account": {
        description: "The user is adding a new email account to the client.",
        on: {
          submit_account: {
            target: "Idle",
            actions: {
              type: "addAccount",
            },
          },
          cancel: {
            target: "Idle",
          },
        },
      },
      "Viewing emails": {
        description: "The user is viewing emails from a selected account.",
        on: {
          refresh: {
            target: "Fetching emails",
            actions: {
              type: "displayLoading",
            },
          },
          compose: {
            target: "Composing email",
          },
          logout: {
            target: "Idle",
            actions: {
              type: "logout",
            },
          },
        },
      },
      "Fetching emails": {
        description: "The client is fetching emails for the current account.",
        invoke: {
          input: {},
          src: "fetchEmails",
          onDone: [
            {
              target: "Viewing emails",
              actions: {
                type: "setEmails",
              },
            },
          ],
          onError: [
            {
              target: "Error",
              actions: {
                type: "setError",
              },
            },
          ],
        },
      },
      "Composing email": {
        description: "The user is composing a new email.",
        on: {
          send: {
            target: "Sending email",
          },
          cancel: {
            target: "Viewing emails",
          },
        },
      },
      Error: {
        description: "An error has occurred in the email client.",
        on: {
          dismiss_error: {
            target: "Idle",
            actions: {
              type: "clearError",
            },
          },
          retry: {
            target: "Fetching emails",
          },
        },
      },
      "Sending email": {
        description: "The client is sending the composed email.",
        invoke: {
          input: {},
          src: "sendEmail",
          onDone: [
            {
              target: "Viewing emails",
            },
          ],
          onError: [
            {
              target: "Error",
              actions: {
                type: "setError",
              },
            },
          ],
        },
      },
    },
    types: {
      events: {} as
        | { type: "add_account" }
        | { type: "select_account" }
        | { type: "submit_account" }
        | { type: "cancel" }
        | { type: "refresh" }
        | { type: "compose" }
        | { type: "logout" }
        | { type: "send" }
        | { type: "dismiss_error" }
        | { type: "retry" },
      context: {} as {
        error: null;
        emails: unknown[];
        emailAccounts: unknown[];
        currentAccount: null;
      },
    },
  },
  {
    actions: {
      displayAddAccountForm: () => {},
      selectAccount: () => {},
      addAccount: () => {},
      displayLoading: () => {},
      logout: () => {},
      setEmails: () => {},
      setError: () => {},
      clearError: () => {},
    },
    actors: {
      fetchEmails: fromPromise({
        /* ... */
      }),
      sendEmail: fromPromise({
        /* ... */
      }),
    },
    guards: {},
    delays: {},
  },
);
