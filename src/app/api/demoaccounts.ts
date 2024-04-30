export type Account = {
  email: string;
  contacts: {
    name: string;
    email: string;
  }[];
  inbox: {
    unreadCount: number;
    total: number;
  };
  drafts: {
    unreadCount: number;
    total: number;
  };
  sent: {
    unreadCount: number;
    total: number;
  };
  trash: {
    unreadCount: number;
    total: number;
  };

  folders: {
    name: string;
    unreadCount: number;
    total: number;
  }[];
};

export const DEMO_ACCOUNTS = [
  {
    email: "me@myself.org",
    contacts: [
      {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
      },
    ],
    inbox: {
      unreadCount: 2,
      total: 10,
    },
    drafts: {
      unreadCount: 0,
      total: 3,
    },
    sent: {
      unreadCount: 0,
      total: 5,
    },
    trash: {
      unreadCount: 0,
      total: 1,
    },
    folders: [
      {
        name: "Work",
        unreadCount: 0,
        total: 2,
      },
      {
        name: "Personal",
        unreadCount: 0,
        total: 3,
      },
    ],
  },
  {
    email: "myotherreallylongemail@example.com",
    contacts: [
      {
        name: "Jim Doe",
        email: "jimdoe@example.org",
      },
      {
        name: "Jill Doe",
        email: "jilldoe@example.com",
      },
    ],
    inbox: {
      unreadCount: 0,
      total: 0,
    },
    drafts: {
      unreadCount: 0,
      total: 0,
    },
    sent: {
      unreadCount: 0,
      total: 0,
    },
    trash: {
      unreadCount: 0,
      total: 0,
    },
    folders: [],
  },
];
