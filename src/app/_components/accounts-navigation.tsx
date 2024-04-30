import { TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  UserIcon,
  InboxIcon,
  FileEditIcon,
  SendIcon,
  FolderIcon,
} from "../icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Account } from "../services/demoaccounts";


type AccountsNavigationProps = {
  accounts: Account[];
};

export const AccountNavigation = ({ accounts }: AccountsNavigationProps) => (
  <Accordion type="multiple" className="flex flex-col gap-2">
    {accounts.map((account) => (
      <AccordionItem key={account.email} value={account.email}>
        <AccordionTrigger className="bg-gray-200 dark:bg-gray-800 p-0 px-2 rounded-lg max-w-full">
          <h3
            id={account.email}
            className="flex flex-row items-center rounded-md p-2 font-medium dark:bg-gray-700"
          >
            {/* TODO: make this an Avatar component */}
            <UserIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="max-w-[20ch] text-ellipsis overflow-hidden">{account.email}</span>
          </h3>
        </AccordionTrigger>
        <AccordionContent>
        <nav aria-labelledby={account.email} className="grid gap-1">
          <Link
            className="flex items-center gap-2 rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-50"
            href="#"
          >
            <InboxIcon className="h-4 w-4" />
            Inbox ({account.inbox.unreadCount}/{account.inbox.total})
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-50"
            href="#"
          >
            <FileEditIcon className="h-4 w-4" />
            Drafts ({account.drafts.unreadCount}/{account.drafts.total})
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-50"
            href="#"
          >
            <SendIcon className="h-4 w-4" />
            Sent ({account.sent.unreadCount}/{account.sent.total})
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-50"
            href="#"
          >
            <TrashIcon className="h-4 w-4" />
            Trash ({account.trash.unreadCount}/{account.trash.total})
          </Link>
          {account.folders.map(({ name, total, unreadCount }, index) => (
            <Link
              key={`${name}-${index}`}
              className="flex items-center gap-2 rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-50"
              href="#"
            >
              <FolderIcon className="h-4 w-4" />
              {name} ({unreadCount}/{total})
            </Link>
          ))}
        </nav>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
